import type { Project } from '@/types/project';

export const boothBuilder: Project = {
  id: 'booth-builder',
  slug: 'booth-builder',
  title: 'Trade Show Booth Builder',
  subtitle: 'Design and visualize trade-show booth experiences in 3D and AR',
  category: '3D / AR',
  categories: ['3D / AR', 'BUSINESS'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2025',
  featured: false,
  inLab: true,
  summary:
    'An interactive 3D/AR environment for constructing trade-show booth scenes from a spatial asset catalog — compose, inspect, validate, and place booth layouts, including WebXR-based preview.',
  problem:
    'Booth concepts are usually sketched, estimated, and argued about in 2D. No one sees the space until it is already rented, built, and installed — which is exactly the wrong time to discover a layout does not work.',
  concept:
    'Let a booth be composed spatially before it is built: a 3D scene where components drop in from an asset catalog, get inspected and validated against floor constraints, and can be viewed in-place through AR before any physical commitment.',
  approach:
    'Prototyping the scene construction layer in React Three Fiber over Three.js, with an asset catalog of booth components, an inspector for placement and properties, templates for fast starts, and spatial validation to catch conflicts early. WebXR/AR placement demonstrates the in-space experience.',
  solution:
    'A functional prototype: 3D scene construction, asset catalog, spatial composition, object inspector, templates, spatial validation, and WebXR AR placement are part of the current build. Front-facing requirements typically shine here — precise measurements depend on the physical site survey, which is a real-world step, not simulated.',
  capabilities: [
    '3D scene construction',
    'Asset catalog',
    'Spatial composition',
    'Inspector',
    'Templates',
    'WebXR',
    'AR placement',
    'Spatial validation',
    'Three.js',
    'React Three Fiber'
  ],
  features: [
    'Interactive 3D composition of booth components',
    'Catalog of reusable booth assets with spatial properties',
    'Per-object inspector for position, rotation, and attributes',
    'Template scenes for common booth formats',
    'Spatial validation that flags overlaps and out-of-bound placement',
    'WebXR AR placement to preview the booth in a real space'
  ],
  technology: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'WebXR'],
  architecture:
    'The scene graph is the core abstraction: every catalog asset instantiates as a scene entry with spatial data. Validation runs over the assembled scene graph, which keeps inspectors, validation, and AR placement all operating on one source of truth.',
  engineeringNotes:
    'AR placement is a demonstration of positioning, not a measurement device. Dimensions in the prototype represent design intent and must be reconciled with a physical site survey.',
  challenges: [
    'Making spatial composition approachable for marketers, not just CAD users',
    'Keeping WebXR reliable across browsers while still being worth the complexity',
    'Defining validation rules that catch real problems without being pedantic'
  ],
  learnings: [
    'A single scene-graph abstraction simplifies every downstream feature',
    'Spatial validation is the honest version of a “design review” that spreadsheets cannot offer',
    'AR previews build confidence early — even rough ones do',
  ],
  nextSteps: [
    'Expand the asset catalog and template library',
    'Harden spatial validation with realistic booth constraints',
    'Explore exportable layout specs for vendors'
  ],
  verification: [
    'Functional prototype: scene construction, catalog, inspector, templates, and AR placement run today'
  ],
  accent: '#a8b8ff',
  heroImage: '/projects/booth-builder.webp',
  heroImageAlt: 'Trade Show Booth Builder 3D booth visualization',
  demo: {
    mode: 'external',
    url: 'https://talboothbuilder.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public booth builder build — 3D scene construction, catalog, and WebXR AR placement, live on Vercel.'
  },
  visual: 'spatial-builder'
};