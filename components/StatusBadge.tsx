import React from 'react';
import { cn } from '@/lib/utils';
import type { ProjectStatus } from '@/types/project';

interface StatusBadgeProps {
  status: ProjectStatus;
  size?: 'sm' | 'md' | 'lg';
  /** Boxed badge (default) vs. a restrained dot + label used as card metadata. */
  variant?: 'badge' | 'dot';
}

const STATUS_COLOR: Record<ProjectStatus, string> = {
  PRODUCTION: 'text-emerald-700 dark:text-emerald-300',
  'FUNCTIONAL PROTOTYPE': 'text-sky-700 dark:text-sky-300',
  'IN DEVELOPMENT': 'text-amber-700 dark:text-amber-300',
  EXPERIMENTAL: 'text-violet-700 dark:text-violet-300',
  CONCEPT: 'text-muted'
};

const BADGE_CLASS: Record<ProjectStatus, string> = {
  PRODUCTION: 'border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  'FUNCTIONAL PROTOTYPE': 'border-sky-600/40 bg-sky-500/10 text-sky-700 dark:text-sky-300',
  'IN DEVELOPMENT': 'border-amber-600/40 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  EXPERIMENTAL: 'border-violet-600/40 bg-violet-500/10 text-violet-700 dark:text-violet-300',
  CONCEPT: 'border-line-strong bg-surface-2 text-muted'
};

const SIZE_CLASSES: Record<NonNullable<StatusBadgeProps['size']>, string> = {
  sm: 'text-[10px] px-2 py-0.5',
  md: 'text-[11px] px-2.5 py-1',
  lg: 'text-xs px-3 py-1'
};

const DOT_SIZE: Record<NonNullable<StatusBadgeProps['size']>, string> = {
  sm: 'text-[10px]',
  md: 'text-[11px]',
  lg: 'text-xs'
};

export function StatusBadge({
  status,
  size = 'sm',
  variant = 'badge'
}: StatusBadgeProps) {
  const label = status
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  if (variant === 'dot') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 font-mono uppercase tracking-wider whitespace-nowrap',
          DOT_SIZE[size],
          STATUS_COLOR[status]
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-mono font-medium uppercase tracking-wider whitespace-nowrap',
        BADGE_CLASS[status],
        SIZE_CLASSES[size]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
      {label}
    </span>
  );
}