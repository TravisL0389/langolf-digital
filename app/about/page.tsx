import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '@/data/site';
import { Reveal } from '@/components/Reveal';
import { Magnetic } from '@/components/motion/Magnetic';
import { SectionTransition } from '@/components/motion/SectionTransition';

export const metadata: Metadata = {
  title: 'About — LANGOLF DIGITAL',
  description:
    'About Travis Langolf — a self-taught digital product builder using AI-assisted development to learn and build AI products, business systems, automation, commerce, and 3D experiments.',
  alternates: { canonical: '/about' }
};

const PRINCIPLES = [
  {
    title: 'Learn by building',
    description:
      'I taught myself by shipping real things, not by reading about them. Every project in this portfolio exists because I wanted to understand an idea by building it.'
  },
  {
    title: 'AI-assisted, human-directed',
    description:
      'AI tools have been real partners in this work — expanding what I can attempt and accelerating what I learn. But the ideas, the decisions, and the final judgment are mine. The tools are part of the method, not the identity.'
  },
  {
    title: 'Honest status reporting',
    description:
      'Every project is tagged with its true stage. A prototype is called a prototype. An experiment is called an experiment. Fabricated metrics and invented results undermine the whole point.'
  },
  {
    title: 'Build the loop, then the polish',
    description:
      'I get the core user loop working first — the thing that proves an idea can function — then engineer it properly and refine the details.'
  }
];

const STACK = [
  { group: 'Languages & runtimes', items: ['TypeScript', 'JavaScript (ESNext)', 'Node.js', 'SQL', 'HTML/CSS'] },
  { group: 'Frontend', items: ['React 19', 'Next.js (App Router)', 'Tailwind CSS', 'Framer Motion', 'Three.js / R3F'] },
  { group: 'Backend & data', items: ['Supabase', 'PostgreSQL', 'Firebase', 'Edge Functions', 'REST APIs'] },
  { group: 'AI & automation', items: ['Structured AI pipelines', 'Deterministic scoring', 'Automation graphs', 'Web hooks & workers'] },
  { group: '3D & spatial', items: ['Three.js', 'WebGL', 'WebXR / AR', 'Procedural geometry'] }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
      {/* ============================== INTRO ============================== */}
      <section className="max-w-4xl space-y-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
            About
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            I&apos;m Travis Langolf —
            <br />
            <span className="text-faint">a self-taught builder.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-3xl space-y-5 border-l-2 border-accent pl-6 sm:pl-8">
            <p className="text-lg leading-relaxed text-ink sm:text-xl">
              Independent digital product developer. I turn ideas, problems, and opportunities
              into working software — using AI-assisted development as a learning and
              implementation partner along the way.
            </p>
            <p className="text-base leading-relaxed text-muted">
              This portfolio is the record of that work. It represents a period of learning
              through building: AI products, business systems, automation platforms, commerce
              experiences, and 3D experiments. Not one of them started as a line of filler —
              each began as an itch, a question, or a problem worth taking seriously.
            </p>
            <p className="text-base leading-relaxed text-muted">
              I don&apos;t claim a resume I don&apos;t have. I don&apos;t dress prototypes up as
              production systems. What I do is keep building harder things, honestly, and let the
              work speak.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="pt-4">
            <Magnetic strength={6}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
              >
                START A PROJECT
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      {/* ============================ PRINCIPLES ============================ */}
      <section className="mt-24 border-t border-line pt-16">
        <Reveal>
          <div className="mb-12 max-w-2xl space-y-4">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
              <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
              How I work
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Principles
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={(i % 2) * 0.05} className="bg-surface">
              <div className="h-full p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================== STACK ============================== */}
      <section className="mt-24 border-t border-line pt-16">
        <Reveal>
          <div className="mb-12 max-w-2xl space-y-4">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
              <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
              Toolkit
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              What I build with
            </h2>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Tools I&apos;ve actually used across the projects in this portfolio.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {STACK.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 0.04}>
              <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <h3 className="w-56 shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-line bg-surface-2 px-3 py-1.5 font-mono text-[11px] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ CTA STRIP ============================ */}
      <section className="mt-24">
        <SectionTransition label="Build something" />
        <Reveal>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-ink">
                Let&apos;s figure it out together.
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                Have an idea worth pressure-testing? I&apos;ll give you a straight answer on
                feasibility and what it would take to build.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
            >
              CONTACT — {STUDIO_INFO.email}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}