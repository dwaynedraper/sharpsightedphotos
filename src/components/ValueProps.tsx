import { homeContent } from '@/content/home';

export default function ValueProps() {
    const { valueProps } = homeContent;

    return (
        <section className="py-24 px-6 bg-navy-50 dark:bg-navy-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-16">
                    {valueProps.headline} <br />
                    <span className="text-cyan-400">{valueProps.headlineAccent}</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {valueProps.cards.map((card, index) => (
                        <div key={index} className="p-8 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800 rounded-sm hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group shadow-lg">
                            {index === 2 && (
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
                            )}
                            <div className="text-4xl mb-6">{card.icon}</div>
                            <h3 className="text-xl font-bold font-serif text-navy-900 dark:text-white mb-4">{card.title}</h3>
                            <p className="text-navy-700 dark:text-navy-50 leading-relaxed font-light">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
