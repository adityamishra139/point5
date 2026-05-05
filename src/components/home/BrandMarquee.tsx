import { motion } from 'motion/react';
import { BRAND_LOGOS } from '../../data/content';

export const BrandMarquee = () => {
  const logos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-24 border-y border-white/5 bg-background overflow-hidden relative">
      {/* Background glow behind marquee matching reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-foreground/40 text-xs font-bold uppercase tracking-[0.3em] whitespace-nowrap"
          >
            Trusted by brands
          </motion.p>
        </div>

        <div className="flex-1 relative overflow-hidden">
          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24"
            >
              {logos.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 group"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 md:h-14 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
