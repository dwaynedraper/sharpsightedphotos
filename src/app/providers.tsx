'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
    // System-default with live OS day/night follow. next-themes handles the
    // no-FOUC head script, prefers-color-scheme resolution, and the
    // matchMedia listener — the Sharp Sighted default behavior.
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
