import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { FEATURED_PROJECTS, LAB_PROJECTS, PROJECTS } from '@/data/projects';
import { FeaturedProjectCard } from '@/components/FeaturedProjectCard';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { LabSection } from '@/components/LabSection';
import { HowIBuildSection } from '@/components/HowIBuildSection';
import { Reveal } from '@/components/Reveal';
import { AmbientCanvas } from '@/components/motion/AmbientCanvas';
import { Parallax } from '@/components/motion/Parallax';
import { Magnetic } from '@/components/motion/Magnetic';
import { SectionTransition } from '@/components/motion/SectionTransition';

export default function HomePage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="bg-ambient relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <AmbientCanvas className="opacity-40 dark:opacity-50" />
        <Parallax distance={18} className="pointer-events-none absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full opacity-[0.14] blur-[80px]"
            style={{ background: 'var(--accent)' }}
          />
        </Parallax>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh_-_5.5rem)] max-w-6xl flex-col justify-center px-5 sm:px-8 py-24 sm:py-32">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Independent digital product studio
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-9 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Ideas are cheap.</span>
              <span className="block text-faint">I build the thing.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:mt-9 sm:text-xl">
              I&apos;m a self-taught product builder. I turn ideas, problems, and opportunities
              into working digital products — AI systems, business software, automation,
              commerce, and 3D experiments — and I document them honestly.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-11 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center">
              <Magnetic strength={6}>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
                >
                  EXPLORE THE WORK
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic strength={6}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-7 py-3.5 text-xs font-mono font-medium tracking-wider text-ink transition-colors hover:border-accent"
                >
                  START A PROJECT
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-line pt-5 sm:mt-28 sm:flex-row sm:items-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                {PROJECTS.length} projects · every stage tagged honestly
              </p>
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Scroll
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ SELECTED WORK ============================ */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl space-y-4">
                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
                  Selected Work
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  What I&apos;ve been building
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex shrink-0 items-center gap-2 self-start font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink md:self-auto"
              >
                ALL {PROJECTS.length} PROJECTS
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 space-y-20">
            {FEATURED_PROJECTS.map((project, i) => (
              <Reveal key={project.id} delay={0.03}>
                <FeaturedProjectCard project={project} index={i} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition label="Capabilities" />

      {/* ============================= CAPABILITIES ============================= */}
      <CapabilitiesSection />

      {/* =============================== THE LAB =============================== */}
      <LabSection projects={LAB_PROJECTS} />

      <SectionTransition label="Method" />

      {/* ============================= HOW I BUILD ============================= */}
      <HowIBuildSection />

      {/* ============================== CONTACT STRIP ============================== */}
      <section className="border-t border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-line bg-surface p-8 sm:p-12 lg:flex-row lg:items-center">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Let&apos;s build something.
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  If you have a product, a problem, or just an unproven idea worth pushing on,
                  tell me about it. I&apos;ll give you an honest read on feasibility and the
                  fastest path to a working prototype.
                </p>
              </div>
              <Magnetic strength={5}>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
                >
                  START A PROJECT
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
