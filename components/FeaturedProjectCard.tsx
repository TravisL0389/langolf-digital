import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/project';
import { cn } from '@/lib/utils';
import { ProjectVisual } from './ProjectVisual';
import { StatusBadge } from './StatusBadge';

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
  className?: string;
  /** Eager-load the cover image (only for genuinely above-the-fold usage). */
  priority?: boolean;
}

export function FeaturedProjectCard({ project, index, className, priority = false }: FeaturedProjectCardProps) {
  const flip = index % 2 === 1;
  const href = `/work/${project.slug}`;
  const accent = project.accent ?? '#a1a1aa';
  const hasLiveBuild = Boolean(project.demo?.url);

  return (
    <article
      className={cn(
        'group grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-14',
        className
      )}
    >
      {/* Editorial cover */}
      <div className={cn('min-w-0 lg:col-span-7', flip && 'lg:order-2')}>
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
          <ProjectVisual
            project={project}
            priority={priority}
            className="transition-all duration-500 will-change-transform group-hover:-translate-y-1.5 group-hover:scale-[1.015]"
          />
        </Link>
        <p className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
          <span>
            {String(index + 1).padStart(2, '0')} / Selected work
          </span>
          <span className="inline-block h-px w-10 bg-line-strong" aria-hidden="true" />
        </p>
      </div>

      {/* Narrative column */}
      <div className={cn('min-w-0 lg:col-span-5', flip && 'lg:order-1')}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {project.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden="true" />
          <StatusBadge status={project.status} variant="dot" size="sm" />
          {hasLiveBuild && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Live build
            </span>
          )}
        </div>

        <h2 className="mt-5 break-words text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
          <Link
            href={href}
            className="transition-opacity duration-300 hover:opacity-75 focus-visible:opacity-75"
          >
            {project.title}
          </Link>
        </h2>
        <p className="mt-2 break-words font-mono text-xs leading-relaxed text-muted">{project.subtitle}</p>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {project.summary}
        </p>

        {project.capabilities && project.capabilities.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
            {project.capabilities.slice(0, 4).map((cap) => (
              <li key={cap} className="flex items-center gap-2 text-xs text-muted">
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                {cap}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href={href}
            className="group/cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-mono font-medium uppercase tracking-wider text-ink"
          >
            <span className="border-b border-transparent pb-0.5 transition-colors group-hover/cta:border-accent">
              Read the case study
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
          </Link>
          {project.demo?.url && (
            <a
              href={project.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-ink"
            >
              {project.demo.label ?? (project.demo.mode === 'external' ? 'Open project' : 'Demo')}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-faint transition-colors hover:text-ink"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}