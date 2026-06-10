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

const PLAUSIBLE_SCRIPT = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT;

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
      description: 'On-location personal branding photographer and portrait studio serving the 121 corridor and greater DFW. Story sessions, corporate headshots, and executive portraits by Dean Draper.',
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
    <html lang="en" suppressHydrationWarning>
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
