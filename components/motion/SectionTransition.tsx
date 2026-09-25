'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionTransitionProps {
  className?: string;
  /** Short mono label shown at the line's midpoint. */
  label?: string;
}

/**
 * Visual continuity between major sections: a hairline with a slow accent
 * sweep. The sweep is a CSS animation that respects the global
 * reduced-motion reset (animation-duration clamps to 0.01ms).
 */
export function SectionTransition({ className, label }: SectionTransitionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-2 sm:px-8',
        className
      )}
    >
      <span className="sweep-track absolute inset-x-5 h-px bg-line sm:inset-x-8" />
      {label && (
        <span className="relative z-10 bg-canvas/60 px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-faint backdrop-blur-sm">
          {label}
        </span>
      )}
    </motion.div>
  );
}