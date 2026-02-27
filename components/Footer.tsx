
import React from 'react';
import { Facebook, MapPin, Phone, Instagram, Mail, Clock } from 'lucide-react';
import { BRAND, useLanguage } from '../constants.tsx';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="https://i.imgur.com/txNNC0w.png" alt="Logo" className="h-44 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8 font-light">{t.footer.desc}</p>
            <div className="flex gap-4">
              <a href={BRAND.facebookUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-brand-teal hover:text-brand-dark p-3 rounded-none transition-all"><Facebook size={20} /></a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-brand-teal hover:text-brand-dark p-3 rounded-none transition-all"><Phone size={20} /></a>
              <a href={`mailto:${BRAND.email}`} className="bg-white/5 hover:bg-brand-teal hover:text-brand-dark p-3 rounded-none transition-all"><Mail size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-light mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3"><MapPin className="text-brand-teal shrink-0" size={18} /><span>{BRAND.location}</span></li>
              <li><a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-brand-teal transition-colors"><Phone className="text-brand-teal shrink-0" size={18} /><span>{BRAND.whatsappNumber}</span></a></li>
              <li className="flex items-start gap-3"><Mail className="text-brand-teal shrink-0" size={18} /><span>{BRAND.email}</span></li>
              <li className="flex items-start gap-3"><Clock className="text-brand-teal shrink-0" size={18} /><span>{BRAND.hours} (Daily)</span></li>
              <li><a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-brand-teal transition-colors"><Instagram className="text-brand-teal shrink-0" size={18} /><span>{BRAND.instagram}</span></a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <p>© {new Date().getFullYear()} {BRAND.name}.</p>
          <p className="mt-2 md:mt-0">Puerto Viejo de Talamanca, Limón – Costa Rica 🇨🇷</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
