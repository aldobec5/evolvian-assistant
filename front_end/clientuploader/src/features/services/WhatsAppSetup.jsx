import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import axios from "axios";
import { useClientId } from "../../hooks/useClientId";

// 🧠 Validaciones
const isValidPhone = (phone) => /^\+\d{11,15}$/.test(phone);
const isValidPhoneId = (id) => /^\d{10,20}$/.test(id);
const isValidToken = (token) => /^EA[A-Za-z0-9]{16,}$/.test(token);

export default function WhatsAppSetup() {
  const [phone, setPhone] = useState("");
  const [waPhoneId, setWaPhoneId] = useState("");
  const [waToken, setWaToken] = useState("");
  const [touched, setTouched] = useState({ phone: false, waPhoneId: false, waToken: false });
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState({ message: "", type: "" });
  const clientId = useClientId();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };

    const fetchExisting = async () => {
      const { data } = await supabase
        .from("channels")
        .select("phone, wa_phone_id, wa_token")
        .eq("client_id", clientId)
        .eq("type", "whatsapp")
        .maybeSingle();

      if (data) {
        setPhone(data.phone || "");
        setWaPhoneId(data.wa_phone_id || "");
        setWaToken(data.wa_token || "");
      }
    };

    fetchSession();
    fetchExisting();
  }, [clientId]);

  const handleSubmit = async () => {
    if (!session || !isValidPhone(phone) || !isValidPhoneId(waPhoneId) || !isValidToken(waToken)) return;

    const payload = {
      auth_user_id: session.user.id,
      email: session.user.email,
      phone,
      provider: "meta",
      wa_phone_id: waPhoneId,
      wa_token: waToken,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/link_whatsapp`, payload);
      setStatus({ message: "✅ Number successfully linked!", type: "success" });
    } catch (err) {
      console.error(err);
      setStatus({ message: "❌ Error linking number. Check your credentials.", type: "error" });
    }
  };

  const showError = (field, value) =>
    touched[field] && (
      <p style={errorStyle}>
        {field === "phone" && !isValidPhone(value) && "Enter a valid phone like +521234567890"}
        {field === "waPhoneId" && !isValidPhoneId(value) && "Enter a numeric phone_number_id (10–20 digits)"}
        {field === "waToken" && !isValidToken(value) && "Must start with EA and be at least 20 characters"}
      </p>
    );

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>💬 Configure WhatsApp Assistant</h2>

        <div style={fieldGroup}>
          <label style={labelStyle}>WhatsApp number (verified by Meta)</label>
          <input
            type="text"
            placeholder="+521234567890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
            style={inputStyle}
          />
          {showError("phone", phone)}
          <p style={helperStyle}>This is the number your assistant will use to receive and reply to messages.</p>
        </div>

        <div style={fieldGroup}>
          <label style={labelStyle}>Meta phone_number_id</label>
          <input
            type="text"
            placeholder="123456789012345"
            value={waPhoneId}
            onChange={(e) => setWaPhoneId(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, waPhoneId: true }))}
            style={inputStyle}
          />
          {showError("waPhoneId", waPhoneId)}
          <p style={helperStyle}>You’ll find this ID in your WhatsApp Business Cloud settings.</p>
        </div>

        <div style={fieldGroup}>
          <label style={labelStyle}>Meta access_token</label>
          <input
            type="text"
            placeholder="EAAG...ZDZD"
            value={waToken}
            onChange={(e) => setWaToken(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, waToken: true }))}
            style={inputStyle}
          />
          {showError("waToken", waToken)}
          <p style={helperStyle}>Paste the access token generated in your Meta Developer dashboard.</p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isValidPhone(phone) || !isValidPhoneId(waPhoneId) || !isValidToken(waToken)}
          style={{
            ...btnStyle,
            opacity: isValidPhone(phone) && isValidPhoneId(waPhoneId) && isValidToken(waToken) ? 1 : 0.5,
            cursor: isValidPhone(phone) && isValidPhoneId(waPhoneId) && isValidToken(waToken) ? "pointer" : "not-allowed",
          }}
        >
          📲 Link number
        </button>

        {status.message && (
          <p style={{
            marginTop: "1rem",
            fontWeight: "bold",
            color: status.type === "error" ? "#f87171" : "#a3d9b1",
          }}>
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}

// 🎨 Estilos
const pageStyle = {
  padding: "2rem",
  fontFamily: "system-ui, sans-serif",
  backgroundColor: "#0f1c2e",
  color: "white",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
};

const cardStyle = {
  backgroundColor: "#1b2a41",
  padding: "2rem",
  borderRadius: "16px",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  border: "1px solid #274472",
};

const titleStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#f5a623",
  marginBottom: "2rem",
};

const labelStyle = {
  fontWeight: "bold",
  color: "#ededed",
  marginBottom: "0.25rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.6rem",
  borderRadius: "8px",
  border: "1px solid #4a90e2",
  marginBottom: "0.5rem",
  backgroundColor: "#0f1c2e",
  color: "white",
};

const helperStyle = {
  fontSize: "0.8rem",
  color: "#a3a3a3",
  marginBottom: "1.5rem",
};

const errorStyle = {
  fontSize: "0.8rem",
  color: "#f87171",
  marginTop: "-0.5rem",
  marginBottom: "1rem",
};

const fieldGroup = {
  marginBottom: "1.5rem",
};

const btnStyle = {
  backgroundColor: "#2eb39a",
  color: "white",
  padding: "0.7rem 1.2rem",
  borderRadius: "8px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
};
