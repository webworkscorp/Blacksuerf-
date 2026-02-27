
import React from 'react';
import { Users, Shield } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-6">{t.about.tag}</h4>
            <h2 className="text-5xl font-display font-bold text-brand-dark leading-tight mb-8">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="bg-white p-8">
                  <p className="text-4xl font-black text-brand-dark mb-2">{stat.value}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://i.imgur.com/XuYbhTV.jpeg" alt="Surf Action Pro" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" />
              <div className="p-8 border border-gray-100">
                <Users className="text-brand-teal mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{t.about.features[0].title}</h3>
                <p className="text-gray-500 text-sm">{t.about.features[0].desc}</p>
              </div>
            </div>
            <div className="space-y-4 pt-12 md:pt-24">
              <div className="p-8 border border-gray-100">
                <Shield className="text-brand-teal mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{t.about.features[1].title}</h3>
                <p className="text-gray-500 text-sm">{t.about.features[1].desc}</p>
              </div>
              <img src="https://i.imgur.com/jvCWANm.jpeg" alt="Professional surf action" className="w-full h-80 object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
