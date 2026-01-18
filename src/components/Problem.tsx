import { homeContent } from '@/content/home';

export default function Problem() {
    const { problem } = homeContent;

    return (
        <section className="py-24 px-6 bg-white dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif text-navy-900 dark:text-white leading-tight">
                    {problem.headline} <br />
                    <span className="text-coral-500">{problem.headlineAccent}</span>
                </h2>

                <div className="space-y-6 text-navy-800 dark:text-navy-50 text-xl leading-relaxed text-left md:text-center font-light">
                    <p>
                        {problem.p1}
                    </p>
                    <p className="font-serif text-3xl text-cyan-400 italic">
                        {problem.accentText}
                    </p>
                    <p>
                        {problem.p2}
                    </p>
                    <div className="p-8 border-l-4 border-coral-500 bg-neutral-100 dark:bg-neutral-950 mt-12 rounded-r-lg shadow-xl">
                        <p className="font-light text-coral-500 mb-2 uppercase tracking-widest text-sm">{problem.boxTitle}</p>
                        <p className="text-navy-900 dark:text-white">
                            {problem.boxText1}
                        </p>
                        <p className="mt-4 font-light text-coral-600 dark:text-coral-400">
                            {problem.boxText2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
