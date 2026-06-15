import { MetadataRoute } from 'next';

const BASE = 'https://sharpsighted.photos';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: `${BASE}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE}/headshots`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/storyportraits`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ];
}
