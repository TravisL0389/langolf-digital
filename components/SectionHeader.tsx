import React from 'react';

interface SectionHeaderProps {
  id?: string;
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  id,
  tag,
  title,
  description,
  align = 'left',
  className = ''
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={`space-y-4 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}
    >
      {tag && (
        <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-muted uppercase">
          <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
          {tag}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}