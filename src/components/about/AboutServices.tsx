import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';
import { ArrowUpRight } from 'lucide-react';

export const AboutServices = () => {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="02" text="Our Services" />

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter leading-[0.9] max-w-lg">
            <TextReveal>We are offering the best solutions</TextReveal>
          </h2>
          <p className="text-foreground/40 text-sm max-w-sm leading-relaxed self-end">
            We offer a full range of digital services to help your brand stand out, connect, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.slice(0, 4).map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="flex items-center justify-between p-6 rounded-xl glass hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-accent font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-bold font-display text-lg group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-foreground/30 hidden md:block">Portfolio</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all group-hover:text-background">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
