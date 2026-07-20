import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FlowPanel from '@/components/FlowPanel';
import ClientsMarquee from '@/components/ClientsMarquee';
import Faq from '@/components/Faq';
import { Icons } from '@/components/Icons';
import { SITE } from '@/data/site';
import { SOLUTIONS, SOLUTIONS_EN } from '@/data/solutions';

export const metadata = {
  title: 'Nimpher — Solar Energy & Energy Efficiency in Braga, Portugal',
  description:
    'Solar panels, batteries, climate control and energy efficiency in Braga, Portugal. Turnkey study, design, installation and commissioning since 2010. Request a quote.',
  alternates: { canonical: '/en/', languages: { 'pt-PT': '/', en: '/en/' } },
};

const SELECTOR = [
  {
    icon: 'home',
    title: 'Residential',
    text: 'Cut your home\u2019s electricity bill and protect yourself from rising energy prices.',
    href: '/en/servicos/solar-residencial/',
  },
  {
    icon: 'briefcase',
    title: 'Business',
    text: 'Control your company\u2019s energy costs with self-consumption and efficiency.',
    href: '/en/servicos/solar-empresas-industria/',
  },
  {
    icon: 'tractor',
    title: 'Industry & Agriculture',
    text: 'Photovoltaic projects, automation and solar pumping sized for demanding operations.',
    href: '/en/servicos/solar-empresas-industria/',
  },
];

const STEPS = [
  { n: 'PHASE 01', t: 'Study', p: 'We analyse your consumption and your installation. You can send us your electricity bill for an initial analysis.' },
  { n: 'PHASE 02', t: 'Design', p: 'Technical sizing and a concrete proposal, with equipment selected for your case.' },
  { n: 'PHASE 03', t: 'Installation', p: 'Execution by a specialised team, in compliance with the applicable standards.' },
  { n: 'PHASE 04', t: 'Commissioning & follow-up', p: 'Testing, start-up, licensing and monitoring — we hand over the system producing.' },
];

const PILLARS = [
  { t: 'Engineering, not reselling', p: 'We size every system from your real consumption — not pre-made kits.' },
  { t: 'Turnkey', p: 'A single team responsible for design, installation and commissioning.' },
  { t: `Since ${SITE.since}, in Braga`, p: 'More than a decade of installations for homes, businesses and industry.' },
  { t: 'Follow-up', p: 'We hand over a working, monitored system — and stay close afterwards.' },
];

/* FEATURED PROJECTS — real photos from the current site;
   TODO(Nimpher): replace with 3 real projects (photo, municipality, kWp). */
const PROJECTS = [
  {
    img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=356&iH=398&oX=0&oY=0&cW=356&cH=398/fotovoltaicos5.jpg',
    alt: 'Photovoltaic installation by Nimpher',
    meta: 'Photovoltaics',
    title: 'Photovoltaic installation',
  },
  {
    img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/automacaoindustrial_nimpher.png',
    alt: 'Industrial automation electrical panel installed by Nimpher',
    meta: 'Industrial automation',
    title: 'Industrial automation',
  },
  {
    img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=368&iH=407&oX=0&oY=6&cW=368&cH=395/pisoradiante_nimpher.png',
    alt: 'Electric radiant floor installation by Nimpher',
    meta: 'Climate control',
    title: 'Electric radiant floor',
  },
];

