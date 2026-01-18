
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PackagesPage() {
    return (
        <main className= "min-h-screen bg-white dark:bg-navy-900 text-navy-900 dark:text-navy-50 transition-colors duration-300" >
        {/* Header Section */ }
        < header className = "pt-32 pb-20 px-6 bg-navy-50 dark:bg-navy-950 transition-colors" >
            <div className="max-w-7xl mx-auto text-center" >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-navy-900 dark:text-white" >
                    Story Portrait Packages
                        </h1>
                        < p className = "text-xl text-navy-600 dark:text-navy-100 max-w-2xl mx-auto font-light" >
                            Your story deserves to be told with authenticity and depth.
                    </p>
                                </div>
                                </header>

    {/* Discovery Hour Section */ }
    <section className="py-20 px-6 bg-white dark:bg-neutral-900 transition-colors" >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center" >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl" >
                {/* Placeholder for Discovery Hour Image */ }
                < Image
    src = "/images/pkg_discovery.png"
    alt = "Discovery Hour"
    fill
    className = "object-cover"
        />
        </div>
        < div className = "space-y-6" >
            <h2 className="text-3xl font-serif italic text-cyan-600 dark:text-cyan-400" > The Discovery Hour </h2>
                < h3 className = "text-xl font-light uppercase tracking-wide text-navy-900 dark:text-white" > Where the story begins.</h3>
                    < div className = "space-y-4 text-navy-700 dark:text-navy-100 leading-relaxed font-light" >
                        <p>
                        Most photographers ask you to step into their studio, stand on their mark, and smile.I ask you to stay in your world.
                            </p>
                            <p>
                                Every session begins with a Discovery Hour—an intentional time set aside to go deeper than a traditional shoot ever could.Over drinks or coffee, we uncover your story and identify the places where you feel most alive.We leave the generic backdrops behind to shoot where you are most comfortable—whether that is playing chess in the park or sitting in a dark whiskey room in your favorite jacket.
                            </p>
        <p>
                                This isn’t just a meeting, it is the blueprint for your session.By the time we pick up a camera, we aren't strangers anymore, and we aren't in a sterile room.We are in your element, capturing a version of you that is authentic, comfortable, and undeniably real.
                            </p>
        < p className = "border-t border-navy-200 dark:border-navy-800 pt-4 text-sm italic text-navy-500 dark:text-navy-200" >
            A deposit is required to secure this planning time, which is fully credited toward your final invoice.
                            </p>
                </div>
                </div>
                </div>
                </section>

    {/* The Verse Section - Specific Visual Identity */ }
    <section className="py-20 px-6 bg-navy-50 dark:bg-navy-900 border-y border-navy-100 dark:border-navy-800/50 transition-colors" >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse" >
            {/* Text First on Mobile, Image First on Desktop? No, let's alternate text/image visual flow */ }
            < div className = "order-2 md:order-1 space-y-6" >
                <h2 className="text-4xl font-serif text-navy-900 dark:text-white" > The & quot; Verse & quot; </h2>
                    < h3 className = "text-lg text-cyan-600 dark:text-cyan-400 font-light tracking-widest uppercase" > Even a single verse can tell a story.</h3>
                        < div className = "space-y-4 text-navy-700 dark:text-navy-100 leading-relaxed font-light" >
                            <p>
                            The Verse is for the individual who values quality over quantity.It is for the professional, the artist, or the creative who needs a visual update that feels authentic, not manufactured.You don't need the full production of a multi-location shoot, but you refuse to settle for a generic headshot.
                                </p>
                                <p>
                                We treat this as a focused chapter of your narrative.Over a two - hour window, we meet at a single location that speaks to your character.This isn’t a "rush job"—two hours gives us the luxury to slow down, talk, and let your natural demeanor surface.
    </p>
        </div>
        < div className = "bg-white dark:bg-navy-950 p-6 rounded-lg border border-navy-200 dark:border-navy-800 mt-6 shadow-xl transition-colors" >
            <h4 className="text-navy-900 dark:text-white font-semibold mb-4 uppercase text-sm tracking-wider" > Includes: </h4>
                < ul className = "grid sm:grid-cols-2 gap-3 text-sm text-navy-600 dark:text-navy-100 font-light" >
                    <li className="flex items-center gap-2" > <span className="text-cyan-600 dark:text-cyan-500" >▪</span> 2 hour portrait session</li >
                        <li className="flex items-center gap-2" > <span className="text-cyan-600 dark:text-cyan-500" >▪</span> 1 location</li >
                            <li className="flex items-center gap-2" > <span className="text-cyan-600 dark:text-cyan-500" >▪</span> 1 wardrobe change</li >
                                <li className="flex items-center gap-2" > <span className="text-cyan-600 dark:text-cyan-500" >▪</span> 8+ hand edited images</li >
                                    <li className="flex items-center gap-2" > <span className="text-cyan-600 dark:text-cyan-500" >▪</span> Five letter-sized framed prints</li >
                                        <li className="flex items-center gap-2" > <span className="text-cyan-600 dark:text-cyan-500" >▪</span> Online gallery with downloads</li >
                                            <li className="flex items-center gap-2" > <span className="text-cyan-600 dark:text-cyan-500" >▪</span> Delivery within 7 days</li >
                                                </ul>
                                                </div>
                                                </div>
                                                < div className = "order-1 md:order-2 relative w-full max-w-md mx-auto" >
                                                    {/* Frame Shadow for depth on the wall */ }
                                                    < div className = "absolute -inset-4 bg-black/20 blur-2xl opacity-100" />

                                                        {/* The Frame (95% Black, Hard Corners, 20px Border) */ }
                                                        < div className = "relative overflow-hidden bg-[#0d0d0d] p-5 shadow-2xl" >
                                                            {/* Diagonal Reflection Gradient - Behind the Mat */ }
                                                            < div className = "absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                                                                <div className="absolute inset-0 bg-gradient-to-bl from-black/40 via-transparent to-black/60 pointer-events-none" />

                                                                    {/* The Mat (Pure White 40px padding) - On top of gradient */ }
                                                                    < div className = "bg-white p-10 relative z-10" >
                                                                        {/* The Image - Static Grayscale */ }
                                                                        < div className = "relative aspect-[3/4] w-full overflow-hidden grayscale shadow-inner" >
                                                                            <Image
                                        src="/images/pkg_verse.png"
    alt = "The Verse Package"
    fill
    className = "object-cover"
        />
        </div>
    {/* Subtle inner shadow on the mat for depth */ }
    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.08)]" />
        </div>
        </div>
        </div>
        </div>
        </section>

    {/* The Story Section - Hero visual identity */ }
    <section className="relative py-32 px-6 overflow-hidden bg-white dark:bg-navy-900 transition-colors" >
        <div className="absolute inset-0 z-0" >
            <Image
                        src="/images/pkg_story.png"
    alt = "The Story Background"
    fill
    className = "object-cover opacity-10 dark:opacity-20 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/90 dark:from-navy-900 dark:via-navy-900/80 dark:to-navy-900/90 transition-colors" />
            </div>

            < div className = "relative z-10 max-w-7xl mx-auto" >
                <div className="text-center mb-16" >
                    <h2 className="text-5xl md:text-7xl font-serif text-navy-900 dark:text-white mb-4" > The & quot; Story & quot; </h2>
                        < p className = "text-cyan-600 dark:text-cyan-400 text-xl uppercase tracking-widest font-light transition-colors" > Our Signature Experience </p>
                            </div>

                            < div className = "grid lg:grid-cols-2 gap-16 items-start" >
                                <div className="space-y-6 text-lg leading-relaxed text-navy-700 dark:text-navy-50 font-light transition-colors" >
                                    <p className="font-light text-2xl text-navy-900 dark:text-white" >
                                        Your story deserves more than a single verse.It deserves room to breathe, space to unfold, and depth to truly shine.
                            </p>
                                            <p>
                                The Story is our signature experience for clients who want the full impact of a luxury portrait session.This experience blends a cinematic portrait session, a short story film, and a framed hero piece into one cohesive chapter of your life.
                            </p>
        <p>
                                We move at a calm, unhurried pace, explore multiple locations that matter to you, and make space for real moments to surface.You are guided and cared for from planning to final delivery.
                            </p>
        < p className = "italic text-navy-500 dark:text-navy-200 border-l-2 border-cyan-500 pl-4 transition-colors" >
            This collection is never shipped or left at a doorstep.Instead, we sit down together for a private in -person reveal and handoff.Your final pieces are delivered framed and ready to display.
                            </p>
                </div>

                < div className = "bg-white/40 dark:bg-black/40 backdrop-blur-md border border-navy-200 dark:border-white/10 p-8 rounded-xl shadow-2xl transition-colors" >
                    <h4 className="text-navy-900 dark:text-white font-serif text-2xl mb-8 border-b border-navy-100 dark:border-white/10 pb-4" > Collection Includes </h4>
                        < ul className = "space-y-4 text-navy-700 dark:text-navy-50 font-light transition-colors" >
                            <li className="flex items-start gap-3" >
                                <span className="text-cyan-600 dark:text-cyan-400 text-xl" >✦</span>
                                    < span > Up to 6 hours of shooting across multiple locations </span>
                                        </li>
                                        < li className = "flex items-start gap-3" >
                                            <span className="text-cyan-600 dark:text-cyan-400 text-xl" >✦</span>
                                                < span > Unlimited wardrobe changes within the session </span>
                                                    </li>
                                                    < li className = "flex items-start gap-3" >
                                                        <span className="text-cyan-600 dark:text-cyan-400 text-xl" >✦</span>
                                                            < span > 16 + hand edited images </span>
                                                                </li>
                                                                < li className = "flex items-start gap-3" >
                                                                    <span className="text-cyan-600 dark:text-cyan-400 text-xl" >✦</span>
                                                                        < span > Four letter - sized framed prints </span>
                                                                            </li>
                                                                            < li className = "flex items-start gap-3" >
                                                                                <span className="text-cyan-600 dark:text-cyan-400 text-xl" >✦</span>
                                                                                    < span > One hero 13x19 hero print on premium paper </span>
                                                                                        </li>
                                                                                        < li className = "flex items-start gap-3" >
                                                                                            <span className="text-cyan-600 dark:text-cyan-400 text-xl" >✦</span>
                                                                                                < span > One short story film </span>
                                                                                                    </li>
                                                                                                    < li className = "flex items-start gap-3" >
                                                                                                        <span className="text-cyan-600 dark:text-cyan-400 text-xl" >✦</span>
                                                                                                            < span > Private in -person reveal and handoff </span>
                                                                                                                </li>
                                                                                                                < li className = "text-sm text-navy-400 dark:text-navy-300 pt-4 mt-4 border-t border-navy-100 dark:border-white/5 transition-colors" >
                                                                                                                    Delivery is typically within 14 days.Upgraded framing options may extend the timeline.
                                </li>
                                                                                                                        </ul>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                        </section>

    {/* The Saga Section - Premium / Corporate / Legacy visual */ }
    <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 text-navy-900 dark:text-white border-y border-neutral-200 dark:border-neutral-900 transition-colors" >
        <div className="max-w-7xl mx-auto" >
            <div className="grid md:grid-cols-12 gap-12 items-center" >
                <div className="md:col-span-7 space-y-8" >
                    <div>
                    <h2 className="text-6xl font-bold tracking-tighter mb-2 text-navy-900 dark:text-white transition-colors" > The < span className = "text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-200 dark:to-amber-500 transition-colors" >& quot; Saga & quot; </span></h2 >
                        <p className="text-amber-600 dark:text-amber-500/80 font-mono text-sm uppercase tracking-widest font-light transition-colors" > Legacy & Brand Architecture </p>
                            </div>

                            < div className = "prose prose-navy dark:prose-invert prose-lg text-navy-700 dark:text-navy-50 font-light transition-colors" >
                                <p>
                                Some narratives are too vast to be contained by a single binding.When your story outgrows the page, it becomes a Saga.
                                </p>
                                    <p>
                                    The Saga is crafted for the founder whose life and work have merged into one continuous narrative.It is a comprehensive, two - day documentation experience designed to capture the person you are, the entity you have built, and the journey that connects them.
                                </p>
        < p className = "text-navy-950 dark:text-white font-light transition-colors" >
            The result is not just a gallery, but a complete visual and strategic library.You walk away with a cohesive suite of cinematic films, a versatile collection of portraits and environmental imagery, and the strategy to use them.
                                </p>
                </div>

                < div className = "grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-light text-navy-600 dark:text-navy-100 border-t border-neutral-200 dark:border-neutral-800 pt-8 transition-colors" >
                    <div className="space-y-2 transition-colors" >
                        <p className="flex items-center gap-2" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> Two-day immersive brand experience</p >
                            <p className="flex items-center gap-2" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> Comprehensive Brand Discovery Session</p >
                                <p className="flex items-center gap-2 transition-colors" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> Visual Strategy Guide</p >
                                    <p className="flex items-center gap-2 transition-colors" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> 30–40 versatile images</p >
                                        <p className="flex items-center gap-2 transition-colors" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> White-glove delivery & usage guidance</p >
                                            </div>
                                            < div className = "space-y-2 transition-colors" >
                                                <p className="flex items-center gap-2" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> Long-form Feature Film (YouTube/Web)</p>
                                                    < p className = "flex items-center gap-2" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> Brand Story Film (60-120s)</p >
                                                        <p className="flex items-center gap-2 transition-colors" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> &quot;What We Do&quot; Film (60-120s)</p >
                                                            <p className="flex items-center gap-2 transition-colors" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> 10 Vertical Short Films</p >
                                                                <p className="flex items-center gap-2 transition-colors" > <span className="text-amber-600 dark:text-amber-500 font-bold transition-colors" >✓</span> Delivery within 30 days</p >
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    < div className = "md:col-span-5 relative h-[600px] rounded-lg overflow-hidden border border-amber-200 dark:border-amber-900/30 shadow-2xl transition-colors" >
                                                                        <Image
                                src="/images/pkg_saga.png"
    alt = "The Saga Experience"
    fill
    className = "object-cover"
        />
        <div className="absolute inset-0 bg-amber-500/5 dark:bg-amber-900/10 mix-blend-overlay transition-colors" > </div>
            </div>
            </div>
            </div>
            </section>

    {/* Keepsakes Section - 2x2 Grid */ }
    <section className="py-24 px-6 bg-white dark:bg-navy-950 transition-colors" >
        <div className="max-w-7xl mx-auto" >
            <h2 className="text-3xl font-serif text-center mb-16 text-navy-900 dark:text-white transition-colors" > The Keepsakes & Additions </h2>

                < div className = "grid md:grid-cols-2 gap-8" >
                    {/* 1. Heirloom Book */ }
                    < div className = "bg-navy-50 dark:bg-navy-900 p-8 rounded-lg border border-navy-100 dark:border-navy-800 hover:border-cyan-500 items-start transition-colors shadow-lg" >
                        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 transition-colors" > The Heirloom Book </h3>
                            < div className = "h-1 w-12 bg-cyan-600 dark:bg-cyan-500 mb-4 transition-colors" > </div>
                                < p className = "text-navy-700 dark:text-navy-50 leading-relaxed font-light transition-colors" >
                                    A custom - designed, 20 - page layflat hardcover book in 14×11 or 11×14. Every spread opens perfectly flat, so your portraits live uninterrupted, edge to edge.The piece your family reaches for, returns to, and keeps close for years.
                            </p>
                                        </div>

                        {/* 2. Gift Collection */ }
        < div className = "bg-navy-50 dark:bg-navy-900 p-8 rounded-lg border border-navy-100 dark:border-navy-800 hover:border-cyan-500 items-start transition-colors shadow-lg" >
        <h3 className= "text-xl font-bold text-navy-900 dark:text-white mb-2 transition-colors" > The Gift Collection </h3>
            < div className = "h-1 w-12 bg-cyan-600 dark:bg-cyan-500 mb-4 transition-colors" > </div>
                < p className = "text-navy-700 dark:text-navy-50 leading-relaxed font-light transition-colors" >
                    Twenty 8.5×11 portrait prints from your session, delivered unframed on premium Canon photo paper.Larger than traditional prints, made to be shared, framed, and lived with.Presented in an elegant box.
                            </p>
                        </div>

    {/* 3. Fine Art Gift Collection */ }
    <div className="bg-navy-50 dark:bg-navy-900 p-8 rounded-lg border border-navy-100 dark:border-navy-800 hover:border-cyan-500 items-start transition-colors shadow-lg" >
        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 transition-colors" > The Fine Art Collection </h3>
            < div className = "h-1 w-12 bg-cyan-600 dark:bg-cyan-500 mb-4 transition-colors" > </div>
                < p className = "text-navy-700 dark:text-navy-50 leading-relaxed font-light transition-colors" >
                    Twenty 8.5×11 portrait prints on luxury fine art papers from Canson and Hahnemühle.Richer texture, deeper presence, and a finish that feels intentional.Made for gifting and keeping close without needing a gallery wall.
                            </p>
                        </div>

    {/* 4. Custom Media */ }
    <div className="bg-navy-50 dark:bg-navy-900 p-8 rounded-lg border border-navy-100 dark:border-navy-800 hover:border-cyan-500 items-start transition-colors shadow-lg" >
        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 transition-colors" > Custom Media & Access </h3>
            < div className = "h-1 w-12 bg-cyan-600 dark:bg-cyan-500 mb-4 transition-colors" > </div>
                < p className = "text-navy-700 dark:text-navy-50 mb-4 font-light transition-colors" >
                    Beyond our signature collections, we offer a wide range of custom - ordered art pieces to fit your specific space.
                            </p>
                        < ul className = "list-disc list-inside text-navy-600 dark:text-navy-100 space-y-2 text-sm font-light transition-colors" >
                            <li>Gallery Wraps, Canvas, Acrylic & Metal Prints </li>
                                < li > Direct Ordering via Online Gallery Storefront </li>
                                    </ul>
                                    </div>
                                    </div>

                                    < div className = "mt-16 text-center" >
                                        <p className="text-coral-600 dark:text-coral-500 text-sm font-light tracking-widest uppercase transition-colors" >
                                            Don & apos;t let my menu limit your vision.We will bring any idea to life.
    </p>
        </div>
        </div>
        </section>

        < Footer />
        </main>
    );
}
