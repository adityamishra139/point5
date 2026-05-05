import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { TextReveal } from './TextReveal';

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

export const PageHero = ({ title, breadcrumb }: PageHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://point5media.com/wp-content/uploads/2024/04/Point5-Media-Productions-Main-Banner.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 grayscale mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* Neon accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent z-10" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-black"
        >
          <TextReveal>{title}</TextReveal>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-3 mt-6 text-sm text-black/50 font-bold uppercase tracking-widest"
        >
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span className="text-black font-bold">»</span>
          <span className="text-black/80">{breadcrumb}</span>
        </motion.div>
      </motion.div>

      {/* Dot grid decoration */}
      <div className="absolute inset-0 dot-grid opacity-10 z-[1]" />
    </section>
  );
};
