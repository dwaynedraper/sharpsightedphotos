import { homeContent } from '@/content/home';

export default function Packages() {
    const { packages } = homeContent;

    return (
        <section id="pricing" className="py-24 px-6 bg-navy-50 dark:bg-neutral-950 border-t border-navy-200 dark:border-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif text-center text-navy-900 dark:text-white mb-20">{packages.headline}</h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {packages.items.map((pkg, index) => {
                        const isHighlighted = pkg.isPopular;
                        const borderColor = isHighlighted ? 'border-cyan-500' : (index === 2 ? 'border-coral-500' : 'border-navy-200 dark:border-navy-700');
                        const bulletColor = isHighlighted ? 'text-cyan-500' : (index === 2 ? 'text-coral-500' : 'text-cyan-500');
                        const buttonClass = isHighlighted
                            ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                            : 'border border-navy-300 dark:border-navy-600 text-navy-900 dark:text-white hover:bg-navy-200 dark:hover:bg-navy-800 transition-colors';

                        return (
                            <div key={index} className={`bg-white dark:bg-navy-900 p-8 border-t-4 ${borderColor} flex flex-col ${isHighlighted ? 'transform md:-translate-y-4 shadow-2xl relative z-10' : 'shadow-md dark:shadow-none'}`}>
                                {isHighlighted && (
                                    <div className="absolute top-0 right-0 bg-cyan-500 text-navy-950 text-xs font-bold px-3 py-1 uppercase tracking-wider">Signature Package</div>
                                )}
                                <h3 className={`text-${isHighlighted ? '3xl' : '2xl'} font-serif text-navy-900 dark:text-white mb-2`}>{pkg.title}</h3>
                                {/* <p className={`${index === 2 ? 'text-coral-500' : 'text-cyan-400'} ${isHighlighted ? 'text-2xl' : 'text-lg'} font-bold mb-4`}>{pkg.price}</p> */}
                                <p className="text-sm text-navy-600 dark:text-navy-100 italic mb-6 min-h-[40px] font-light">
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
                                <a href={packages.discoveryLink} className={`block w-full py-3 text-center uppercase text-sm font-bold transition-all ${buttonClass}`}>Select Package</a>
                            </div>
                        );
                    })}

                </div>

                <p className="text-center text-navy-500 dark:text-navy-400 text-sm mt-12 font-light">
                    {packages.disclaimer}
                </p>
            </div>
        </section>
    );
}
