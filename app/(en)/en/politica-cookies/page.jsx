import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy of the Nimpher — Soluções Energéticas website.',
  alternates: { canonical: '/en/politica-cookies/', languages: { 'pt-PT': '/politica-cookies/', en: '/en/politica-cookies/' } },
};

export default function CookiesEn() {
  return (
    <>
      <section className="pagehero" style={{ paddingBottom: 32 }}>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>Cookie Policy
          </nav>
          <h1>Cookie Policy</h1>
        </div>
      </section>
      <section className="section section--white" style={{ paddingTop: 48 }}>
        <div className="wrap prose">
          <h2>Which cookies we use</h2>
          <p>
            This website is built to work without tracking cookies. We do not set advertising or
            profiling cookies. Embedded third-party content — such as the Google map on the contact
            page — may set that service&#39;s own cookies, governed by its policies.
          </p>
          <h2>Analytics</h2>
          <p>
            [To be confirmed by Nimpher: if an analytics tool is enabled, this section must
            identify it. Technical recommendation: use cookie-less, privacy-respecting analytics —
            e.g. Vercel Analytics or Plausible — which does not require a consent banner. If Google
            Analytics is used, a prior-consent mechanism must be added.]
          </p>
          <h2>Contact</h2>
          <p>For any question about this policy, contact us at {SITE.email}.</p>
        </div>
      </section>
    </>
  );
}
