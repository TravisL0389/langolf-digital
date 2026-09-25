'use client';

import React, { useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum translate distance in px. */
  strength?: number;
}

/**
 * Gentle magnetic pull toward the pointer for primary CTAs. Desktop hover
 * only — no effect on touch, keyboard, or under reduced motion.
 */
export function Magnetic({ children, className, strength = 8 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.PointerEvent) => {
    if (reduceMotion || e.pointerType === 'touch') return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > 140) {
      setOffset({ x: 0, y: 0 });
      return;
    }
    const pull = 1 - dist / 140;
    setOffset({ x: dx * pull * 0.2, y: dy * pull * 0.2 });
  };

  const onLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn('inline-block', className)}
      style={
        reduceMotion
          ? undefined
          : {
              transform: `translate3d(${offset.x * (strength / 8)}px, ${offset.y * (strength / 8)}px, 0)`,
              transition: offset.x === 0 && offset.y === 0 ? 'transform 0.3s ease' : 'transform 0.08s linear',
              willChange: 'transform'
            }
      }
    >
      {children}
    </div>
  );
}