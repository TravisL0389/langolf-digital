import type { Project } from '@/types/project';

export const localposPro: Project = {
  id: 'localpos-pro',
  slug: 'localpos-pro',
  title: 'LocalPOS Pro',
  subtitle: 'A multi-surface point-of-sale and business operations platform',
  category: 'BUSINESS',
  categories: ['BUSINESS', 'CONSUMER'],
  status: 'IN DEVELOPMENT',
  year: '2026',
  featured: true,
  summary:
    'A multi-surface point-of-sale and business operations platform exploring POS, kitchen display (KDS), self-order kiosk, ordering, and administrative workflows for a single store.',
  problem:
    'Running a local restaurant or retail business means juggling a fragile POS, a separate kitchen screen, an unconnected ordering channel, and admin work spread across still more tools. Small operators need one coherent system, not a stack of integrations.',
  concept:
    'A single business operations platform where the register, kitchen, kiosk, and back office all read from the same live store state — orders, menu, staff, and settings — instead of each surface maintaining its own copy of reality.',
  approach:
    'Defining one store-scoped data model (menu, orders, tables, kitchen stations, staff) on Supabase, then building each surface — POS, KDS, kiosk, ordering, admin — as a view over that model. Backend services and automated tests are part of the build rather than an afterthought.',
  solution:
    'In-progress development. The store data model, backend services, and first surfaces are being built against Supabase, with automated tests covering business logic as it stabilizes.',
  capabilities: [
    'Point of sale',
    'Kitchen display system (KDS)',
    'Self-order kiosk',
    'Ordering',
    'Administration',
    'Store management',
    'Business configuration',
    'Supabase backend',
    'Backend services',
    'Automated testing'
  ],
  features: [
    'Shared store state across POS, kitchen, kiosk, and admin surfaces',
    'Menu and business configuration owned by the store, applied everywhere',
    'KDS routed from the same order stream as the register',
    'Kiosk and ordering flows modeled on the same catalog',
    'Backend services built over Supabase for the core order lifecycle',
    'Automated tests on business logic as it stabilizes'
  ],
  technology: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
  architecture:
    'One store-scoped data model is the single source of truth. Each surface is a tailored view over it, which keeps order state consistent when a kiosk order and a POS order interleave on the same kitchen screen.',
  engineeringNotes:
    'The design is pragmatic: local business is the scope, multi-store growth is out of scope for now. Offline tolerance and hardware (printers, displays) are anticipated but not yet implemented.',
  challenges: [
    'Keeping order state consistent across surfaces updating the same store in parallel',
    'Defining which configuration belongs to the store vs. the platform',
    'Resisting scope creep into multi-store enterprise territory'
  ],
  learnings: [
    'A shared data model removes an entire class of sync bugs before they exist',
    'Self-ordering surfaces are only trustworthy if the kitchen view of an order is authoritative',
    'Testing business logic early is cheap relative to debugging live order flows'
  ],
  nextSteps: [
    'Complete the order lifecycle end to end across POS and KDS',
    'Add the kiosk and ordering surfaces against the shared catalog',
    'Expand automated test coverage across backend services'
  ],
  verification: [
    'Store data model and backend services in active development on Supabase',
    'Automated tests being written for core business logic'
  ],
  accent: '#9be3b8',
  heroImage: '/projects/localpos-pro.webp',
  heroImageAlt: 'LocalPOS Pro point-of-sale interface visualization',
  demo: {
    mode: 'external',
    url: 'https://talpospro.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public LocalPOS Pro build — POS, kitchen display, kiosk, and operations surfaces, live on Vercel.'
  },
  visual: 'ops-console'
};