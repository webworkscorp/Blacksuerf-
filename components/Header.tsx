
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="block" aria-label="Inicio">
              <img 
                src="https://i.imgur.com/txNNC0w.png" 
                alt="Blackshack Surf School" 
                className={`transition-all duration-500 brightness-0 invert ${scrolled ? 'h-24 md:h-28' : 'h-32 md:h-44'}`}
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-white/70 hover:text-brand-light' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex items-center border-l border-white/20 pl-6 gap-3">
              <button 
                onClick={() => setLang('es')}
                className={`text-[10px] font-black transition-all ${lang === 'es' ? 'text-brand-light' : 'text-white/40 hover:text-white'}`}
              >
                ES
              </button>
              <span className="text-white/20 text-[10px]">|</span>
              <button 
                onClick={() => setLang('en')}
                className={`text-[10px] font-black transition-all ${lang === 'en' ? 'text-brand-light' : 'text-white/40 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <a
              href="#booking"
              className={`px-8 py-3 font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-sm active:scale-95 ${scrolled ? 'bg-brand-light text-brand-dark hover:bg-white' : 'bg-white text-brand-dark hover:bg-brand-light'}`}
            >
              {lang === 'es' ? 'Reservar' : 'Book Now'}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <div className="flex items-center bg-white/5 rounded-full px-4 py-2 gap-3 mr-2">
                <button 
                  onClick={() => setLang('es')}
                  className={`text-[10px] font-black transition-all ${lang === 'es' ? 'text-brand-light' : 'text-white/40'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`text-[10px] font-black transition-all ${lang === 'en' ? 'text-brand-light' : 'text-white/40'}`}
                >
                  EN
                </button>
              </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-x-0 bg-brand-dark shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? 'top-0 opacity-100 h-screen pointer-events-auto' : '-top-full opacity-0 h-0 overflow-hidden pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <button onClick={closeMenu} className="absolute top-8 right-8 text-white p-2"><X size={32} /></button>
          <img src="https://i.imgur.com/txNNC0w.png" alt="Logo" className="h-32 brightness-0 invert mb-8" />
          {t.nav.map((link) => (
            <a key={link.href} href={link.href} className="block text-xl font-black uppercase tracking-[0.3em] text-white/80 hover:text-brand-light transition-colors" onClick={closeMenu}>{link.label}</a>
          ))}
          <a href="#booking" className="block w-full max-w-xs bg-brand-light text-brand-dark text-center py-5 text-xs font-black uppercase tracking-[0.2em] mt-4 shadow-lg active:scale-95" onClick={closeMenu}>{lang === 'es' ? 'Reservar Ahora' : 'Book Now'}</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
