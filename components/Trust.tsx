
import React from 'react';
import { CheckCircle, ShieldCheck, Quote } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const Trust: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="trust" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-8">
              {t.trust.title}
            </h2>
            <ul className="space-y-6">
              {t.trust.points.map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-lg text-gray-700">
                  <div className="bg-green-100 text-green-600 p-1.5 rounded-full shrink-0"><CheckCircle size={24} /></div>
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-6">
              <div className="bg-brand-dark p-4 rounded-2xl text-brand-light"><ShieldCheck size={40} /></div>
              <div>
                <p className="text-xl font-bold text-brand-dark">{t.trust.badgeTitle}</p>
                <p className="text-gray-600">{t.trust.badgeDesc}</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src="https://i.imgur.com/44U7b4h.jpeg" alt="Professional Surf Action" className="rounded-3xl w-full h-full object-cover aspect-square shadow-lg hover:scale-[1.02] transition-transform duration-500" />
            <img src="https://i.imgur.com/63IhmRS.jpeg" alt="Surfer in action" className="rounded-3xl w-full h-full object-cover aspect-square mt-8 shadow-lg hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.trust.testimonials.map((test, i) => (
            <div key={i} className="bg-brand-gray p-8 relative group hover:bg-brand-dark transition-all duration-500">
              <Quote className="text-brand-teal mb-6 group-hover:text-white" size={40} />
              <p className="text-gray-600 group-hover:text-gray-300 italic mb-8 font-light leading-relaxed">"{test.text}"</p>
              <p className="text-brand-dark group-hover:text-brand-light font-black uppercase text-xs tracking-widest">– {test.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
