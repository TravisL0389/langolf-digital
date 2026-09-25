'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Gap between sibling delays in seconds. */
  gap?: number;
}

/**
 * Fades its direct children in sequence as they enter the viewport.
 * Renders children statically under reduced motion.
 */
export function Stagger({ children, className, gap = 0.06 }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const items = React.Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.5, delay: i * gap, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}