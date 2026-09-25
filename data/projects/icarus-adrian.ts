import type { Project } from '@/types/project';

export const icarusAdrian: Project = {
  id: 'icarus-adrian',
  slug: 'icarus-adrian',
  title: 'Icarus Adrian',
  subtitle: 'A music and artist experience around audio, identity, and content',
  category: 'CREATIVE',
  categories: ['CREATIVE', 'CONSUMER'],
  status: 'FUNCTIONAL PROTOTYPE',
  year: '2026',
  featured: false,
  inLab: true,
  summary:
    'A digital music and artist site combining audio playback, music visualization, songs and lyrics, artist content, a newsletter, and a small admin experience.',
  problem:
    'An independent artist needs a place that feels like them — somewhere audio, visuals, and biography live together, where fans can listen, read lyrics, sign up for updates, and the artist can manage content without a web team.',
  concept:
    'One intentional media surface: playback and music visualization as the centerpiece, songs with lyrics alongside artist content, a simple newsletter path, and an admin surface the artist actually uses.',
  approach:
    'Building the public media experience around an audio engine and music visualization, with songs, lyrics, and artist content modeled as data the admin can edit. Newsletter capture and the admin experience are scoped as part of the same product rather than afterthoughts.',
  solution:
    'A functional prototype of the artist experience: audio playback, music visualization, songs with lyrics, artist content, newsletter capture, and an admin experience that manages the media library.',
  capabilities: [
    'Audio playback',
    'Music visualization',
    'Songs',
    'Lyrics',
    'Artist content',
    'Newsletter',
    'Admin experience',
    'Responsive media UX'
  ],
  features: [
    'Audio playback experience with visualization',
    'Songs and lyrics presentation',
    'Artist content and identity surfaces',
    'Newsletter capture flow',
    'Admin experience for managing the media library',
    'Responsive media-first layout'
  ],
  technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web Audio (planned)'],
  architecture:
    'Media is modeled as structured content — songs, lyrics, and artist pages — which is what makes the admin surface possible. Playback and visualization are the presentation layer over that library.',
  engineeringNotes:
    'No streaming or audience metrics are claimed; the site is in functional-prototype stage. Audio-visual interplay is prototyped to be intentionally modest.',
  challenges: [
    'Building an audio experience that feels designed rather than technical',
    'Separating the media library (data) from the playback (presentation) cleanly',
    'Keeping an admin surface simple enough that an artist wants to use it'
  ],
  learnings: [
    'Structuring songs and lyrics as data pays off the moment an admin exists',
    'Visualizers earn their place when they reinforce the music, not distract from it',
    'A tight scope — listen, read, subscribe — is the right scope for a first artist site'
  ],
  nextSteps: [
    'Add real audio content once cleared for use',
    'Harden the admin experience for a non-technical user',
    'Connect newsletter capture to a mailing provider'
  ],
  verification: [
    'Functional prototype: playback, songs/lyrics, content, newsletter, and admin flows run'
  ],
  accent: '#ffb5a8',
  heroImage: '/projects/icarus-adrian.webp',
  heroImageAlt: 'Icarus Adrian music platform visualization',
  demo: {
    mode: 'external',
    url: 'https://icarusadrian.vercel.app',
    label: 'ENTER THE BUILD',
    description:
      'The public Icarus Adrian build — audio playback, songs, lyrics, and the artist experience, live on Vercel.'
  },
  visual: 'media-experience'
};