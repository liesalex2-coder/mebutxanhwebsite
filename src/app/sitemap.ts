// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getBDs } from '@/lib/sanity';

interface BDSlug {
  current: string;
}

interface BD {
  slug: BDSlug;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mebutxanh.com';
  
  // Récupérer toutes les BD
  const bds: BD[] = await getBDs();
  
  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/bd`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clips`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];
  
  // Pages BD dynamiques
  const bdPages = bds.map((bd) => ({
    url: `${baseUrl}/bd/${bd.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  return [...staticPages, ...bdPages];
}