import type { Project } from '@/types/project';

import { jobHunterAi } from './projects/job-hunter-ai';
import { smartWarehouse } from './projects/smart-warehouse';
import { ascentraIntegrations } from './projects/ascentra-integrations';
import { localposPro } from './projects/localpos-pro';
import { starsAlign } from './projects/stars-align';
import { boothBuilder } from './projects/booth-builder';
import { customCatTreeStudio } from './projects/custom-cat-tree-studio';
import { rfidPlacementOptimizer } from './projects/rfid-placement-optimizer';
import { pressureMakesPerfect } from './projects/pressure-makes-perfect';
import { icarusAdrian } from './projects/icarus-adrian';
import { aiRights } from './projects/ai-rights';
import { poloParkEast } from './projects/polo-park-east';
import { talos } from './projects/talos';
import { playRecPro } from './projects/play-rec-pro';
import { lumina } from './projects/lumina';

/**
 * Single source of truth for the portfolio's project registry.
 * Add a new project by dropping a file into /data/projects and registering
 * it here. The UI, routes, filters, sitemap, and metadata all derive from
 * this list — no hardcoded project content should live in components.
 */
export const PROJECTS: Project[] = [
  jobHunterAi,
  smartWarehouse,
  ascentraIntegrations,
  localposPro,
  starsAlign,
  boothBuilder,
  customCatTreeStudio,
  rfidPlacementOptimizer,
  pressureMakesPerfect,
  icarusAdrian,
  aiRights,
  poloParkEast,
  talos,
  playRecPro,
  lumina
];

/** Projects shown on the home page "Selected Work" section. */
export const FEATURED_PROJECTS: Project[] = PROJECTS.filter((p) => p.featured);

/** Projects shown in "The Lab" section on the home page. */
export const LAB_PROJECTS: Project[] = PROJECTS.filter((p) => p.inLab);

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export type { Project };