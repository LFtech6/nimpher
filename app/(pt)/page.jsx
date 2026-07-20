import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FlowPanel from '@/components/FlowPanel';
import ClientsMarquee from '@/components/ClientsMarquee';
import Faq from '@/components/Faq';
import { Icons } from '@/components/Icons';
import { SITE, CTA } from '@/data/site';
import { SOLUTIONS } from '@/data/solutions';

export const metadata = {
  title: 'Nimpher — Energia Solar e Eficiência Energética em Braga',
  description:
    'Painéis solares, baterias, climatização e eficiência energética em Braga. Estudo, projeto, instalação e comissionamento chave-na-mão, desde 2010. Peça um orçamento.',
  alternates: { canonical: '/', languages: { 'pt-PT': '/', en: '/en/' } },
};

const SELECTOR = [
  {
    icon: 'home',
    title: 'Residencial',
    text: 'Reduza a fatura da sua casa e proteja-se dos aumentos do preço da energia.',
    href: '/servicos/solar-residencial/',
  },
  {
    icon: 'briefcase',
    title: 'Empresas',
    text: 'Controle os custos de energia do seu negócio com autoconsumo e eficiência.',
    href: '/servicos/solar-empresas-industria/',
  },
  {
    icon: 'tractor',
    title: 'Indústria e Agrícola',
    text: 'Projetos fotovoltaicos, automação e bombagem solar dimensionados para operações exigentes.',
    href: '/servicos/solar-empresas-industria/',
  },
];

const STEPS = [
  { n: 'FASE 01', t: 'Estudo', p: 'Analisamos os seus consumos e a sua instalação. Pode enviar-nos a fatura de eletricidade para uma análise inicial.' },
  { n: 'FASE 02', t: 'Projeto', p: 'Dimensionamento técnico e proposta concreta, com equipamentos selecionados para o seu caso.' },
  { n: 'FASE 03', t: 'Instalação', p: 'Execução por equipa especializada, com cumprimento das normas aplicáveis.' },
  { n: 'FASE 04', t: 'Comissionamento e acompanhamento', p: 'Ensaios, arranque, licenciamento e monitorização — entregamos o sistema a produzir.' },
];

const PILLARS = [
  { t: 'Engenharia, não revenda', p: 'Dimensionamos cada sistema com base nos seus consumos reais — não em pacotes pré-feitos.' },
  { t: 'Chave-na-mão', p: 'Uma única equipa responsável pelo projeto, instalação e comissionamento.' },
  { t: `Desde ${SITE.since}, em Braga`, p: 'Mais de uma década de instalações para casas, empresas e indústria.' },
  { t: 'Acompanhamento', p: 'Entregamos o sistema a funcionar, monitorizado, e continuamos por perto.' },
];

/* PROJETOS EM DESTAQUE
   TODO(Nimpher): substituir por 3 projetos reais (fotografia, concelho, tipo de
   cliente e potência em kWp). Até lá, usam-se as fotografias reais existentes
   no site atual, com etiqueta visível de "dados a confirmar". */
