import { motion } from 'motion/react';
import { COMPANY, FOUNDERS } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';

export const AboutIntro = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="01" text="About Us" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left - Text */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter leading-[0.9] mb-10 text-white">
              <TextReveal>Elevating brands through digital design.</TextReveal>
            </h2>

            {COMPANY.aboutDescription.split('\n\n').map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-white/60 font-medium text-base md:text-lg leading-relaxed mb-6"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right - Founder highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-32 bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={FOUNDERS[0].image}
                  alt={FOUNDERS[0].name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-white">{FOUNDERS[0].name}</h3>
                <p className="text-emerald-500 text-sm font-bold uppercase tracking-wider">{FOUNDERS[0].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
