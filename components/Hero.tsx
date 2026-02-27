
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  // URL del video real de Blackshack proporcionada por el usuario
  const videoUrl = "https://mqajxigehitkgdtepqzi.supabase.co/storage/v1/object/public/Video%20surf/453dc8f6-7b59-43ed-b02b-a643da275e6a.mov";

  return (
    <section className="relative min-h-[95vh] flex flex-col bg-brand-dark overflow-hidden pt-48 pb-20">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source src={videoUrl} type="video/quicktime" />
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Overlay para profundidad y legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/20"></div>
        <div className="absolute inset-0 bg-brand-dark/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-brand-light/10 backdrop-blur-md border border-brand-light/20 px-4 py-2 mb-8 animate-fade-in">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-light">Puerto Viejo, Costa Rica</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight mb-10 tracking-tighter drop-shadow-2xl">
            {t.hero.title} <br/>
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>{t.hero.titleAccent}</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-lg text-gray-200 font-light leading-relaxed drop-shadow-md">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-3 bg-white text-brand-dark px-10 py-5 font-bold hover:bg-brand-light transition-all text-xs tracking-[0.2em] shadow-2xl active:scale-95"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
