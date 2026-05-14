import { homeContent } from '@/content/home';
import TrackedCTA from '@/components/TrackedCTA';

export default function Packages() {
    const { packages } = homeContent;

    return (
        <section id="pricing" className="py-24 px-6 bg-navy-50 dark:bg-neutral-950 border-t border-navy-200 dark:border-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif text-center text-navy-900 dark:text-white mb-20">{packages.headline}</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {packages.items.map((pkg, index) => {
                        const isHighlighted = pkg.isPopular;
                        const borderColor = isHighlighted ? 'border-cyan-500' : (index === 2 ? 'border-coral-500' : 'border-navy-200 dark:border-navy-700');
                        const priceColor = isHighlighted ? 'text-cyan-600 dark:text-cyan-400' : (index === 2 ? 'text-coral-500 dark:text-coral-400' : 'text-navy-500 dark:text-navy-300');
                        const bulletColor = isHighlighted ? 'text-cyan-500' : (index === 2 ? 'text-coral-500' : 'text-cyan-500');

                        return (
                            <div key={index} className={`bg-white dark:bg-navy-900 p-8 border-t-4 ${borderColor} flex flex-col ${isHighlighted ? 'transform md:-translate-y-4 shadow-2xl relative z-10' : 'shadow-md dark:shadow-none'}`}>
                                {isHighlighted && (
                                    <div className="absolute top-0 right-0 bg-cyan-500 text-navy-950 text-xs font-bold px-3 py-1 uppercase tracking-wider">Signature Package</div>
                                )}
                                <h3 className={`text-${isHighlighted ? '3xl' : '2xl'} font-serif text-navy-900 dark:text-white mb-1`}>{pkg.title}</h3>
                                <p className={`${priceColor} text-sm font-light tracking-widest uppercase mb-4`}>{pkg.price}</p>
                                <p className="text-sm text-navy-600 dark:text-navy-100 italic mb-6 min-h-10 font-light">
                                    {pkg.description}
                                </p>
                                <ul className="space-y-4 mb-8 text-navy-800 dark:text-navy-50 text-sm flex-1 font-light">
                                    {pkg.features.map((feature, i) => {
                                        const isSpecial = isHighlighted ? i >= pkg.features.length - 2 : i === pkg.features.length - 1;
                                        return (
                                            <li key={i} className={`flex gap-3 ${isSpecial ? 'font-semibold text-navy-900 dark:text-white' : ''}`}>
                                                <span className={bulletColor}>{isSpecial ? '✦' : '✓'}</span> {feature}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p className="text-xs text-navy-400 dark:text-navy-500 font-light italic text-center pt-4 border-t border-navy-100 dark:border-navy-800">
                                    Your story starts with a conversation.
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <TrackedCTA
                        href={packages.connectionLink}
                        event="connection_call_clicked"
                        section="packages"
                        className="inline-block px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold tracking-widest uppercase text-sm transition-all shadow-xl shadow-cyan-900/20"
                    >
                        Book a Free Connection Call
                    </TrackedCTA>
                </div>

                <p className="text-center text-navy-500 dark:text-navy-400 text-sm mt-10 font-light">
                    {packages.disclaimer}
                </p>
            </div>
        </section>
    );
}
