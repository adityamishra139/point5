import { motion } from 'motion/react';
import { COMPANY } from '../../data/content';
import { MapPin, Phone, Clock } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: COMPANY.address,
  },
  {
    icon: Phone,
    title: 'Quick Support',
    content: `Phone: ${COMPANY.phones.join(', ')}\nEmail: ${COMPANY.email}`,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: COMPANY.hours,
  },
];

export const ContactInfo = () => {
  return (
    <section className="px-6 md:px-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/[0.03] border border-black/5 rounded-2xl p-8 group hover:border-black/20 transition-all duration-500 hover-lift relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center mb-6 shadow-sm"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <card.icon className="w-7 h-7 text-black" />
                </motion.div>

                <h3 className="text-lg font-bold font-display uppercase mb-3 text-black tracking-tight group-hover:translate-x-1 transition-transform">
                  {card.title}
                </h3>

                {card.content.split('\n').map((line, j) => (
                  <p key={j} className="text-black/60 text-sm font-medium leading-relaxed italic">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
