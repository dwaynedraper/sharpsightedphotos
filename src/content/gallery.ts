export interface GalleryFolder {
    id: string;
    title: string;
    coverImage: string;
    cloudinaryFolder: string;
}

export const galleryFolders: GalleryFolder[] = [
    {
        id: 'portraits',
        title: 'Portraits',
        coverImage: 'https://picsum.photos/seed/portraitsCover/800/600',
        cloudinaryFolder: 'portfolio/people',
    },
    {
        id: 'events',
        title: 'Events',
        coverImage: 'https://picsum.photos/seed/eventsCover/800/600',
        cloudinaryFolder: 'portfolio/events',
    },
    {
        id: 'studio',
        title: 'Studio',
        coverImage: 'https://picsum.photos/seed/studioCover/800/600',
        cloudinaryFolder: 'portfolio/studio',
    },
    {
        id: 'outdoor',
        title: 'Outdoor',
        coverImage: 'https://picsum.photos/seed/outdoorCover/800/600',
        cloudinaryFolder: 'portfolio/nature',
    },
    {
        id: 'urban',
        title: 'Urban',
        coverImage: 'https://picsum.photos/seed/urbanCover/800/600',
        cloudinaryFolder: 'portfolio/urban',
    },
    {
        id: 'creative',
        title: 'Creative',
        coverImage: 'https://picsum.photos/seed/creativeCover/800/600',
        cloudinaryFolder: 'portfolio/creative',
    },
];
