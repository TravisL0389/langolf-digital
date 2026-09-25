import React from 'react';
import type { Metadata } from 'next';
import { Mail, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '@/data/site';
import { ContactForm } from '@/components/ContactForm';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact — LANGOLF DIGITAL',
  description:
    'Start a project with LANGOLF DIGITAL. Tell me what you are trying to build and get an honest read on feasibility and the fastest path to a working prototype.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <div className="bg-ambient mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-3xl space-y-5">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
            Let&apos;s build
            <br />
            <span className="text-faint">something.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            A product, a business system, an automation, or just an idea that deserves better than
            a sketch. Tell me what you&apos;re trying to make and I&apos;ll give you an honest
            read on how to build it.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>

        <aside className="space-y-5 lg:col-span-4">
          <Reveal delay={0.05}>
            <div className="space-y-3 rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Prefer email</p>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-center gap-2 break-all text-sm text-ink hover:opacity-70"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {STUDIO_INFO.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3 rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Source</p>
              <a
                href={STUDIO_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm text-ink hover:opacity-70"
              >
                github.com/travislangolf
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-xs leading-relaxed text-faint">
                Work in progress is public here. The portfolio and its projects are open records of
                what&apos;s actually been built.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-3 rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Note on the form</p>
              <p className="text-sm leading-relaxed text-muted">
                The form is a working prototype — submissions are validated locally but aren&apos;t
                sent to a backend yet while that integration is built. The fastest way to reach me
                today is email: <span className="text-ink">{STUDIO_INFO.email}</span>. I reply
                directly with a practical read on feasibility — not a sales pitch.
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}