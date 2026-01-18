import { homeContent } from '@/content/home';

export default function FinalCTA() {
    const { finalCta } = homeContent;

    return (
        <section className="py-32 px-6 bg-white dark:bg-neutral-900 border-t border-neutral-800 text-center transition-colors duration-300">
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-serif text-navy-900 dark:text-white leading-tight">
                    {finalCta.headline} <br />
                    <span className="text-cyan-400">{finalCta.headlineAccent}</span>
                </h2>

                <p className="text-xl text-navy-800 dark:text-navy-50 max-w-2xl mx-auto font-light">
                    {finalCta.text}
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                    <a
                        href={finalCta.secondaryCta.href}
                        className="px-10 py-5 bg-white dark:bg-navy-800 border border-navy-300 dark:border-navy-700 text-navy-900 dark:text-white font-light tracking-widest uppercase hover:bg-navy-50 dark:hover:bg-navy-700 transition-all shadow-lg"
                    >
                        {finalCta.secondaryCta.text}
                    </a>
                    <a
                        href={finalCta.primaryCta.href}
                        className="px-10 py-5 bg-cyan-600 text-navy-950 font-bold tracking-widest uppercase hover:bg-cyan-500 transition-all shadow-xl shadow-cyan-900/20"
                    >
                        {finalCta.primaryCta.text}
                    </a>
                </div>
            </div>
        </section>
    );
}
