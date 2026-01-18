import Link from 'next/link';
import { homeContent } from '@/content/home';

export default function Footer() {
    const { footer } = homeContent;

    return (
        <footer className="py-16 px-6 bg-white dark:bg-navy-990 border-t border-navy-100 dark:border-navy-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-center md:text-left">
                    <div className="font-sans text-xl font-bold tracking-tighter text-navy-900 dark:text-white uppercase mb-2">
                        Sharp Sighted Photos
                    </div>
                    <p className="text-cyan-600 dark:text-cyan-400 font-sans font-light italic text-lg">
                        {footer.tagline}
                    </p>
                </div>

                <div className="flex gap-8 text-xs font-light tracking-widest uppercase text-navy-600 dark:text-navy-300">
                    <Link href="/gallery" className="hover:text-cyan-500 transition-colors">Gallery</Link>
                    <Link href="/packages" className="hover:text-cyan-500 transition-colors">Packages</Link>
                    <Link href="/contact" className="hover:text-cyan-500 transition-colors">Contact</Link>
                </div>

                <div className="text-navy-500 text-[10px] tracking-widest uppercase font-light">
                    &copy; {new Date().getFullYear()} {footer.copyright}
                </div>
            </div>
        </footer>
    );
}
