'use client';

import { useState } from 'react';
import { galleryFolders, GalleryFolder } from '@/content/gallery';
import GalleryModal from './GalleryModal';
import { getGalleryImages, CloudinaryImage } from '@/app/actions/gallery';

export default function GalleryGrid() {
    const [selectedFolder, setSelectedFolder] = useState<GalleryFolder | null>(null);
    const [images, setImages] = useState<CloudinaryImage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFolderClick = async (folder: GalleryFolder) => {
        setIsLoading(true);
        setSelectedFolder(folder);
        try {
            const fetchedImages = await getGalleryImages(folder.cloudinaryFolder);
            setImages(fetchedImages);
        } catch (error) {
            console.error('Failed to load images', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setSelectedFolder(null);
        setImages([]);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {galleryFolders.map((folder) => (
                    <button
                        key={folder.id}
                        onClick={() => handleFolderClick(folder)}
                        className="group relative flex flex-col items-start text-left"
                        disabled={isLoading}
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-navy-100 dark:bg-navy-800 mb-4 transition-colors">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={folder.coverImage}
                                alt={`Luxury story portrait gallery - ${folder.title}`}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/5 dark:group-hover:bg-navy-900/10 transition-colors" />
                            {isLoading && selectedFolder?.id === folder.id && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm transition-colors">
                                    <div className="w-8 h-8 border-4 border-cyan-600 dark:border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors">
                            {folder.title}
                        </h3>
                        <p className="text-navy-500 dark:text-navy-300 text-sm mt-1 transition-colors">
                            View Gallery
                        </p>
                    </button>
                ))}
            </div>

            {selectedFolder && (
                <GalleryModal
                    folder={selectedFolder}
                    images={images}
                    loading={isLoading}
                    onClose={handleClose}
                />
            )}
        </>
    );
}
