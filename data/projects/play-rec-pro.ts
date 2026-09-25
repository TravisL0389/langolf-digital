import type { Project } from '@/types/project';

export const playRecPro: Project = {
  id: 'play-rec-pro',
  slug: 'play-rec-pro',
  title: 'PlayRec Pro',
  subtitle: 'Creative audio workflows — recording, mixing, mastering, podcasting, and more',
  category: 'CREATIVE',
  categories: ['CREATIVE', 'CONSUMER'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2026',
  featured: false,
  summary:
    'A public build focused on creative audio workflows — recording, mixing, mastering, podcasting, and AI-assisted music concepts. The project is described from the build itself; it claims no user counts, revenue, or production metrics.',
  problem:
    'Audio workflows span recording, mixing, mastering, and podcasting, often spread across separate tools with little connective tissue. A single surface could keep a creative session coherent.',
  concept:
    'A web experience built around creative audio workflows, bringing recording, mixing, mastering, and podcasting concepts together — with AI music ideas scoped conservatively.',
  approach:
    'Built as a standalone, deployable web application. The build demonstrates the creative-audio surface; any AI music capability is described without production claims.',
  solution:
    'A public web build deployed on Vercel, presenting creative audio workflows as an explorable experience.',
  capabilities: ['Audio workflows', 'Creative tools', 'Web experience', 'Content presentation', 'Next.js'],
  features: [
    'A public, deployed creative-audio build',
    'Recording, mixing, mastering, and podcasting surface',
    'AI music concepts described conservatively, without metrics'
  ],
  technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  architecture:
    'A focused web experience for audio workflows, deployed as a single site.',
  engineeringNotes:
    'PlayRec Pro is described from the build itself. No user counts, revenue, or production metrics are claimed, and AI music capability is not overstated.',
  challenges: [
    'Representing a rich audio domain as a believable web experience'
  ],
  learnings: [
    'Audio workflows are deeper than a single screen — restraint is what keeps the surface coherent'
  ],
  nextSteps: [
    'Define the concrete audio features the build should support',
    'Prototype the recording/mixing flow end to end'
  ],
  verification: ['Public deployment available at the configured demo URL'],
  heroImage: '/projects/play-rec-pro.webp',
  heroImageAlt: 'PlayRec Pro creative audio production platform visualization',
accent: '#ec8fb8',
  demo: {
    mode: 'external',
    url: 'https://playrecpro.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public PlayRec Pro build on Vercel — the creative audio workflows experience.'
  },
  visual: 'audio-studio'
};