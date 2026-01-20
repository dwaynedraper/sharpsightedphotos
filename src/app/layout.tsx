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
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://instagram.com/sharpsightedstudio',
    'https://linkedin.com/in/dean-draper',
  ],
  priceRange: '$$$',
  description: 'Luxury Story Portraits that happen where you are, when you need. Museum-quality portraits and dynamic media by Dean Draper in DFW.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} antialiased font-sans`}>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
