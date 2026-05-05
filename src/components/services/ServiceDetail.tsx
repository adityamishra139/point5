import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../../data/content';
import { PageHero } from '../PageHero';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-display mb-4 text-black uppercase tracking-tighter">Service Not Found</h1>
          <Link to="/services" className="text-black font-bold uppercase tracking-widest hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero title={service.title} breadcrumb={service.title} />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SectionLabel number="01" text="Service Overview" />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold font-display tracking-tighter mb-8 text-black uppercase"
              >
                <TextReveal>{service.title}</TextReveal>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-black font-medium text-base md:text-lg leading-relaxed mb-12"
              >
                {service.fullDesc}
              </motion.p>

              {/* Features */}
              <SectionLabel number="02" text="What We Deliver" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-black/[0.03] border border-black/5 rounded-xl hover:border-black/20 transition-all group shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black/80 transition-all group shadow-2xl"
                >
                  Get a Quote
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Sidebar - Other Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-6">
                Other Services
              </h3>
              <div className="space-y-3">
                {otherServices.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between p-4 bg-black/[0.03] border border-black/5 rounded-xl hover:border-black/20 transition-all group shadow-sm"
                    >
                      <span className="text-sm font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">
                        {s.title}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-black/20 group-hover:text-black transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
