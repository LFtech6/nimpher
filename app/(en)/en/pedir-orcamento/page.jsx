import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { SITE } from '@/data/site';
import { Icons } from '@/components/Icons';

export const metadata = {
  title: 'Request a Quote — Free Study, No Obligation',
  description:
    'Request a quote from Nimpher: we analyse your consumption and reply with a study and a concrete proposal, with no obligation. Solar energy and efficiency in Braga, Portugal.',
  alternates: { canonical: '/en/pedir-orcamento/', languages: { 'pt-PT': '/pedir-orcamento/', en: '/en/pedir-orcamento/' } },
};

const STEPS = [
  'Fill in the form (or call us). If you can, attach your electricity bill — it speeds up the study.',
  'We analyse your consumption and the conditions of your installation.',
  'You receive a study and a concrete proposal, sized to your case. No obligation.',
];

export default function PedirOrcamentoEn() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>Request a quote
          </nav>
          <h1>Request your quote.</h1>
          <p>
            Tell us what you need and we will reply with a study and a concrete proposal —
            sized to your real consumption, with no obligation.
          </p>
          <ol className="qsteps">
            {STEPS.map((s, i) => (
              <li key={i}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap quote-grid">
          <aside className="quote-aside">
            <div className="cinfo cinfo--light">
              <div className="cline">
                <div className="cline__ico"><Icons.phone width={20} height={20} /></div>
                <div>
                  <div className="cline__lab">Prefer to talk now?</div>
                  <a className="cline__val" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
                </div>
              </div>
              <div className="cline">
                <div className="cline__ico cline__ico--wa"><Icons.whatsapp /></div>
                <div>
                  <div className="cline__lab">WhatsApp</div>
                  <a className="cline__val" href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">Send a message</a>
                </div>
              </div>
              <div className="cline">
                <div className="cline__ico"><Icons.mail width={20} height={20} /></div>
                <div>
                  <div className="cline__lab">Email</div>
                  <a className="cline__val" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
            </div>
          </aside>
          <LeadForm lang="en" light idPrefix="quote" />
        </div>
      </section>
    </>
  );
}
