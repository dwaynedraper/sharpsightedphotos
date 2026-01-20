'use client';

import Image from 'next/image';
import { homeContent } from '@/content/home';

export default function Guide() {
    const { guide } = homeContent;

    return (
        <section className="py-24 px-6 bg-white dark:bg-navy-950 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 md:gap-20">

                {/* 4-Image Grid with Slight Corner Overlaps */}
                {/* Using a grid layout that allows slight overlap via negative margins/translations ensures corner touches without blocking faces */}
                <div className="w-full max-w-4xl relative grid grid-cols-2 gap-4 md:gap-8 p-4">

                    {/* 1. Top Left: myPortrait3 (Dog/Scope) - 3:4 (Portrait), Anchor Bottom to fix white top, Swapped from pos 3 */}
                    <div className="relative aspect-[3/4] w-[80%] shadow-lg rounded-sm overflow-hidden z-10 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 rotate-[-2deg]">
                        <Image
                            src="/images/myPortrait3.jpg"
                            alt="Dean Draper - Scope Portrait"
                            fill
                            className="object-cover object-bottom hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 border border-white/20 m-4 rounded-sm" />
                    </div>

                    {/* 2. Top Right: myPortrait2 (Professional) - Original Aspect, Centered */}
                    <div className="relative w-full shadow-2xl rounded-sm overflow-hidden z-20 -translate-x-2 -translate-y-2 md:-translate-x-4 md:-translate-y-4 hover:z-30 transition-all duration-300">
                        {/* Wrapper to maintain original aspect logic if needed, or just let it fill grid cell naturally? 
                            User said "Original aspect". Since grid forces width, we use auto height styling or aspect ratio style.
                            myPortrait2 is ~1.4:1 (Landscape). similar to 4:3 but wider. 
                            Let's use specific aspect ratio class or style to honor "original aspect".
                        */}
                        <div className="relative aspect-[1/1.2] w-full">
                            <Image
                                src="/images/myPortrait2.jpg"
                                alt="Dean Draper - Professional Portrait"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* 3. Bottom Left: myPortrait4 (Couple/Beach) - Original Aspect (~3:2), Centered */}
                    <div className="relative w-full flex justify-end items-start z-20 translate-y-[-10%] md:translate-y-[-15%] translate-x-4 md:translate-x-8">
                        <div className="relative aspect-[3/2] w-[90%] shadow-xl rounded-sm overflow-hidden rotate-[1deg]">
                            <Image
                                src="/images/myPortrait4.jpg"
                                alt="Dean Draper - Personal Life"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* 4. Bottom Right: myPortrait (Relaxed/Whiskey) - 3:4 (Portrait), Anchor Left, Swapped from pos 0 */}
                    <div className="relative aspect-[4/4] w-[85%] shadow-lg rounded-sm overflow-hidden z-30 -translate-x-4 -translate-y-24 md:-translate-x-8 md:-translate-y-32 rotate-[-1deg]">
                        <Image
                            src="/images/myPortrait.jpg"
                            alt="Dean Draper - Relaxed Portrait"
                            fill
                            className="object-cover object-left hover:scale-105 transition-transform duration-700"
                        />

                    </div>

                </div>

                <div className="w-full max-w-4xl space-y-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 dark:text-white leading-tight mb-6">
                                {guide.headline}
                            </h2>
                            <p className="font-serif text-2xl italic text-cyan-600 dark:text-cyan-400">
                                {guide.emphasis}
                            </p>
                        </div>
                        <div className="flex-1 space-y-6 text-navy-800 dark:text-navy-50 text-lg leading-relaxed font-light">
                            <p>{guide.p1}</p>
                            <p>{guide.p2}</p>
                            <p>{guide.p3}</p>

                            <div className="pt-8 border-t border-navy-200 dark:border-navy-800">
                                <p className="font-serif text-2xl text-navy-900 dark:text-white">{guide.name}</p>
                                <p className="text-sm text-navy-400 uppercase tracking-[0.2em] font-light mt-1">{guide.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
