import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, FlaskConical } from 'lucide-react';
import type { Project } from '@/types/project';
import { SectionHeader } from './SectionHeader';
import { StatusBadge } from './StatusBadge';
import { Reveal } from './Reveal';

interface LabSectionProps {
  projects: Project[];
}

export function LabSection({ projects }: LabSectionProps) {
  return (
    <section id="the-lab" className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            tag="Experiments in progress"
            title="The Lab"
            description="Experiments, prototypes, technical explorations, and ideas in motion. Unfinished work presented honestly — labeled by stage, never dressed up as production."
            className="mb-0"
          />
          <Link
            href="/work"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-2.5 text-xs font-mono font-medium tracking-wider text-ink transition-colors hover:border-accent md:inline-flex"
          >
            SEE ALL WORK
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => {
            const accent = project.accent ?? '#a1a1aa';
            return (
              <Reveal key={project.id} delay={(i % 4) * 0.05}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                      <FlaskConical className="h-3.5 w-3.5" />
                      Lab {String(i + 1).padStart(2, '0')}
                    </span>
                    <StatusBadge status={project.status} variant="dot" size="sm" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-muted">{project.subtitle}</p>

                  <span
                    aria-hidden="true"
                    className="mt-5 block h-px w-8 transition-all duration-300 group-hover:w-16"
                    style={{ background: accent }}
                  />

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {project.summary}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] text-ink opacity-60 transition-opacity group-hover:opacity-100">
                    READ THE STUDY
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-10 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            The Lab is honest about stage — functional prototypes, development builds, and
            experiments are never presented as finished products.
          </p>
        </Reveal>
      </div>
    </section>
  );
}