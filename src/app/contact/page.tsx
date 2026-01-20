import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact Dean Draper - Luxury Story Portraits in DFW',
    description: 'Get in touch for luxury, museum-quality story portraits in Dallas-Fort Worth that happen where you are, when you need.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-navy-900 text-navy-900 dark:text-navy-50 transition-colors duration-300">
            <div className="pt-32 px-6 pb-20 max-w-7xl mx-auto">

                {/* Top Section: QR & Info Split */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">

                    {/* Left Column: QR Code */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6 order-2 md:order-1">
                        <p className="text-lg md:text-xl text-navy-700 dark:text-navy-200 font-light max-w-sm">
                            Reach out in whatever way feels easiest for you. Click or scan the QR code for a direct link to my downloadable contact card.
                        </p>

                        <a
                            href="https://hihello.com/hi/sharpsightedphotos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-block"
                        >
                            <div className="relative p-2 bg-white rounded-2xl border-[5px] border-cyan-500 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-xl">
                                    <Image
                                        src="/images/contact_qr.png"
                                        alt="Scan to contact Dean Draper for Luxury Story Portraits in DFW"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Click to open Contact Card
                            </span>
                        </a>
                    </div>

                    {/* Right Column: Direct Info */}
                    <div className="flex flex-col space-y-8 order-1 md:order-2">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-serif text-navy-900 dark:text-white">
                                Luxury DFW Portraits <br />
                                <span className="italic text-cyan-600 dark:text-cyan-500">wherever you are.</span>
                            </h1>
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold text-navy-800 dark:text-navy-100">Dean Draper</span>
                                <span className="text-lg text-navy-600 dark:text-navy-300 font-light">Founder & Media Expert</span>
                            </div>
                        </div>

                        <p className="text-lg text-navy-700 dark:text-navy-200 font-light leading-relaxed max-w-lg">
                            You deserve photos that do not feel like performance. I create portraits for people who want to be seen clearly, and remembered honestly. We take our time, get comfortable, and build something real together. Let’s turn your story into images you can keep, share, and pass down.                        </p>

                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-wider text-navy-500 dark:text-navy-400 font-semibold">Contact Information</h3>
                            <div className="flex flex-col space-y-2 text-lg font-light">
                                <a href="tel:2142335338" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    (214) 233-5338 <span className="text-sm opacity-70 ml-2">(text is preferred)</span>
                                </a>
                                <a href="mailto:dean@sharpsightedstudio.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    dean@sharpsightedstudio.com
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4 pt-2">
                                <a href="https://instagram.com/sharpsightedstudio" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://linkedin.com/in/dean-draper" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="mailto:dean@sharpsightedstudio.com" className="text-navy-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    <span className="sr-only">Email</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-2xl md:text-3xl font-serif text-cyan-500 font-medium">
                                Stay Sharp. Stay Seen. Stay Human.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Form */}
                <div className="max-w-4xl mx-auto border-t border-navy-100 dark:border-navy-800 pt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-navy-900 dark:text-white mb-4">
                            Ready to make it official?
                        </h2>
                        <p className="text-lg text-navy-600 dark:text-navy-300 font-light">
                            For booking inquiries, please fill out the form below and we&apos;ll get the process started.
                        </p>
                    </div>
                    <ContactForm />
                </div>

            </div>
        </main>
    );
}
