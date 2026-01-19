'use server';

import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export interface CloudinaryImage {
    id: string;
    publicId: string;
    format: string;
    width: number;
    height: number;
    url: string;
    secureUrl: string;
}

import { galleryFolders } from '@/content/gallery';

export async function getGalleryImages(folderName: string): Promise<CloudinaryImage[]> {
    try {
        // SECURITY: Validate that the requested folder exists in our whitelist
        // This prevents arbitrary scanning of the Cloudinary account
        const isValidFolder = galleryFolders.some(f => f.cloudinaryFolder === folderName);
        if (!isValidFolder) {
            console.warn(`Unauthorized access attempt: folder '${folderName}' is not whitelisted.`);
            return [];
        }

        // Search for resources in the specified folder
        // Sort by public_id to respect naming convention (01.jpg, 02.jpg, etc.)
        const results = await cloudinary.search
            .expression(`folder:${folderName}/*`)
            .sort_by('public_id', 'asc')
            .max_results(100)
            .execute();

        return results.resources.map((resource: any) => ({
            id: resource.asset_id,
            publicId: resource.public_id,
            format: resource.format,
            width: resource.width,
            height: resource.height,
            url: resource.url,
            secureUrl: resource.secure_url,
        }));
    } catch (error) {
        console.error('Error fetching images from Cloudinary:', error);
        return [];
    }
}
