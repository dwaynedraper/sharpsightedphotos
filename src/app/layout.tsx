import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import HubReturnToast from '@/components/HubReturnToast';
import Motion from '@/components/Motion';
import ClickTracker from '@/components/ClickTracker';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const PLAUSIBLE_SCRIPT = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT;

export const metadata: Metadata = {
  metadataBase: new URL('https://sharpsighted.photos'),
  title: {
    template: '%s | Sharp Sighted Photos',
    default: 'Sharp Sighted Photos | Story Portraits, Headshots, and Films in DFW',
  },
  description: 'Story portraits for people. Headshots and films for businesses. On location across Dallas Fort Worth with Dean Draper.',
  keywords: ['Story Portraits', 'Lifestyle Portraits DFW', 'Corporate Headshots DFW', 'Brand Films DFW', 'Testimonial Videos', 'Dean Draper'],
  openGraph: {
    title: 'Sharp Sighted Photos',
    description: 'Story portraits for people. Headshots and films for businesses.',
    url: 'https://sharpsighted.photos',
    siteName: 'Sharp Sighted Photos',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero.jpg', alt: 'Sharp Sighted Photos, story portraits in DFW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sharpsightedstudio.com/#organization',
      name: 'Sharp Sighted Studio',
      legalName: 'Sharp Sighted Studio',
      url: 'https://sharpsightedstudio.com',
      telephone: '+12142335338',
      email: 'dean@sharpsightedstudio.com',
      founder: { '@type': 'Person', name: 'Dean Draper' },
      foundingDate: '2022-07',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sharpsighted.photos/#business',
      name: 'Sharp Sighted Photos',
      legalName: 'Sharp Sighted Studio',
      description: 'On-location story portraits, corporate headshots, and brand films serving the 121 corridor and greater DFW, by Dean Draper.',
      url: 'https://sharpsighted.photos',
      telephone: '+12142335338',
      email: 'dean@sharpsightedstudio.com',
      image: 'https://sharpsighted.photos/images/hero.jpg',
      priceRange: '$$$',
      parentOrganization: { '@id': 'https://sharpsightedstudio.com/#organization' },
      areaServed: [
        'Allen, TX', 'Plano, TX', 'Frisco, TX', 'McKinney, TX',
        'Lewisville, TX', 'The Colony, TX', 'Coppell, TX', 'Roanoke, TX',
        'Denton, TX', 'Grapevine, TX', 'Southlake, TX', 'Colleyville, TX',
        'Westlake, TX',
      ],
      sameAs: [
        'https://sharpsightedstudio.com',
        'https://sharpsighted.media',
        'https://sharpsighted.studio',
        'https://www.instagram.com/sharp_sighted_studio',
        'https://www.facebook.com/sharpsightedstudio',
        'https://www.linkedin.com/in/dean-draper',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {PLAUSIBLE_SCRIPT && <script async src={PLAUSIBLE_SCRIPT} />}
        {PLAUSIBLE_SCRIPT && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
            }}
          />
        )}
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Motion />
        <ClickTracker />
        <Suspense>
          <HubReturnToast />
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
