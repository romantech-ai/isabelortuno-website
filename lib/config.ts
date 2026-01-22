// Configuración centralizada del sitio
export const siteConfig = {
  name: "Gabinete de Psicología Isabel Ortuño",
  shortName: "Isabel Ortuño",
  specialty: "psicologia" as const,
  tagline: "Lo que niegas te somete, lo que aceptas te transforma",
  taglineAuthor: "Carl Gustav Jung",
  description: "Psicóloga Clínica especializada en terapia individual, de pareja, familiar y jurídica en Alcázar de San Juan",

  // Profesional
  professional: {
    name: "María Isabel Ortuño Paniagua",
    title: "Psicóloga Clínica",
    subtitle: "Alcázar de San Juan",
    experience: "+15 años",
    patients: "+2000",
    rating: "4.8",
  },

  // Contacto
  phone: "605 878 109",
  phoneClean: "+34605878109",
  whatsapp: "34605878109",
  email: "isabel@isabelortunopsicologia.com",

  // Dirección
  address: {
    street: "C/ Emilio Castelar, 36, 2ºB",
    city: "Alcázar de San Juan",
    postalCode: "13600",
    province: "Ciudad Real",
    full: "C/ Emilio Castelar, 36, 2ºB, 13600 Alcázar de San Juan, Ciudad Real"
  },

  // Coordenadas
  coordinates: {
    lat: 39.3903,
    lng: -3.2078
  },

  // Horario
  schedule: {
    weekdays: "09:00 - 21:00",
    saturday: "10:00 - 14:00",
    sunday: "Cerrado"
  },

  // Redes sociales
  social: {
    facebook: "https://www.facebook.com/GabinetePsicologicoMariaIsabelOrtunoPaniagua",
    twitter: "https://twitter.com/IsabeOrtuno"
  },

  // URLs
  url: "https://isabelortunopsicologia.com",

  // Analytics (rellenar con IDs reales)
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || ""
  },

  // Chatbot
  chatbot: {
    welcomeMessage: "Hola, bienvenido/a al Gabinete de Psicología de Isabel Ortuño. Estoy aquí para escucharte y ayudarte a encontrar el apoyo que necesitas. ¿Cómo te encuentras hoy?",
    assistantName: "Asistente Isabel Ortuño",
    storageKey: "isabelortuno-chat",
    quickReplies: [
      { label: "Necesito ayuda", icon: "Heart" },
      { label: "Terapia de pareja", icon: "Users" },
      { label: "Primera consulta", icon: "Calendar" },
      { label: "Cómo funciona", icon: "HelpCircle" },
    ]
  }
}

// Servicios
export const services = [
  {
    id: "adultos",
    title: "Terapia de Adultos",
    description: "Tratamiento personalizado para superar las dificultades emocionales y psicológicas que afectan tu día a día.",
    topics: ["Ansiedad", "Depresión", "Crisis de pánico", "Duelo", "Fobias", "Autoestima"],
    icon: "User"
  },
  {
    id: "pareja",
    title: "Terapia de Pareja y Sexual",
    description: "Mejora la comunicación y reconecta con tu pareja. Tratamiento de disfunciones sexuales.",
    topics: ["Crisis de pareja", "Comunicación", "Terapia sexual", "Anorgasmia", "Disfunciones sexuales"],
    icon: "Heart"
  },
  {
    id: "adolescentes",
    title: "Terapia con Adolescentes",
    description: "Apoyo especializado durante una de las etapas más complejas del desarrollo personal.",
    topics: ["Trastornos alimentarios", "Depresión/Ansiedad", "Adicciones tecnológicas", "Autoestima", "Habilidades sociales"],
    icon: "Sparkles"
  },
  {
    id: "infantil",
    title: "Terapia Infantil",
    description: "Evaluación y tratamiento de problemas emocionales y de conducta en niños.",
    topics: ["Fracaso escolar", "Fobias", "Trastornos del sueño", "Problemas de conducta", "Ansiedad infantil"],
    icon: "Baby"
  },
  {
    id: "familiar",
    title: "Terapia Familiar",
    description: "Mejora la dinámica familiar y resuelve conflictos de manera constructiva.",
    topics: ["Conflictos familiares", "Comunicación", "Mediación", "Educación para el divorcio", "Violencia de género"],
    icon: "Users"
  },
  {
    id: "juridica",
    title: "Psicología Jurídica",
    description: "Informes periciales y evaluaciones psicológicas para procesos judiciales.",
    topics: ["Informes periciales", "Mediación", "Custodia", "Evaluaciones", "Violencia de género"],
    icon: "Scale"
  }
]

// Testimonios
export const testimonials = [
  {
    id: 1,
    name: "María G.",
    text: "Después de años luchando con la ansiedad, encontré en Isabel la ayuda que necesitaba. Su enfoque empático y profesional ha cambiado mi vida.",
    rating: 5,
    source: "Doctoralia"
  },
  {
    id: 2,
    name: "Carlos R.",
    text: "La terapia de pareja con Isabel nos ayudó a reconectar y mejorar nuestra comunicación. Muy recomendable.",
    rating: 5,
    source: "Doctoralia"
  },
  {
    id: 3,
    name: "Ana P.",
    text: "Gracias a Isabel, mi hijo adolescente ha aprendido a gestionar sus emociones. El cambio ha sido increíble.",
    rating: 5,
    source: "Doctoralia"
  },
  {
    id: 4,
    name: "Laura M.",
    text: "Profesional, cercana y muy humana. Me sentí escuchada y comprendida desde el primer momento.",
    rating: 5,
    source: "Doctoralia"
  },
  {
    id: 5,
    name: "Cristina Gómez",
    text: "Excelente profesional. Muy atenta y comprometida con sus pacientes. La recomiendo totalmente.",
    rating: 5,
    source: "Google"
  },
  {
    id: 6,
    name: "Pedro S.",
    text: "Isabel me ayudó a superar un momento muy difícil de mi vida. Eternamente agradecido.",
    rating: 5,
    source: "Doctoralia"
  }
]

// FAQs
export const faqs = [
  {
    question: "¿Cómo es la primera consulta?",
    answer: "La primera consulta es una sesión de evaluación donde conoceremos tu situación, tus necesidades y objetivos. Es un espacio seguro donde podrás expresarte libremente. No hay compromiso de continuar si no te sientes cómodo/a."
  },
  {
    question: "¿Cuánto dura una sesión de terapia?",
    answer: "Las sesiones individuales duran aproximadamente 50-60 minutos. Las sesiones de pareja o familia pueden extenderse hasta 75-90 minutos según las necesidades."
  },
  {
    question: "¿Con qué frecuencia son las sesiones?",
    answer: "Normalmente comenzamos con sesiones semanales y, según tu evolución, vamos espaciándolas a quincenales y luego mensuales hasta el alta terapéutica."
  },
  {
    question: "¿Ofreces terapia online?",
    answer: "Sí, ofrezco terapia online por videollamada para personas que no pueden acudir presencialmente. La efectividad es la misma que las sesiones presenciales."
  },
  {
    question: "¿Cómo sé si necesito terapia?",
    answer: "Si sientes que algo te preocupa, te limita o afecta tu bienestar diario, es buen momento para consultar. No hace falta estar 'muy mal' para pedir ayuda."
  },
  {
    question: "¿Todo lo que hable es confidencial?",
    answer: "Absolutamente. Todo lo que compartas en consulta está protegido por el secreto profesional. Solo en casos excepcionales previstos por la ley se podría romper esa confidencialidad."
  }
]
