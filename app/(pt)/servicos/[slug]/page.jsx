import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SolutionCta } from '@/components/ContactBits';
import { Icons } from '@/components/Icons';
import { SOLUTIONS, bySlug } from '@/data/solutions';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = bySlug(params.slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/servicos/${s.slug}/`, languages: { 'pt-PT': `/servicos/${s.slug}/`, en: `/en/servicos/${s.slug}/` } },
    openGraph: { title: s.metaTitle, description: s.metaDescription },
  };
}

export default function SolutionPage({ params }) {
  const s = bySlug(params.slug);
  if (!s) notFound();
  const Ico = Icons[s.icon];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.title,
        description: s.metaDescription,
        provider: { '@id': `${SITE.url}/#organizacao` },
        areaServed: 'Braga, Portugal',
        url: `${SITE.url}/servicos/${s.slug}/`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${SITE.url}/servicos/` },
          { '@type': 'ListItem', position: 3, name: s.title, item: `${SITE.url}/servicos/${s.slug}/` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>
            <Link href="/servicos/">Soluções</Link><span aria-hidden="true">/</span>{s.title}
          </nav>
          <h1>{s.title}</h1>
          <p>{s.intro}</p>
          <div className="hero__actions" style={{ marginTop: 28 }}>
            <Link className="btn btn--amber" href="/pedir-orcamento/">Pedir orçamento <span className="arrow" aria-hidden="true">→</span></Link>
            <a className="btn btn--ghost-light" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="prose">
            {s.sections.map((sec) => (
              <div key={sec.h}>
                <h2>{sec.h}</h2>
                <p>{sec.p}</p>
              </div>
            ))}
          </div>
          <SolutionCta title={`Interessado em ${s.title.toLowerCase()}?`} />
        </div>
      </section>
    </>
  );
}
