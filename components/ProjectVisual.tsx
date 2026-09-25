import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';

interface ProjectVisualProps {
  project: Project;
  className?: string;
  /** Card-scale default vs. a larger editorial/hero treatment. */
  variant?: 'card' | 'featured';
  /** Explicit remote/public image path, e.g. a gallery item. */
  image?: string;
  /** Accessible name for real imagery. Defaults to the project title. */
  alt?: string;
  /** Optional project icon rendered as the hero identity mark. */
  icon?: React.ReactNode;
  /** Force a light/dark placeholder treatment independent of the site theme. */
  theme?: 'auto' | 'light' | 'dark';
  /**
   * Eager-load + high priority. Defaults to `variant === 'featured'`.
   * Only set for true above-the-fold imagery (e.g. a case-study hero).
   */
  priority?: boolean;
}

const THEME_VARS: Record<'light' | 'dark', React.CSSProperties> = {
  light: {
    '--surface': '#ffffff',
    '--surface-2': '#f4f4f5',
    '--ink': '#18181b',
    '--muted': '#52525b',
    '--faint': '#6e6e76',
    '--line': '#e6e6e9',
    '--line-strong': '#d4d4d8'
  } as React.CSSProperties,
  dark: {
    '--surface': '#111114',
    '--surface-2': '#18181c',
    '--ink': '#fafafa',
    '--muted': '#a1a1aa',
    '--faint': '#8b8b95',
    '--line': '#24242a',
    '--line-strong': '#3f3f46'
  } as React.CSSProperties
};

/**
 * LANGOLF DIGITAL project media system.
 *
 * Renders real imagery (screenshots, uploads, future app shots) when an
 * asset exists, and otherwise falls back to an intentional editorial cover
 * generated from the project's verified registry data. The cover never fakes
 * a screenshot — it presents the project's identity the way a book cover
 * does, and swapping in real imagery later is a one-line change (`heroImage`).
 */
export function ProjectVisual({
  project,
  className,
  variant = 'card',
  image,
  alt,
  icon,
  theme = 'auto',
  priority
}: ProjectVisualProps) {
  const imageSrc = image ?? project.heroImage;
  const accent = project.accent ?? '#a1a1aa';
  const hasAspect = className?.includes('aspect-');
  const defaultAspect = !hasAspect && 'aspect-[16/9]';
  const autoStyle = theme === 'auto' ? undefined : THEME_VARS[theme];

  // ------------------------------- REAL IMAGERY -------------------------------
  if (imageSrc) {
    return (
      <figure
        className={cn(
          'relative isolate min-w-0 overflow-hidden rounded-xl border border-line bg-surface',
          defaultAspect,
          className
        )}
      >
        <Image
          src={imageSrc}
          alt={alt ?? project.heroImageAlt ?? `${project.title} — visual imagery`}
          fill
          priority={priority ?? variant === 'featured'}
          sizes={
            variant === 'featured'
              ? '(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 60vw'
              : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          }
          className="object-cover object-center transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.02]"
          quality={88}
          draggable={false}
        />
      </figure>
    );
  }

  // ------------------------------- EDITORIAL COVER -------------------------------
  const initial = (project.title ?? 'P').trim().charAt(0).toUpperCase();

  return (
    <figure
      style={autoStyle}
      aria-hidden="true"
      className={cn(
        'relative isolate min-w-0 overflow-hidden rounded-xl border border-line bg-surface',
        defaultAspect,
        className
      )}
    >
      {/* Layered atmosphere — accent wash, dotted grid, soft glow. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, color-mix(in srgb, ${accent} 22%, transparent) 0%, transparent 46%)`
        }}
      />
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-14 -top-14 h-52 w-52 rounded-full sm:h-64 sm:w-64"
        style={{ background: accent, opacity: 0.15, filter: 'blur(64px)' }}
      />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
        {/* Top rail */}
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {project.category}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
            {project.year}
          </span>
        </div>

        {/* Identity mark */}
        <div className="my-6">
          {icon ? (
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-line-strong bg-surface/70 backdrop-blur-sm sm:h-20 sm:w-20">
              {icon}
            </div>
          ) : (
            <div className="flex items-baseline gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'font-semibold leading-none tracking-tight text-ink',
                  variant === 'featured' ? 'text-[5.5rem] sm:text-[7rem]' : 'text-6xl sm:text-7xl'
                )}
              >
                {initial}
              </span>
              <span
                aria-hidden="true"
                className="h-7 w-1 rounded-full sm:h-9"
                style={{ background: accent }}
              />
            </div>
          )}
          {variant === 'featured' && (
            <p className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              {project.title}
            </p>
          )}
        </div>

        {/* Bottom rail */}
        <div>
          <span aria-hidden="true" className="block h-px w-full bg-line" />
          <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {project.status}
            </span>
            <div className="flex flex-wrap justify-end gap-1.5">
              {project.technology.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-surface/70 px-2 py-0.5 font-mono text-[10px] text-faint"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
