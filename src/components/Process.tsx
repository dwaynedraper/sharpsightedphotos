import { homeContent } from '@/content/home';

export default function Process() {
    const { process } = homeContent;

    return (
        <section className="py-24 px-6 bg-navy-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-16">
                    {process.headline}
                </h2>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-navy-200 via-cyan-500 to-navy-200 dark:from-navy-800 dark:via-cyan-900 dark:to-navy-800 z-0" />

                    {/* Step 1 */}
                    <div className="relative z-10 bg-navy-50 dark:bg-neutral-900 transition-colors duration-300">
                        <div className="w-24 h-24 mx-auto bg-white dark:bg-neutral-950 border-2 border-navy-200 dark:border-navy-800 rounded-full flex items-center justify-center mb-8 text-3xl font-serif text-navy-900 dark:text-white shadow-xl">
                            1
                        </div>
                        <h3 className="text-xl font-bold font-serif text-center text-navy-900 dark:text-white mb-2">{process.steps[0].title}</h3>
                        <p className="text-center text-cyan-500 dark:text-cyan-400 text-sm font-light uppercase tracking-widest mb-6">{process.steps[0].meta}</p>
                        <p className="text-navy-700 dark:text-navy-50 text-center leading-relaxed font-light">
                            {process.steps[0].description}
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 bg-navy-50 dark:bg-neutral-900 transition-colors duration-300">
                        <div className="w-24 h-24 mx-auto bg-white dark:bg-neutral-950 border-2 border-cyan-500/50 dark:border-cyan-700/50 rounded-full flex items-center justify-center mb-8 text-3xl font-serif text-cyan-600 dark:text-cyan-400 shadow-xl shadow-cyan-900/10">
                            2
                        </div>
                        <h3 className="text-xl font-bold font-serif text-center text-navy-900 dark:text-white mb-2">{process.steps[1].title}</h3>
                        <p className="text-center text-cyan-500 dark:text-cyan-400 text-sm font-light uppercase tracking-widest mb-6">{process.steps[1].meta}</p>
                        <ul className="text-navy-700 dark:text-navy-100 text-sm space-y-3 leading-relaxed text-left max-w-xs mx-auto list-disc pl-4 marker:text-cyan-500 font-light">
                            {process.steps[1].bullets?.map((bullet, i) => (
                                <li key={i}><strong className="font-semibold">{bullet.label}:</strong> {bullet.text}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 bg-navy-50 dark:bg-neutral-900 transition-colors duration-300">
                        <div className="w-24 h-24 mx-auto bg-white dark:bg-neutral-950 border-2 border-coral-500/50 dark:border-coral-700/50 rounded-full flex items-center justify-center mb-8 text-3xl font-serif text-coral-600 dark:text-coral-400 shadow-xl shadow-coral-900/10">
                            3
                        </div>
                        <h3 className="text-xl font-bold font-serif text-center text-navy-900 dark:text-white mb-2">{process.steps[2].title}</h3>
                        <p className="text-center text-coral-500 dark:text-coral-400 text-sm font-light uppercase tracking-widest mb-6">{process.steps[2].meta}</p>
                        <p className="text-navy-700 dark:text-navy-50 text-center leading-relaxed font-light">
                            {process.steps[2].description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
