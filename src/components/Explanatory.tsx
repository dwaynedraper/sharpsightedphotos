import { homeContent } from '@/content/home';

export default function Explanatory() {
    const { explanatory } = homeContent;

    return (
        <section className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif text-navy-900 dark:text-white">
                    {explanatory.headline} <br />
                    <span className="text-coral-500">{explanatory.headlineAccent}</span>
                </h2>
                <div className="h-1 w-24 bg-coral-500 mx-auto" />
                <p className="text-xl text-navy-900 dark:text-navy-50 leading-relaxed max-w-3xl mx-auto font-light">
                    {explanatory.p1}
                </p>
                <p className="text-navy-700 dark:text-navy-100 leading-relaxed max-w-3xl mx-auto font-light">
                    {explanatory.p2}
                </p>
                <p className="font-serif text-2xl text-navy-900 dark:text-white italic pt-4 font-light">
                    {explanatory.emphasis}
                </p>
            </div>
        </section>
    );
}
