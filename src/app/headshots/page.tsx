import { Metadata } from 'next';
import Image from 'next/image';

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cld = (publicId: string, w = 1200) =>
    `https://res.cloudinary.com/${CLOUD}/image/upload/w_${w},f_auto,q_auto/${publicId}`;

export const metadata: Metadata = {
    title: 'Corporate Headshots in DFW | Sharp Sighted Photos',
    description: 'Premium corporate headshots and editorial portraits for North Texas firms. We come to you. Clean, consistent, and ready to deploy in days.',
    openGraph: {
        title: 'Corporate Headshots in DFW | Sharp Sighted Photos',
        description: 'Premium corporate headshots and editorial portraits for North Texas firms. We come to you. Clean, consistent, and ready to deploy in days.',
        url: 'https://sharpsighted.photos/headshots',
        siteName: 'Sharp Sighted Photos',
        locale: 'en_US',
        type: 'website',
    },
};

const BOOKING_LINK = 'https://sharpsightedphotos.sproutstudio.com/book/connection-call-booking';

const standardIncluded = [
    'Mobile studio setup at your location',
    'Professional lighting, backdrop, and direction',
    'Two to three final edited headshots per person',
    'Facial retouching included on every final image, so you look like your best self on your best day',
    'Three to five business day delivery',
    'Files sized for LinkedIn, web, and print',
];

const featuredIncluded = [
    'Everything in the Standard Set',
    'Wardrobe change allowance (up to 10 minutes)',
    'Environmental editorial portraits with props and context (at your workspace, behind your station, holding the tools of your work)',
    'Three to five final edited editorial images',
    'Facial retouching included on every final image',
    'Files prepared for LinkedIn, web, print, press, and presentation',
];

const bulkRows = [
    { size: '1 to 15', rate: 'Standard rate, $70 to $90 per person' },
    { size: '16 to 29', rate: '$5 off per person across the entire roster' },
    { size: '30 plus', rate: '$10 off per person across the entire roster' },
];

const addOns = [
    { name: 'Rush delivery', detail: '$150. Edited images in 48 hours.' },
    { name: 'Background swap to brand colors', detail: 'Quoted per project.' },
    { name: 'Second location', detail: '$150 to $250 depending on distance.' },
    { name: 'On-site reshoot for new hires within 12 months', detail: 'Discounted hourly rate.' },
];

const faqItems = [
    {
        q: 'How much disruption is this for the team?',
        a: 'About 10 to 15 minutes per person for the Standard Set. 25 to 35 minutes for Featured Set sessions. We set up a small mobile studio in a meeting room or open space. People come in between calls.',
    },
    {
        q: 'What about people who hate getting photographed?',
        a: 'Most of them, honestly. Direction is part of what you are paying for. We make it fast, easy, and the final image looks like the version of them they would want their clients to meet. Facial retouching is included so they look like their best self on their best day.',
    },
    {
        q: 'Can you match the look of someone who was photographed elsewhere?',
        a: 'Yes. Lighting, background, and tone can be matched closely enough that the final set still feels cohesive. Existing team members can also be reshot to standardize the entire roster.',
    },
    {
        q: 'Do you tether for client review?',
        a: 'Yes. Every shoot day includes tethered review on a 15-inch monitor, so wardrobe and direction can be confirmed in real time.',
    },
    {
        q: 'What’s the editorial portrait actually like?',
        a: 'Environmental. We shoot you doing your work, in your space, with the tools and props that tell your story. A single wardrobe change is included with up to 10 minutes to switch. Additional outfits or locations are available for an upgrade.',
    },
    {
        q: 'Do you handle larger teams?',
        a: 'Yes. Teams of 30 or more get tiered per-person pricing and the option to split across two days at a single setup fee.',
    },
    {
        q: 'Do you travel outside the 121 corridor?',
        a: 'Yes. Travel beyond a 30-mile radius from Denton incurs a small travel fee, quoted in advance. Allen, Plano, Frisco, Lewisville, Grapevine, Southlake, and Colleyville are within standard service area.',
    },
    {
        q: 'How fast can I get the images back?',
        a: 'Three to five business days standard. 48-hour rush available for $150.',
    },
];

