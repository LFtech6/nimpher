import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy and personal data protection policy of the Nimpher — Soluções Energéticas website.',
  alternates: { canonical: '/en/politica-privacidade/', languages: { 'pt-PT': '/politica-privacidade/', en: '/en/politica-privacidade/' } },
  robots: { index: true, follow: true },
};

export default function PrivacidadeEn() {
  return (
    <>
      <section className="pagehero" style={{ paddingBottom: 32 }}>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>Privacy Policy
          </nav>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="section section--white" style={{ paddingTop: 48 }}>
        <div className="wrap prose">
          {/* NOTE: functional draft with markers. Must be reviewed by Nimpher
              (and ideally by legal counsel) before launch. Not legal advice. */}
          <h2>Data controller</h2>
          <p>
            {SITE.legalName} [full legal name and VAT number to be confirmed], with registered
            office at {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city},
            Portugal, reachable at {SITE.email} and {SITE.phoneDisplay}.
          </p>
          <h2>Data collected and purpose</h2>
          <p>
            Through the forms on this website we collect the data you provide — name, phone number,
            email, municipality, customer type, information about the intended solution, message
            and, optionally, your electricity bill — for the sole purpose of replying to your
            contact, study or quote request. The legal bases are pre-contractual steps taken at
            your request (Art. 6(1)(b) GDPR) and your consent (Art. 6(1)(a)).
          </p>
          <h2>Retention</h2>
          <p>
            Data is kept only for as long as necessary to handle your request and any resulting
            contractual relationship, or until you ask for its deletion. [Specific period to be
            defined by Nimpher.]
          </p>
          <h2>Data sharing</h2>
          <p>
            Data is not sold or shared with third parties for marketing purposes. It may be
            processed by technical providers strictly necessary for the operation of the website
            and the delivery of the forms (hosting and form-delivery service), bound by
            confidentiality obligations. [Identify the providers used once configured.]
          </p>
          <h2>Your rights</h2>
          <p>
            Under the GDPR, you may request access to, rectification, restriction, portability or
            erasure of your data, and withdraw your consent, by writing to {SITE.email}. You also
            have the right to lodge a complaint with the Portuguese supervisory authority, CNPD
            (www.cnpd.pt).
          </p>
        </div>
      </section>
    </>
  );
}
