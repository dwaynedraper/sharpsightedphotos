import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sharp Sighted Photos | Cinematic Portraits & Media',
  description: 'Concierge production house for the unconventional. Museum-quality portraits and dynamic media by Dean Draper.',
  keywords: ['Cinematic Portraits', 'Dean Draper', 'DFW Photography', 'Visual Storytelling'],
  openGraph: {
    title: 'Sharp Sighted Photos',
    description: 'Concierge production house for the unconventional.',
    url: 'https://sharpsighted.photos',
    siteName: 'Sharp Sighted Photos',
    locale: 'en_US',
    type: 'website',
  },
};

import { Providers } from './providers';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} antialiased font-sans`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
