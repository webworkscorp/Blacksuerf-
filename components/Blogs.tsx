
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const Blogs: React.FC = () => {
  const { lang } = useLanguage();

  const blogPosts = [];

  return (
    <section id="blogs" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-black text-[10px] uppercase tracking-[0.3em] block mb-4"
          >
            {lang === 'es' ? 'Nuestro Blog' : 'Our Blog'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-brand-dark mb-6"
          >
            {lang === 'es' ? 'Historias y Consejos de Surf' : 'Surf Stories & Tips'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg italic"
          >
            {lang === 'es' 
              ? 'Próximamente: Artículos sobre técnica, cultura local y más.' 
              : 'Coming Soon: Articles about technique, local culture, and more.'}
          </motion.p>
        </div>

        <div className="flex justify-center items-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-300 font-display font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Contenido en camino...' : 'Content on the way...'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
