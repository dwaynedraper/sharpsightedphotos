import { homeContent } from '@/content/home';

export default function FAQ() {
    const { faq } = homeContent;

    return (
        <section className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-16">
                    {faq.headline}
                </h2>

                <div className="space-y-4">
                    {faq.items.map((item, index) => (
                        <details key={index} className="group bg-navy-50 dark:bg-neutral-900 rounded-sm overflow-hidden border border-navy-200 dark:border-neutral-800">
                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-navy-900 dark:text-white font-light hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                <span>{item.q}</span>
                                <span className="transition-transform group-open:rotate-180 text-xs text-navy-400">▼</span>
                            </summary>
                            <div className="px-6 pb-6 text-navy-700 dark:text-navy-100 leading-relaxed font-light">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
