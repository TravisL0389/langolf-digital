import type { Project } from '@/types/project';

export const customCatTreeStudio: Project = {
  id: 'custom-cat-tree-studio',
  slug: 'custom-cat-tree-studio',
  title: 'Custom Cat Tree Studio',
  subtitle: 'An interactive 3D product configurator for custom cat furniture',
  category: '3D / AR',
  categories: ['3D / AR', 'E-COMMERCE'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2025',
  featured: false,
  inLab: true,
  summary:
    'A product configurator exploring real-time 3D customization of cat trees: procedural geometry responds as the customer adjusts size, tiers, materials, and features, with pricing and ordering logic following the configuration.',
  problem:
    'Custom products are hard to sell online because the customer cannot see what they are buying. A configurable cat tree could be dozens of variations, and a photo grid cannot communicate any of them accurately.',
  concept:
    'Give the customer a live 3D model of the exact configuration: as they change dimensions or materials, the geometry updates, the price updates, and the order reflects precisely what the builder made.',
  approach:
    'Procedurally generating the 3D model from configuration variables so every valid combination yields a real, renderable object. Pricing logic derives from the same configuration state, and ordering captures the full spec. Firebase stores configurations and cart data.',
  solution:
    'A functional prototype: procedural 3D geometry driven by configuration, pricing logic tied to the same state, a customization flow, ordering workflow, geometry tests, and a responsive configuration UI running against Firebase.',
  capabilities: [
    '3D product configuration',
    'Procedural geometry',
    'Pricing logic',
    'Product customization',
    'Ordering',
    'Firebase',
    'Geometry testing',
    'Responsive UI'
  ],
  features: [
    'Procedural generation so the model always matches the specification',
    'Configuration state as the single source shared by model, price, and order',
    'Transparent pricing logic derived from configuration choices',
    'Ordering workflow that captures the exact built configuration',
    'Automated geometry tests validating generated models',
    'Responsive, tactile configuration UI'
  ],
  technology: ['React', 'TypeScript', 'Three.js', 'Firebase', 'Tailwind CSS'],
  architecture:
    'Configuration is modeled as a normalized state, and every downstream artifact — geometry, price, order payload — is a pure function of that state. There is no separate “design” and “order” that can drift apart.',
  engineeringNotes:
    'Procedural generation keeps the artifact count at one instead of exploding SKUs. Geometry tests validate that configurations remain physically coherent as dimensions change.',
  challenges: [
    'Making procedural geometry robust across the full configuration space',
    'Keeping pricing legible enough that a customer understands what drives the total',
    'Enforcing physical constraints (e.g., platform spacing) inside the configurator'
  ],
  learnings: [
    'Configuration-driven forms of commerce benefit enormously from treating state as the single source of truth',
    'Live visualization converts a “can I even do this” product into a confident purchase',
    'Testing generated geometry is necessary the moment configurations become combinatorial'
  ],
  nextSteps: [
    'Broaden materials and optional features with matching procedural support',
    'Connect ordering to production-friendly spec exports',
    'Reinforce geometry testing against edge configurations'
  ],
  verification: [
    'Functional prototype: configuration, procedural 3D, pricing, and ordering flow run today',
    'Geometry tests cover the generated model space'
  ],
  accent: '#ffd9a0',
  heroImage: '/projects/custom-cat-tree-studio.webp',
  heroImageAlt: 'Custom Cat Tree Studio 3D product configurator visualization',
  demo: { mode: 'coming-soon' },
  visual: 'configurator'
};