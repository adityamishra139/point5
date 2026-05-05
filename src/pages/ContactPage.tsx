import { motion } from 'motion/react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';

import { GridBackground } from '../components/ui/GridBackground';

export const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground min-h-screen overflow-hidden pt-24 relative"
    >
      <GridBackground className="opacity-10" />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </motion.main>
  );
};
