'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface AmbientCanvasProps {
  className?: string;
  /** Restrict to a non-interactive, extra-quiet mode for shared page chrome. */
  quiet?: boolean;
}

const NODES = [
  { left: '8%', top: '18%', size: 2, delay: '-2s', duration: '18s' },
  { left: '22%', top: '72%', size: 1.5, delay: '-9s', duration: '22s' },
  { left: '48%', top: '28%', size: 2, delay: '-14s', duration: '20s' },
  { left: '68%', top: '66%', size: 1.5, delay: '-5s', duration: '24s' },
  { left: '88%', top: '22%', size: 2, delay: '-11s', duration: '19s' }
];

/**
 * Lightweight ambient atmosphere. It intentionally uses CSS only so the
 * shared root layout never depends on a browser canvas or animation loop.
 */
export function AmbientCanvas({ className, quiet = false }: AmbientCanvasProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        quiet && 'ambient-quiet',
        className
      )}
    >
      <span className="ambient-orbit ambient-orbit-one" />
      {!quiet && <span className="ambient-orbit ambient-orbit-two" />}
      {NODES.map((node) => (
        <span
          key={`${node.left}-${node.top}`}
          className="ambient-node"
          style={{
            left: node.left,
            top: node.top,
            width: `${node.size}px`,
            height: `${node.size}px`,
            animationDelay: node.delay,
            animationDuration: node.duration
          }}
        />
      ))}
    </div>
  );
}
