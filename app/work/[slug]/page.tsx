import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCode2,
  Lightbulb,
  ListChecks
} from 'lucide-react';
import { PROJECTS, getProjectBySlug } from '@/data/projects';
import type { ProjectStatus } from '@/types/project';
import { cn } from '@/lib/utils';
import { ProjectVisual } from '@/components/ProjectVisual';
import { StatusBadge } from '@/components/StatusBadge';
import { Reveal } from '@/components/Reveal';
import { PrototypePreview } from '@/components/interactive/PrototypePreview';

const SITE_URL = 'https://langolfdigital.com';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — LANGOLF DIGITAL`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — LANGOLF DIGITAL`,
      description: project.summary,
      url: `${SITE_URL}/work/${project.slug}`,
      type: 'article'
    },
    twitter: {
      title: `${project.title} — LANGOLF DIGITAL`,
      description: project.summary
    }
  };
}

const STATUS_NOTES: Record<ProjectStatus, string> = {
  PRODUCTION: 'Running in production with documented use.',
  'FUNCTIONAL PROTOTYPE':
    'Core features are engineered and demonstrable. Not yet production-hardened or deployed to real users.',
  'IN DEVELOPMENT':
    'Architecture is established and modules are actively being built. Parts exist; the whole is not finished.',
  EXPERIMENTAL:
    'A technical exploration. It proves an approach can work — it is not a finished product.',
  CONCEPT: 'Designed and specified. Intended but not yet implemented.'
};

/** Section rail for the "In this study" table of contents. */
function buildToc(project: {
  problem?: string;
  concept?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  engineeringNotes?: string;
  technology: string[];
  challenges?: string[];
  learnings?: string[];
  nextSteps?: string[];
}) {
  const items: { key: string; index: string; label: string; title: string }[] = [];
  let n = 0;
  const push = (key: string, title: string) => {
    n += 1;
    items.push({ key, index: String(n).padStart(2, '0'), label: title, title });
  };

  push('overview', 'Overview');
  push('explore', 'Explore the build');
  if (project.problem) push('problem', 'Problem · opportunity');
  if (project.concept) push('concept', 'Concept');
  if (project.solution) push('built', 'What I built');
  if (project.features?.length) push('features', 'Key features');
  if (project.architecture || project.engineeringNotes)
    push('architecture', 'Architecture');
  if (project.technology.length) push('technology', 'Technology');
  if (project.challenges?.length || project.learnings?.length)
    push('challenges', 'Challenges · lessons');
  push('status', 'Current status');
  if (project.nextSteps?.length) push('next', 'What comes next');
  return items;
}

