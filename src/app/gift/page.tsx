import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portrait Gift Cards',
    description: 'Give a story portrait session in DFW. Verse and Story gift cards from Sharp Sighted Photos, with framed prints included. Founding rates through December 25, 2026.',
    alternates: { canonical: '/gift' },
};

const REQUEST_LINK =
    'mailto:dean@sharpsightedstudio.com?subject=Gift%20Card%20Request&body=' +
    encodeURIComponent('Your name:\nRecipient name:\nThe Verse or The Story:\nPrinted card or digital card:\nAnything I should know about them:\n');

const cards = [
    {
        name: 'The Verse',
        price: '$900',
        line: 'A focused chapter, in one place that feels like them.',
        items: [
            'The Discovery Hour, an unhurried conversation about who they are',
            'A 2-hour session at one location',
            '2 outfits',
            '10 hand-edited unique images',
            'A framed triptych: three letter-sized prints chosen to hang together',
            'Story cards: every image as a 4×6 print, in a box',
            'Online gallery with downloads',
        ],
    },
    {
        name: 'The Story',
        price: '$1,700',
        line: 'Room to breathe, across the places that tell their story.',
        items: [
            'The Discovery Hour, an unhurried conversation about who they are',
            'Up to 6 hours across multiple locations',
            'Unlimited outfits within the session',
            '20 hand-edited unique images',
            'Four framed letter-sized prints and a framed 13×19 hero print',
            'Story cards: every image as a 4×6 print, in a box',
            'A private, in-person reveal',
        ],
    },
];

const steps = [
    { title: 'Request a card', text: 'Send me the details. Tell me who it is for and whether you want a printed or a digital card.' },
    { title: 'I confirm and send a payment link', text: 'Gift cards are paid in full, plus Texas sales tax. The card is made once payment clears.' },
    { title: 'They receive it', text: 'Printed cards are made on fine art paper and delivered by December 18. Digital cards can go out as late as Christmas morning.' },
    { title: 'They book their session', text: 'It starts with the Discovery Hour. The session happens anytime through March 31, 2027.' },
];

export default function GiftPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-navy-900 text-navy-900 dark:text-navy-50 transition-colors duration-300">
            <header className="pt-32 pb-16 px-6 bg-navy-50 dark:bg-navy-950 transition-colors">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-cyan-700 dark:text-cyan-400 font-semibold tracking-[0.25em] uppercase text-sm mb-4">Portrait Gift Cards</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-navy-900 dark:text-white mb-6">
                        Some gifts get used up. This one gets framed.
                    </h1>
                    <p className="text-xl text-navy-700 dark:text-navy-100 max-w-2xl mx-auto font-normal leading-relaxed">
                        Give someone a story portrait session in Dallas–Fort Worth. Every card includes the hand-edited images and framed prints they will hang on their wall.
                    </p>
                    <p className="text-base text-navy-700 dark:text-navy-200 max-w-2xl mx-auto font-medium mt-6">
                        Founding rates through December 25, 2026. Only 10 cards this season.
                    </p>
                </div>
            </header>

            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {cards.map((card) => (
                        <article key={card.name} className="p-8 md:p-10 border-2 border-navy-200 dark:border-navy-700 rounded-sm flex flex-col">
                            <h2 className="text-3xl font-serif text-navy-900 dark:text-white mb-2">{card.name}</h2>
                            <p className="text-navy-700 dark:text-navy-100 font-normal mb-4">{card.line}</p>
                            <p className="text-2xl font-semibold text-cyan-700 dark:text-cyan-400 mb-6">
                                {card.price} <span className="text-base font-medium text-navy-600 dark:text-navy-200">plus tax</span>
                            </p>
                            <ul className="space-y-3 text-base font-normal text-navy-800 dark:text-navy-50 flex-1">
                                {card.items.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 shrink-0">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
                <p className="max-w-3xl mx-auto text-center text-sm font-medium text-navy-600 dark:text-navy-200 mt-8">
                    A unique image means a new angle, distance, or framing. Three camera adjustments in the same spot and outfit count as one image.
                </p>
            </section>

            <section className="py-20 px-6 bg-navy-50 dark:bg-navy-950 transition-colors">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-12">How it works</h2>
                    <ol className="space-y-6">
                        {steps.map((step, i) => (
                            <li key={step.title} className="flex gap-5">
                                <span className="shrink-0 w-10 h-10 rounded-full border-2 border-cyan-600 dark:border-cyan-400 flex items-center justify-center font-semibold text-cyan-700 dark:text-cyan-400">{i + 1}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-1">{step.title}</h3>
                                    <p className="text-navy-700 dark:text-navy-100 font-normal leading-relaxed">{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-serif text-navy-900 dark:text-white">Ready to give one?</h2>
                    <p className="text-lg text-navy-700 dark:text-navy-100 font-normal">
                        Email me, or call or text (214) 233-5338.
                    </p>
                    <a
                        href={REQUEST_LINK}
                        className="inline-flex items-center justify-center px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white transition-all duration-300 rounded-sm shadow-xl font-bold tracking-widest uppercase text-sm"
                    >
                        Request a gift card
                    </a>
                    <p className="text-sm text-navy-600 dark:text-navy-200 font-medium pt-6 max-w-2xl mx-auto leading-relaxed">
                        Gift cards are paid in full and are good for one session of the type shown. They are not refundable. Sessions take place in the Dallas–Fort Worth area by March 31, 2027.
                    </p>
                    <p className="font-serif italic text-xl text-cyan-600 dark:text-cyan-400 pt-8">
                        Stay Sharp. Stay Seen. Stay Human.
                    </p>
                </div>
            </section>
        </main>
    );
}
