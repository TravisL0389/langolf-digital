import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/project';
import { ProjectVisual } from './ProjectVisual';
import { StatusBadge } from './StatusBadge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const hasLiveBuild = Boolean(project.demo?.url);

  return (
    <article className="group h-full min-w-0">
      <Link
        href={href}
        className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_48px_-32px_rgba(0,0,0,0.4)]"
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

          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink">
              Case study
              <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}