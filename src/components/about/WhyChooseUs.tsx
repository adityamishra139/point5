import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';
import { Users, Lightbulb, Award, Clock } from 'lucide-react';

const ICONS: Record<string, any> = { Users, Lightbulb, Award, Clock };

export const WhyChooseUs = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="03" text="Why Choose Us?" />

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter leading-[0.9] max-w-lg">
            <TextReveal>We are offering the best solutions</TextReveal>
          </h2>
          <p className="text-foreground/40 text-sm max-w-sm leading-relaxed self-end">
            We offer a full range of digital services to help your brand stand out, connect, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] || Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-8 group hover:border-accent/20 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>

                  <h3 className="text-lg font-bold font-display uppercase mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/40 text-sm leading-relaxed">{item.desc}</p>

                  {item.stat && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-accent text-sm font-bold">{item.stat}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
