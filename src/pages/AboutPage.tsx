import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { AboutIntro } from '../components/about/AboutIntro';
import { MissionCards } from '../components/about/MissionCards';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { FunFacts } from '../components/about/FunFacts';
import { AboutServices } from '../components/about/AboutServices';

import { GridBackground } from '../components/ui/GridBackground';

export const AboutPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground min-h-screen overflow-hidden pt-24 relative"
    >
      <GridBackground className="opacity-10" />
      <PageHero title="About Us" breadcrumb="About" />
      <AboutIntro />
      <MissionCards />
      <WhyChooseUs />
      <FunFacts />
      <AboutServices />
    </motion.main>
  );
};
