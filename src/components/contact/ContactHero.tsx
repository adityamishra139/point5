import { motion } from 'motion/react';
import { COMPANY } from '../../data/content';
import { SectionLabel } from '../SectionLabel';
import { TextReveal } from '../TextReveal';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Twitter, href: COMPANY.socials.twitter, label: 'Twitter', color: 'hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400' },
  { icon: Instagram, href: COMPANY.socials.instagram, label: 'Instagram', color: 'hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400' },
  { icon: Linkedin, href: COMPANY.socials.linkedin, label: 'Linkedin', color: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400' },
  { icon: Facebook, href: COMPANY.socials.facebook, label: 'Facebook', color: 'hover:bg-blue-600/10 hover:border-blue-600/30 hover:text-blue-500' },
  { icon: MessageCircle, href: COMPANY.socials.whatsapp, label: 'Whatsapp', color: 'hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400' },
];

export const ContactHero = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="11" text="Contact Us" />

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tighter leading-[0.9] max-w-2xl text-black uppercase">
            <TextReveal>Want to work with us?</TextReveal>
            <br />
            <TextReveal className="opacity-40" delay={0.3}>Let's connect</TextReveal>
          </h2>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 self-end">
            {SOCIAL_LINKS.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.08, type: 'spring' }}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-black/5 text-black font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white shadow-sm"
              >
                <social.icon className="w-4 h-4" />
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
