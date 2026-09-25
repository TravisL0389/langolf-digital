import type { Project } from '@/types/project';

export const ascentraIntegrations: Project = {
  id: 'ascentra-integrations',
  slug: 'ascentra-integrations',
  title: 'Ascentra Integrations',
  subtitle: 'A visual automation platform for connected workflows',
  category: 'AUTOMATION',
  categories: ['AUTOMATION', 'AI', 'BUSINESS'],
  status: 'IN DEVELOPMENT',
  year: '2025',
  featured: true,
  summary:
    'A visual automation platform exploring connected workflows: graph-based execution, scheduled jobs, workers, credential handling, approvals, hooks, and execution monitoring over a Supabase backend.',
  problem:
    'Automation tools often force a choice between point-and-click limits and writing code from scratch. Teams want the control of code with the legibility of a visual builder — and they need to see what their automations actually did.',
  concept:
    'A visual automation builder where workflows are modeled as executable graphs. Each node is a step or connection, the graph is the source of truth, and execution produces a transparent, inspectable run history.',
  approach:
    'Designing the execution model around typed nodes and edges stored in Supabase. Workers execute graphs, scheduling triggers runs, credentials are stored and referenced securely, and every run is recorded with hooks, retries, and approval gates modeled explicitly.',
  solution:
    'In-progress development. The execution model, credential design, scheduling, and worker architecture are being built against Supabase. The current focus is making graph execution unambiguous before expanding surface area.',
  capabilities: [
    'Visual automation builder',
    'Graph-based execution',
    'Connections',
    'Credential handling',
    'Scheduling',
    'Workers',
    'Executions with run history',
    'Approval gates',
    'Hooks',
    'Retry behavior',
    'Security controls',
    'Supabase backend'
  ],
  features: [
    'Graph-first workflow model: nodes and edges are the definition of an automation',
    'Executable node types for steps, connections, and control flow',
    'Worker abstraction where graph runs are executed and observed',
    'Schedule definitions that trigger runs',
    'Approval gates that pause a run until authorized',
    'Explicit retry policy per node rather than a blanket default',
    'Hook surface for reacting to run lifecycle events'
  ],
  technology: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
  architecture:
    'Workflows are stored as typed graphs. An execution engine resolves the graph, dispatches work to workers, and records every transition. Credentials are referenced from a dedicated store so secrets never embed themselves inside workflow definitions.',
  engineeringNotes:
    'Retry behavior and approvals are modeled as first-class graph concerns. The design favors explicit, inspectable policies over hidden defaults so a failed run is always diagnosable.',
  challenges: [
    'Defining graph semantics that are powerful but still predictable for non-experts',
    'Securing credentials without scattering them through workflow payloads',
    'Making execution state replayable enough to debug after the fact'
  ],
  learnings: [
    'Execution visibility is the product: teams trust automation when they can trace exactly what ran and why',
    'Graph semantics need rigorous definition before the visual builder is worth building',
    'Approvals and retries shape trust more than raw feature count'
  ],
  nextSteps: [
    'Complete graph execution end to end across worker processes',
    'Build the visual builder surface over the execution model',
    'Exercise the hook and approval paths with integration tests'
  ],
  verification: [
    'Execution model, worker, scheduling, and credential architecture under development against Supabase'
  ],
  accent: '#7cc7e0',
  heroImage: '/projects/ascentra-integrations.webp',
  heroImageAlt: 'Ascentra Integrations workflow automation visualization',
  demo: {
    mode: 'external',
    url: 'https://ascentraintegrations.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public Ascentra build — the visual automation / Atom Builder experience, live on Vercel.'
  },
  visual: 'automation-graph'
};