import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SITE } from '@/data/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Nimpher — Solar Energy & Energy Efficiency in Braga, Portugal',
    template: '%s | Nimpher',
  },
  description:
    'Engineering and installation of solar photovoltaic systems, batteries, climate control and energy efficiency in Braga, Portugal, since 2010. Turnkey solutions for homes, businesses and industry.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nimpher — Energy Solutions',
    url: `${SITE.url}/en/`,
    images: [{ url: '/og-nimpher.jpg', width: 1200, height: 630, alt: 'Nimpher — Energy Solutions, Braga, Portugal' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${SITE.url}/#organizacao`,
      name: 'Nimpher — Soluções Energéticas',
      url: SITE.url,
      logo: `${SITE.url}/logo-nimpher.png`,
      foundingDate: '2010',
      telephone: '+351253672653',
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        postalCode: SITE.address.postalCode,
        addressLocality: SITE.address.city,
        addressCountry: SITE.address.country,
      },
      areaServed: 'Braga, Portugal',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/en/#website`,
      url: `${SITE.url}/en/`,
      name: 'Nimpher',
      inLanguage: 'en',
      publisher: { '@id': `${SITE.url}/#organizacao` },
    },
  ],
};

export default function RootLayoutEn({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header lang="en" />
        <main id="conteudo">{children}</main>
        <Footer lang="en" />
        <WhatsAppFloat lang="en" />
      </body>
    </html>
  );
}
