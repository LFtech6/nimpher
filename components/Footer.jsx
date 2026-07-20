import Link from 'next/link';
import { SITE } from '../data/site';
import { SOLUTIONS, SOLUTIONS_EN } from '../data/solutions';
import { T, prefix } from '../data/i18n';

export default function Footer({ lang = 'pt' }) {
  const t = T[lang];
  const p = prefix(lang);
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link href={p || '/'} className="footer__brand" aria-label={t.brandAria}>
              <img src="/logo-nimpher.png" alt="Nimpher" width="264" height="83" />
            </Link>
            <p className="footer__desc">{t.footer.desc}</p>
          </div>
          <div>
            <h4>{t.footer.solucoes}</h4>
            {SOLUTIONS.map((s) => (
              <Link key={s.slug} href={`${p}/servicos/${s.slug}/`}>
                {lang === 'en' ? SOLUTIONS_EN[s.slug].nav : s.nav}
              </Link>
            ))}
          </div>
          <div>
            <h4>{t.footer.empresa}</h4>
            <Link href={`${p}/projetos/`}>{t.footer.projetos}</Link>
            <Link href={`${p}/sobre/`}>{t.footer.sobre}</Link>
            <Link href={`${p}/contactos/`}>{t.footer.contactos}</Link>
            <Link href={`${p}/pedir-orcamento/`}>{t.footer.orcamento}</Link>
          </div>
          <div>
            <h4>{t.footer.contacto}</h4>
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <p style={{ fontSize: '0.95rem', marginTop: 10 }}>
              {SITE.address.street}<br />
              {SITE.address.postalCode} {SITE.address.city}
            </p>
          </div>
        </div>
        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}
            {SITE.nif ? ` · NIF ${SITE.nif}` : ` · ${t.footer.nifTodo}`}
            {' '}· {t.footer.chamada}
          </span>
          <span className="footer__legal-links">
            <Link href={`${p}/politica-privacidade/`}>{t.footer.privacidade}</Link>
            <Link href={`${p}/politica-cookies/`}>{t.footer.cookies}</Link>
            {/* TODO(Nimpher): substituir pelo link direto do Livro de Reclamações eletrónico da empresa */}
            <a href={SITE.livroReclamacoesUrl} target="_blank" rel="noopener noreferrer">{t.footer.livro}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
