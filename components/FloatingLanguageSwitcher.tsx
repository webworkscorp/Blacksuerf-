
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const FloatingLanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end group">
      <div className="absolute bottom-full mb-2 flex flex-col bg-brand-dark border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
        <button
          onClick={() => setLang('en')}
          className={`px-6 py-3 text-[10px] font-black tracking-widest transition-all hover:bg-white/5 ${lang === 'en' ? 'text-brand-light bg-white/5' : 'text-white/40'}`}
        >
          ENGLISH
        </button>
        <div className="h-[1px] w-full bg-white/10"></div>
        <button
          onClick={() => setLang('es')}
          className={`px-6 py-3 text-[10px] font-black tracking-widest transition-all hover:bg-white/5 ${lang === 'es' ? 'text-brand-light bg-white/5' : 'text-white/40'}`}
        >
          ESPAÑOL
        </button>
      </div>
      
      <div className="bg-brand-dark text-brand-light p-4 shadow-2xl border border-brand-light/20 flex items-center justify-center cursor-default transition-transform duration-300 group-hover:scale-110">
        <Globe className="w-6 h-6" />
        <span className="ml-2 text-[10px] font-black uppercase tracking-widest border-l border-white/20 pl-2">
          {lang.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default FloatingLanguageSwitcher;
