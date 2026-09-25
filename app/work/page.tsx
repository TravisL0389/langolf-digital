'use client';

import React, { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PROJECTS } from '@/data/projects';
import { PROJECT_CATEGORIES, type ProjectFilter } from '@/types/project';
import { WorkFilter } from '@/components/WorkFilter';
import { ProjectCard } from '@/components/ProjectCard';
import { BuildMap } from '@/components/interactive/BuildMap';

const FILTERS: ProjectFilter[] = ['ALL', ...PROJECT_CATEGORIES];

export default function WorkPage() {
  const [filter, setFilter] = useState<ProjectFilter>('ALL');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      filter === 'ALL'
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-3xl space-y-5">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
          Portfolio
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          The work<span className="text-faint">, tagged honestly.</span>
        </h1>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Products, systems, experiments, and digital experiences I&apos;ve built. Every project
          is tagged with its true stage — no demo dressed up as production.
        </p>
      </div>

      <div className="mt-12">
        <BuildMap projects={PROJECTS} />
      </div>

      <div className="mt-14 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center justify-between gap-4 sm:justify-start">
          <WorkFilter categories={FILTERS} selectedCategory={filter} onSelectCategory={setFilter} />
        </div>
        <span
          aria-live="polite"
          className="shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-faint"
        >
          {filtered.length} of {PROJECTS.length} projects
        </span>
      </div>

      <div className="mt-10 grid min-w-0 grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, i) => {
            const card = (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProjectSlug === project.slug}
                onSelect={() => setSelectedProjectSlug(project.slug)}
              />
            );
            if (reduceMotion) return card;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.28, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                {card}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface/50 px-6 py-20 text-center">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-faint"
            aria-hidden="true"
          >
            <span className="font-mono text-lg">{filter[0]}</span>
          </span>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-faint">
            Nothing in this category yet.
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            Everything in the registry is real — this filter just hasn&apos;t collected a
            project yet.
          </p>
          <button
            type="button"
            onClick={() => setFilter('ALL')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
          >
            RESET TO ALL
          </button>
        </div>
      )}

      <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Have something in mind?
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            From a rough idea to a working product — let&apos;s evaluate the build.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
        >
          START A PROJECT
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
