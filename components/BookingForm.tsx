
import React, { useState, useRef } from 'react';
import { Send, User, Waves, AlignLeft, CheckCircle2 } from 'lucide-react';
import { BRAND, useLanguage } from '../constants.tsx';

const BookingForm: React.FC = () => {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const nombre = formData.get('nombre') as string;
    const nivel = formData.get('nivel') as string;
    const detalles = formData.get('detalles') as string;

    const intro = lang === 'es' ? `Hola *${BRAND.name}*! 👋 Me gustaría reservar una sesión de surf.` : `Hi *${BRAND.name}*! 👋 I would like to book a surf session.`;
    const labelN = lang === 'es' ? 'Nombre' : 'Name';
    const labelL = lang === 'es' ? 'Nivel' : 'Level';
    const labelD = lang === 'es' ? 'Detalles' : 'Details';

    const mensaje = `${intro}%0A%0A` +
                   `👤 *${labelN}:* ${nombre}%0A` +
                   `🌊 *${labelL}:* ${nivel}%0A` +
                   `📝 *${labelD}:* ${detalles}`;

    window.open(`${BRAND.whatsapp}?text=${mensaje}`, '_blank');
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div id="booking" className="max-w-2xl mx-auto bg-white border border-gray-100 p-12 md:p-20 text-center shadow-2xl animate-in fade-in zoom-in duration-500 rounded-none">
        <div className="w-24 h-24 bg-brand-teal text-brand-dark rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"><CheckCircle2 size={48} /></div>
        <h3 className="text-4xl font-display font-bold text-brand-dark mb-4 tracking-tight">{t.booking.successTitle}</h3>
        <p className="text-gray-500 text-lg font-light mb-12">{t.booking.successDesc}</p>
        <button onClick={() => setStatus('idle')} className="bg-brand-dark text-white px-12 py-5 hover:bg-brand-accent transition-all uppercase text-[10px] font-black tracking-[0.3em] active:scale-95 shadow-lg">
          {t.booking.back}
        </button>
      </div>
    );
  }

  return (
    <div id="booking" className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-2xl relative overflow-hidden p-8 md:p-16">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      <div className="relative z-10 text-center mb-12">
        <h4 className="text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4">{t.booking.tag}</h4>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tighter">{t.booking.title}</h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-10 relative z-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><User size={14} className="text-brand-teal" /> {t.booking.labelName}</label>
          <input name="nombre" required type="text" placeholder={t.booking.placeholderName} className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-brand-dark outline-none transition-all font-light text-lg placeholder:text-gray-200" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Waves size={14} className="text-brand-teal" /> {t.booking.labelLevel}</label>
          <select name="nivel" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-brand-dark outline-none transition-all font-light text-lg appearance-none cursor-pointer">
            {t.booking.levels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><AlignLeft size={14} className="text-brand-teal" /> {t.booking.labelDetails}</label>
          <textarea name="detalles" required rows={2} placeholder={t.booking.placeholderDetails} className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-brand-dark outline-none transition-all font-light text-lg placeholder:text-gray-200 resize-none h-24"></textarea>
        </div>
        <button type="submit" className="w-full bg-brand-dark text-white py-6 group flex items-center justify-center gap-4 hover:bg-brand-accent transition-all uppercase text-[11px] font-black tracking-[0.5em] shadow-lg active:scale-[0.98]">
          {t.booking.cta}
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
