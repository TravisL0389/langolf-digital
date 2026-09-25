import type { Project } from '@/types/project';

export const aiRights: Project = {
  id: 'ai-rights',
  slug: 'ai-rights',
  title: 'AIRIGHTS',
  subtitle: 'A web experience exploring digital rights and protection concepts',
  category: 'BUSINESS',
  categories: ['BUSINESS', 'CREATIVE', 'AI'],
  status: 'EXPERIMENTAL',
  year: '2026',
  featured: false,
  summary:
    'A deployed web experience exploring digital rights and protection concepts. AirRights is framed conservatively as an exploratory build — it demonstrates ideas around rights and attribution in an interface without asserting legal, compliance, or business capability.',
  problem:
    'Rights and attribution are often negotiated in static documents and manual processes. An interactive web surface offers a way to make those concepts legible and testable — without pretending to replace legal or compliance tooling.',
  concept:
    'A web experience designed around rights and protection concepts that can be browsed and explored directly. The scope is deliberately conservative: it is an experimental surface, not a claims-bearing product.',
  approach:
    'Built as a standalone, deployable web application. The experience favors clarity and restraint over feature breadth, and the public build is the primary artifact for evaluating it.',
  solution:
    'A public web build, deployed on Vercel, presenting an exploratory interface around digital rights and protection concepts. No legal, copyright, compliance, or business outcomes are asserted.',
  capabilities: [
    'Web experience',
    'Rights and protection concepts',
    'Exploratory interface',
    'Public deployment',
    'Next.js',
    'Responsive UI'
  ],
  features: [
    'A public web experience that can be entered and explored directly',
    'Rights and protection concepts presented with conservative, non-claiming copy',
    'Responsive, focused interface rather than a broad feature set'
  ],
  technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  architecture:
    'A standalone web application served from a single deployment. The architecture keeps the surface simple and the copy honest — there is no hidden claims layer or presumed production status.',
  engineeringNotes:
    'AirRights is intentionally experimental. Nothing in the build asserts legal standing, copyright enforcement, or compliance readiness. The public deployment exists to be explored, not to evidence a product-grade outcome.',
  challenges: [
    'Representing rights-oriented concepts in an interface without overstating capability',
    'Keeping the exploration coherent as a web experience rather than a document'
  ],
  learnings: [
    'A live build is the most honest demonstration of what an idea actually is',
    'Restraint in claims protects the project from being read as more than it is'
  ],
  nextSteps: [
    'Define the specific rights or protection concept the interface is meant to prove',
    'Expand the experience only where the concept genuinely requires it'
  ],
  verification: ['Public deployment available at the configured demo URL'],
  heroImage: '/projects/ai-rights.webp',
  heroImageAlt: 'AIRIGHTS digital rights and protection experience visualization',
accent: '#ff9d8f',
  demo: {
    mode: 'external',
    url: 'https://talrightsguard.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public AIRIGHTS build on Vercel — an exploratory web experience around rights and protection concepts.'
  },
  visual: 'rights-guard'
};