export default function HomeEn() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero__grid">
            <div>
              <span className="eyebrow eyebrow--dark">Engineering · Solar energy · Efficiency — Braga, Portugal</span>
              <h1 style={{ marginTop: 18 }}>
                Your energy bill can be <em>much lower.</em>
              </h1>
              <p className="hero__lead">
                Solar photovoltaic systems, batteries, climate control and energy efficiency — designed,
                installed and commissioned by the same engineering team. In Braga since {SITE.since}.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--amber" href="/en/pedir-orcamento/">Request a quote <span className="arrow" aria-hidden="true">→</span></Link>
                <Link className="btn btn--ghost-light" href="/en/servicos/">See solutions</Link>
              </div>
              <div className="hero__stats">
                <div className="stat"><b>Since {SITE.since}</b><span>In the market</span></div>
                <div className="stat"><b>Turnkey</b><span>Design → Installation → Commissioning</span></div>
                {/* TODO(Nimpher): third stat with a real fact (installations / kWp installed) */}
              </div>
            </div>
            <FlowPanel lang="en" />
          </div>
        </div>
      </section>

      {/* CUSTOMER SELECTOR */}
      <section className="section section--paper" aria-labelledby="h-seletor">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Tailor-made solutions</span>
            <h2 id="h-seletor">Who is your solution for?</h2>
          </Reveal>
          <div className="selector">
            {SELECTOR.map((s, i) => {
              const Ico = Icons[s.icon];
              return (
                <Reveal as="div" key={s.title} delay={i * 0.06}>
                  <Link className="selcard" href={s.href} style={{ height: '100%' }}>
                    <span className="selcard__ico"><Ico /></span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span className="textlink">See solutions →</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section section--white" aria-labelledby="h-solucoes">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What we do</span>
            <h2 id="h-solucoes">Eight solutions, one engineering team.</h2>
            <p>From study to commissioning, we cover the full cycle of your energy solution.</p>
          </Reveal>
          <div className="solgrid">
            {SOLUTIONS.map((s, i) => {
              const Ico = Icons[s.icon];
              const en = SOLUTIONS_EN[s.slug];
              return (
                <Reveal as="article" key={s.slug} className="card" delay={(i % 4) * 0.06}>
                  <span className="card__ico"><Ico /></span>
                  <h3>{en.title}</h3>
                  <p>{en.short}</p>
                  <div className="chips">
                    {en.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                  </div>
                  <div className="card__links">
                    <Link className="textlink" href={`/en/servicos/${s.slug}/`}>Learn more →</Link>
                    <Link className="textlink textlink--amber" href="/en/pedir-orcamento/">Request a study</Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY NIMPHER */}
      <section className="section section--paper" aria-labelledby="h-porque">
        <div className="wrap why">
          <Reveal>
            <span className="eyebrow">Why Nimpher</span>
            <h2 id="h-porque" style={{ marginTop: 14, fontSize: 'clamp(1.9rem,3.4vw,2.75rem)' }}>
              In-house engineering, from the first study to start-up.
            </h2>
            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar" key={p.t}>
                  <h3><Icons.check /> {p.t}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="why__figure">
            <img
              src="https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=356&iH=398&oX=0&oY=0&cW=356&cH=398/fotovoltaicos5.jpg"
              alt="Nimpher technicians installing photovoltaic panels"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--navy" aria-labelledby="h-processo">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow eyebrow--dark">How we work</span>
            <h2 id="h-processo">Turnkey, in four phases.</h2>
            <p>A single responsible team — no intermediaries.</p>
          </Reveal>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="div" key={s.n} className="step" delay={i * 0.06}>
                <div className="step__num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </div>
          <div className="steps-cta">
            <Link className="btn btn--amber" href="/en/pedir-orcamento/">Request a study <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section--white" aria-labelledby="h-projetos">
        <div className="wrap">
          <Reveal className="sec-head sec-head--row">
            <div>
              <span className="eyebrow">Projects</span>
              <h2 id="h-projetos" style={{ marginTop: 14 }}>Real installations, real results.</h2>
            </div>
            <Link className="btn btn--ghost" href="/en/projetos/">See all projects <span className="arrow" aria-hidden="true">→</span></Link>
          </Reveal>
          <div className="projgrid">
            {PROJECTS.map((p, i) => (
              <Reveal as="article" key={p.title} className="proj" delay={i * 0.06}>
                <div className="proj__ph"><img src={p.img} alt={p.alt} loading="lazy" /></div>
                <div className="proj__body">
                  <span className="proj__meta">{p.meta}</span>
                  <h3>{p.title}</h3>
                  <span className="placeholder-tag">Municipality, client and capacity — to be confirmed by Nimpher</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <ClientsMarquee lang="en" />

      {/* INCENTIVES */}
      <section className="section section--paper" aria-labelledby="h-apoios">
        <div className="wrap incent">
          <Reveal>
            <span className="eyebrow">Grants and incentives</span>
            <h2 id="h-apoios" style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>Current grants and incentives.</h2>
            <p style={{ marginTop: 14 }}>
              Portugal periodically runs support programmes for solar energy and energy efficiency,
              for both households and companies. Conditions change through the year — we tell you
              what applies to your case at the time of the study.
            </p>
          </Reveal>
          <Reveal className="incent__cta">
            <Link className="btn btn--ghost" href="/en/contactos/">Talk to a specialist <span className="arrow" aria-hidden="true">→</span></Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white" aria-labelledby="h-faq">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Frequently asked questions</span>
            <h2 id="h-faq">Before deciding, get clarity.</h2>
          </Reveal>
          <Reveal><Faq lang="en" /></Reveal>
        </div>
      </section>

      {/* FINAL CONVERSION — CTA band (the full form lives at /en/pedir-orcamento/) */}
      <section className="section section--navy" id="contacto" aria-labelledby="h-contacto">
        <div className="wrap bigcta">
          <Reveal>
            <span className="eyebrow eyebrow--dark">Talk to us</span>
            <h2 id="h-contacto" style={{ marginTop: 12, fontSize: 'clamp(1.8rem,3.2vw,2.5rem)' }}>
              Shall we size your solution?
            </h2>
            <p>Tell us about your case — we reply with a study and a concrete proposal, with no obligation.</p>
          </Reveal>
          <Reveal className="bigcta__actions">
            <Link className="btn btn--amber" href="/en/pedir-orcamento/">Request a quote <span className="arrow" aria-hidden="true">→</span></Link>
            <a className="btn btn--ghost-light" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            <a className="btn btn--ghost-light" href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
