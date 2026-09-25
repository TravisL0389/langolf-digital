import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/project';
import { cn } from '@/lib/utils';
import { StatusBadge } from '../StatusBadge';

interface DemoExperienceProps {
  project: Project;
  className?: string;
}

const DEMO_MODE_LABEL: Record<NonNullable<Project['demo']>['mode'], string> = {
  live: 'Live application',
  embedded: 'Embedded application',
  external: 'External application',
  'coming-soon': 'Demo in preparation'
};

/**
 * The ACTUAL DEMO area of EXPLORE THE BUILD. Renders only from verified
 * `project.demo` config — a real URL is required before any launch control
 * appears. Coming-soon projects get an honest "in preparation" state and are
 * never presented as a live application.
 */
export function DemoExperience({ project, className }: DemoExperienceProps) {
  const demo = project.demo ?? { mode: 'coming-soon' as const };
  const mode = demo.mode;

  if (mode === 'live' || mode === 'external') {
    const external = mode === 'external';
    const label = demo.label ?? (external ? 'OPEN PROJECT' : 'ENTER THE BUILD');
    const related = demo.related ?? [];
    return (
      <div
        className={cn('rounded-2xl border border-line bg-surface p-6 sm:p-8', className)}
        data-demo-mode={mode}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
          {DEMO_MODE_LABEL[mode]}
        </p>
        <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {demo.label
            ? demo.label.replace(/[\s→]*$/, '')
            : external
              ? 'Open the project'
              : 'Try the live build'}
        </h3>
        {demo.description && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{demo.description}</p>
        )}
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-mono font-medium uppercase tracking-wider text-canvas transition-opacity hover:opacity-85"
        >
          {label}
          {external ? (
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          )}
        </a>

        {related.length > 0 && (
          <div className="mt-6 space-y-2.5 border-t border-line pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              Related in this ecosystem
            </p>
            <ul className="space-y-2.5">
              {related.map((r) => {
                const relatedLabel = r.label ?? (external ? 'OPEN PROJECT' : 'ENTER THE BUILD');
                return (
                  <li key={r.url} className="flex flex-wrap items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink">{r.title}</p>
                      {r.description && (
                        <p className="mt-0.5 max-w-md text-[11px] leading-relaxed text-faint">
                          {r.description}
                        </p>
                      )}
                    </div>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line-strong bg-surface-2 px-4 py-2 text-[11px] font-mono font-medium uppercase tracking-wider text-ink transition-colors hover:border-accent"
                    >
                      {relatedLabel}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (mode === 'embedded') {
    return (
      <div className={cn('space-y-3', className)} data-demo-mode={mode}>
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className={cn('w-full', demo.aspectRatio ?? 'aspect-[16/9]')}>
            <iframe
              title={demo.label ?? `${project.title} — project application`}
              src={demo.url}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox={demo.sandbox ?? 'allow-scripts allow-forms allow-popups'}
              className="h-full w-full border-0"
            />
          </div>
        </div>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] leading-relaxed text-faint">
          <span>
            {demo.description ??
              'If the application blocks embedding, it still opens in a new tab.'}
          </span>
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono uppercase tracking-wider text-ink hover:opacity-70"
          >
            Open project directly
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn('rounded-2xl border border-line bg-surface p-6 sm:p-8', className)}
      data-demo-mode="coming-soon"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-line-strong bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Demo in preparation
        </span>
        <StatusBadge status={project.status} size="sm" />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        This project is being actively developed.
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        Current build: {project.status.toLowerCase()}. There isn&apos;t a public application to
        enter yet — the verified build details sit below in Build Insight.
      </p>
      {demo.description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{demo.description}</p>
      )}
    </div>
  );
}