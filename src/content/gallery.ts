export interface GalleryFolder {
    id: string;
    title: string;
    coverImage: string;
    cloudinaryFolder: string;
}

export const galleryFolders: GalleryFolder[] = [
    {
        id: 'bjh',
        title: 'Songs & Shadows',
        coverImage: 'https://res.cloudinary.com/dyijp1zno/image/upload/v1768792452/BJH/BJH_Shadows_ivq8td.jpg',
        cloudinaryFolder: 'BJH',
    },
    {
        id: 'wedding',
        title: 'Wedding Vibes',
        coverImage: 'https://res.cloudinary.com/dyijp1zno/image/upload/v1768791445/Wedding%20Vibes/Wedding_Vibes-26_jp3ulk.jpg',
        cloudinaryFolder: 'Wedding Vibes',
    },
    {
        id: 'matthew',
        title: 'Reflections',
        coverImage: 'https://res.cloudinary.com/dyijp1zno/image/upload/v1768793788/Matthew/Matthew_Sypert-36_ojxlor.jpg',
        cloudinaryFolder: 'Matthew',
    },
    {
        id: 'fireside',
        title: 'Fireside Friends',
        coverImage: 'https://res.cloudinary.com/dyijp1zno/image/upload/v1768796193/Fireside%20Friends/3613e103-7eeb-4cc4-89d9-39bbef54865c_rw_3840_1_zrfhvd.jpg',
        cloudinaryFolder: 'Fireside Friends',
    },
    // {
    //     id: 'urban',
    //     title: 'Urban',
    //     coverImage: 'https://picsum.photos/seed/urbanCover/800/600',
    //     cloudinaryFolder: 'portfolio/urban',
    // },
    // {
    //     id: 'creative',
    //     title: 'Creative',
    //     coverImage: 'https://picsum.photos/seed/creativeCover/800/600',
    //     cloudinaryFolder: 'portfolio/creative',
    // },
];
