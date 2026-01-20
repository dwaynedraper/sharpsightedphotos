import Image from 'next/image';
import { homeContent } from '@/content/home';

export default function Guide() {
    const { guide } = homeContent;

    return (
        <section className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                {/* Placeholder for Personal Photo - You can replace the src later */}
                <div className="w-full md:w-1/2 aspect-[4/5] bg-navy-200 dark:bg-navy-800 rounded-sm relative overflow-hidden group shadow-2xl">
                    <Image
                        src="/images/myPortrait.jpg"
                        alt="A portrait of Dean Draper, the owner of Sharp Sighted Photos"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-navy-300 dark:border-navy-700 m-4 rounded-sm pointer-events-none z-10" />
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-navy-900 dark:text-white leading-tight">
                        {guide.headline}
                    </h2>
                    <div className="space-y-6 text-navy-800 dark:text-navy-50 text-lg leading-relaxed font-light">
                        <p>
                            {guide.p1}
                        </p>
                        <p>
                            {guide.p2}
                        </p>
                        <p>
                            {guide.p3}
                        </p>
                        <p className="font-serif text-xl italic text-cyan-400">
                            {guide.emphasis}
                        </p>
                    </div>
                    <div className="pt-4 border-t border-navy-800">
                        <p className="font-serif text-xl text-navy-900 dark:text-white">{guide.name}</p>
                        <p className="text-sm text-navy-400 uppercase tracking-widest font-light">{guide.title}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
