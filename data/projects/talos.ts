import type { Project } from '@/types/project';

export const talos: Project = {
  id: 'talos',
  slug: 'talos',
  title: 'TALOS',
  subtitle: 'A concept and hub for Langolf Enterprises',
  category: 'BUSINESS',
  categories: ['BUSINESS', 'CONSUMER'],
  status: 'EXPERIMENTAL',
  year: '2026',
  featured: false,
  summary:
    'TALOS — Langolf Enterprises Hub is a concept-stage build focused on enterprise integration: a central hub experience for connecting services and experiences into one surface. It is presented as a concept at experimental stage, not a completed production platform.',
  problem:
    'Enterprise audiences interact with many separate tools and experiences. A unifying hub concept asks how those experiences could meet in one coherent surface.',
  concept:
    'A hub experience that surfaces and connects enterprise services and tools into a single entry point — presented as an explorable concept rather than a finished product.',
  approach:
    'Built as a standalone, deployable prototype. The hub relationship is kept as an open concept: it demonstrates an integrated-entry experience and leaves the production service layer undeclared.',
  solution:
    'A public, concept-stage build deployed on Vercel, explorable as a hub experience. It is explicitly experimental and is not presented as a completed production platform.',
  capabilities: ['Enterprise hub', 'Integration concepts', 'Service presentation', 'Web experience', 'Next.js'],
  features: [
    'A public, deployed hub experience',
    'Integration-oriented concept surface',
    'Presented at experimental stage, not as production'
  ],
  technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  architecture:
    'A concept-surface web app. Service integrations are represented at the experience level; no production service layers are asserted.',
  engineeringNotes:
    'TALOS is kept honest about its stage: experimental concept, not completed production. Hub and integration details remain conceptual rather than claim-laden.',
  challenges: [
    'Keeping a hub concept meaningful before its service integrations are real'
  ],
  learnings: [
    'A concept deserves a surface to be explored, and a stage label that tells the truth'
  ],
  nextSteps: [
    'Define which real services or experiences the hub should connect',
    'Progress integration concepts toward working connections'
  ],
  verification: ['Public concept build available at the configured demo URL'],
  heroImage: '/projects/talos.webp',
  heroImageAlt: 'TALOS Langolf Enterprises concept hub visualization',
accent: '#e6c983',
  demo: {
    mode: 'external',
    url: 'https://langolfent.vercel.app',
    label: 'EXPLORE THE CONCEPT',
    description:
      'The public TALOS concept build on Vercel — the Langolf Enterprises Hub experience at experimental stage.'
  },
  visual: 'enterprise-hub'
};