import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/site';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function HowIBuildSection() {
  return (
    <section id="how-i-build" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeader
          tag="Method"
          title="How I Build"
          description="Ideas are cheap. What matters is the discipline that turns them into working, honest software."
        />

        <div className="overflow-hidden rounded-lg border border-line">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.04}>
              <div
                className={
                  'grid grid-cols-1 gap-4 p-6 sm:grid-cols-12 sm:items-start sm:gap-8 sm:p-8 ' +
                  (i > 0 ? 'border-t border-line' : '')
                }
              >
                <div className="sm:col-span-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-faint">{step.number}</span>
                    <span className="font-mono text-sm font-semibold tracking-widest text-accent">
                      {step.phase}
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint">
          <ArrowDown className="h-4 w-4" />
          Then repeat with what you learned.
        </p>
      </div>
    </section>
  );
}