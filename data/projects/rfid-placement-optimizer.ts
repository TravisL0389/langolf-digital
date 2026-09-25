import type { Project } from '@/types/project';

export const rfidPlacementOptimizer: Project = {
  id: 'rfid-placement-optimizer',
  slug: 'rfid-placement-optimizer',
  title: 'RFID Tag Placement Optimizer',
  subtitle: 'AR-assisted engineering for RFID tag placement decisions',
  category: '3D / AR',
  categories: ['3D / AR', 'AUTOMATION'],
  status: 'EXPERIMENTAL',
  year: '2026',
  featured: false,
  inLab: true,
  summary:
    'An engineering-oriented spatial experiment exploring material recognition, RF behavior, RFID tag placement, spatial registration, and candidate placement optimization — clearly separating simulation from hardware-validated results.',
  problem:
    'RFID tag placement is often guesswork informed by experience. Readers underperform because tags land on lossy materials, poorly-oriented, or in conflicting polarization states — and the failures only surface after installation.',
  concept:
    'Model the physics before placement: estimate signal behavior through materials, compute link budgets and path loss, evaluate polarization, generate candidate tag positions, score them, and register placement spatially with AR so the engineering happens against the real object.',
  approach:
    'Prototyping an AR/WebXR-guided workflow where material recognition and RF calculations feed a candidate-generation model. Candidates are scored using standard engineering quantities (path loss, link budget, polarization alignment) and spatially registered so the recommended placement can be visualized on the object itself.',
  solution:
    'An experimental prototype. RF calculations, placement scoring, material recognition concepts, and AR/WebXR spatial registration are implemented. These are engineering simulations: results are predictions from a model, not field measurements. Hardware validation with documented results is a distinct, not-yet-completed step.',
  capabilities: [
    'Material recognition',
    'RF calculations',
    'Path loss',
    'Link budgets',
    'Polarization',
    'Candidate generation',
    'Placement scoring',
    'Spatial registration',
    'AR / WebXR',
    'Hardware recommendations',
    'Engineering validation'
  ],
  features: [
    'RF estimation module computing path loss and link budget quantities',
    'Polarization-aware placement scoring',
    'Candidate generation that proposes tag positions informed by the RF model',
    'AR/WebXR registration to place candidates spatially on real objects',
    'Hardware recommendation output mapped to scoring outcomes',
    'Engineering validation documented as simulated, awaiting field testing'
  ],
  technology: ['React', 'TypeScript', 'Three.js', 'WebXR', 'Tailwind CSS'],
  architecture:
    'The simulation core is pure and deterministic: materials and geometry in, scored candidates out. AR/WebXR is a presentation and registration layer over that core, keeping engineering calculation independent from the immersive UI.',
  engineeringNotes:
    'Two things are deliberately kept separate: the engineering model (path loss, link budget, polarization estimates) and real-world measurement (actual read rates on tested hardware). Nothing in the prototype claims field accuracy until validated with real hardware and documented results.',
  challenges: [
    'Juggling classic RF engineering quantities without overclaiming simulation fidelity',
    'Reconciling AR registration with the objects operator actually has in hand',
    'Keeping the engineering outputs legible to non-engineers'
  ],
  learnings: [
    'Explicitly labeling simulation vs. measurement protects the work’s credibility',
    'Presenting the reasoning (scores + physics) makes recommendations feel earned',
    'AR is a genuinely useful placement aid once the math is honest underneath'
  ],
  nextSteps: [
    'Validate simulated placements against real hardware reads',
    'Build a documented test procedure for field accuracy',
    'Expand material recognition coverage'
  ],
  verification: [
    'Experimental prototype with functioning simulation, scoring, and AR registration',
    'Simulated results are reported as model predictions — no field claims yet'
  ],
  accent: '#93d2b5',
  heroImage: '/projects/rfid-placement-optimizer.webp',
  heroImageAlt: 'RFID Placement Optimizer spatial RF visualization',
  demo: {
    mode: 'external',
    url: 'https://rfidar.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public RFIDAR build — the simulated engineering and spatial registration experience, live on Vercel. Simulation, not a real-world measurement instrument.'
  },
  visual: 'engineering-scope'
};