const PROJECTS = [
  {
    img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=356&iH=398&oX=0&oY=0&cW=356&cH=398/fotovoltaicos5.jpg',
    alt: 'Instalação fotovoltaica realizada pela Nimpher',
    meta: 'Fotovoltaico',
    title: 'Instalação fotovoltaica',
  },
  {
    img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/automacaoindustrial_nimpher.png',
    alt: 'Quadro elétrico de automação industrial instalado pela Nimpher',
    meta: 'Automação industrial',
    title: 'Automação industrial',
  },
  {
    img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=368&iH=407&oX=0&oY=6&cW=368&cH=395/pisoradiante_nimpher.png',
    alt: 'Instalação de piso radiante elétrico pela Nimpher',
    meta: 'Climatização',
    title: 'Piso radiante elétrico',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero__grid">
            <div>
              <span className="eyebrow eyebrow--dark">Engenharia · Energia solar · Eficiência — Braga</span>
              <h1 style={{ marginTop: 18 }}>
                A sua fatura de energia pode ser <em>muito mais baixa.</em>
              </h1>
              <p className="hero__lead">
                Sistemas solares fotovoltaicos, baterias, climatização e eficiência energética — projetados,
                instalados e comissionados pela mesma equipa de engenharia. Desde {SITE.since}, em Braga.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--amber" href={CTA.href}>{CTA.label} <span className="arrow" aria-hidden="true">→</span></Link>
                <Link className="btn btn--ghost-light" href="/servicos/">Ver soluções</Link>
              </div>
              <div className="hero__stats">
                <div className="stat"><b>Desde {SITE.since}</b><span>No mercado</span></div>
                <div className="stat"><b>Chave-na-mão</b><span>Projeto → Instalação → Comissionamento</span></div>
                {/* TODO(Nimpher): terceiro indicador com facto real, ex.:
                    <div className="stat"><b>XXX+</b><span>Instalações realizadas</span></div>
                    ou <b>X,X MWp</b><span>Potência instalada</span> */}
              </div>
            </div>
            <FlowPanel lang="pt" />
          </div>
        </div>
      </section>

      {/* SELETOR DE CLIENTE */}
      <section className="section section--paper" aria-labelledby="h-seletor">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Soluções à medida</span>
            <h2 id="h-seletor">Para quem é a sua solução?</h2>
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
                    <span className="textlink">Ver soluções →</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="section section--white" aria-labelledby="h-solucoes">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">O que fazemos</span>
            <h2 id="h-solucoes">Oito soluções, uma só equipa de engenharia.</h2>
            <p>Do estudo ao comissionamento, cobrimos todo o ciclo da sua solução energética.</p>
          </Reveal>
          <div className="solgrid">
            {SOLUTIONS.map((s, i) => {
              const Ico = Icons[s.icon];
              return (
                <Reveal as="article" key={s.slug} className="card" delay={(i % 4) * 0.06}>
                  <span className="card__ico"><Ico /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <div className="chips">
                    {s.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                  </div>
                  <div className="card__links">
                    <Link className="textlink" href={`/servicos/${s.slug}/`}>Saber mais →</Link>
                    <Link className="textlink textlink--amber" href="/pedir-orcamento/">Pedir estudo</Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORQUÊ A NIMPHER */}
      <section className="section section--paper" aria-labelledby="h-porque">
        <div className="wrap why">
          <Reveal>
            <span className="eyebrow">Porquê a Nimpher</span>
            <h2 id="h-porque" style={{ marginTop: 14, fontSize: 'clamp(1.9rem,3.4vw,2.75rem)' }}>
              Engenharia própria, do primeiro estudo ao arranque.
            </h2>
            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar" key={p.t}>
                  <h3><Icons.check /> {p.t}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
            {/* TODO(Nimpher): certificações/credenciações (DGEG, alvará, seguros).
                Quando confirmadas, acrescentar aqui uma linha de selos/badges. */}
          </Reveal>
          <Reveal className="why__figure">
            {/* TODO(Nimpher): substituir por fotografia real da equipa em obra
                (ficheiro local otimizado, ex.: /public/equipa-nimpher.webp) */}
            <img
              src="https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=356&iH=398&oX=0&oY=0&cW=356&cH=398/fotovoltaicos5.jpg"
              alt="Técnicos da Nimpher a instalar painéis fotovoltaicos"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section section--navy" aria-labelledby="h-processo">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow eyebrow--dark">Como trabalhamos</span>
            <h2 id="h-processo">Chave-na-mão, em quatro fases.</h2>
            <p>Uma única equipa responsável — sem intermediários.</p>
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
            <Link className="btn btn--amber" href="/pedir-orcamento/">Pedir estudo <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="section section--white" aria-labelledby="h-projetos">
        <div className="wrap">
          <Reveal className="sec-head sec-head--row">
            <div>
              <span className="eyebrow">Projetos</span>
              <h2 id="h-projetos" style={{ marginTop: 14 }}>Instalações reais, resultados reais.</h2>
            </div>
            <Link className="btn btn--ghost" href="/projetos/">Ver todos os projetos <span className="arrow" aria-hidden="true">→</span></Link>
          </Reveal>
          <div className="projgrid">
            {PROJECTS.map((p, i) => (
              <Reveal as="article" key={p.title} className="proj" delay={i * 0.06}>
                <div className="proj__ph"><img src={p.img} alt={p.alt} loading="lazy" /></div>
                <div className="proj__body">
                  <span className="proj__meta">{p.meta}</span>
                  <h3>{p.title}</h3>
                  <span className="placeholder-tag">Concelho, cliente e potência — a confirmar pela Nimpher</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <ClientsMarquee lang="pt" />

      {/* APOIOS E INCENTIVOS */}
      <section className="section section--paper" aria-labelledby="h-apoios">
        <div className="wrap incent">
          <Reveal>
            <span className="eyebrow">Apoios e incentivos</span>
            <h2 id="h-apoios" style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>Apoios e incentivos em vigor.</h2>
            <p style={{ marginTop: 14 }}>
              Existem periodicamente programas de apoio à energia solar e à eficiência energética em Portugal,
              para particulares e empresas. As condições mudam ao longo do ano — dizemos-lhe o que se aplica
              ao seu caso no momento do estudo.
            </p>
          </Reveal>
          <Reveal className="incent__cta">
            <Link className="btn btn--ghost" href="/contactos/">Falar com um especialista <span className="arrow" aria-hidden="true">→</span></Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white" aria-labelledby="h-faq">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2 id="h-faq">Antes de decidir, esclareça.</h2>
          </Reveal>
          <Reveal><Faq lang="pt" /></Reveal>
        </div>
      </section>

      {/* CONVERSÃO FINAL — faixa de CTA (o formulário completo vive em /pedir-orcamento/) */}
      <section className="section section--navy" id="contacto" aria-labelledby="h-contacto">
        <div className="wrap bigcta">
          <Reveal>
            <span className="eyebrow eyebrow--dark">Fale connosco</span>
            <h2 id="h-contacto" style={{ marginTop: 12, fontSize: 'clamp(1.8rem,3.2vw,2.5rem)' }}>
              Vamos dimensionar a sua solução.
            </h2>
            <p>Conte-nos o seu caso — respondemos com um estudo e uma proposta concreta, sem compromisso.</p>
          </Reveal>
          <Reveal className="bigcta__actions">
            <Link className="btn btn--amber" href="/pedir-orcamento/">{CTA.label} <span className="arrow" aria-hidden="true">→</span></Link>
            <a className="btn btn--ghost-light" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            <a className="btn btn--ghost-light" href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
