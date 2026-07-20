'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '../data/site';
import { SOLUTIONS, SOLUTIONS_EN } from '../data/solutions';
import { T, prefix } from '../data/i18n';

export default function Header({ lang = 'pt' }) {
  const t = T[lang];
  const p = prefix(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // painel móvel
  const [drop, setDrop] = useState(false); // dropdown Soluções
  const dropRef = useRef(null);
  const pathname = usePathname() || '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDrop(false); }, [pathname]);

  useEffect(() => {
    if (!drop) return;
    const onKey = (e) => e.key === 'Escape' && setDrop(false);
    const onClick = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, [drop]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Alternância de idioma: calcula o caminho equivalente na outra língua.
  const norm = pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;
  const isEn = norm === '/en/' || norm.startsWith('/en/');
  const ptPath = isEn ? norm.replace(/^\/en/, '') || '/' : norm;
  const enPath = isEn ? norm : norm === '/' ? '/en/' : `/en${norm}`;

  const navItem = (s) => (lang === 'en' ? SOLUTIONS_EN[s.slug].nav : s.nav);

  return (
    <>
      <a className="skip-link" href="#conteudo">{t.skip}</a>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="wrap nav">
          <Link href={p || '/'} className="brand" aria-label={t.brandAria}>
            <img src="/logo-nimpher.png" alt="Nimpher — Soluções Energéticas" width="264" height="83" />
          </Link>

          <nav className="nav__links" aria-label={t.mainNav}>
            <Link href={p || '/'} aria-current={norm === (p ? `${p}/` : '/') ? 'page' : undefined}>{t.nav.inicio}</Link>
            <div className="navdrop" ref={dropRef}>
              <button
                type="button"
                className="navdrop__btn"
                aria-expanded={drop}
                aria-haspopup="true"
                onClick={(e) => { e.stopPropagation(); setDrop((d) => !d); }}
              >
                {t.nav.solucoes}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="navdrop__menu" data-open={drop} role="menu">
                {SOLUTIONS.map((s) => (
                  <Link key={s.slug} role="menuitem" href={`${p}/servicos/${s.slug}/`}>{navItem(s)}</Link>
                ))}
                <Link role="menuitem" className="all" href={`${p}/servicos/`}>{t.nav.todas}</Link>
              </div>
            </div>
            <Link href={`${p}/projetos/`} aria-current={norm === `${p}/projetos/` ? 'page' : undefined}>{t.nav.projetos}</Link>
            <Link href={`${p}/sobre/`} aria-current={norm === `${p}/sobre/` ? 'page' : undefined}>{t.nav.sobre}</Link>
            <Link href={`${p}/contactos/`} aria-current={norm === `${p}/contactos/` ? 'page' : undefined}>{t.nav.contactos}</Link>
          </nav>

          <div className="nav__cta">
            <nav className="langsw" aria-label={t.langLabel}>
              <Link href={ptPath} aria-current={!isEn ? 'true' : undefined} hrefLang="pt-PT">PT</Link>
              <Link href={enPath} aria-current={isEn ? 'true' : undefined} hrefLang="en">EN</Link>
            </nav>
            <a className="nav__phone" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            <Link className="btn btn--amber" href={`${p}/pedir-orcamento/`}>{t.cta} <span className="arrow" aria-hidden="true">→</span></Link>
            <button
              type="button"
              className="burger"
              aria-label={open ? t.menuClose : t.menuOpen}
              aria-expanded={open}
              aria-controls="painel-movel"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="mpanel" id="painel-movel" data-open={open}>
        <nav aria-label={t.mobileNav}>
          <Link href={p || '/'}>{t.nav.inicio}</Link>
          <Link href={`${p}/servicos/`}>{t.nav.solucoes}</Link>
          {SOLUTIONS.map((s) => (
            <Link key={s.slug} className="mpanel__sub" href={`${p}/servicos/${s.slug}/`}>{navItem(s)}</Link>
          ))}
          <Link href={`${p}/projetos/`}>{t.nav.projetos}</Link>
          <Link href={`${p}/sobre/`}>{t.nav.sobre}</Link>
          <Link href={`${p}/contactos/`}>{t.nav.contactos}</Link>
          <div className="mpanel__foot">
            <Link className="btn btn--amber btn--block" href={`${p}/pedir-orcamento/`}>{t.cta} <span className="arrow" aria-hidden="true">→</span></Link>
            <nav className="langsw langsw--panel" aria-label={t.langLabel}>
              <Link href={ptPath} aria-current={!isEn ? 'true' : undefined} hrefLang="pt-PT">Português</Link>
              <Link href={enPath} aria-current={isEn ? 'true' : undefined} hrefLang="en">English</Link>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
}
