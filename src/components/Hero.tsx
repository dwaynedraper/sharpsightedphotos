import Image from 'next/image';
import { homeContent } from '@/content/home';

export default function Hero() {
    const { hero } = homeContent;

    return (
        <section className="min-h-screen flex flex-col md:block relative overflow-hidden">
            {/* Background Image - Top on Mobile, Full on Desktop */}
            <div className="relative h-[65vh] w-full md:absolute md:inset-0 md:h-full z-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Cinematic portrait background"
                    fill
                    className="object-cover object-center md:object-[25%_35%]"
                    priority
                />
                {/* No overlays - letting the image pop */}
            </div>

            {/* Content Section - Below on Mobile, Overlay Right on Desktop */}
            <div className="relative z-10 flex-1 bg-white dark:bg-navy-900 md:bg-transparent md:dark:bg-transparent md:h-full md:pointer-events-none md:flex md:items-center md:justify-end">
                <div className="w-full px-6 py-20 text-center md:w-1/2 md:h-full md:flex md:flex-col md:justify-center md:text-left md:p-20 md:bg-gradient-to-l md:from-black/10 md:to-transparent pointer-events-auto">
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 p-5">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.9] text-navy-900 dark:text-white md:text-white drop-shadow-2xl">
                            {hero.headline} <br />
                            <span className="italic text-cyan-600 dark:text-cyan-400 md:text-cyan-400 font-serif block mt-2">{hero.headlineAccent}</span>
                        </h1>
                        <p className="max-w-2xl mx-auto md:mx-0 text-navy-700 dark:text-navy-200 md:text-navy-50 text-xl md:text-2xl font-normal leading-relaxed drop-shadow-xl">
                            {hero.subheadline}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start pt-8">
                            <a
                                href={hero.primaryCta.href}
                                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white transition-all duration-300 rounded-sm overflow-hidden shadow-2xl"
                            >
                                <span className="relative font-bold tracking-widest uppercase text-sm">{hero.primaryCta.text}</span>
                            </a>
                            <a
                                href={hero.secondaryCta.href}
                                className="inline-flex items-center justify-center px-10 py-5 border-2 border-navy-200 dark:border-white/20 md:border-white/30 text-navy-900 dark:text-white md:text-white hover:bg-navy-900/5 dark:hover:bg-white/10 transition-all duration-300 rounded-sm font-bold tracking-widest uppercase text-sm"
                            >
                                {hero.secondaryCta.text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
