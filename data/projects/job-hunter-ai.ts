import type { Project } from '@/types/project';

export const jobHunterAi: Project = {
  id: 'job-hunter-ai',
  slug: 'job-hunter-ai',
  title: 'Job Hunter AI',
  subtitle: 'Job discovery, matching, and application intelligence platform',
  category: 'AI',
  categories: ['AI', 'BUSINESS', 'AUTOMATION'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2025',
  featured: true,
  summary:
    'An AI-assisted job discovery and intelligence platform: discover and normalize listings, match candidates to roles with deterministic scoring, analyze opportunities, track applications, and keep follow-ups moving.',
  problem:
    'Job searching is fragmented across job boards, spreadsheets, resumes, email, and follow-up reminders. Candidates struggle to know which roles are genuinely worth their time and which steps still need a follow-up.',
  concept:
    'A single workspace that turns raw job listings into normalized, scored, and trackable opportunities — pairing deterministic matching logic with AI analysis so the candidate understands why a match is strong or weak.',
  approach:
    'Built the system as a modular pipeline: ingest listings, normalize and deduplicate them into a PostgreSQL schema, score roles against a candidate profile using deterministic rules, and layer on AI analysis for job descriptions and resume tailoring. Discovery runs on a schedule, with notifications for new matches.',
  solution:
    'A functional prototype with a working job-discovery and application-tracking loop powered by Supabase (PostgreSQL) and Supabase Edge Functions. The current implementation includes deterministic matching and ranking, an AI job-analysis step, resume management, scheduled discovery, and automated tests around the core scoring logic.',
  capabilities: [
    'Job discovery from multiple sources',
    'Job normalization and deduplication',
    'Candidate-to-role matching',
    'Deterministic scoring and ranking',
    'AI-assisted job analysis',
    'Resume management',
    'Application tracking',
    'Scheduled discovery',
    'Notifications',
    'Supabase / PostgreSQL storage',
    'Supabase Edge Functions',
    'Automated testing'
  ],
  features: [
    'Pipeline that ingests raw listings, normalizes fields, and removes duplicates before they enter the database',
    'Deterministic candidate scoring so ranking is explainable rather than a black box',
    'AI step that reads a specific role and returns a structured analysis of what the position is really asking for',
    'Application tracker with statuses and follow-up reminders',
    'Scheduled discovery jobs that pull new opportunities and trigger notifications',
    'Automated tests covering the normalization, matching, and scoring modules'
  ],
  technology: [
    'Next.js',
    'TypeScript',
    'Supabase',
    'PostgreSQL',
    'Edge Functions',
    'Node.js',
    'Tailwind CSS'
  ],
  architecture:
    'The app separates a deterministic matching core from the AI analysis layer. Raw listings flow through normalization and deduplication into PostgreSQL; the scoring engine reads the candidate profile and emits interpretable scores; AI analysis runs as a structured post-processing step on a shortlist rather than on every raw row.',
  engineeringNotes:
    'Resumes and personal data are treated as sensitive. The matching/ranking logic is written as pure functions so it can be verified with automated tests independent of the UI and the network.',
  challenges: [
    'Deduplicating the same role across multiple job boards without losing source-specific details',
    'Designing scoring rules that are honest — assignment-weighted, transparent, and free of fabricated precision',
    'Keeping AI analysis bounded to a structured schema so output remains stable and testable'
  ],
  learnings: [
    'Deterministic rules and AI analysis complement each other: rules guarantee explainability, while AI adds nuance a rules engine cannot express',
    'A pipeline-shaped architecture makes it easy to test each stage in isolation',
    'Notification and scheduling design matters as much as the matching itself for real-world usefulness'
  ],
  nextSteps: [
    'Persist verified candidate outcomes — such as applications actually sent — through a controlled, user-authored flow',
    'Add broader discovery source adapters',
    'Harden the Edge Functions and add CI coverage across the full pipeline'
  ],
  verification: [
    'Functional prototype with a working match-score flow and application tracker',
    'Automated tests run against the normalization, deduplication, and scoring modules'
  ],
  accent: '#38bdf8',
  heroImage: '/projects/job-hunter-ai.webp',
  heroImageAlt: 'Job Hunter AI interface visualization',
  github: 'https://github.com/TravisL0389/job-hunter-ai',
  demo: {
    mode: 'external',
    url: 'https://taljhai.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'A functional prototype of the job-discovery, matching, application, and follow-up workspace. Uses a verified, publicly available deployment.'
  },
  visual: 'ai-pipeline'
};