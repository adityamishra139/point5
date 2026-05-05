import { motion, useMotionValue, useTransform } from 'motion/react';
import { useRef, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { Palette, Share2, TrendingUp, Camera, Heart, Video, ArrowUpRight } from 'lucide-react';

const ICONS: Record<string, any> = { Palette, Share2, TrendingUp, Camera, Heart, Video };

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0]; index: number }) => {
  const Icon = ICONS[service.icon] || Palette;
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [6, -6]);
  const rotateY = useTransform(mouseX, [-150, 150], [-6, 6]);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
    >
      <Link to={`/services/${service.slug}`} className="block h-full">
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 h-full group hover:border-accent/20 transition-all duration-500 relative overflow-hidden shadow-2xl">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Number */}
            <div className="absolute top-0 right-0 text-6xl font-display font-bold text-white/[0.03] group-hover:text-accent/10 transition-colors">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Icon */}
            <motion.div
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-all shadow-sm"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Icon className="w-7 h-7 text-accent group-hover:text-background transition-colors" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold font-display uppercase mb-3 text-white tracking-tight group-hover:text-accent transition-colors">
              {service.title}
            </h3>

            {/* Short desc */}
            <p className="text-foreground/40 text-sm font-medium leading-relaxed mb-6 italic">
              {service.shortDesc}
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature) => (
                <motion.span
                  key={feature}
                  className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/5 rounded-full border border-white/5 text-white/40 group-hover:text-accent group-hover:border-accent/10 transition-all"
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Explore Details
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const ServiceCards = () => {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="02" text="Our Services" />

        <p className="text-foreground/60 text-sm md:text-base font-bold uppercase tracking-widest max-w-xl mb-16">
          Full-range digital services to help your brand stand out, connect, and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
