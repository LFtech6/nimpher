import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SITE } from '@/data/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Nimpher — Energia Solar e Eficiência Energética em Braga',
    template: '%s | Nimpher',
  },
  description:
    'Engenharia e instalação de sistemas solares fotovoltaicos, baterias, climatização e eficiência energética em Braga, desde 2010. Soluções chave-na-mão para casas, empresas e indústria.',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Nimpher — Soluções Energéticas',
    url: SITE.url,
    // TODO(Nimpher): criar imagem OG 1200×630 a partir de fotografia real
    // e colocar em /public/og-nimpher.jpg
    images: [{ url: '/og-nimpher.jpg', width: 1200, height: 630, alt: 'Nimpher — Soluções Energéticas, Braga' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png' },
};

// JSON-LD: apenas factos verificáveis. Sem avaliações nem ratings inventados.
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
      areaServed: 'Braga, Portugal', // TODO(Nimpher): alargar quando a área de atuação for confirmada
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: 'Nimpher',
      inLanguage: 'pt-PT',
      publisher: { '@id': `${SITE.url}/#organizacao` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
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
        <Header lang="pt" />
        <main id="conteudo">{children}</main>
        <Footer lang="pt" />
        <WhatsAppFloat lang="pt" />
      </body>
    </html>
  );
}
