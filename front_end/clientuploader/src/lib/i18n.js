// src/lib/i18n.js

export const translations = {


es: {
  // General
  welcome: "Bienvenido",
  assistant_intro: "Soy",
  your_assistant: "tu asistente",
  loading: "Cargando...",
  next: "Siguiente",
  back: "Atrás",
  start: "Empezar",
  contact_us: "Contáctanos",

  // Auth
  email: "Correo electrónico",
  password: "Contraseña",
  login: "Iniciar sesión",
  remember_me: "Recordarme",
  forgot_password: "¿Olvidaste tu contraseña?",
  or: "o",
  login_with_google: "Iniciar sesión con Google",
  no_account: "¿No tienes cuenta?",
  register_here: "Regístrate aquí",
  wrong_credentials: "Correo o contraseña incorrectos.",
  email_not_confirmed: "¿Confirmaste tu correo?",
  create_account: "Crear cuenta",
  already_have_account: "¿Ya tienes cuenta?",
  login_here: "Inicia sesión aquí",
  email_already_registered: "Este correo ya está registrado con:",
  error_creating_account: "Error al crear cuenta",
  account_created_check_email: "✅ Cuenta creada. Revisa tu correo para confirmarla.",
  error_initializing_account: "❌ Error inicializando cuenta.",
  account_created_redirecting: "🎉 Cuenta creada correctamente. Redirigiendo...",
  unexpected_error: "Ocurrió un error inesperado.",
  email_confirmed_successfully: "¡Correo confirmado exitosamente!",
  redirecting_to_login: "Redirigiendo al inicio de sesión...",
  
  // Registro y validaciones
  confirm_password: "Confirmar contraseña",
  invalid_password_format: "Formato inválido. La contraseña debe tener al menos 8 caracteres.",
  password_hint: "Debe contener solo letras (A-Z) y números (0-9).",
  passwords_do_not_match: "Las contraseñas no coinciden",

  // Forgot Password / Reset Password
  recover_password: "Recuperar contraseña",
  enter_your_email: "Ingresa tu correo para restablecer tu contraseña",
  send_email: "Enviar correo",
  error_sending_reset_email: "Error al enviar el correo de recuperación.",
  check_your_email: "📩 Revisa tu correo para cambiar la contraseña!",
  invalid_token: "Token no válido o expirado. Solicita un nuevo enlace.",
  
  new_password: "Nueva contraseña",
  enter_new_password: "Por favor ingresa tu nueva contraseña",
  new_password_placeholder: "Nueva contraseña",
  update_password: "Actualizar contraseña",
  updating: "Actualizando...",
  password_updated_successfully: "Contraseña actualizada exitosamente",
  error_updating_password: "Error al actualizar la contraseña",

  access_verification: "Verificación de acceso",
  confirm_email_to_continue: "Confirma tu correo para continuar",
  sending: "Enviando...",
  send_login_link: "Enviar enlace de acceso",
  error_sending_login_link: "Error al enviar el enlace",
  check_your_email_login_link: "📩 Revisa tu correo para continuar",
  email_link_sent: "Te hemos enviado un enlace. Haz clic para iniciar sesión.",

  // Dashboard
  dashboard: "Panel de control",
  upload: "Subir documentos",
  history: "Historial",
  settings: "Configuración",
  logout: "Cerrar sesión",
   active_features: "Funcionalidades Activas",
  chat_widget: "✅ Widget de Chat",
  recent_activity: "Última Actividad",
  no_history: "No hay historial reciente.",
  recent_documents: "Documentos Recientes",
  no_documents: "No hay documentos recientes.",
  custom_prompt_editing: "Edición de AI Chat prompt",
  calendar_sync: "Sync con Google calendar",

  // Chat Assistant
  chat_assistant: "Asistente de Chat",
  whatsapp: "WhatsApp",
  premium_only: "Disponible en planes Premium",

  // Client Settings
  client_settings: "Configuración del Cliente",
  assistant_name: "Nombre del Asistente",
  custom_prompt: "Prompt personalizado",
  custom_prompt_locked: "Este prompt solo es editable con planes Premium o superiores.",
  characters: "caracteres",
  language: "Idioma",
  spanish: "Español",
  english: "Inglés",
  creativity: "Creatividad (temperatura)",
  require_email: "Solicitar email en el widget",
  require_phone: "Solicitar teléfono en el widget",
  require_terms: "Mostrar Términos y Condiciones",
  save_settings: "Guardar configuración",
  loading_settings: "Cargando configuración...",
  client_not_identified: "Cliente no identificado.",
  prompt_too_long: "El prompt personalizado supera el límite de 2000 caracteres.",
  error_saving: "Error al guardar la configuración.",
  settings_saved: "¡Configuración guardada con éxito!",

  // Plan Section
  your_current_plan: "Tu Plan Actual",
  messages_included: "Mensajes incluidos",
  documents_allowed: "Documentos permitidos",
  branding_active: "Branding activo",
  yes: "Sí",
  no: "No",
  change_or_update_plan: "Cambiar o actualizar plan",
  included_features: "Funcionalidades Incluidas",
  chat_widget: "Widget de chat",
  email_support: "PRONTO Soporte por correo",
  whatsapp_integration: "Integración de WhatsApp",
  custom_greeting: "Saludo personalizado",
  white_labeling: "Marca blanca sin branding",
  included_in_plan: "Incluido en tu plan",
  available_from: "Disponible desde",
  free: "Gratis",
  starter: "Starter",
  premium: "Premium",
  unlimited: "Ilimitado",

  // Upload Documents
  upload_document: "Subir Documento",
  limit_reached: "Has alcanzado el límite de documentos permitidos en tu plan actual.",
  select_file_label: "Archivo (.pdf o .txt):",
  upload_file: "Subir archivo",
  uploaded_files: "Archivos subidos",
  please_select_file: "Por favor selecciona un archivo.",
  invalid_client_id: "No se puede subir archivo: client_id inválido.",
  limit_reached_error: "Has alcanzado el límite de tu plan.",
  unknown_upload_error: "Error desconocido al subir archivo.",
  file_uploaded_success: "Archivo subido exitosamente",


  // History
  question_history: "Historial de Preguntas",
  loading_history: "Cargando historial...",
  no_questions_yet: "Aún no has hecho preguntas.",
  question: "Pregunta",
  answer: "Respuesta",
  copied_to_clipboard: "Copiado al portapapeles",

  // Setup
  loading_setup: "Cargando configuración...",
  setup_evolvian_web: "Configura Evolvian en tu web",
  setup_description: "Integra Evolvian AI rápidamente.\n\n- Opción 1: WordPress, Wix, Shopify.\n- Opción 2: Código personalizado.",
  your_public_id: "Tu ID Público",
  not_available: "No disponible",
  copy_id: "Copiar ID",
  option1_title: "Opción 1: Sección fija",
  option1_hint: "Ideal para WordPress, Wix, Shopify.",
  option2_title: "Opción 2: Inserción automática",
  option2_hint: "Ideal para proyectos personalizados.",
  copy_code: "Copiar código.",
  paste_before_body: "Pégalo antes de </body>.",
  copy_iframe: "Copiar IFRAME",
  copy_script: "Copiar Script",
  copy_script_button: "Copiar Script",
  cancel_subscription_and_go_free: "Cancelar suscripción y volver a Free",
  see_plans: "Ver planes",

  // Email Assistant
  setup_email_assistant: "Configurar Email Assistant",
  email_instructions_intro: "Tu asistente puede responder correos reenviados automáticamente.",
  save_email_instruction: "Guarda el correo que deseas conectar:",
  email_placeholder: "tucorreo@empresa.com",
  save_address: "Guardar dirección",
  address_saved: "Dirección guardada correctamente.",
  how_it_works: "¿Cómo funciona?",
  step1: "Cualquier correo reenviado a evolvian@correo.evolvian.app será procesado.",
  step2: "El asistente generará una respuesta basada en IA.",
  step3: "Puedes personalizar la respuesta o enviarla automáticamente.",

  // WhatsApp Setup
  setup_whatsapp: "Configurar WhatsApp con Evolvian",
  save_number_instruction: "Guarda este número en tu teléfono:",
  send_message_instruction: "Envía el siguiente mensaje por WhatsApp:",
  already_done: "Ya lo hice",
  enter_whatsapp_number: "Ingresa el número de WhatsApp que usaste:",
  link_number: "Vincular número",
  whatsapp_linked_success: "WhatsApp vinculado correctamente.",
  whatsapp_link_error: "Error al vincular WhatsApp. Intenta de nuevo.",
  number_linked_success: "¡Tu número está vinculado!",
  start_chatting_instruction: "Ahora puedes empezar a chatear con tu asistente.",
  test_assistant: "Probar Asistente en WhatsApp",
  change_number: "Cambiar número",

  // Bienvenida
  welcome_title: "Bienvenido a Evolvian, tu copiloto de conocimiento.",
  welcome_description: "Has dado el primer paso hacia una forma más rápida, segura y precisa de resolver tus dudas, compartir respuestas y empoderar a tus usuarios.",

  personalization_title: "Ayúdanos a Personalizar",
  personalization_description: "Cuéntanos un poco sobre ti para personalizar tu experiencia.",
  select_industry: "Selecciona tu industria",
  select_role: "Selecciona tu rol",
  select_country: "Selecciona tu país",
  interested_channels: "Canales de interés:",
  select_company_size: "Selecciona el tamaño de tu empresa",
  your_plan_title:"Tu plan",
  current_plan:"Tu plan es",

  // Terms
  terms_title: "Términos y Condiciones",
  terms_description: "Al continuar, aceptas nuestros",
  terms_and_conditions: "Términos y Condiciones",

  // Dashboard Sections
  your_plan_title: "Tu Plan",
  current_plan: "Tu plan actual:",
  documents: "Documentos",
  messages: "Mensajes",
  contact_us: "Contáctanos",
  your_plan: "Tu Plan",

  // Others
  loading_assistant: "⚠️ Cargando asistente...",
  enter_email: "Tu correo",
  enter_phone: "Tu teléfono",
  accept_terms: "Acepto los",
  terms_link: "Términos",
  continue: "Continuar",
  type_message: "Escribe tu mensaje...",
  send: "Enviar",
  thinking: "Pensando...",
  error_response: "⚠️ Error al responder.",
  consent_required_fields: "Por favor completa todos los campos requeridos.",

  //Plan info
  choose_a_plan:"Escoge un plan",
  plan_free: "Free",
  plan_starter: "Starter",
  plan_premium: "Premium",
  plan_white_label: "White Label",
  i_want_this_plan: "Quiero este plan",
  contact_for_whitelabel: "Si requieres un plan a tu medida contacta",
  downgrade_to_starter: "Bajar al plan starter",
  change_plan_help: "Para cambiar de plan comunicate con nosotros a",
  feature_chat_widget: "Chat Widget",
  feature_basic_usage: "Uso Básico",
  feature_email_support: "Suporte Evolvian por email",
  feature_higher_limits: "Limites altos",
  feature_all_starter: "Todo de Starter",
  feature_whatsapp: "Whatsapp",
   feature_googlecalendar: "Google Calendar",
  feature_custom_prompt: "Prompt AI customizable",
  feature_all_premium: "Todo de Premium",
  feature_custom_branding: "Branding customizable",
  feature_full_api: "API Disponible",
  feature_custom_needs: "Necesidades personalizadas",
  start_date: "Inicio de plan",
  end_date: "Fin de plan",
  temperature_label: "Temperatura",



  //Google Calendar

  "calendar_title": "Integración con Google Calendar",
  "calendar_description": "Conecta tu cuenta de Google para permitir que tus clientes agenden citas directamente desde tu asistente AI.",
  "calendar_connect_button": "Conectar cuenta de Google",
  "calendar_account_connected": "Cuenta conectada ✅",
  "calendar_active_connection": "Conexión activa con Google Calendar",
  "calendar_next_slots_title": "Próximos horarios disponibles",
  "calendar_no_slots": "No se encontraron horarios disponibles.",
  "calendar_connected_title": "✅ Conexión exitosa",
  "calendar_connected_description": "Google Calendar se conectó correctamente.",
  "calendar_error_title": "Error",
  "calendar_error_description": "No se pudo verificar la conexión con Google Calendar",


  //Whatsapp UI

  
  "wa_setup_title": "Configura WhatsApp con Evolvian",
  "wa_choose_provider": "Selecciona el proveedor",
  "wa_provider_meta": "Meta Cloud API",
  "wa_provider_twilio": "Twilio",
  "wa_label_phone": "Número de WhatsApp que acabas de usar:",
  "wa_placeholder_phone_id": "ID numérico phone_number_id (Meta)",
  "wa_placeholder_token": "Access token de Meta",
  "wa_error_phone": "Ingresa un número válido como +521234567890",
  "wa_error_phone_id": "Ingresa un ID numérico válido (10–20 dígitos)",
  "wa_error_token": "Debe comenzar con EA y tener al menos 20 caracteres",
  "wa_button_link": "Vincular número",
  "wa_button_back": "Regresar",
  "wa_success": "✅ Número vinculado exitosamente",
  "wa_error_linking": "❌ Error al vincular el número. Verifica tus credenciales.",



},





en: {
  // General
  welcome: "Welcome",
  assistant_intro: "I am",
  your_assistant: "your assistant",
  loading: "Loading...",
  next: "Next",
  back: "Back",
  start: "Start",
  contact_us: "Contact us",

  // Auth
  email: "Email",
  password: "Password",
  login: "Log In",
  remember_me: "Remember me",
  forgot_password: "Forgot password?",
  or: "or",
  login_with_google: "Log in with Google",
  no_account: "Don't have an account?",
  register_here: "Register here",
  wrong_credentials: "Incorrect email or password.",
  email_not_confirmed: "Could not log in. Did you confirm your email?",
  create_account: "Create Account",
  already_have_account: "Already have an account?",
  login_here: "Log in here",
  email_already_registered: "This email is already registered with:",
  error_creating_account: "Error creating account",
  account_created_check_email: "✅ Account created. Check your email to confirm.",
  error_initializing_account: "❌ Error initializing account.",
  account_created_redirecting: "🎉 Account created successfully. Redirecting...",
  unexpected_error: "An unexpected error occurred.",
  email_confirmed_successfully: "Email confirmed successfully!",
  redirecting_to_login: "You will be redirected to login shortly...",

  // Register & Password Validations
  confirm_password: "Confirm password",
  invalid_password_format: "Invalid format. Password must be at least 8 characters.",
  password_hint: "It must contain only letters (A-Z) and numbers (0-9).",
  passwords_do_not_match: "Passwords do not match.",

  // Forgot Password / Reset Password
  recover_password: "Recover Password",
  enter_your_email: "Enter your email to reset your password",
  send_email: "Send Email",
  error_sending_reset_email: "Error sending reset email.",
  check_your_email: "📩 Check your email to reset your password!",
  invalid_token: "Invalid or expired token. Please request a new link.",

  new_password: "New Password",
  enter_new_password: "Please enter your new password",
  new_password_placeholder: "New password",
  update_password: "Update Password",
  updating: "Updating...",
  password_updated_successfully: "Password updated successfully!",
  error_updating_password: "Error updating password",

  access_verification: "Access Verification",
  confirm_email_to_continue: "For security, confirm your email to continue",
  sending: "Sending...",
  send_login_link: "Send Login Link",
  error_sending_login_link: "Error sending login link",
  check_your_email_login_link: "📩 Check your email to continue",
  email_link_sent: "We have sent you a link. Click it to log in.",

  // Dashboard
  dashboard: "Dashboard",
  upload: "Upload documents",
  history: "History",
  settings: "Settings",
  logout: "Log Out",
  your_plan: "Your Plan",
  messages: "Mesages",
  documents: "Documents",
  custom_prompt_editing: "AI Chat Prompt Edition",
  calendar_sync: "Sync with Google calendar",

  active_features: "Active Features",
  chat_widget: "✅ Chat Widget",
  recent_activity: "Recent Activity",
  no_history: "No recent history.",
  recent_documents: "Recent Documents",
  no_documents: "No recent documents.",

  // Chat Assistant
  chat_assistant: "Chat Assistant",
  whatsapp: "WhatsApp",
  premium_only: "Available in Premium plans",
  type_message: "Type a message...",


  // Client Settings
  client_settings: "Client Settings",
  assistant_name: "Assistant Name",
  custom_prompt: "Custom Prompt",
  custom_prompt_locked: "This prompt can only be edited with Premium or higher plans.",
  characters: "characters",
  language: "Language",
  spanish: "Spanish",
  english: "English",
  creativity: "Creativity (temperature)",
  require_email: "Request email in the widget",
  require_phone: "Request phone number in the widget",
  require_terms: "Show Terms and Conditions",
  save_settings: "Save Settings",
  loading_settings: "Loading settings...",
  client_not_identified: "Client not identified.",
  prompt_too_long: "The custom prompt exceeds the 2000 characters limit.",
  error_saving: "Error saving settings.",
  settings_saved: "Settings saved successfully!",
  cancel_subscription_and_go_free: "Cancel subscription and go back to Free",

  // Plan Section
  your_current_plan: "Your Current Plan",
  messages_included: "Messages included",
  documents_allowed: "Documents allowed",
  branding_active: "Branding active",
  yes: "Yes",
  no: "No",
  change_or_update_plan: "Change or update plan",
  included_features: "Included Features",
  chat_widget: "Chat Widget",
  email_support: "COMING SOON Email Support",
  whatsapp_integration: "WhatsApp Integration",
  custom_greeting: "Custom Greeting",
  white_labeling: "White-label without branding",
  included_in_plan: "Included in your plan",
  available_from: "Available from",
  free: "Free",
  starter: "Starter",
  premium: "Premium",
  unlimited: "Unlimited",

  // Upload Documents
  upload_document: "Upload Document",
  limit_reached: "You have reached the limit of documents allowed in your current plan.",
  select_file_label: "File (.pdf or .txt):",
  upload_file: "Upload File",
  uploaded_files: "Uploaded Files",
  please_select_file: "Please select a file.",
  invalid_client_id: "Cannot upload file: invalid client_id.",
  limit_reached_error: "You have reached the document limit for your plan.",

  unknown_upload_error: "Unknown error while uploading.",

  // History
  question_history: "Question History",
  loading_history: "Loading history...",
  no_questions_yet: "You haven't asked any questions yet.",
  question: "Question",
  answer: "Answer",
  copied_to_clipboard: "Copied to clipboard",

  // Setup
  loading_setup: "Loading setup...",
  setup_evolvian_web: "Set up Evolvian on your website",
  setup_description: "Integrate Evolvian AI into your site easily.\n\n- Option 1: Ideal for WordPress, Wix, Shopify.\n- Option 2: Ideal for custom projects.",
  your_public_id: "Your Public ID",
  not_available: "Not available",
  copy_id: "Copy ID",
  option1_title: "Option 1: Fixed Section",
  option1_hint: "Recommended for WordPress, Wix, Shopify.",
  option2_title: "Option 2: Auto Insert",
  option2_hint: "Recommended for custom code projects.",
  copy_code: "Copy this code.",
  paste_before_body: "Paste it before closing </body>.",
  copy_iframe: "Copy IFRAME",
  copy_script: "Copy this script.",
  copy_script_button: "Copy SCRIPT",

  // Email Assistant
  setup_email_assistant: "Set up Email Assistant",
  email_instructions_intro: "Your assistant can automatically reply to emails if you forward them to this address:",
  save_email_instruction: "Save the email address you want to connect:",
  email_placeholder: "yourname@company.com",
  save_address: "Save address",
  address_saved: "Address saved successfully.",
  how_it_works: "How it works?",
  step1: "Any email you forward to evolvian@correo.evolvian.app will be processed.",
  step2: "Your assistant will generate an AI-based reply.",
  step3: "You can customize the response or let it send automatically.",

  // WhatsApp Setup
  setup_whatsapp: "Set up WhatsApp with Evolvian",
  save_number_instruction: "Save the following number on your phone:",
  send_message_instruction: "Send the following message from WhatsApp:",
  already_done: "Already done",
  enter_whatsapp_number: "Enter the WhatsApp number you just used:",
  link_number: "Link number",
  whatsapp_linked_success: "WhatsApp linked successfully.",
  whatsapp_link_error: "Error linking WhatsApp. Please try again.",
  number_linked_success: "Your number has been linked successfully!",
  start_chatting_instruction: "You can now start chatting with your assistant.",
  test_assistant: "Test Assistant on WhatsApp",
  change_number: "Change number",

  // Welcome
  welcome_title: "Welcome to Evolvian, your knowledge copilot.",
  welcome_description: "You have taken the first step towards a faster, safer and more accurate way to solve your doubts, share answers and empower your users.",

  // Personalization
  personalization_title: "Help Us Personalize",
  personalization_description: "Tell us a bit about you to personalize your experience.",
  select_industry: "Select your industry",
  select_role: "Select your role",
  select_country: "Select your country",
  interested_channels: "Interested Channels:",
  select_company_size: "Select your company size",
  your_plan_title:"Your plan",
  current_plan:"Current plan is",

  // Terms
  terms_title: "Terms & Conditions",
  terms_description: "By continuing, you accept our",
  terms_and_conditions: "Terms and Conditions",

  //Plan info
  choose_a_plan:"Choose a plan",
  plan_free: "Free",
  plan_starter: "Starter",
  plan_premium: "Premium",
  plan_white_label: "White Label",
  i_want_this_plan: "I want this plan",
  contact_for_whitelabel: "Contact for Whitelabel plan",
  downgrade_to_starter: "Downgrade to starter plan",
  change_plan_help: "To change your current plan please send us an email to",
  feature_chat_widget: "Chat Widget",
  feature_basic_usage: "Basic usage",
  feature_email_support: "Evolvian Support",
  feature_higher_limits: "Higher limits",
  feature_all_starter: "All starter",
  feature_whatsapp: "Whatsapp",
  feature_googlecalendar: "Google Calendar",
  feature_custom_prompt: "Custom Prompt",
  feature_all_premium: "All premium",
  feature_custom_branding: "Custom branding",
  feature_full_api: "Access to API",
  feature_custom_needs: "Custom needs",
  start_date: "Start date",
  end_date: "End date",
  see_plans: "See plans",
  temperature_label: "Temperature",



  //Google Calendar

  calendar_title: "Google Calendar Integration",
  calendar_description: "Connect your Google account to allow your clients to book appointments directly from your AI assistant.",
  calendar_connect_button: "Connect Google Account",
  calendar_account_connected: "Account connected ✅",
  calendar_active_connection: "Active connection with Google Calendar",
  calendar_next_slots_title: "Upcoming Available Slots",
  calendar_no_slots: "No available slots found.",
  calendar_connected_title: "✅ Connected Successfully",
  calendar_connected_description: "Google Calendar connected successfully.",
  calendar_error_title: "Error",
  calendar_error_description: "Could not verify connection with Google Calendar",

  //Whatsapp Service

   "wa_setup_title": "Set up WhatsApp with Evolvian",
  "wa_choose_provider": "Choose Provider",
  "wa_provider_meta": "Meta Cloud API",
  "wa_provider_twilio": "Twilio",
  "wa_label_phone": "WhatsApp number you just used:",
  "wa_placeholder_phone_id": "Meta phone_number_id",
  "wa_placeholder_token": "Meta access_token",
  "wa_error_phone": "Enter a valid phone like +521234567890",
  "wa_error_phone_id": "Enter a numeric phone_number_id (10–20 digits)",
  "wa_error_token": "Must start with EA and be at least 20 characters",
  "wa_button_link": "Link number",
  "wa_button_back": "Back",
  "wa_success": "✅ Number successfully linked!",
  "wa_error_linking": "❌ Error linking number. Check your credentials.",
  phone_numer_id: "phone number id",
}

  
};