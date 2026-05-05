import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { ProcessSteps } from '../components/services/ProcessSteps';
import { ServiceCards } from '../components/services/ServiceCards';
import { GridBackground } from '../components/ui/GridBackground';

export const ServicesPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground min-h-screen overflow-hidden pt-24 relative"
    >
      <GridBackground className="opacity-10" />
      <PageHero title="Our Services" breadcrumb="Services" />
      <ProcessSteps />
      <ServiceCards />
    </motion.main>
  );
};
