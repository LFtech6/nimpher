import Link from 'next/link';
import { SolutionCta } from '@/components/ContactBits';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'About Nimpher — Energy Engineering since 2010',
  description:
    'Nimpher is an engineering and services company based in Braga, Portugal, specialised in renewable energy and energy efficiency since 2010. Learn how we work.',
  alternates: { canonical: '/en/sobre/', languages: { 'pt-PT': '/sobre/', en: '/en/sobre/' } },
};

export default function SobreEn() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>About
          </nav>
          <h1>Energy engineering, since {SITE.since}.</h1>
          <p>
            An engineering and services company, based in Braga, Portugal, specialised in renewable
            energy and energy efficiency.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="prose">
            <h2>Who we are</h2>
            <p>
              Nimpher — Soluções Energéticas was founded in {SITE.since}. Along the way, we have
              built a solid client base — from private homes to industrial plants — which is the
              best proof of our quality, responsibility and trustworthiness.
            </p>
            <p>
              We closely follow technological developments and market trends, backed by strong,
              specialised technical training. That is what allows us to present complete turnkey
              solutions: <strong>design, installation and commissioning</strong>, with a single team
              responsible from the first study to system start-up.
            </p>
            <h2>What we do</h2>
            <p>
              Solar photovoltaic and thermal systems, batteries and storage, climate control,
              industrial humidification, solar pumping, industrial automation, power factor
              compensation and energy consulting. Every solution is sized to the real consumption of
              the people who will use it — not to pre-made kits.
            </p>
            <h2>How we work</h2>
            <p>
              We always start with the study: analysing the consumption and the installation before
              proposing any equipment. Then come the design, the installation by a specialised team
              and the commissioning — testing, start-up, licensing and monitoring. And after
              start-up, we stay close, with technical assistance and follow-up.
            </p>
            {/* TODO(Nimpher): team section, certifications, DGEG credentials, licences and
                insurance — to add once confirmed. Nothing on this page is invented. */}
          </div>
          <SolutionCta lang="en" />
        </div>
      </section>
    </>
  );
}
