'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Gallery', href: '/gallery' },
        { name: 'Packages', href: '/packages' },
        { name: 'Contact', href: '/contact' },
    ];

    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Show background if scrolled OR if not on home page
    const showBackground = scrolled || !isHome;

    return (
        <nav className={`fixed w-full z-50 px-6 py-6 transition-all duration-300 ${showBackground ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center transition-colors">
                <Link href="/" className="font-sans text-sm md:text-2xl font-semibold tracking-tighter text-cyan-500 hover:text-cyan-400 dark:text-white uppercase transition-colors whitespace-nowrap">
                    Sharp Sighted Photos
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8 text-sm font-medium tracking-widest uppercase">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-all duration-200 text-cyan-500 dark:text-white hover:font-bold dark:hover:text-cyan-400 ${pathname === link.href ? 'font-bold' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pl-4 border-l border-navy-200 dark:border-navy-700">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-navy-900 dark:text-white p-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white/98 dark:bg-navy-950/98 backdrop-blur-xl z-40 md:hidden transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-3xl font-bold tracking-widest uppercase transition-all duration-200 text-cyan-500 dark:text-white hover:font-extrabold dark:hover:text-cyan-400`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
