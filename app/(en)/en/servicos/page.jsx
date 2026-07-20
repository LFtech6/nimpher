import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SolutionCta } from '@/components/ContactBits';
import { Icons } from '@/components/Icons';
import { SOLUTIONS, SOLUTIONS_EN } from '@/data/solutions';

export const metadata = {
  title: 'Solar Energy & Energy Efficiency Solutions',
  description:
    'Residential and industrial solar, batteries, EV charging, energy efficiency, climate control, solar pumping and industrial automation. Turnkey in Braga, Portugal, since 2010.',
  alternates: { canonical: '/en/servicos/', languages: { 'pt-PT': '/servicos/', en: '/en/servicos/' } },
};

export default function ServicosEn() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>Solutions
          </nav>
          <h1>Energy solutions, end to end.</h1>
          <p>
            Eight areas of work, one engineering team — from the study of your consumption to the
            commissioning of the system. No shelves, no pre-made kits: every solution is sized to
            your case.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <div className="solgrid">
            {SOLUTIONS.map((s, i) => {
              const Ico = Icons[s.icon];
              const en = SOLUTIONS_EN[s.slug];
              return (
                <Reveal as="article" key={s.slug} className="card" delay={(i % 4) * 0.06}>
                  <span className="card__ico"><Ico /></span>
                  <h3>{en.title}</h3>
                  <p>{en.short}</p>
                  <div className="chips">{en.chips.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
                  <div className="card__links">
                    <Link className="textlink" href={`/en/servicos/${s.slug}/`}>Learn more →</Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <SolutionCta lang="en" />
        </div>
      </section>
    </>
  );
}
