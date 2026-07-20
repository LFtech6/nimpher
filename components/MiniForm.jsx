'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '../data/site';
import { T, prefix } from '../data/i18n';
import { FORM_ENDPOINT } from './LeadForm';

/* Formulário curto de contacto geral (página /contactos/).
   Para pedidos de orçamento existe o formulário completo em /pedir-orcamento/.
   Usa o mesmo endpoint de entrega, com form_type=contacto. */
export default function MiniForm({ lang = 'pt', idPrefix = 'mf' }) {
  const t = T[lang].form;
  const p = prefix(lang);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const id = (s) => `${idPrefix}-${s}`;
  const labStyle = { fontFamily: 'var(--body)', fontSize: 13, letterSpacing: 0, textTransform: 'none', margin: 0, cursor: 'pointer' };

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    fd.set('form_type', 'contacto');
    const e = {};
    if (!fd.get('nome')?.trim()) e.nome = t.vNome;
    if (!/.+@.+\..+/.test(fd.get('email') || '')) e.email = t.vEmail;
    if (!fd.get('mensagem')?.trim()) e.mensagem = t.vMsg;
    if (!fd.get('rgpd')) e.rgpd = t.vRgpd;
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!FORM_ENDPOINT) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      setStatus(res.ok ? 'ok' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="form form--light">
        <p className="form__ok"><strong>{t.miniOk}</strong> {t.miniOkBody}</p>
      </div>
    );
  }

  return (
    <form className="form form--light" onSubmit={onSubmit} noValidate>
      <div className="field--row">
        <div className="field">
          <label htmlFor={id('nome')}>{t.nome}</label>
          <input id={id('nome')} name="nome" type="text" autoComplete="name" placeholder={t.nomePh}
            aria-invalid={errors.nome ? 'true' : undefined} />
          {errors.nome && <p className="form__err">{errors.nome}</p>}
        </div>
        <div className="field">
          <label htmlFor={id('email')}>{t.email}</label>
          <input id={id('email')} name="email" type="email" inputMode="email" autoComplete="email" placeholder={t.emailPh}
            aria-invalid={errors.email ? 'true' : undefined} />
          {errors.email && <p className="form__err">{errors.email}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={id('msg')}>{t.mensagem} *</label>
        <textarea id={id('msg')} name="mensagem" placeholder={t.mensagemPh}
          aria-invalid={errors.mensagem ? 'true' : undefined} />
        {errors.mensagem && <p className="form__err">{errors.mensagem}</p>}
      </div>

      <div className="gdpr">
        <input id={id('rgpd')} name="rgpd" type="checkbox" aria-invalid={errors.rgpd ? 'true' : undefined} />
        <label htmlFor={id('rgpd')} style={labStyle}>
          {t.gdprA} <Link href={`${p}/politica-privacidade/`}>{t.gdprLink}</Link> {t.gdprB}
        </label>
      </div>
      {errors.rgpd && <p className="form__err">{errors.rgpd}</p>}

      <button className="btn btn--amber btn--block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t.aEnviar : t.miniEnviar} <span className="arrow" aria-hidden="true">→</span>
      </button>

      {status === 'error' && (
        <p className="form__err" role="alert" style={{ marginTop: 12 }}>
          {t.errBody}{' '}
          <a href={SITE.phoneHref} style={{ textDecoration: 'underline' }}>{SITE.phoneDisplay}</a> ·{' '}
          <a href={`mailto:${SITE.email}`} style={{ textDecoration: 'underline' }}>{SITE.email}</a>
        </p>
      )}
    </form>
  );
}
