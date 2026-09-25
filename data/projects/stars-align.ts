import type { Project } from '@/types/project';

export const starsAlign: Project = {
  id: 'stars-align',
  slug: 'stars-align',
  title: 'Stars Align',
  subtitle: 'An AI-assisted fashion and footwear experience',
  category: 'CONSUMER',
  categories: ['CONSUMER', 'E-COMMERCE', 'AI'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2025',
  featured: true,
  summary:
    'An AI-assisted fashion and footwear experience combining product discovery, an AI stylist, visual analysis, outfit upload, digital wardrobe tools, and a shoppable catalog.',
  problem:
    'Online shopping for fashion and footwear is still a search-and-scroll problem. Personal styling guidance, outfit coordination, and a sense of what you already own are rarely part of the same experience as the store.',
  concept:
    'Merge the store with a styling layer: upload outfits or a closet, get visual analysis and shoe recommendations, save favorites, compare options, and buy — with the product catalog driving every suggestion so recommendations are always shoppable.',
  approach:
    'Building the experience around a product catalog plus an AI styling layer. Camera and upload inputs feed visual analysis; a digital closet stores what you own; favorites and comparison support decisions; and the catalog converts all of it into commerce.',
  solution:
    'A functional prototype: consumer-facing discovery and wardrobe flows with an AI stylist, outfit analysis, shoe recommendations, favorites, comparison, camera/upload input, and a responsive shopping experience. Legacy project naming referenced “Aries World of Shoes” internally; the public brand is Stars Align.',
  capabilities: [
    'AI stylist',
    'Outfit analysis',
    'Shoe recommendations',
    'Digital closet',
    'Favorites',
    'Comparison',
    'Camera input',
    'Outfit upload',
    'Product catalog',
    'Custom product experiences',
    'Responsive consumer UX'
  ],
  features: [
    'AI stylist that recommends against an actual product catalog so suggestions are purchasable',
    'Outfit upload and camera input feeding visual analysis',
    'Digital closet storing items you already own',
    'Favorites and side-by-side comparison',
    'Shoppable catalog and custom product surfaces',
    'Polished, responsive consumer interface'
  ],
  technology: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'AI (structured analysis)'],
  architecture:
    'Recommendations and visual analysis share a structured domain around products and outfits. The catalog is the source of truth for anything shoppable; the AI layer produces structured styling output rather than free-form prose, so the experience stays grounded in real products.',
  engineeringNotes:
    'Visual analysis is treated as a capability that must degrade gracefully: when certainty is low, the experience surfaces more conservative recommendations and options to refine input.',
  challenges: [
    'Keeping AI styling suggestions grounded in what the catalog can actually sell',
    'Designing upload/camera flows that feel native on mobile',
    'Separating the legacy internal brand from the public Stars Align identity'
  ],
  learnings: [
    'Commerce credibility depends on the recommendation layer being traceable back to real products',
    'Wardrobe and closet concepts make recommendations feel personal without requiring heavy user data',
    'A strong consumer UI is the differentiator — AI adds value only when the interaction is delightful'
  ],
  nextSteps: [
    'Deepen the digital wardrobe features and outfit coordination',
    'Expand the catalog and custom product experiences',
    'Harden the AI-analysis flows for real uploads at scale'
  ],
  verification: [
    'Functional prototype with working discovery, stylist, closet, and comparison flows'
  ],
  accent: '#c4a8ff',
  heroImage: '/projects/stars-align.webp',
  heroImageAlt: 'Stars Align fashion commerce interface visualization',
  demo: {
    mode: 'external',
    url: 'https://starsalignshop.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public Stars Align build — AI stylist, outfit analysis, and the shoppable catalog, live on Vercel.'
  },
  visual: 'consumer-boutique'
};