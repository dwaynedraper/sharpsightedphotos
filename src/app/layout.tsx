import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HubReturnToast from '@/components/HubReturnToast';

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

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  title: {
    template: '%s | Sharp Sighted Photos',
    default: 'Sharp Sighted Photos | Luxury Story Portraits in DFW',
  },
  description: 'Luxury story portraits and concierge photography for people who don\'t fit templates. On-location, on your schedule, in DFW.',
  keywords: ['Luxury Portrait Photography', 'Story Portraits', 'DFW Photographer', 'Dean Draper', 'On-Location Portraits', 'Corporate Headshots DFW'],
  openGraph: {
    title: 'Sharp Sighted Photos',
    description: 'Luxury story portraits for people who don\'t fit templates.',
    url: 'https://sharpsighted.photos',
    siteName: 'Sharp Sighted Photos',
    locale: 'en_US',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sharp Sighted Photos',
  image: 'https://sharpsighted.photos/images/hero.jpg',
  '@id': 'https://sharpsighted.photos',
  url: 'https://sharpsighted.photos',
  telephone: '+12142335338',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Dallas-Fort Worth',
    addressRegion: 'TX',
    postalCode: '',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7767,
    longitude: -96.797,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://instagram.com/sharpsightedstudio',
    'https://linkedin.com/in/dean-draper',
  ],
  priceRange: '$$$',
  description: 'Luxury story portraits that happen where you are, when you need. Museum-quality portraits and dynamic media by Dean Draper in DFW.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={`${PLAUSIBLE_DOMAIN},sharp-sighted-network`}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} antialiased font-sans`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Suspense>
            <HubReturnToast />
          </Suspense>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
