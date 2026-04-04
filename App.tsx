
import React, { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import Trust from './components/Trust.tsx';
import BookingForm from './components/BookingForm.tsx';
import Blogs from './components/Blogs.tsx';
import Footer from './components/Footer.tsx';
import FloatingLanguageSwitcher from './components/FloatingLanguageSwitcher.tsx';
import ChatBot from './components/ChatBot.tsx';
import { TRANSLATIONS, Language, LanguageContext } from './constants.tsx';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleInternalNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleInternalNavigation);
    return () => document.removeEventListener('click', handleInternalNavigation);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Trust />
          <Blogs />
          <section className="py-32 bg-brand-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <BookingForm />
            </div>
          </section>
        </main>
        <Footer />
        <ChatBot />
        <FloatingLanguageSwitcher />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
