import type { Project } from '@/types/project';

export const lumina: Project = {
  id: 'lumina',
  slug: 'lumina',
  title: 'Lumina',
  subtitle: 'An advanced spreadsheet application',
  category: 'BUSINESS',
  categories: ['BUSINESS', 'AUTOMATION'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2026',
  featured: false,
  summary:
    'A public build of an advanced spreadsheet application — explored as a web-based tool for structured data work. The project is described from the build itself; it claims no user counts, revenue, or production metrics.',
  problem:
    'Spreadsheet work sits at the center of a lot of business and data activity, yet most tools are heavyweight. A web-native advanced spreadsheet experience explores what a focused build can offer.',
  concept:
    'An advanced spreadsheet application delivered as a web experience — a capable surface for structured data with a clean, focused interface.',
  approach:
    'Built as a standalone, deployable web application. The build demonstrates the spreadsheet surface; capabilities are described conservatively from what is deployed.',
  solution:
    'A public web build deployed on Vercel, presenting an advanced spreadsheet experience.',
  capabilities: ['Spreadsheet application', 'Data handling', 'Web experience', 'Responsive UI', 'Next.js'],
  features: [
    'A public, deployed advanced spreadsheet build',
    'Web-native spreadsheet surface for structured data',
    'Capabilities described conservatively, without metrics'
  ],
  technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  architecture:
    'A focused spreadsheet application experience, deployed as a single web app.',
  engineeringNotes:
    'Lumina is described from the build itself. No user counts, revenue, or production metrics are claimed.',
  challenges: [
    'Delivering a spreadsheet surface that feels like a real tool, not a mock'
  ],
  learnings: [
    'A spreadsheet is a deep surface — the build earns trust by scoping honestly'
  ],
  nextSteps: [
    'Define the concrete spreadsheet features the build supports',
    'Prototype the formula and data-entry flow'
  ],
  verification: ['Public deployment available at the configured demo URL'],
  heroImage: '/projects/lumina.webp',
  heroImageAlt: 'Lumina smart spreadsheet application visualization',
accent: '#a6c4f0',
  demo: {
    mode: 'external',
    url: 'https://luminiatal.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public Lumina build on Vercel — the advanced spreadsheet application experience.'
  },
  visual: 'spreadsheet-app'
};