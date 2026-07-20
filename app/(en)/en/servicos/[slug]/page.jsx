import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SolutionCta } from '@/components/ContactBits';
import { Icons } from '@/components/Icons';
import { SOLUTIONS, bySlug, SOLUTIONS_EN } from '@/data/solutions';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const en = SOLUTIONS_EN[params.slug];
  if (!en) return {};
  return {
    title: { absolute: en.metaTitle },
    description: en.metaDescription,
    alternates: {
      canonical: `/en/servicos/${params.slug}/`,
      languages: { 'pt-PT': `/servicos/${params.slug}/`, en: `/en/servicos/${params.slug}/` },
    },
    openGraph: { title: en.metaTitle, description: en.metaDescription },
  };
}

export default function SolutionPageEn({ params }) {
  const s = bySlug(params.slug);
  const en = SOLUTIONS_EN[params.slug];
  if (!s || !en) notFound();
  const Ico = Icons[s.icon];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: en.title,
        description: en.metaDescription,
        provider: { '@id': `${SITE.url}/#organizacao` },
        areaServed: 'Braga, Portugal',
        url: `${SITE.url}/en/servicos/${s.slug}/`,
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/en/` },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SITE.url}/en/servicos/` },
          { '@type': 'ListItem', position: 3, name: en.title, item: `${SITE.url}/en/servicos/${s.slug}/` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/en/servicos/">Solutions</Link><span aria-hidden="true">/</span>{en.title}
          </nav>
          <h1>{en.title}</h1>
          <p>{en.intro}</p>
          <div className="hero__actions" style={{ marginTop: 28 }}>
            <Link className="btn btn--amber" href="/en/pedir-orcamento/">Request a quote <span className="arrow" aria-hidden="true">→</span></Link>
            <a className="btn btn--ghost-light" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="prose">
            {en.sections.map((sec) => (
              <div key={sec.h}>
                <h2>{sec.h}</h2>
                <p>{sec.p}</p>
              </div>
            ))}
          </div>
          <SolutionCta lang="en" title={`Interested in ${en.title.toLowerCase()}?`} />
        </div>
      </section>
    </>
  );
}
