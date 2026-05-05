import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';

export const ProcessSteps = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <SectionLabel number="07" text="Steps" />
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter text-black uppercase">
            <TextReveal>6 easy steps to get started</TextReveal>
          </h2>
          <p className="text-black/60 mt-4 max-w-xl mx-auto text-sm md:text-base font-bold uppercase tracking-widest">
            Our method blends strategy and creativity while keeping you in the loop
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-black/20 via-black/5 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-black/[0.03] border border-black/5 rounded-2xl p-8 group hover:border-black/20 transition-all duration-500 relative overflow-hidden hover-lift shadow-xl">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black px-3 py-1 rounded-full shadow-lg">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-black uppercase tracking-tight">
                          {step.num}. {step.title}
                        </h3>
                        <p className="text-black/60 text-sm font-medium leading-relaxed italic">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-background border-2 border-black/20 flex items-center justify-center text-black font-display font-bold text-sm shadow-xl"
                      whileInView={{ borderColor: 'rgba(0, 0, 0, 0.8)', scale: 1.1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {step.num}
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
