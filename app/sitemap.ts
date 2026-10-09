import type {MetadataRoute} from 'next';
import {cities} from '@/lib/cities';
import {routes} from '@/lib/seo';
import {SITE_URL} from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {url: SITE_URL + '/', lastModified: now, changeFrequency: 'weekly', priority: 1},
    ...cities.map(c => ({url: `${SITE_URL}/city/${c.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8})),
    ...routes.map(r => ({url: `${SITE_URL}/taxi/${r.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6}))
  ];
}
