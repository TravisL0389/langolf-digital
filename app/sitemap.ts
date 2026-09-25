import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';

const SITE_URL = 'https://langolfdigital.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 }
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  }));

  return [...staticRoutes, ...projectRoutes];
}