
import React from 'react';
import { useLanguage } from '../constants.tsx';

const Process: React.FC = () => {
  const { t, lang } = useLanguage();
  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {t.process.steps.map((step, index) => (
            <div key={index} className="bg-white p-12 hover:bg-brand-gray transition-colors group">
              <span className="text-xs font-black text-brand-teal uppercase tracking-[0.3em] block mb-10">
                {lang === 'es' ? 'Paso' : 'Step'} {step.step}
              </span>
              <h3 className="text-xl font-bold text-brand-dark mb-4 tracking-tight uppercase">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
