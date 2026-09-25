import type { Project } from '@/types/project';

export const pressureMakesPerfect: Project = {
  id: 'pressure-makes-perfect',
  slug: 'pressure-makes-perfect',
  title: 'Pressure Makes Perfect',
  subtitle: 'A conversion-focused digital experience for a pressure-washing business',
  category: 'BUSINESS',
  categories: ['BUSINESS', 'CREATIVE'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2026',
  featured: false,
  summary:
    'A conversion-focused marketing site for a residential pressure-washing business: clear service presentation, before/after visual proof, easy quote requests, and service-area clarity.',
  problem:
    'A local pressure-washing service needed to turn searches into phone calls and quote requests. The service is visual by nature, but most contractor sites bury before/after proof and force customers to search for “where do you work?” and “what does it cost?”',
  concept:
    'A focused, high-trust site where the service is unmistakable in the first screen, the visual results are the proof, and asking for a quote is a two-step action — not a form-gauntlet.',
  approach:
    'Designing the experience around service presentation, a before/after gallery, a minimal quote flow, and explicit service areas. Mobile-first navigation and layout carried the design, since most of this audience discovers the site on a phone.',
  solution:
    'A functional prototype of the full experience: service presentation, before/after gallery, quote flow, service-area coverage, responsive layout, and mobile navigation with an established orange/yellow visual direction.',
  capabilities: [
    'Service presentation',
    'Before / after gallery',
    'Quote flow',
    'Service areas',
    'Responsive layout',
    'Mobile navigation',
    'Brand direction'
  ],
  features: [
    'First-screen service clarity and strong visual identity',
    'Before/after gallery as the primary proof mechanism',
    'Two-step quote request flow with minimal fields',
    'Explicit service-area presentation',
    'Mobile-first responsive layout and navigation',
    'Orange/yellow brand direction carried through imagery and UI'
  ],
  technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  architecture:
    'A content-first marketing site: pages are server-rendered and static where possible, with the quote flow isolated as the single interactive surface — the only place that needs state and eventual backend wiring.',
  engineeringNotes:
    'Lead capture is a client-side prototype. Metric claims (lead counts, revenue lift) are intentionally absent because no native deployment data yet exists.',
  challenges: [
    'Presenting service work visually without relying on stock photography',
    'Keeping the quote form short enough to convert but complete enough to qualify',
    'Making “where we work” feel reassuring rather than an afterthought'
  ],
  learnings: [
    'For service businesses, proving the work visually is worth more than any copy block',
    'The fewer fields in a lead flow, the more seriously customers treat it',
    'A confident local brand goes a long way when every interface choice matches it'
  ],
  nextSteps: [
    'Replace prototype placeholders with real site imagery',
    'Wire the quote flow to a backend once a provider is chosen',
    'Add testimonial and review surfaces validated by the business'
  ],
  verification: [
    'Functional prototype of the full site experience and quote flow'
  ],
  accent: '#ffb547',
  heroImage: '/projects/pressure-makes-perfect.webp',
  heroImageAlt: 'Pressure Makes Perfect residential pressure-washing website visual',
  demo: {
    mode: 'external',
    url: 'https://pmpwash.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public Pressure Makes Perfect build — service presentation, before/after gallery, and quote flow, live on Vercel.'
  },
  visual: 'local-brand'
};