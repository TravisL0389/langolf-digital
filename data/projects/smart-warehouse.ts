import type { Project } from '@/types/project';

export const smartWarehouse: Project = {
  id: 'smart-warehouse',
  slug: 'smart-warehouse',
  title: 'Smart Warehouse',
  subtitle: 'A connected warehouse operations ecosystem — VWMS / NEXUS',
  category: 'BUSINESS',
  categories: ['BUSINESS', 'AUTOMATION', 'AI', '3D / AR'],
  status: 'IN DEVELOPMENT',
  year: '2025',
  featured: true,
  summary:
    'A connected warehouse operations ecosystem exploring inventory management, warehouse design, 2D planning, 3D spatial visualization, operational dashboards, AI assistance, and physical-world system concepts.',
  problem:
    'Small and mid-sized warehouses juggle spreadsheets, siloed tools, and manual processes. Any of them know what is on the floor, but almost none have a live, spatial, connected view of the operation.',
  concept:
    'Treat the warehouse as one connected environment: a single system that moves inventory through operational workflows, lets operators design and visualize the facility in 2D and 3D, and surfaces AI assistance and automation without pretending the physical world is optional.',
  approach:
    'Building the ecosystem as layered modules over a shared Supabase backend: inventory and operations first, then a 2D design/planning layer, a 3D spatial visualization view, dashboarding, and progressively an AI assistant and automation layer.',
  solution:
    'In-progress development. A shared data foundation and the first operational modules are being built, with the 2D planning and 3D visualization views architected as connected modules rather than standalone products. Stripe architecture design exists for a future subscription layer.',
  capabilities: [
    'Warehouse management',
    'Inventory tracking',
    'Warehouse design',
    '2D planning',
    '3D warehouse visualization',
    'Operational dashboards',
    'AI assistance',
    'Automation',
    'Real-time systems',
    'Device / hardware concepts',
    'Supabase backend',
    'Testing'
  ],
  features: [
    'Shared inventory and operational data model across every module',
    'Facility design and 2D planning views being built against the same data store',
    '3D visualization layer architected so the warehouse layout renders from real layout data, not placeholder scenes',
    'Operational dashboards for stock levels and activity',
    'AI assistance planned as an interface over the structured operational data',
    'Stripe billing architecture drafted for a future paid tier'
  ],
  technology: [
    'Next.js',
    'TypeScript',
    'Supabase',
    'PostgreSQL',
    'Tailwind CSS',
    'Three.js (planned)',
    'Stripe (planned)'
  ],
  architecture:
    'The design treats every module as a view over one shared data model rather than a separate product. Layout definitions, inventory, and operational events all live in the same backend, which is what makes 2D planning, 3D visualization, and dashboards consistent with each other.',
  engineeringNotes:
    'The project is deliberately structured as a family of modules. A future physical-device layer (scanners, sensors) is designed around the same event model so hardware integration does not require reshaping the data core.',
  challenges: [
    'Keeping a layout model that is rich enough for 2D planning and honest enough to render credibly in 3D',
    'Deciding when automation should be real versus simulated without overstating capability',
    'Designing billing/Stripe architecture before the product is proven'
  ],
  learnings: [
    'A module-over-monolith data design makes a broad ecosystem much easier to reason about',
    'Spatial visualization is only valuable when it reflects the same data operators actually use',
    'Clear boundaries between built, being built, and planned keep development honest'
  ],
  nextSteps: [
    'Complete the inventory and operations modules end to end',
    'Ship the 2D planning view wired to the real layout data',
    'Connect the 3D visualization to the layout model',
    'Decide the scope of the AI assistant against the structured data surface'
  ],
  verification: [
    'Shared Supabase data model and first operational modules under active development',
    'Billing architecture documented as a Stripe integration design'
  ],
  accent: '#f0a35e',
  heroImage: '/projects/smart-warehouse.webp',
  heroImageAlt: 'Smart Warehouse 3D warehouse visualization',
  gallery: [
    {
      title: 'VWMS operations surface',
      caption: 'A companion visualization for the live Virtual Warehouse Management System experience.',
      type: 'interface',
      image: '/projects/smart-warehouse-vwms.webp'
    }
  ],
  demo: {
    mode: 'external',
    url: 'https://talvwms.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'Smart Warehouse / VWMS — the Virtual Warehouse Management System as a live deployed experience.',
    related: [
      {
        title: 'Inventory Management',
        url: 'https://talinventory.vercel.app',
        label: 'Explore Inventory',
        description:
          'A related deployed experience within the Smart Warehouse / NEXUS ecosystem.'
      }
    ]
  },
  visual: 'operations-grid'
};