
import React, { createContext, useContext } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  BookOpen,
  Waves,
  Truck,
  Apple,
  MapPin,
  Clock,
  Mail
} from 'lucide-react';

export type Language = 'es' | 'en';

export const BRAND = {
  name: "Blackshack Surf School CR",
  location: "Playa Cocles, Puerto Viejo, Limón, Costa Rica 70403",
  whatsapp: "https://wa.me/50671069930",
  whatsappNumber: "+506 7106 9930",
  email: "info@blackshacksurfschool.com",
  hours: "7:00 am - 5:00 pm",
  facebookUrl: "https://www.facebook.com/share/1AVTfrWCW2/?mibextid=wwXIfr",
  instagram: "@blackshack_surf_school.cr",
  instagramUrl: "https://instagram.com/blackshack_surf_school.cr"
};

export const TRANSLATIONS = {
  es: {
    nav: [
      { label: 'Sobre Ronald', href: '#about' },
      { label: 'Clases y Playas', href: '#services' },
      { label: 'Testimonios', href: '#trust' },
      { label: 'Reservar', href: '#booking' },
    ],
    hero: {
      title: "BIENVENIDO A VIVIR EL",
      titleAccent: "REGALO DEL SURF.",
      description: "Instrucción técnica y experiencia cultural con surfistas locales de tercera generación en el Caribe sur de Costa Rica.",
      cta: "RESERVAR CLASE"
    },
    about: {
      tag: "Sobre la Escuela",
      title: "Ronald Brown: Pasión, Herencia y Técnica.",
      description: "Blackshack es una escuela profesional dirigida por Ronald Brown, nativo de Puerto Viejo con más de 25 años de experiencia. Surfista de tercera generación, Ronald ha surfeado olas en México, Perú, Hawái y Tahití, aportando un conocimiento profundo del mar caribeño y un enfoque humano y respetuoso del entorno.",
      stats: [
        { value: "25+", label: "Años de experiencia" },
        { value: "3ra", label: "Generación surfista" }
      ],
      features: [
        { title: "Filosofía", desc: "Instrucción personalizada de bienestar y conexión con la naturaleza." },
        { title: "Local", desc: "Profundo conocimiento de corrientes y la cultura de Puerto Viejo." }
      ]
    },
    services: {
      tag: "Nuestras Playas",
      title: "Planes y Spots",
      description: "Lecciones en Playa Cocles, Playa Grande, Punta Uva y Playa Negra según condiciones. No es necesario saber nadar para principiantes. Máximo 3 estudiantes por instructor.",
      pricing: [
        { duration: "Sesión de 1h 30min", price: "$55", tag: "Opción Recomendada" },
        { duration: "Sesión de 2h", price: "$60", tag: "Más popular" }
      ],
      inclusions: [
        { label: "Tabla y Leash", icon: <Waves size={18} /> },
        { label: "Instrucción Técnica", icon: <Award size={18} /> },
        { label: "Transporte Cercano", icon: <Truck size={18} /> }
      ],
      items: [
        {
          name: "Principiantes",
          description: "No necesitas saber nadar. Te enseñamos seguridad, técnica en arena y te ponemos de pie en tu primera sesión.",
          icon: <BookOpen className="w-8 h-8" />
        },
        {
          name: "Intermedios",
          description: "Mejora tu lectura de olas y técnica de remada con un guía que ha viajado por las mejores olas del mundo.",
          icon: <Target className="w-8 h-8" />
        },
        {
          name: "Grupos Grandes",
          description: "Capacidad para grupos de hasta 20 personas, manteniendo la calidad con múltiples instructores locales.",
          icon: <Users className="w-8 h-8" />
        },
        {
          name: "Privadas",
          description: "Atención 1 a 1 con Ronald o nuestro equipo senior para una progresión acelerada y segura.",
          icon: <Award className="w-8 h-8" />
        }
      ]
    },
    process: {
      steps: [
        { step: "01", title: "Contacto", text: "WhatsApp o Email. Abierto todos los días de 7:00 am a 5:00 pm." },
        { step: "02", title: "Logística", text: "Elegimos la playa (Cocles, Punta Uva...) según el mar y tu nivel." },
        { step: "03", title: "Transporte", text: "Coordinamos tu recogida en hoteles cercanos para tu comodidad." },
        { step: "04", title: "Conexión", text: "Surfea bajo una filosofía de bienestar y respeto por el océano." }
      ]
    },
    trust: {
      title: "Por qué elegir Blackshack",
      points: [
        "Liderada por Ronald Brown, surfista de élite nativo",
        "Enfoque en seguridad y cultura local caribeña",
        "Instructores certificados (máx 3 alumnos/guía)",
        "Equipo profesional (tabla y leash incluidos)",
        "Comunicación excelente en español e inglés"
      ],
      badgeTitle: "Instrucción Profesional",
      badgeDesc: "Más de 25 años de experiencia técnica en el agua.",
      testimonials: [
        { author: "Edgar Arias", text: "Profesional y comprometido con los estudiantes. Muy recomendable." },
        { author: "Birgit S.", text: "Me ayudó a mejorar mis habilidades y volveré el próximo año." },
        { author: "Christine Ha", text: "Reconfortante para principiantes, comunicación excelente en inglés." }
      ]
    },
    booking: {
      tag: "Reserva tu sesión",
      title: "¿Surfeamos hoy?",
      labelName: "Nombre",
      labelLevel: "Nivel",
      labelDetails: "Detalles breves",
      placeholderName: "Escribe tu nombre",
      placeholderDetails: "Dinos cuántos son y en qué hotel se hospedan...",
      levels: ["Principiante", "Intermedio", "Avanzado"],
      cta: "ENVIAR RESERVA",
      successTitle: "¡Casi listo!",
      successDesc: "Hemos preparado tu mensaje. Revisa tu WhatsApp y presiona 'Enviar'.",
      back: "VOLVER AL FORMULARIO"
    },
    footer: {
      desc: "Blackshack Surf School: Instrucción técnica, experiencia cultural y conexión con el océano en Puerto Viejo.",
      contact: "Contacto & Horarios"
    }
  },
  en: {
    nav: [
      { label: 'About Ronald', href: '#about' },
      { label: 'Classes & Spots', href: '#services' },
      { label: 'Testimonials', href: '#trust' },
      { label: 'Book now', href: '#booking' },
    ],
    hero: {
      title: "WELCOME TO THE",
      titleAccent: "GIFT OF SURFING.",
      description: "Technical instruction and cultural experience with 3rd generation local surfers in the South Caribbean of Costa Rica.",
      cta: "BOOK A LESSON"
    },
    about: {
      tag: "About the School",
      title: "Ronald Brown: Passion, Heritage & Technique.",
      description: "Blackshack is a professional school led by Ronald Brown, a Puerto Viejo native with 25+ years of experience. A 3rd generation surfer, Ronald has surfed waves in Mexico, Peru, Hawaii, and Tahiti, bringing deep knowledge of the Caribbean sea and a human-centered, respectful approach to the environment.",
      stats: [
        { value: "25+", label: "Years of Experience" },
        { value: "3rd", label: "Gen Surfer" }
      ],
      features: [
        { title: "Philosophy", desc: "Personalized instruction focusing on wellness and nature connection." },
        { title: "Local", desc: "Deep knowledge of local currents and Puerto Viejo culture." }
      ]
    },
    services: {
      tag: "Our Beaches",
      title: "Plans & Spots",
      description: "Lessons at Playa Cocles, Playa Grande, Punta Uva, and Playa Negra depending on conditions. Swimming skills not required for beginners. Max 3 students per instructor.",
      pricing: [
        { duration: "1h 30min Session", price: "$55", tag: "Recommended Option" },
        { duration: "2h Session", price: "$60", tag: "Most popular" }
      ],
      inclusions: [
        { label: "Board & Leash", icon: <Waves size={18} /> },
        { label: "Tech Instruction", icon: <Award size={18} /> },
        { label: "Nearby Transport", icon: <Truck size={18} /> }
      ],
      items: [
        {
          name: "Beginners",
          description: "No swimming skills required. We teach safety, sand technique, and get you standing on your first session.",
          icon: <BookOpen className="w-8 h-8" />
        },
        {
          name: "Intermediates",
          description: "Improve your wave reading and paddling technique with a guide who has traveled the world's best waves.",
          icon: <Target className="w-8 h-8" />
        },
        {
          name: "Large Groups",
          description: "Capacity for groups up to 20 people, maintaining quality with multiple local instructors.",
          icon: <Users className="w-8 h-8" />
        },
        {
          name: "Private Lessons",
          description: "1-on-1 attention with Ronald or our senior team for fast and safe progression.",
          icon: <Award className="w-8 h-8" />
        }
      ]
    },
    process: {
      steps: [
        { step: "01", title: "Contact", text: "WhatsApp or Email. Open daily from 7:00 am to 5:00 pm." },
        { step: "02", title: "Logistics", text: "We pick the spot (Cocles, Punta Uva...) based on conditions and your level." },
        { step: "03", title: "Transport", text: "We coordinate pickup at nearby hotels for your convenience." },
        { step: "04", title: "Connection", text: "Surf under a philosophy of wellness and respect for the ocean." }
      ]
    },
    trust: {
      title: "Why choose Blackshack",
      points: [
        "Led by Ronald Brown, elite native surfer",
        "Focus on safety and local Caribbean culture",
        "Certified instructors (max 3 students/guide)",
        "Professional gear (board and leash included)",
        "Excellent communication in Spanish and English"
      ],
      badgeTitle: "Professional Coaching",
      badgeDesc: "Over 25 years of technical experience in the water.",
      testimonials: [
        { author: "Edgar Arias", text: "Professional and committed to students. Highly recommended." },
        { author: "Birgit S.", text: "He helped me improve my skills and I will return next year." },
        { author: "Christine Ha", text: "Reassuring for beginners, excellent communication in English." }
      ]
    },
    booking: {
      tag: "Book your session",
      title: "Shall we surf today?",
      labelName: "Name",
      labelLevel: "Level",
      labelDetails: "Short details",
      placeholderName: "Enter your name",
      placeholderDetails: "Tell us group size and where you are staying...",
      levels: ["Beginner", "Intermediate", "Advanced"],
      cta: "SEND BOOKING",
      successTitle: "Almost ready!",
      successDesc: "We've prepared your message. Check your WhatsApp and press 'Send'.",
      back: "BACK TO FORM"
    },
    footer: {
      desc: "Blackshack Surf School: Technical instruction, cultural experience, and connection with the ocean in Puerto Viejo.",
      contact: "Contact & Hours"
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof TRANSLATIONS.es;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
