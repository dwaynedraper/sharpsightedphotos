'use client';

import { useState, useEffect, useCallback } from 'react';
import { CloudinaryImage } from '@/app/actions/gallery';

interface ImageCarouselProps {
    images: CloudinaryImage[];
    initialIndex: number;
    onClose: () => void;
}

export default function ImageCarousel({ images, initialIndex, onClose }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev, onClose]);

    const currentImage = images[currentIndex];

    return (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-center items-center">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-cyan-500 z-50 p-2 transition-colors"
                aria-label="Close carousel"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Main image container */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Previous button */}
                <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-40"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Image */}
                <div className="relative max-w-full max-h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={currentImage.secureUrl}
                        alt={currentImage.publicId}
                        className="max-h-[85vh] max-w-full object-contain mx-auto shadow-2xl"
                    />
                    <div className="absolute bottom-[-3rem] left-0 right-0 text-center text-white/70 text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Next button */}
                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-40"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Click outside to close area (the padding effectively acts as this, but we can add an overlay if click on image shouldn't close it - user said "clicking outside still has same behavior") */}
        </div>
    );
}
