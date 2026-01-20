'use client';

import { useState, useEffect } from 'react';
import { GalleryFolder } from '@/content/gallery';
import ImageCarousel from './ImageCarousel';
import { CloudinaryImage } from '@/app/actions/gallery';
import { CldImage } from 'next-cloudinary';

interface GalleryModalProps {
    folder: GalleryFolder;
    images: CloudinaryImage[];
    loading: boolean;
    onClose: () => void;
}

export default function GalleryModal({ folder, images, loading, onClose }: GalleryModalProps) {
    const [carouselIndex, setCarouselIndex] = useState<number | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (carouselIndex !== null) {
        return (
            <ImageCarousel
                images={images}
                initialIndex={carouselIndex}
                onClose={() => setCarouselIndex(null)}
            />
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8" onClick={onClose}>

            {/* Modal Content - Stop propagation so clicking inside doesn't close */}
            <div
                className="relative bg-navy-900 w-full max-w-[90vw] h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-navy-700"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-navy-700 bg-navy-900 z-10">
                    <h2 className="text-2xl font-bold tracking-tight text-white">{folder.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-navy-300 hover:text-cyan-500 transition-colors p-2"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-navy-600 scrollbar-track-transparent">
                    {loading ? (
                        <div className="flex h-full items-center justify-center">
                            <div className="text-cyan-500">Loading images...</div>
                        </div>
                    ) : images.length === 0 ? (
                        <div className="flex h-full items-center justify-center text-navy-300">
                            No images found in this folder.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => setCarouselIndex(index)}
                                    className="group relative aspect-[4/5] w-full overflow-hidden rounded-md bg-navy-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                >
                                    <CldImage
                                        src={image.publicId}
                                        alt="Luxury story portrait from client session"
                                        width={600}
                                        height={800}
                                        crop="fill"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
