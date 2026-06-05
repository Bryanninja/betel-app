"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: 'inline-flex items-center justify-center rounded-xl font-bold text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-betel-red focus-visible:ring-offset-2 focus-visible:ring-offset-betel-graphite',
  variants: {
    color: {
      primary: 'bg-betel-red hover:bg-betel-red/90',
      outline: 'border-2 border-betel-red hover:bg-betel-red/30',
      ghost:
        'border-2 border-transparent hover:bg-betel-red/30 active:border-betel-red',
    },
    size: {
      sm: 'text-sm px-3 py-2',
      md: 'text-base px-4 py-3',
      lg: 'text-lg px-6 py-3',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const MotionLink = motion.create(Link);

const Button = ({ children, to, color, size, className, ...props }) => {
  const styles = buttonStyles({ color, size, className });

  const tapAnimation = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (to) {
    return (
      <MotionLink href={to} className={styles} {...tapAnimation} {...props}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button className={styles} {...tapAnimation} {...props}>
      {children}
    </motion.button>
  );
};

export default Button;
