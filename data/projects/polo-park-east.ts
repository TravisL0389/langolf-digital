import type { Project } from '@/types/project';

export const poloParkEast: Project = {
  id: 'polo-park-east',
  slug: 'polo-park-east',
  title: 'Polo Park East',
  subtitle: 'A website and platform project for Polo Park East',
  category: 'CREATIVE',
  categories: ['CREATIVE', 'BUSINESS'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2026',
  featured: false,
  summary:
    'A website and platform build for Polo Park East — designed and developed as a digital experience for the destination. The project is described from the build itself; it does not claim official ownership, endorsement, or affiliation.',
  concept:
    'A focused digital presence for Polo Park East that presents the destination clearly and lets visitors explore it as a web experience.',
  approach:
    'Built as a standalone, deployable web application on Vercel, with the site itself as the primary artifact.',
  solution:
    'A public website/platform build deployed on Vercel for Polo Park East.',
  capabilities: ['Web development', 'Digital presence', 'Content presentation', 'Responsive UI', 'Next.js'],
  features: [
    'A public, deployed website for Polo Park East',
    'Responsive, content-forward experience',
    'Independent project build — no official affiliation implied'
  ],
  technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  architecture:
    'A straightforward server-rendered web experience deployed as a single site.',
  engineeringNotes:
    'Content describes the project from the build itself. The project does not assert official ownership, endorsement, or affiliation with Polo Park East beyond what the site presents.',
  challenges: [
    'Presenting a destination experience without overstating official relationship'
  ],
  learnings: [
    'A live build communicates more about a place than a description ever can'
  ],
  nextSteps: [
    'Refine content and experience based on the destination needs',
    'Expand sections only where the destination genuinely requires them'
  ],
  verification: ['Public deployment available at the configured demo URL'],
  heroImage: '/projects/polo-park-east.webp',
  heroImageAlt: 'Polo Park East community website visualization',
accent: '#79d3c2',
  demo: {
    mode: 'external',
    url: 'https://polo-park-east-b9y4hpdo8-travis-langolfs-projects.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public Polo Park East build on Vercel — the website and digital experience.'
  },
  visual: 'place-site'
};