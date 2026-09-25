/** Site-wide identity and shared editorial content for LANGOLF DIGITAL. */

export const STUDIO_INFO = {
  name: 'LANGOLF DIGITAL',
  founder: 'Travis Langolf',
  role: 'Self-taught digital product builder',
  positioning: 'Ideas are cheap. I build the thing.',
  email: 'travislangolf@gmail.com',
  github: 'https://github.com/travislangolf',
  status: 'BUILDING REAL THINGS, ONE PROTOTYPE AT A TIME'
} as const;

export const SITE_NAV = [
  { label: 'WORK', href: '/work' },
  { label: 'THE LAB', href: '/#the-lab' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' }
] as const;

export const CAPABILITIES = [
  {
    title: 'AI Products',
    description:
      'Intelligent workflows, assistants, and analysis layers built with explicit, explainable behavior — not black-box demos.'
  },
  {
    title: 'Digital Products',
    description:
      'Full-stack applications, responsive experiences, and product thinking from concept through working software.'
  },
  {
    title: 'Business Systems',
    description:
      'Operational platforms, POS, inventory, and back-office tools designed for real daily workflows.'
  },
  {
    title: 'Automation',
    description:
      'Visual builders, graph execution, scheduled jobs, approvals, and transparent, replayable run histories.'
  },
  {
    title: '3D / AR',
    description:
      'Interactive 3D, spatial visualization, product configurators, and AR-assisted engineering experiences.'
  },
  {
    title: 'Commerce',
    description:
      'Shoppable experiences, product configuration, styling layers, and ordering flows with the catalog as truth.'
  }
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    phase: 'IDEA',
    title: 'Understand',
    description:
      'Cut through surface noise to the genuine constraint or opportunity. What does the user actually need, and what does done look like?'
  },
  {
    number: '02',
    phase: 'PROTOTYPE',
    title: 'Prototype',
    description:
      'Assemble a functional, tactile prototype that proves the critical loop quickly — latency, feasibility, and product shape — before heavy investment.'
  },
  {
    number: '03',
    phase: 'PRODUCT',
    title: 'Engineer',
    description:
      'Turn the validated concept into a strongly typed, well-architected application with clean data models and honest test coverage.'
  },
  {
    number: '04',
    phase: 'REFINEMENT',
    title: 'Refine',
    description:
      'Polish accessibility, performance, and hierarchy — then keep iterating based on concrete evidence rather than assumption.'
  }
] as const;