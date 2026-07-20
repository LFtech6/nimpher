'use client';

import { useEffect, useState } from 'react';
import { SITE } from '../data/site';
import { Icons } from './Icons';
import { T } from '../data/i18n';

export default function WhatsAppFloat({ lang = 'pt' }) {
  const t = T[lang];
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Em ecrãs pequenos, esconde-se enquanto a secção #contacto está visível.
  const [overContact, setOverContact] = useState(false);
  useEffect(() => {
    const target = document.getElementById('contacto');
    if (!target || !('IntersectionObserver' in window)) return;
    const mq = window.matchMedia('(max-width: 640px)');
    const io = new IntersectionObserver(([e]) => setOverContact(e.isIntersecting && mq.matches), { threshold: 0.15 });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  if (dismissed) return null;

  return (
    <a
      className="wafloat"
      data-hidden={!visible || overContact}
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.wa}
    >
      <Icons.whatsapp />
      WhatsApp
      <button
        type="button"
        className="wafloat__close"
        aria-label={t.waClose}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDismissed(true); }}
      >
        ×
      </button>
    </a>
  );
}
