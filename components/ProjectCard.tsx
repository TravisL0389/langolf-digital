import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Project } from '@/types/project';
import { ProjectVisual } from './ProjectVisual';
import { StatusBadge } from './StatusBadge';

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onSelect: () => void;
}

export function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const hasLiveBuild = Boolean(project.demo?.url);
  const reduceMotion = useReducedMotion();

  const arrow = (
    <Link
      href={href}
      aria-label={`View ${project.title} project`}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
      className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:border-accent hover:text-accent focus-visible:border-accent"
    >
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  );

  return (
    <article className="group relative h-full min-w-0">
      <button
        type="button"
        aria-pressed={isSelected}
        aria-label={`Select ${project.title} project`}
        onClick={onSelect}
        className={`flex h-full min-w-0 w-full flex-col overflow-hidden rounded-2xl border bg-surface text-left transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_48px_-32px_rgba(0,0,0,0.4)] ${
          isSelected ? 'border-accent ring-1 ring-accent/30' : 'border-line'
        }`}
      >
        <div className="p-2.5 pb-0">
          <ProjectVisual
            project={project}
            className="transition-transform duration-500 will-change-transform group-hover:-translate-y-1 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
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

          <h2 className="mt-3.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {project.title}
          </h2>
          <p className="mt-1 break-words font-mono text-[11px] leading-relaxed text-muted">{project.subtitle}</p>

          <p className="mt-3.5 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-5 flex items-center justify-between border-t border-line pt-4 pr-12">
            <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink">
              Case study
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isSelected && (
          reduceMotion ? (
            <span className="pointer-events-auto absolute bottom-5 right-5 z-10">{arrow}</span>
          ) : (
            <motion.span
              initial={{ opacity: 0, x: -4, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -4, scale: 0.96 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="pointer-events-auto absolute bottom-5 right-5 z-10"
            >
              {arrow}
            </motion.span>
          )
        )}
      </AnimatePresence>
    </article>
  );
}
