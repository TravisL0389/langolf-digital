export const PROJECT_CATEGORIES = [
  'AI',
  'BUSINESS',
  'CONSUMER',
  'AUTOMATION',
  'E-COMMERCE',
  '3D / AR',
  'CREATIVE'
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type ProjectFilter = 'ALL' | ProjectCategory;

export const PROJECT_STATUSES = [
  'PRODUCTION',
  'FUNCTIONAL PROTOTYPE',
  'IN DEVELOPMENT',
  'EXPERIMENTAL',
  'CONCEPT'
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

/** Demo modes controlling how EXPLORE THE BUILD presents a project. */
export const PROJECT_DEMO_MODES = ['live', 'embedded', 'external', 'coming-soon'] as const;

export type ProjectDemoMode = (typeof PROJECT_DEMO_MODES)[number];

/**
 * A related deployed experience within the same project family / ecosystem.
 * Lets an ecosystem project (e.g. Smart Warehouse) surface specific deployed
 * builds — VWMS, inventory management — without turning each URL into its own
 * flagship card.
 */
export interface ProjectDemoRelated {
  title: string;
  url: string;
  /** Short label for the entry point, e.g. "ENTER THE BUILD →". */
  label?: string;
  /** Honest one-line description of what this deployed experience is. */
  description?: string;
}

/** Shared, optional fields for any demo mode. */
export interface ProjectDemoBase {
  /** Short label for the launch control, e.g. "ENTER THE BUILD →". */
  label?: string;
  /** Honest one-line description of what the demo lets a visitor do. */
  description?: string;
  /** Related deployed experiences in the same project family / ecosystem. */
  related?: ProjectDemoRelated[];
}

/** A live application visitors can use in this page. Requires a verified public URL. */
export interface ProjectDemoLive extends ProjectDemoBase {
  mode: 'live';
  url: string;
}

/** An application framed directly in the case study. Requires a verified embeddable URL. */
export interface ProjectDemoEmbedded extends ProjectDemoBase {
  mode: 'embedded';
  url: string;
  /** CSS aspect-ratio utility for the iframe. Defaults to aspect-[16/9]. */
  aspectRatio?: string;
  /** iframe sandbox restrictions. Never grant sensitive access unless required. */
  sandbox?: string;
}

/** A verified external application, opened in a new tab. */
export interface ProjectDemoExternal extends ProjectDemoBase {
  mode: 'external';
  url: string;
}

/** No public demo yet. The interface shows the real build insight instead. */
export interface ProjectDemoComingSoon extends ProjectDemoBase {
  mode: 'coming-soon';
  url?: never;
}

export type ProjectDemo =
  | ProjectDemoLive
  | ProjectDemoEmbedded
  | ProjectDemoExternal
  | ProjectDemoComingSoon;

/** One project gallery item. Renders type-safe placeholders when no image asset exists. */
export interface ProjectGalleryItem {
  title: string;
  caption: string;
  type?: 'interface' | 'architecture' | 'flow' | 'experiment' | 'concept';
  /** Real imagery path. The media system renders it as soon as one exists. */
  image?: string;
  /** Force a light/dark placeholder treatment for this item. */
  theme?: 'light' | 'dark';
}

export interface Project {
  /** Stable, unique identifier (matches slug unless otherwise intended). */
  id: string;
  /** URL slug used for /work/[project]. */
  slug: string;
  title: string;
  subtitle: string;
  /** Primary category — drives the main card label. */
  category: Exclude<ProjectFilter, 'ALL'>;
  /** Full set of categories a project belongs to — drives filtering. */
  categories: ProjectCategory[];
  status: ProjectStatus;
  /** Display year(s) for the project, e.g. "2025". */
  year: string;
  featured: boolean;
  /** Rendered in The Lab when true. */
  inLab?: boolean;

  /** Short card summary. */
  summary: string;

  /** Case study narrative fields — optional sections are hidden in the UI. */
  problem?: string;
  concept?: string;
  approach?: string;
  solution?: string;

  /** Bullet-oriented capability list. */
  capabilities: string[];
  features: string[];
  technology: string[];

  /** Public source repository. Only set for a verified, public URL. */
  github?: string;

  /** Optional media. Prefer real assets; omit rather than invent thumbnails. */
  heroImage?: string;
  /** Meaningful accessible name for heroImage, e.g. "Job Hunter AI interface visualization". */
  heroImageAlt?: string;
  gallery?: ProjectGalleryItem[];
  video?: string;
  /** Optional lucide icon key / custom glyph for the project identity mark. */
  icon?: string;

  /**
   * Public demo configuration driving the EXPLORE THE BUILD experience.
   * Only set `url` for a real, verified, publicly accessible application.
   * Never invent URLs or present a placeholder as the actual project.
   */
  demo?: ProjectDemo;

  /** Architecture note (freeform / bullet-friendly). */
  architecture?: string;
  engineeringNotes?: string;
  challenges?: string[];
  learnings?: string[];
  nextSteps?: string[];

  /**
   * Verified, demonstrable outcomes. Only include what can actually be shown.
   * Never fabricated metrics.
   */
  verification?: string[];

  /** Art direction for the generated visual placeholder. */
  accent?: string;
  /** Semantic index used to vary the generated placeholder. */
  visual?: string;

  /** Freeform display date when year alone is insufficient. */
  date?: string;
  tags?: string[];
}

/** Payload for the contact form. Mirrors the form fields exactly. */
export interface ProjectInquiryData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  projectDescription: string;
  timeline: string;
  budget: string;
}