
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ArrowRight, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage, BRAND } from '../constants.tsx';

const MAX_MESSAGES = 7;

const ChatBot: React.FC = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [hasOpened, setHasOpened] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      const welcomeText = lang === 'es' 
        ? "¡Hola! Soy el asistente de Ronald. ¿Estás listo para dominar las olas de Puerto Viejo o tienes alguna duda antes de empezar?" 
        : "Hi! I'm Ronald's assistant. Are you ready to master the waves of Puerto Viejo or do you have any questions before we start?";
      setMessages([{ role: 'model', text: welcomeText }]);
    }
  }, [isOpen, hasOpened, lang]);
  const [isLoading, setIsLoading] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      return;
    }

    const interval = setInterval(() => {
      setShowTooltip(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isFinished) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Robust API Key resolution
      // We use direct access to help Vite's 'define' and 'import.meta.env' replacement
      const apiKey = 
        import.meta.env.VITE_GEMINI_API_KEY || 
        import.meta.env.GEMINI_API_KEY || 
        (typeof process !== 'undefined' && process.env ? process.env.VITE_GEMINI_API_KEY : '') ||
        (typeof process !== 'undefined' && process.env ? process.env.GEMINI_API_KEY : '') ||
        '';
      
      if (!apiKey || apiKey === 'undefined' || apiKey === 'null') {
        console.error("Critical: Gemini API Key is missing or undefined.");
        throw new Error("MISSING_KEY");
      }

      const ai = new GoogleGenAI({ apiKey });
      const modelName = "gemini-3-flash-preview";
      
      const systemInstruction = `
        Eres el asistente virtual de Blackshack Surf School en Puerto Viejo, Costa Rica.
        Tu objetivo es ser PERSUASIVO y CONVERTIR visitantes en clientes.
        Ronald Brown es el instructor principal (3ra generación, 25+ años exp).
        
        REGLAS CRÍTICAS:
        1. Sé humano, natural y profesional "top primer mundo".
        2. Respuestas BREVES (máximo 2-3 oraciones).
        3. No uses listas largas ni textos pesados.
        4. Idioma actual: ${lang === 'es' ? 'Español' : 'Inglés'}.
        5. Esta es la interacción número ${interactionCount + 1} de ${MAX_MESSAGES}.
        6. Si es la interacción número ${MAX_MESSAGES}, debes hacer un CIERRE DETERMINANTE (no una pregunta), invitando al usuario a reservar ahora mismo porque los cupos son limitados.
        7. NO PUEDES HACER RESERVAS DIRECTAMENTE. Si el usuario quiere reservar, dile que use el botón que aparecerá o el formulario de abajo.
        8. SI NO SABES ALGO, no inventes. Di que Ronald puede darles ese detalle técnico personalmente una vez reserven o por WhatsApp.
        
        Contexto de la escuela:
        - Ubicación: Playa Cocles, Puerto Viejo.
        - Ronald Brown: Surfista local de élite.
        - Clases: Principiantes (no necesitan saber nadar), Intermedios, Grupos.
        - Filosofía: Bienestar y conexión con la naturaleza.
      `;

      const chatHistory = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      if (!response || !response.text) {
        throw new Error("EMPTY_RESPONSE");
      }

      const aiText = response.text;
      
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
      setInteractionCount(prev => prev + 1);
      
      if (interactionCount + 1 >= MAX_MESSAGES) {
        setIsFinished(true);
      }
    } catch (error: any) {
      console.error("ChatBot Error Details:", error);
      
      let errorMessage = lang === 'es' 
        ? "Lo siento, Ronald está en el agua ahora mismo. ¿Podrías intentar más tarde?" 
        : "Sorry, Ronald is in the water right now. Could you try again later?";

      if (error.message === "MISSING_KEY") {
        errorMessage = lang === 'es'
          ? "Error de configuración: Falta la clave de API. Por favor, verifica las variables de entorno."
          : "Configuration Error: API Key is missing. Please check environment variables.";
      } else if (error.message?.includes("API_KEY_INVALID")) {
        errorMessage = lang === 'es'
          ? "La clave de API no es válida. Por favor, revísala en tu panel de control."
          : "The API key is invalid. Please check it in your dashboard.";
      }
      
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const headerOffset = 90;
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-32 right-8 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-brand-dark p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center overflow-hidden border-2 border-brand-teal">
                   <img 
                    src="https://i.imgur.com/nS68WTf.png" 
                    alt="Blackshack" 
                    className="w-7 h-7 object-contain brightness-0 invert"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-sm leading-tight">Blackshack Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-brand-light/80 text-[10px] uppercase tracking-wider font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-gray/30 min-h-[300px]"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-accent text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-brand-dark rounded-tl-none border border-gray-100 shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-accent" />
                  </div>
                </div>
              )}
              {isFinished && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4"
                >
                  <button
                    onClick={scrollToBooking}
                    className="w-full bg-brand-teal hover:bg-brand-light text-brand-dark font-display font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg group"
                  >
                    {lang === 'es' ? 'RESERVAR MI LUGAR AHORA' : 'BOOK MY SPOT NOW'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </div>

            {/* Input */}
            {!isFinished && (
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={lang === 'es' ? "Escribe tu duda aquí..." : "Type your question here..."}
                    className="w-full pl-4 pr-12 py-3 bg-brand-gray rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 p-2 bg-brand-dark text-white rounded-lg hover:bg-brand-accent transition-colors disabled:opacity-50"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-20 right-0 mb-2 bg-white text-brand-dark px-4 py-2 rounded-xl shadow-xl border border-gray-100 whitespace-nowrap text-sm font-bold"
          >
            {lang === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help you?'}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-dark text-white p-2 rounded-full shadow-2xl border border-brand-light/20 flex items-center justify-center group relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="p-2"
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <img 
                src="https://i.imgur.com/nS68WTf.png" 
                alt="Chat" 
                className="w-12 h-12 object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && interactionCount === 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-teal rounded-full border-2 border-brand-dark animate-ping"></span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
