'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel (px each direction) at full scroll range. */
  distance?: number;
}

/**
 * Subtle, spring-smoothed scroll parallax. Disabled under
 * `prefers-reduced-motion` — content renders statically.
 */
export function Parallax({ children, className, distance = 24 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const y = useTransform(smooth, [0, 0.5, 1], [distance, 0, -distance]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}