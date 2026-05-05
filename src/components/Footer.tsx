import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data/content';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

const SOCIAL_LINKS = [
  { icon: Twitter, href: COMPANY.socials.twitter, label: 'Twitter' },
  { icon: Instagram, href: COMPANY.socials.instagram, label: 'Instagram' },
  { icon: Linkedin, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
  { icon: Facebook, href: COMPANY.socials.facebook, label: 'Facebook' },
  { icon: MessageCircle, href: COMPANY.socials.whatsapp, label: 'WhatsApp' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-white/5 overflow-hidden">
      {/* Animated gradient border on top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-xl tracking-tighter uppercase text-white">
                POINT
                <span className="inline-flex items-center justify-center w-6 h-6 bg-accent rounded text-background font-bold text-[10px] mx-[1px] align-middle shadow-lg">
                  5
                </span>
                MEDIA
              </span>
            </div>
            <p className="text-foreground/40 text-sm font-medium leading-relaxed max-w-xs">
              {COMPANY.tagline}
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-block mt-4 text-accent font-bold text-sm hover:underline transition-all"
            >
              {COMPANY.email}
            </a>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-accent font-bold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              Social Media
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:bg-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] uppercase tracking-widest text-white/20 font-bold">
            © All rights reserved
          </p>
          <p className="text-[11px] uppercase tracking-widest text-white/20 font-bold">
            Made with <span className="text-accent">♥</span> by{' '}
            <a href="https://point5media.com" className="text-white/30 hover:text-accent transition-colors">
              Point 5 Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
