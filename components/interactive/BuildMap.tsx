'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Project } from '@/types/project';
import { cn } from '@/lib/utils';

interface BuildMapProps {
  projects: Project[];
}

/**
 * "The Ecosystem" — an interactive map of the actual project registry.
 * Real projects only, grouped by their primary category. Selecting a node
 * reveals that project's real data in a live region. No invented entries,
 * no telemetry — just the honest shape of the portfolio.
 */
export function BuildMap({ projects }: BuildMapProps) {
  const reduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const groups = useMemo(() => {
    const map = new Map<string, Project[]>();
    for (const p of projects) {
      const list = map.get(p.category) ?? [];
      list.push(p);
      map.set(p.category, list);
    }
    return Array.from(map.entries());
  }, [projects]);

  const selected = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? null,
    [projects, selectedId]
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="border-b border-line px-6 py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          The ecosystem — real projects, mapped as built
        </p>
      </div>

      <div className="relative px-4 py-6 sm:px-6">
        {/* Hub connector rail */}
        <div
          aria-hidden="true"
          className="absolute left-[7.75rem] top-0 bottom-0 hidden w-px bg-line md:block"
        />

        {/* Hub */}
        <div className="relative z-10 mb-6 ml-0 md:ml-[5.5rem]">
          <div className="inline-flex items-center gap-2.5 rounded-lg border border-line-strong bg-surface-2 px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-ink">
              LANGOLF DIGITAL
            </span>
          </div>
        </div>

        <div className="space-y-0">
          {groups.map(([category, categoryProjects]) => (
            <BuildMapBranch
              key={category}
              category={category}
              projects={categoryProjects}
              selectedId={selectedId}
              onSelect={setSelectedId}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Detail panel */}
        <div aria-live="polite" className="mt-6 min-h-[7rem]">
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <motion.div
                key={selected.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 rounded-xl border border-line bg-surface-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {selected.category}
                    </p>
                    <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden="true" />
                    <span className="font-mono text-[11px] text-faint">{selected.year}</span>
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-ink">
                    {selected.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 max-w-xl text-sm leading-relaxed text-muted">
                    {selected.summary}
                  </p>
                </div>
                <Link
                  href={`/work/${selected.slug}`}
                  className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-line-strong bg-surface px-4 py-2 text-xs font-mono font-medium tracking-wider text-ink transition-colors hover:border-accent sm:self-auto"
                >
                  EXPLORE PROJECT
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ) : (
              <p className="flex items-center gap-2 rounded-xl border border-dashed border-line px-5 py-4 text-sm text-faint">
                Select a project to see where it sits in the build.
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

interface BranchProps {
  category: string;
  projects: Project[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  reduceMotion: boolean | null;
}

function BuildMapBranch({
  category,
  projects,
  selectedId,
  onSelect,
  reduceMotion
}: BranchProps) {
  return (
    <div className="relative py-2 md:grid md:grid-cols-12 md:items-start md:gap-4">
      {/* Category node */}
      <div className="relative z-10 flex items-center gap-2.5 md:col-span-2 md:justify-end md:pr-0">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {category}
        </span>
        <span className="font-mono text-[10px] text-faint">({projects.length})</span>
      </div>

      {/* Connector + projects */}
      <div className="ml-[0.65rem] border-l border-line pl-4 md:col-span-10 md:ml-0 md:border-l-0 md:pl-0">
        <motion.ul
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => {
            const isSelected = p.id === selectedId;
            return (
              <motion.li
                key={p.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-32px' }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelect(p.id)}
                  className={cn(
                    'group flex w-full items-center justify-between gap-3 rounded-lg border px-3.5 py-2.5 text-left transition-colors',
                    isSelected
                      ? 'border-accent bg-accent-soft'
                      : 'border-line bg-surface hover:border-line-strong'
                  )}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-ink">
                      {p.title}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-[10px] uppercase tracking-wider text-faint">
                      {p.status}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={cn(
                      'h-3.5 w-3.5 shrink-0 transition-transform',
                      isSelected
                        ? 'text-accent'
                        : 'text-faint opacity-0 group-hover:opacity-100'
                    )}
                  />
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}