import Link from 'next/link';
import MiniForm from '@/components/MiniForm';
import { ContactInfo } from '@/components/ContactBits';

export const metadata = {
  title: 'Contact — Nimpher, Braga, Portugal',
  description:
    'Contact Nimpher in Braga, Portugal: phone +351 253 672 653, email geral@nimpher.com, WhatsApp or form. Rua Doutor Eduardo Sá Malheiro 85/89, 4705-267 Braga.',
  alternates: { canonical: '/en/contactos/', languages: { 'pt-PT': '/contactos/', en: '/en/contactos/' } },
};

export default function ContactosEn() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>Contact
          </nav>
          <h1>Talk to us.</h1>
          <p>
            Phone, WhatsApp, email or form — whoever answers, you will always be talking to
            someone who knows the subject.
          </p>
        </div>
      </section>

      <section className="section section--paper" id="contacto">
        <div className="wrap">
          <div className="contactsplit">
            <div>
              <ContactInfo lang="en" light />
              <div className="quotehint">
                <p><strong>Need a quote?</strong> Use the dedicated form — with two or three extra details, the study gets faster.</p>
                <Link className="textlink" href="/en/pedir-orcamento/">Go to the quote request →</Link>
              </div>
            </div>
            <MiniForm lang="en" idPrefix="contact" />
          </div>

          <div className="mapbox">
            <iframe
              title="Nimpher location in Braga, Portugal"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Rua%20Doutor%20Eduardo%20S%C3%A1%20Malheiro%2085%2C%204705-267%20Braga&z=15&output=embed"
              style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(.25) contrast(1.05)' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
