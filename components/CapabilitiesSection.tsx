import React from 'react';
import { CAPABILITIES } from '@/data/site';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeader
          tag="What I Build"
          title="Capabilities"
          description="A practical range of skills built through building — not claimed, demonstrated."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={(i % 3) * 0.06} className="bg-surface">
              <div className="group h-full p-6 transition-colors hover:bg-surface-2 sm:p-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-faint">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                  {cap.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}