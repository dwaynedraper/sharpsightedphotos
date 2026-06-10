'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true); // SSR hydration guard — intentional setState in effect
    }, []);

    if (!mounted) {
        return <div className="w-8 h-8" />; // Placeholder to avoid hydration mismatch
    }

    // Cycle System → Light → Dark → System. `theme` is the preference
    // ('system' included); the icon shows the current choice.
    const next = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    const label = `Theme: ${theme ?? 'system'}. Tap for ${next}.`;

    return (
        <button
            onClick={() => setTheme(next)}
            className="p-2 rounded-full hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors text-cyan-500 dark:text-white"
            aria-label={label}
            title={label}
        >
            {theme === 'system' ? (
                // Monitor icon — follow system
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            ) : theme === 'dark' ? (
                // Sun Icon
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
            ) : (
                // Moon Icon
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}
