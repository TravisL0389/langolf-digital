'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';
import type { ProjectFilter } from '@/types/project';

interface WorkFilterProps {
  categories: ProjectFilter[];
  selectedCategory: ProjectFilter;
  onSelectCategory: (category: ProjectFilter) => void;
}

export function WorkFilter({
  categories,
  selectedCategory,
  onSelectCategory
}: WorkFilterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="scrollbar-none -mx-1 flex items-center gap-1 overflow-x-auto px-1 pb-1"
      role="group"
      aria-label="Filter projects by category"
    >
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelectCategory(cat)}
            className={cn(
              'relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-mono text-[11px] tracking-wider transition-colors',
              isSelected
                ? 'text-canvas'
                : 'text-muted hover:text-ink'
            )}
          >
            {isSelected &&
              (reduceMotion ? (
                <span className="absolute inset-0 rounded-full bg-ink" />
              ) : (
                <motion.span
                  layoutId="work-filter-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              ))}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}