export default function HeadshotsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-navy-900 text-navy-900 dark:text-navy-50 transition-colors duration-300">

            {/* HERO */}
            <section className="relative min-h-screen flex flex-col md:block overflow-hidden">
                {/* Background Image — Upload to Cloudinary folder "Headshots", public_id "headshots_hero" */}
                <div className="relative h-[55vh] w-full md:absolute md:inset-0 md:h-full z-0">
                    <Image
                        src={cld('Headshots/headshots_hero', 1920)}
                        alt="Corporate headshot session — Sharp Sighted Photos, DFW"
                        fill
                        sizes="100vw"
                        className="object-cover object-top"
                        priority
                    />
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/60 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 bg-white dark:bg-navy-900 md:bg-transparent md:dark:bg-transparent md:h-screen md:flex md:items-center">
                    <div className="w-full px-6 py-20 text-center md:w-3/5 md:text-left md:py-32 md:px-20 md:pt-32">
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <p className="text-cyan-600 dark:text-cyan-400 md:text-cyan-400 font-light tracking-[0.25em] uppercase text-xs md:text-sm">
                                For when professionalism leads.
                            </p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.95] text-navy-900 dark:text-white md:text-white drop-shadow-2xl">
                                Corporate Headshots <br />
                                <span className="italic text-cyan-600 dark:text-cyan-400 md:text-cyan-400">With Presence.</span>
                            </h1>
                            <p className="max-w-2xl mx-auto md:mx-0 text-navy-700 dark:text-navy-200 md:text-navy-50 text-lg md:text-xl font-light leading-relaxed drop-shadow-xl">
                                Stories need to be told for most photos. When professionalism matters more, I do that too.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-6">
                                <a
                                    href={BOOKING_LINK}
                                    className="inline-flex items-center justify-center px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white transition-all duration-300 rounded-sm shadow-2xl font-bold tracking-widest uppercase text-sm"
                                >
                                    Book a discovery call
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-navy-200 dark:border-white/30 md:border-white/40 text-navy-900 dark:text-white md:text-white hover:bg-white/10 transition-all duration-300 rounded-sm font-bold tracking-widest uppercase text-sm"
                                >
                                    See pricing
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TWO WAYS TO SHOW UP */}
            <section className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-cyan-600 dark:text-cyan-400 font-light tracking-[0.25em] uppercase text-xs mb-4">Sharp Sighted Photos offers both.</p>
                        <h2 className="text-3xl md:text-5xl font-serif text-navy-900 dark:text-white">Two ways to show up.</h2>
                    </div>

                    <div className="grid md:grid-cols-2">

                        {/* Standard Set */}
                        <div className="flex flex-col gap-5 p-10 md:p-12 lg:p-16 border border-navy-200 dark:border-navy-800 md:border-r-0">
                            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-navy-400 dark:text-navy-500">The Standard Set</p>
                            <h3 className="text-2xl md:text-3xl font-serif text-navy-900 dark:text-white leading-snug">
                                The cohesive team look.
                            </h3>
                            <p className="text-navy-700 dark:text-navy-100 font-light leading-relaxed">
                                Most teams need clean, consistent headshots that look like one firm. Same lighting. Same backdrop. Same polish. For everyone on the roster.
                            </p>
                        </div>

                        {/* Featured Set */}
                        <div className="flex flex-col gap-5 p-10 md:p-12 lg:p-16 bg-navy-50 dark:bg-navy-950 border border-t-4 border-navy-200 dark:border-navy-800 border-t-cyan-500">
                            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-600 dark:text-cyan-400">The Featured Set</p>
                            <h3 className="text-2xl md:text-3xl font-serif text-navy-900 dark:text-white leading-snug">
                                Plus the portrait that carries weight.
                            </h3>
                            <p className="text-navy-700 dark:text-navy-100 font-light leading-relaxed">
                                Some leaders need more. A portrait that works on LinkedIn and an editorial image that lives on the About page, in the press feature, on the keynote slide.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* PROBLEM + RETOUCHING — split layout with image stack */}
            <section className="py-24 px-6 bg-navy-50 dark:bg-neutral-900 transition-colors">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">

                        {/* Image stack — desktop only */}
                        {/* Upload to Cloudinary: folder "Headshots", public_id "headshots_value" · 1200w JPG */}
                        <div className="hidden md:block relative">
                            <div className="absolute inset-0 rotate-3 bg-white dark:bg-navy-800 shadow-md rounded-sm" />
                            <div className="absolute inset-0 -rotate-1 bg-navy-200 dark:bg-navy-700 shadow-sm rounded-sm" />
                            <div className="relative aspect-4/5 overflow-hidden rounded-sm shadow-2xl border-4 border-white dark:border-navy-950">
                                <Image
                                    src={cld('Headshots/headshots_value')}
                                    alt="Sharp Sighted Photos corporate headshot — consistent professional lighting, DFW"
                                    fill
                                    sizes="50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Two content blocks */}
                        <div className="space-y-10">

                            {/* Problem */}
                            <div className="space-y-5">
                                <h2 className="text-2xl md:text-4xl font-serif text-navy-900 dark:text-white leading-tight">
                                    Your team page should not feel like a yearbook.
                                </h2>
                                <p className="text-navy-700 dark:text-navy-100 font-light leading-relaxed">
                                    Most team pages are built one photographer at a time. One person joined in 2021. Another in 2023. Each one shot in a different studio, on a different day, with different lighting. The result reads like a yearbook, not a brand.
                                </p>
                                <p className="font-light text-navy-900 dark:text-white leading-relaxed pl-5 border-l-4 border-cyan-500">
                                    We come to you. We light it the same way for every face. We deliver a complete, cohesive set that looks like one firm. Because it is.
                                </p>
                            </div>

                            <div className="h-px bg-navy-200 dark:bg-navy-800" />

                            {/* Retouching */}
                            <div className="space-y-5">
                                <h2 className="text-2xl md:text-3xl font-serif text-navy-900 dark:text-white leading-tight">
                                    Your best self on your best day.
                                </h2>
                                <ul className="space-y-3 text-navy-700 dark:text-navy-100 font-light">
                                    {[
                                        'Skin softened, never plastic',
                                        'Stray hairs cleaned',
                                        'Glasses glare reduced',
                                        'Wardrobe lint removed',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="text-cyan-500 shrink-0 text-sm">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-serif italic text-cyan-600 dark:text-cyan-400 text-lg pt-1">
                                    Included in every package. No upsells, no surprises.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 px-6 bg-navy-50 dark:bg-neutral-900 transition-colors">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-16">
                        A simple three-step process.
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-linear-to-r from-navy-200 via-cyan-500 to-navy-200 dark:from-navy-800 dark:via-cyan-900 dark:to-navy-800 z-0" />

                        {/* Step 1 */}
                        <div className="relative z-10 bg-navy-50 dark:bg-neutral-900">
                            <div className="w-24 h-24 mx-auto bg-white dark:bg-neutral-950 border-2 border-navy-200 dark:border-navy-800 rounded-full flex items-center justify-center mb-8 text-3xl font-serif text-navy-900 dark:text-white shadow-xl">
                                1
                            </div>
                            <h3 className="text-xl font-bold font-serif text-center text-navy-900 dark:text-white mb-2">Discovery Call</h3>
                            <p className="text-center text-cyan-500 dark:text-cyan-400 text-sm font-light uppercase tracking-widest mb-6">15 Minutes</p>
                            <p className="text-navy-700 dark:text-navy-50 text-center leading-relaxed font-light">
                                A 15-minute conversation. Team size, timeline, look, logistics. We map the day before we ever pick up a camera.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 bg-navy-50 dark:bg-neutral-900">
                            <div className="w-24 h-24 mx-auto bg-white dark:bg-neutral-950 border-2 border-cyan-500/50 dark:border-cyan-700/50 rounded-full flex items-center justify-center mb-8 text-3xl font-serif text-cyan-600 dark:text-cyan-400 shadow-xl shadow-cyan-900/10">
                                2
                            </div>
                            <h3 className="text-xl font-bold font-serif text-center text-navy-900 dark:text-white mb-2">Headshot Day</h3>
                            <p className="text-center text-cyan-500 dark:text-cyan-400 text-sm font-light uppercase tracking-widest mb-6">On Site</p>
                            <p className="text-navy-700 dark:text-navy-50 text-center leading-relaxed font-light">
                                I arrive 90 minutes before the first session to set up a full mobile studio in your conference room or open space. Each person spends 10 to 15 minutes in front of the camera for the Standard Set. Featured Set sessions run 25 to 35 minutes per person. Most teams of 10 are wrapped in three to four hours. Larger teams can split across two days at a single setup fee.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 bg-navy-50 dark:bg-neutral-900">
                            <div className="w-24 h-24 mx-auto bg-white dark:bg-neutral-950 border-2 border-coral-500/50 dark:border-coral-700/50 rounded-full flex items-center justify-center mb-8 text-3xl font-serif text-coral-600 dark:text-coral-400 shadow-xl shadow-coral-900/10">
                                3
                            </div>
                            <h3 className="text-xl font-bold font-serif text-center text-navy-900 dark:text-white mb-2">Delivery</h3>
                            <p className="text-center text-coral-500 dark:text-coral-400 text-sm font-light uppercase tracking-widest mb-6">3 to 5 Business Days</p>
                            <p className="text-navy-700 dark:text-navy-50 text-center leading-relaxed font-light">
                                Edited images delivered in three to five business days. Rush available. Files arrive named, sized, and ready for LinkedIn, your website, and print. Facial retouching included on every final image.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section id="pricing" className="py-24 px-6 bg-white dark:bg-navy-950 border-t border-navy-100 dark:border-neutral-900 transition-colors">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-serif text-navy-900 dark:text-white mb-4">
                            Honest, upfront pricing.
                        </h2>
                        <p className="text-lg text-navy-600 dark:text-navy-200 font-light max-w-2xl mx-auto">
                            No hidden fees. No mystery quotes. The numbers are right here.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Standard Set Card */}
                        <article className="bg-navy-50 dark:bg-navy-900 p-8 md:p-10 border-t-4 border-navy-300 dark:border-navy-700 flex flex-col shadow-lg dark:shadow-none">
                            {/* Upload to Cloudinary folder "Headshots", public_id "headshots_pricing_standard" */}
                            <div className="relative w-full aspect-3/4 mb-6 overflow-hidden rounded-sm">
                                <Image
                                    src={cld('Headshots/headshots_pricing_standard')}
                                    alt="Corporate team headshot session — Sharp Sighted Photos Standard Set"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-cover"
                                />
                            </div>
                            <header className="mb-6">
                                <h3 className="text-3xl font-serif text-navy-900 dark:text-white mb-2">The Standard Set.</h3>
                                <p className="text-cyan-600 dark:text-cyan-400 text-xl font-semibold">$600 setup + $70 to $90 per person</p>
                                <p className="text-sm text-navy-600 dark:text-navy-200 italic mt-2 font-light">
                                    Per-person rate scales with number of selects and complexity. Most teams land at $80 per person.
                                </p>
                            </header>

                            <div className="mb-8 flex-1">
                                <h4 className="text-sm uppercase tracking-widest text-navy-700 dark:text-navy-100 font-semibold mb-4">What&apos;s included</h4>
                                <ul className="space-y-3 text-navy-800 dark:text-navy-50 text-sm font-light">
                                    {standardIncluded.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-cyan-500 shrink-0">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-navy-200 dark:border-navy-800 pt-6 mb-6">
                                <p className="text-xs uppercase tracking-widest text-navy-500 dark:text-navy-300 font-semibold mb-2">Best for</p>
                                <p className="text-navy-700 dark:text-navy-100 text-sm font-light leading-relaxed">
                                    Team headshot days. New hire onboarding photos. Website refreshes. Annual updates.
                                </p>
                            </div>

                            <a
                                href={BOOKING_LINK}
                                className="block w-full py-4 text-center uppercase text-sm font-bold tracking-widest border border-navy-300 dark:border-navy-600 text-navy-900 dark:text-white hover:bg-navy-200 dark:hover:bg-navy-800 transition-colors"
                            >
                                Book a discovery call
                            </a>
                        </article>

                        {/* Featured Set Card */}
                        <article className="bg-white dark:bg-navy-900 p-8 md:p-10 border-t-4 border-cyan-500 flex flex-col shadow-2xl md:-translate-y-4 relative">
                            <div className="absolute top-0 right-0 bg-cyan-500 text-navy-950 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                Featured
                            </div>

                            {/* Upload to Cloudinary folder "Headshots", public_id "headshots_pricing_featured" */}
                            <div className="relative w-full aspect-3/4 mb-6 overflow-hidden rounded-sm">
                                <Image
                                    src={cld('Headshots/headshots_pricing_featured')}
                                    alt="Environmental editorial portrait — Sharp Sighted Photos Featured Set"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-cover "
                                />
                            </div>

                            <header className="mb-6">
                                <h3 className="text-3xl font-serif text-navy-900 dark:text-white mb-2">The Featured Set.</h3>
                                <p className="text-cyan-600 dark:text-cyan-400 text-xl font-semibold">
                                    Standard pricing plus $250 to $350 per person upgrade.
                                </p>
                                <p className="text-cyan-600 dark:text-cyan-400 text-base font-semibold mt-1">
                                    Or $895 all-in for a single executive.
                                </p>
                                <p className="text-sm text-navy-600 dark:text-navy-200 italic mt-2 font-light">
                                    Includes everything in the Standard Set, plus a 20-minute environmental editorial sitting and three to five final editorial images.
                                </p>
                            </header>

                            <div className="mb-8 flex-1">
                                <h4 className="text-sm uppercase tracking-widest text-navy-700 dark:text-navy-100 font-semibold mb-4">What&apos;s included</h4>
                                <ul className="space-y-3 text-navy-800 dark:text-navy-50 text-sm font-light">
                                    {featuredIncluded.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-cyan-500 shrink-0">✦</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-navy-200 dark:border-navy-800 pt-6 mb-4">
                                <p className="text-xs uppercase tracking-widest text-navy-500 dark:text-navy-300 font-semibold mb-2">Best for</p>
                                <p className="text-navy-700 dark:text-navy-100 text-sm font-light leading-relaxed">
                                    Founders. Principals. Practice leads. Top-producing agents. The people whose face is part of the brand. Team days where one or two leaders need the editorial layer and the rest need the standard.
                                </p>
                            </div>

                            <p className="text-xs text-navy-500 dark:text-navy-300 italic font-light leading-relaxed mb-6">
                                Note. Real estate agents who want exterior editorial portraits at a listing or open home can add a second location. Travel fees apply.
                            </p>

                            <a
                                href={BOOKING_LINK}
                                className="block w-full py-4 text-center uppercase text-sm font-bold tracking-widest bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
                            >
                                Book a discovery call
                            </a>
                        </article>

                    </div>
                </div>
            </section>

            {/* BULK PRICING */}
            <section className="py-24 px-6 bg-navy-50 dark:bg-neutral-950 border-t border-navy-100 dark:border-neutral-900 transition-colors">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-serif text-navy-900 dark:text-white mb-6">
                            Built for firms of 30 or more.
                        </h2>
                        <p className="text-lg text-navy-700 dark:text-navy-100 font-light max-w-3xl mx-auto leading-relaxed">
                            Larger rosters get a dedicated rate structure. The setup amortizes across more people, and that savings gets passed along. Larger firms also get the option to split the day across two visits with a single setup fee, which keeps everyone&apos;s calendar workable.
                        </p>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden sm:block bg-white dark:bg-navy-900 shadow-xl">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-cyan-500">
                                    <th className="text-left p-6 text-sm uppercase tracking-widest font-semibold text-navy-700 dark:text-navy-100">Team Size</th>
                                    <th className="text-left p-6 text-sm uppercase tracking-widest font-semibold text-navy-700 dark:text-navy-100">Per-Person Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bulkRows.map((row, i) => (
                                    <tr key={i} className="border-b border-navy-100 dark:border-navy-800 last:border-b-0">
                                        <td className="p-6 text-navy-900 dark:text-white font-serif text-lg">{row.size}</td>
                                        <td className="p-6 text-navy-700 dark:text-navy-100 font-light">{row.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="sm:hidden space-y-4">
                        {bulkRows.map((row, i) => (
                            <div key={i} className="bg-white dark:bg-navy-900 p-6 border-l-4 border-cyan-500 shadow-lg">
                                <p className="text-xs uppercase tracking-widest text-navy-500 dark:text-navy-300 font-semibold mb-1">Team Size</p>
                                <p className="text-navy-900 dark:text-white font-serif text-xl mb-3">{row.size}</p>
                                <p className="text-xs uppercase tracking-widest text-navy-500 dark:text-navy-300 font-semibold mb-1">Per-Person Rate</p>
                                <p className="text-navy-700 dark:text-navy-100 font-light">{row.rate}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-6 md:p-8 bg-white dark:bg-navy-900 border-l-4 border-coral-500 shadow-md">
                        <p className="text-xs uppercase tracking-widest text-coral-600 dark:text-coral-400 font-semibold mb-2">
                            Multi-day option for 30+ teams
                        </p>
                        <p className="text-navy-700 dark:text-navy-100 font-light leading-relaxed">
                            Spread the shoot across two days. One $600 setup fee covers both. Reduces calendar pressure on your end and ensures every person gets the same calm, focused experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* ADD-ONS */}
            <section className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-16">
                        Add-Ons
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {addOns.map((item, i) => (
                            <div key={i} className="bg-navy-50 dark:bg-navy-950 p-6 rounded-sm border border-navy-100 dark:border-navy-800 hover:border-cyan-500 transition-colors">
                                <h3 className="text-lg font-serif text-navy-900 dark:text-white mb-2">{item.name}</h3>
                                <div className="h-px w-10 bg-cyan-500 mb-3" />
                                <p className="text-navy-700 dark:text-navy-100 font-light leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FIRST-TIME OFFER */}
            <section className="py-20 px-6 bg-linear-to-br from-cyan-600 to-cyan-800 dark:from-cyan-800 dark:to-navy-950 transition-colors">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <p className="text-xs uppercase tracking-[0.3em] font-light mb-4 text-cyan-100">First-Time Client Offer</p>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                        Your first booking. 50 percent off setup.
                    </h2>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed text-cyan-50">
                        New clients who book before June 30 receive 50 percent off the $600 setup fee. A simple way to make the first step easier without giving the work away.
                    </p>
                    <div className="pt-8">
                        <a
                            href={BOOKING_LINK}
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-cyan-700 hover:bg-cyan-50 transition-all duration-300 rounded-sm shadow-2xl font-bold tracking-widest uppercase text-sm"
                        >
                            Claim the offer
                        </a>
                    </div>
                </div>
            </section>

            {/* FEATURED SET DEEP DIVE */}
            <section className="py-24 px-6 bg-navy-50 dark:bg-neutral-950 transition-colors">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Upload to Cloudinary folder "Headshots", public_id "headshots_featured_deepdive" */}
                        <div className="order-2 md:order-1">
                            <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm shadow-2xl">
                                <Image
                                    src={cld('Headshots/headshots_featured_deepdive')}
                                    alt="Environmental editorial portrait — DFW executive at work, Sharp Sighted Photos"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 md:order-2 space-y-6">
                            <p className="text-cyan-600 dark:text-cyan-400 font-light tracking-[0.25em] uppercase text-xs">
                                The Featured Set Deep Dive
                            </p>
                            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 dark:text-white leading-tight">
                                Why two portraits, one day.
                            </h2>
                            <div className="space-y-5 text-lg text-navy-800 dark:text-navy-50 font-light leading-relaxed">
                                <p>
                                    A LinkedIn headshot answers one question. Who is this person.
                                </p>
                                <p>
                                    An editorial portrait answers a different one. What does this person actually do.
                                </p>
                                <p className="font-serif italic text-2xl text-cyan-600 dark:text-cyan-400 py-2">
                                    Both matter. The first earns the click. The second earns the trust.
                                </p>
                                <p>
                                    The Featured Set was built for the people whose face is the brand. The founder photographed at the workbench. The financial advisor at the conference table. The architect with rolled drawings. The agent at the threshold of a listing. Real props. Real environment. Real story.
                                </p>
                                <p>
                                    Same day as the team. One efficient shoot. Two distinct image sets, ready to deploy across every channel that matters.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-center text-navy-900 dark:text-white mb-16">
                        FAQ
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="group bg-navy-50 dark:bg-neutral-900 rounded-sm overflow-hidden border border-navy-200 dark:border-neutral-800">
                                <summary className="flex justify-between items-center gap-6 p-6 cursor-pointer list-none text-navy-900 dark:text-white font-light hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    <span>{item.q}</span>
                                    <span className="transition-transform group-open:rotate-180 text-xs text-navy-400 shrink-0">▼</span>
                                </summary>
                                <div className="px-6 pb-6 text-navy-700 dark:text-navy-100 leading-relaxed font-light">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-32 px-6 bg-navy-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 text-center transition-colors">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-navy-900 dark:text-white leading-tight">
                        Ready to make your team page <br />
                        <span className="text-cyan-500">look like one firm?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-navy-800 dark:text-navy-50 max-w-2xl mx-auto font-light leading-relaxed">
                        Book a 15-minute discovery call. We will walk through team size, timeline, and which set is right for your firm. No pressure, no pitch. Just a conversation.
                    </p>
                    <div className="pt-6">
                        <a
                            href={BOOKING_LINK}
                            className="inline-flex items-center justify-center px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white transition-all duration-300 rounded-sm shadow-2xl shadow-cyan-900/20 font-bold tracking-widest uppercase text-sm"
                        >
                            Book a discovery call
                        </a>
                    </div>
                    <p className="font-serif italic text-xl text-cyan-600 dark:text-cyan-400 pt-12">
                        Stay Sharp. Stay Seen. Stay Human.
                    </p>
                </div>
            </section>

        </main>
    );
}
