import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata = { title: 'Página não encontrada' };

/* Esta página serve também os antigos URLs da loja que foram removidos sem
   substituto relevante (desembaciadores, carrinho, checkout). Devolve 404,
   que o Google trata de forma equivalente a 410 para efeitos de desindexação. */
export default function NotFound() {
  return (
    <section className="section section--paper" style={{ minHeight: '55vh' }}>
      <div className="wrap" style={{ maxWidth: 640 }}>
        <span className="eyebrow">Erro 404</span>
        <h1 style={{ fontSize: 'clamp(1.9rem,3.6vw,2.6rem)', marginTop: 16 }}>Esta página não existe.</h1>
        <p style={{ color: 'var(--slate)', fontSize: '1.08rem', marginTop: 16 }}>
          A página que procura pode ter sido removida — a antiga loja online, por exemplo, deixou
          de existir. As nossas soluções e serviços estão em <Link href="/servicos/" style={{ textDecoration: 'underline' }}>Soluções</Link>.
        </p>
        <div className="hero__actions" style={{ marginTop: 28 }}>
          <Link className="btn btn--amber" href="/servicos/">Ver soluções <span className="arrow" aria-hidden="true">→</span></Link>
          <Link className="btn btn--ghost" href="/">Página inicial</Link>
        </div>
        <p style={{ color: 'var(--slate)', fontSize: '0.95rem', marginTop: 28 }}>
          Precisa de ajuda? Ligue-nos: <a href={SITE.phoneHref} style={{ textDecoration: 'underline' }}>{SITE.phoneDisplay}</a>
        </p>
      </div>
    </section>
  );
}
