import { MetadataRoute } from 'next';

const BASE = 'https://sharpsighted.photos';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/portraits`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/business`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/business/headshots`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/business/films`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/gift`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