function SectionHeading({
  index,
  label,
  title,
  tone = 'default'
}: {
  index: string;
  label: string;
  title: string;
  tone?: 'default' | 'lead' | 'panel' | 'track';
}) {
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        <span className="text-faint">{index}</span>
        <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
        {label}
      </p>
      <h2
        className={cn(
          'tracking-tight text-ink',
          tone === 'lead' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
          'font-semibold'
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const capabilities = project.capabilities ?? [];
  const toc = buildToc(project);
  const tocIndex = (key: string) => toc.find((t) => t.key === key)?.index ?? '';
  const accent = project.accent ?? '#a1a1aa';
  const tech = project.technology ?? [];

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      {/* ============================== TOP RAIL ============================== */}
      <div className="flex items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 -mx-3 text-xs font-mono uppercase tracking-wider text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All work
        </Link>
        <span className="font-mono text-[11px] tracking-widest text-faint">
          {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
        </span>
      </div>

      {/* ================================ HERO ================================ */}
      <header className="mt-14 max-w-4xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden="true" />
            <span className="font-mono text-[11px] text-faint">{project.year}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl break-words text-4xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-7xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {project.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.summary}
          </p>
        </Reveal>
      </header>

      {/* ============================== METADATA ============================== */}
      <Reveal delay={0.15}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 space-y-2 bg-surface px-5 py-4 sm:col-span-1">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Status
            </dt>
            <dd>
              <StatusBadge status={project.status} size="sm" />
            </dd>
          </div>
          <div className="space-y-2 bg-surface px-5 py-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Category
            </dt>
            <dd className="font-mono text-xs uppercase tracking-wider text-ink">
              {project.category}
            </dd>
          </div>
          <div className="space-y-2 bg-surface px-5 py-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Year</dt>
            <dd className="font-mono text-xs tracking-wider text-ink">{project.year}</dd>
          </div>
          <div className="col-span-2 space-y-2 bg-surface px-5 py-4 sm:col-span-2 lg:col-span-2">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Primary stack
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
          {project.demo && (
            <div className="space-y-2 bg-surface px-5 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Demo
              </dt>
              <dd className="space-y-1">
                {project.demo.url ? (
                  <a
                    href={project.demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-ink hover:opacity-70"
                  >
                    {project.demo.label ?? (project.demo.mode === 'external' ? 'Open project' : 'Demo')}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-faint">In preparation</span>
                )}
              </dd>
            </div>
          )}
          {project.github && (
            <div className="space-y-2 bg-surface px-5 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Source
              </dt>
              <dd>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-ink transition-opacity hover:opacity-70"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </dd>
            </div>
          )}
        </dl>
      </Reveal>

      {/* ============================ HERO MEDIA ============================ */}
      <div className="mt-14 min-w-0">
        <ProjectVisual project={project} variant="featured" />
        <p className="mt-3 flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
            aria-hidden="true"
          />
          {project.heroImage
            ? 'Project visualization — a designed representation, not a literal screenshot'
            : 'Editorial cover — real project imagery replaces this when available'}
        </p>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <Reveal delay={0.05}>
          <section className="mt-16 space-y-6" aria-label="Additional project visuals">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Additional view
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Inside the build
                </h2>
              </div>
              <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-faint sm:block">
                {String(project.gallery.length).padStart(2, '0')} visual{project.gallery.length === 1 ? '' : 's'}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {project.gallery.map((item) => (
                <figure key={item.title} className="min-w-0 overflow-hidden rounded-2xl border border-line bg-surface">
                  {item.image ? (
                    <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        quality={88}
                        className="object-cover object-center"
                        draggable={false}
                      />
                    </div>
                  ) : null}
                  <figcaption className="space-y-1.5 p-4 sm:p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        {/* ========================== CONTENTS RAIL ========================== */}
        <aside className="lg:col-span-3" aria-label="In this study">
          <div className="lg:sticky lg:top-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              In this study
            </p>
            <ol className="mt-3 space-y-0.5 border-l border-line">
              {toc.map((item) => (
                <li key={item.key}>
                  <a
                    href={`#sec-${item.key}`}
                    className="-ml-px flex items-baseline gap-3 border-l border-transparent py-1.5 pl-4 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-ink"
                  >
                    <span className="text-faint">{item.index}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* ============================ CONTENT ============================ */}
        <div className="space-y-20 lg:col-span-9">
          {/* 01 OVERVIEW */}
          <Reveal>
            <section id="sec-overview" className="scroll-mt-28 space-y-6">
              <SectionHeading index={tocIndex('overview')} label="Overview" title="What this is" tone="lead" />
              <p className="max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
                {project.summary}
              </p>
              {capabilities.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    Explores
                  </h3>
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-sm text-muted">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                          style={{ background: accent }}
                          aria-hidden="true"
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </Reveal>

          {/* 02 EXPLORE THE BUILD */}
          <Reveal>
            <section id="sec-explore" className="scroll-mt-28 space-y-6">
              <SectionHeading
                index={tocIndex('explore')}
                label="Explore the build"
                title="The demo and the build insight"
              />
              <PrototypePreview project={project} />
            </section>
          </Reveal>

          {/* 03 PROBLEM / OPPORTUNITY */}
          {project.problem && (
            <Reveal>
              <section id="sec-problem" className="scroll-mt-28">
                <SectionHeading
                  index={tocIndex('problem')}
                  label="Problem · opportunity"
                  title="What it sets out to solve"
                />
                <blockquote className="relative mt-7 max-w-2xl rounded-r-xl border-l-2 border-line-strong bg-surface px-6 py-5 text-base leading-relaxed text-muted sm:text-lg">
                  <span
                    className="absolute -left-0.5 top-0 h-full w-0.5"
                    style={{ background: accent }}
                    aria-hidden="true"
                  />
                  {project.problem}
                </blockquote>
              </section>
            </Reveal>
          )}

          {/* 04 CONCEPT */}
          {project.concept && (
            <Reveal>
              <section id="sec-concept" className="scroll-mt-28">
                <SectionHeading index={tocIndex('concept')} label="Concept" title="The core idea" />
                <div
                  className="mt-7 flex gap-4 rounded-2xl border border-line bg-surface p-6 sm:p-8"
                  style={{ background: `color-mix(in srgb, ${accent} 6%, var(--surface))` }}
                >
                  {/* decorative lightbulb */}
                  <span
                    className="mt-0.5 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-surface sm:inline-flex"
                    aria-hidden="true"
                  >
                    <Lightbulb className="h-4.5 w-4.5" style={{ color: accent }} />
                  </span>
                  <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                    {project.concept}
                  </p>
                </div>
              </section>
            </Reveal>
          )}

          {/* 05 WHAT I BUILT */}
          {project.solution && (
            <Reveal>
              <section id="sec-built" className="scroll-mt-28 space-y-6">
                <SectionHeading index={tocIndex('built')} label="What I built" title="What&apos;s actually in the code" />
                <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {project.solution}
                </p>
                {project.approach && (
                  <div className="max-w-2xl rounded-2xl border border-line bg-surface-2 p-6 sm:p-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                      Approach
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {project.approach}
                    </p>
                  </div>
                )}
              </section>
            </Reveal>
          )}

          {/* 06 KEY FEATURES */}
          {project.features && project.features.length > 0 && (
            <Reveal>
              <section id="sec-features" className="scroll-mt-28">
                <SectionHeading
                  index={tocIndex('features')}
                  label="Key features"
                  title="What&apos;s implemented today"
                />
                <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-muted transition-colors hover:border-line-strong sm:p-5 sm:text-[15px]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: accent }}
                      />
                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* 07 ARCHITECTURE */}
          {(project.architecture || project.engineeringNotes) && (
            <Reveal>
              <section id="sec-architecture" className="scroll-mt-28 space-y-6">
                <SectionHeading
                  index={tocIndex('architecture')}
                  label="Architecture"
                  title="How it&apos;s structured"
                />
                <div className="max-w-2xl overflow-hidden rounded-2xl border border-line bg-surface">
                  <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-5 py-3">
                    <FileCode2 className="h-3.5 w-3.5 text-faint" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                      architecture.md
                    </span>
                  </div>
                  <div className="px-5 py-5 sm:px-6">
                    {project.architecture && (
                      <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                        {project.architecture}
                      </p>
                    )}
                    {project.engineeringNotes && (
                      <>
                        <span aria-hidden="true" className="my-5 block h-px w-full bg-line" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                          Design notes
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                          {project.engineeringNotes}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </section>
            </Reveal>
          )}

          {/* 08 TECHNOLOGY */}
          {tech.length > 0 && (
            <Reveal>
              <section id="sec-technology" className="scroll-mt-28 space-y-6">
                <SectionHeading index={tocIndex('technology')} label="Technology" title="The stack" />
                <ul className="flex max-w-2xl flex-wrap gap-2">
                  {tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* 09 CHALLENGES / LESSONS */}
          {(project.challenges?.length || project.learnings?.length) && (
            <Reveal>
              <section id="sec-challenges" className="scroll-mt-28">
                <SectionHeading
                  index={tocIndex('challenges')}
                  label="Challenges · lessons"
                  title="Where it got hard, and what it taught me"
                />
                <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {project.challenges?.length ? (
                    <div className="space-y-3">
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                        Challenges
                      </h3>
                      <ul className="space-y-2.5">
                        {project.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="rounded-r-md border-l-2 border-line-strong bg-surface px-4 py-3.5 text-sm leading-relaxed text-muted sm:text-[15px]"
                          >
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {project.learnings?.length ? (
                    <div className="space-y-3">
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                        Learnings
                      </h3>
                      <ul className="space-y-2.5">
                        {project.learnings.map((learning) => (
                          <li key={learning} className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                            <span className="mt-1 text-base leading-none" style={{ color: accent }} aria-hidden="true">
                              —
                            </span>
                            <span className="min-w-0">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </section>
            </Reveal>
          )}

          {/* 10 CURRENT STATUS */}
          <Reveal>
            <section id="sec-status" className="scroll-mt-28 space-y-6">
              <SectionHeading
                index={tocIndex('status')}
                label="Current status"
                title="Where this project sits today"
              />
              <div className="max-w-2xl space-y-4 rounded-2xl border border-line bg-surface p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} size="md" />
                  <span style={{ color: 'var(--faint)' }} className="text-xs font-mono">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                  {STATUS_NOTES[project.status]}
                </p>
                {project.verification && project.verification.length > 0 && (
                  <>
                    <span aria-hidden="true" className="block h-px w-full bg-line" />
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                        Demonstrated
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {project.verification.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-[15px]"
                          >
                            <ListChecks className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                            <span className="min-w-0">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </section>
          </Reveal>

          {/* 11 WHAT COMES NEXT */}
          {project.nextSteps && project.nextSteps.length > 0 && (
            <Reveal>
              <section id="sec-next" className="scroll-mt-28 space-y-6">
                <SectionHeading
                  index={tocIndex('next')}
                  label="What comes next"
                  title="Where this goes from here"
                />
                <ol className="space-y-3">
                  {project.nextSteps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 rounded-r-md border-l-2 px-4 py-3.5 text-sm leading-relaxed text-muted sm:text-[15px]"
                      style={{ borderColor: accent, backgroundColor: 'var(--surface)' }}
                    >
                      <span className="font-mono text-xs" style={{ color: accent }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>
          )}
        </div>
      </div>

      {/* ============================== BOTTOM NAV ============================== */}
      <nav
        aria-label="Project navigation"
        className="mt-24 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row"
      >
        <Link
          href={`/work/${prev.slug}`}
          className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong sm:flex-1"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 text-faint transition-colors group-hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Previous
            </span>
            <span className="mt-1 block truncate text-sm font-medium text-ink">
              {prev.title}
            </span>
          </span>
        </Link>
        <Link
          href="/work"
          className="flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-6 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-line-strong hover:text-ink"
        >
          All work
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-end gap-4 rounded-2xl border border-line bg-surface p-5 text-right transition-colors hover:border-line-strong sm:flex-1"
        >
          <span className="min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Up next
            </span>
            <span className="mt-1 block truncate text-sm font-medium text-ink">
              {next.title}
            </span>
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 text-faint transition-colors group-hover:text-ink">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </nav>
    </div>
  );
}
