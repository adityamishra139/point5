import { motion } from 'motion/react';
import { FUN_FACTS } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { AnimatedCounter } from '../AnimatedCounter';
import { TextReveal } from '../TextReveal';

export const FunFacts = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background quote */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[8vw] font-display font-bold text-white/[0.02] leading-tight text-center max-w-4xl">
          "A streamlined solution build to power business."
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLabel number="04" text="FunFacts" />

        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tighter mb-4 max-w-2xl">
          <TextReveal>"A streamlined solution build to power business."</TextReveal>
        </h2>
        <p className="text-foreground/40 text-sm md:text-base max-w-xl mb-16 leading-relaxed">
          We're more than pixels and code — we're coffee lovers, cat people, meme sharers, and design geeks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FUN_FACTS.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass rounded-2xl p-10 text-center group hover:border-accent/20 transition-all duration-500 gradient-border overflow-hidden"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(196, 239, 23, 0.05), transparent 70%)',
                }}
              />

              <div className="relative z-10">
                <AnimatedCounter
                  value={fact.value}
                  suffix={fact.suffix}
                  className="text-6xl md:text-7xl font-display font-bold text-accent text-shadow-glow"
                />
                <p className="mt-4 text-foreground/40 text-sm uppercase tracking-widest font-medium">
                  {fact.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
