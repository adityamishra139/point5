import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ children, className = '', delay = 0 }: TextRevealProps) => {
  const words = children.split(' ');

  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotateX: -80 }}
            whileInView={{ y: '0%', rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// Char-by-char variant for headings
export const TextRevealChars = ({ children, className = '', delay = 0 }: TextRevealProps) => {
  const chars = children.split('');

  return (
    <motion.span className={className} aria-label={children}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.02,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
