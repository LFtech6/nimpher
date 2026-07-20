import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies do site da Nimpher — Soluções Energéticas.',
  alternates: { canonical: '/politica-cookies/', languages: { 'pt-PT': '/politica-cookies/', en: '/en/politica-cookies/' } },
};

export default function Cookies() {
  return (
    <>
      <section className="pagehero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>Política de Cookies
          </nav>
          <h1>Política de Cookies</h1>
        </div>
      </section>
      <section className="section section--white" style={{ paddingTop: 56 }}>
        <div className="wrap prose">
          <h2>Que cookies utilizamos</h2>
          <p>
            Este site foi construído para funcionar sem cookies de rastreamento. Não instalamos
            cookies de publicidade nem de perfilagem. Conteúdos de terceiros incorporados — como o
            mapa do Google na página de contactos — podem definir cookies próprios desses serviços,
            regidos pelas respetivas políticas.
          </p>
          <h2>Analítica</h2>
          <p>
            [A confirmar pela Nimpher: se for ativada uma ferramenta de analítica, esta secção deve
            identificá-la. Recomendação técnica: usar analítica sem cookies e respeitadora da
            privacidade — por exemplo, Vercel Analytics ou Plausible — que dispensa banner de
            consentimento. Se for usado Google Analytics, é necessário acrescentar um mecanismo de
            consentimento prévio.]
          </p>
          <h2>Contacto</h2>
          <p>Para qualquer questão sobre esta política, contacte-nos através de {SITE.email}.</p>
        </div>
      </section>
    </>
  );
}
