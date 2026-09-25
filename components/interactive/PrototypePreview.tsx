'use client';

import React, { useMemo, useState } from 'react';
import { CheckCircle2, Maximize2, Minimize2 } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Project } from '@/types/project';
import { cn } from '@/lib/utils';
import { DemoExperience } from './DemoExperience';
import { StatusBadge } from '../StatusBadge';

interface PrototypePreviewProps {
  project: Project;
  className?: string;
}

/**
 * "EXPLORE THE BUILD" — the actual demo area (from verified `project.demo`
 * config) followed by a clearly separated BUILD INSIGHT: real registry data
 * (architecture, features, engineering, technology). Never a fake application
 * screenshot, never fabricated telemetry, and no source or download controls.
 */
export function PrototypePreview({ project, className }: PrototypePreviewProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const demoMode =
    project.demo?.mode ?? ('coming-soon' as NonNullable<Project['demo']>['mode']);

  const sections = useMemo(() => {
    const list: { key: string; label: string; content: React.ReactNode }[] = [];
    if (project.architecture) {
      list.push({
        key: 'architecture',
        label: 'Architecture',
        content: (
          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.architecture}
          </p>
        )
      });
    }
    if (project.features?.length) {
      list.push({
        key: 'features',
        label: "What's implemented",
        content: (
          <ul className="space-y-2.5">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="min-w-0">{f}</span>
              </li>
            ))}
          </ul>
        )
      });
    }
    if (project.engineeringNotes) {
      list.push({
        key: 'engineering',
        label: 'Engineering',
        content: (
          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.engineeringNotes}
          </p>
        )
      });
    }
    if (project.technology.length) {
      list.push({
        key: 'tech',
        label: 'Technology',
        content: (
          <ul className="flex flex-wrap gap-2">
            {project.technology.map((t) => (
              <li
                key={t}
                className="rounded border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        )
      });
    }
    return list;
  }, [project]);

  const activeSection = sections[Math.min(active, sections.length - 1)];
  const panelId = `preview-panel-${activeSection?.key ?? 'empty'}`;

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (sections.length === 0) return;
    let next = active;
    if (e.key === 'ArrowRight') next = (active + 1) % sections.length;
    else if (e.key === 'ArrowLeft') next = (active - 1 + sections.length) % sections.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = sections.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`preview-tab-${sections[next].key}`)?.focus();
  };

  return (
    <section
      className={cn('overflow-hidden rounded-2xl border border-line bg-surface', className)}
      aria-label="Explore the build"
    >
      {/* ============================ ACTUAL DEMO ============================ */}
      <div className="space-y-3 p-4 sm:p-5">
        <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
          <span className="inline-block h-px w-5 bg-line-strong" aria-hidden="true" />
          The demo
        </p>
        <DemoExperience project={project} />
      </div>

      {/* ============================ BUILD INSIGHT ============================ */}
      {sections.length > 0 && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface-2/60 px-5 py-3.5 sm:px-6">
            <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-ink">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Build insight
            </p>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {String(active + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                aria-expanded={expanded}
                aria-label={expanded ? 'Collapse the build insight' : 'Expand the build insight'}
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                {expanded ? (
                  <Minimize2 className="h-3.5 w-3.5" />
                ) : (
                  <Maximize2 className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Current build rail */}
            {!expanded && (
              <div className="border-t border-line p-5 sm:p-6 md:col-span-4 md:border-r md:border-t-0">
                <dl className="space-y-5">
                  <div className="space-y-2">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      Current build
                    </dt>
                    <dd>
                      <StatusBadge status={project.status} size="sm" />
                    </dd>
                    <dd className="text-[11px] leading-relaxed text-faint">
                      {project.architecture ? 'Architecture and features below are the real build.' : 'No public build to enter yet.'}
                    </dd>
                  </div>
                  <div className="space-y-2">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      Demo
                    </dt>
                    <dd className="font-mono text-xs uppercase tracking-wider text-ink">
                      {demoMode === 'coming-soon'
                        ? 'Coming soon'
                        : demoMode === 'embedded'
                          ? 'Embedded'
                          : demoMode === 'live'
                            ? 'Live'
                            : 'External'}
                    </dd>
                    <dd className="text-[11px] leading-relaxed text-faint">
                      {demoMode === 'coming-soon'
                        ? 'No demo url configured yet on this project.'
                        : 'Launch control above opens the verified public build.'}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 flex items-start gap-2 text-[11px] leading-relaxed text-faint">
                  <span
                    className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  Build insight — real project data, not a live application.
                </p>
              </div>
            )}

            {/* File index + content */}
            <div
              className={cn(
                'flex flex-col',
                expanded ? 'md:col-span-12' : 'md:col-span-8'
              )}
            >
              <div
                className="scrollbar-none flex gap-1.5 overflow-x-auto border-b border-line px-4 py-3 sm:px-5"
                role="tablist"
                aria-label="Build file sections"
                onKeyDown={onTabKeyDown}
              >
                {sections.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={s.key}
                      id={`preview-tab-${s.key}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={panelId}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActive(i)}
                      className={cn(
                        'shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wider transition-colors',
                        isActive
                          ? 'border-line-strong bg-ink font-medium text-canvas'
                          : 'border-line bg-surface-2 text-muted hover:border-line-strong hover:text-ink'
                      )}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>

              <div
                id={panelId}
                role="tabpanel"
                aria-labelledby={`preview-tab-${activeSection?.key}`}
                className="relative flex-1 overflow-hidden p-5 sm:p-6"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeSection.key}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="min-h-[7.5rem]"
                  >
                    {activeSection.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}