'use client';

import { homeContent } from '@/content/home';
import Image from 'next/image';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { SiCoffeescript } from 'react-icons/si';

export default function ValueProps() {
    const { valueProps } = homeContent;

    const icons = [FaLocationCrosshairs, RiCalendarScheduleLine, SiCoffeescript];

    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-navy-990 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-20 leading-tight">
                    {valueProps.headline} <br />
                    <span className="italic text-cyan-600 dark:text-cyan-400 font-serif block mt-2">{valueProps.headlineAccent}</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-10 items-start">
                    {valueProps.cards.map((card: any, index: number) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="flex flex-col h-full overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] bg-white dark:bg-black transition-colors duration-300">
                                {/* Image Container (1:1 Square) */}
                                <div className="relative aspect-square w-full overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />

                                    {/* Icon Overlay - Top Left */}
                                    <div className="absolute top-10 left-10 z-30">
                                        <Icon className="text-white text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" />
                                    </div>

                                    {/* Top-down gradient for icon background contrast */}
                                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent z-10" />

                                    {/* Bottom Fade Gradient (matches text box color) */}
                                    {/* Using a larger height (h-3/4) for a very smooth transition as requested */}
                                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-white/40 dark:from-black dark:via-black/50 to-transparent z-20" />

                                    {/* Title - Positioned in the Gradient Area */}
                                    <div className="absolute bottom-8 left-10 right-10 z-30">
                                        <h3 className="text-2xl md:text-4xl font-serif text-navy-900 dark:text-white leading-tight drop-shadow-sm">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Text Content Area */}
                                <div className="px-10 pb-16 pt-6 flex-1 bg-white dark:bg-black">
                                    <p className="text-navy-700 dark:text-navy-200 leading-relaxed font-light text-xl">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
