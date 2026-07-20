'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '../data/site';
import { SOLUTIONS, SOLUTIONS_EN } from '../data/solutions';
import { T, prefix } from '../data/i18n';

/* ---------------------------------------------------------------------------
   ENTREGA DO FORMULÁRIO
   Sem mailto:. O formulário envia por POST (multipart, suporta anexo) para um
   serviço de entrega. Passos de configuração (5 minutos):
     1. Criar um formulário num serviço como Formspree, Basin ou Web3Forms,
        com entrega para geral@nimpher.com.
     2. Colar o endpoint abaixo (ex.: 'https://formspree.io/f/XXXXXXXX').
   Em alternativa, pode apontar para uma Vercel Function própria mais tarde,
   sem alterar mais nada neste componente.
--------------------------------------------------------------------------- */
export const FORM_ENDPOINT = ''; // TODO(config): endpoint de entrega (ver nota acima)

export default function LeadForm({ lang = 'pt', light = false, idPrefix = 'lf' }) {
  const t = T[lang].form;
  const p = prefix(lang);
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [errors, setErrors] = useState({});
  const id = (s) => `${idPrefix}-${s}`;
  const labStyle = { fontFamily: 'var(--body)', fontSize: 13, letterSpacing: 0, textTransform: 'none', margin: 0, cursor: 'pointer' };

  function validate(fd) {
    const e = {};
    if (!fd.get('nome')?.trim()) e.nome = t.vNome;
    if (!/^[0-9 +()-]{9,}$/.test(fd.get('telefone') || '')) e.telefone = t.vTel;
    if (!/.+@.+\..+/.test(fd.get('email') || '')) e.email = t.vEmail;
    if (!fd.get('concelho')?.trim()) e.concelho = t.vConcelho;
    if (!fd.get('tipo_cliente')) e.tipo_cliente = t.vTipo;
    if (!fd.get('rgpd')) e.rgpd = t.vRgpd;
    const file = fd.get('fatura');
    if (file && file.size > 10 * 1024 * 1024) e.fatura = t.vFile;
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    fd.set('form_type', 'pedido_orcamento');
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    if (!FORM_ENDPOINT) {
      setStatus('error'); // endpoint por configurar: falha honesta, com alternativa
      return;
    }
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
      <div className={`form${light ? ' form--light' : ''}`}>
        <p className="form__ok">
          <strong>{t.okTitle}</strong> {t.okBody}{' '}
          <a href={SITE.phoneHref} style={{ textDecoration: 'underline' }}>{SITE.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={`form${light ? ' form--light' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="field--row">
        <div className="field">
          <label htmlFor={id('nome')}>{t.nome}</label>
          <input id={id('nome')} name="nome" type="text" autoComplete="name" placeholder={t.nomePh}
            aria-invalid={errors.nome ? 'true' : undefined} aria-describedby={errors.nome ? id('nome-err') : undefined} />
          {errors.nome && <p className="form__err" id={id('nome-err')}>{errors.nome}</p>}
        </div>
        <div className="field">
          <label htmlFor={id('telefone')}>{t.telefone}</label>
          <input id={id('telefone')} name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder={t.telefonePh}
            aria-invalid={errors.telefone ? 'true' : undefined} aria-describedby={errors.telefone ? id('tel-err') : undefined} />
          {errors.telefone && <p className="form__err" id={id('tel-err')}>{errors.telefone}</p>}
        </div>
      </div>

      <div className="field--row">
        <div className="field">
          <label htmlFor={id('email')}>{t.email}</label>
          <input id={id('email')} name="email" type="email" inputMode="email" autoComplete="email" placeholder={t.emailPh}
            aria-invalid={errors.email ? 'true' : undefined} aria-describedby={errors.email ? id('email-err') : undefined} />
          {errors.email && <p className="form__err" id={id('email-err')}>{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor={id('concelho')}>{t.concelho}</label>
          <input id={id('concelho')} name="concelho" type="text" autoComplete="address-level2" placeholder={t.concelhoPh}
            aria-invalid={errors.concelho ? 'true' : undefined} aria-describedby={errors.concelho ? id('conc-err') : undefined} />
          {errors.concelho && <p className="form__err" id={id('conc-err')}>{errors.concelho}</p>}
        </div>
      </div>

      <fieldset className="field fieldset-reset">
        <legend className="form__legend">{t.tipoCliente}</legend>
        <div className="radios" role="radiogroup" aria-invalid={errors.tipo_cliente ? 'true' : undefined}>
          {t.tipos.map((tp) => (
            <label key={tp}>
              <input type="radio" name="tipo_cliente" value={tp} /> {tp}
            </label>
          ))}
        </div>
        {errors.tipo_cliente && <p className="form__err">{errors.tipo_cliente}</p>}
      </fieldset>

      <div className="field--row">
        <div className="field">
          <label htmlFor={id('solucao')}>{t.tipoSolucao}</label>
          <select id={id('solucao')} name="solucao" defaultValue="">
            <option value="">{t.selOpt}</option>
            {SOLUTIONS.map((s) => {
              const title = lang === 'en' ? SOLUTIONS_EN[s.slug].title : s.title;
              return <option key={s.slug} value={title}>{title}</option>;
            })}
            <option value={t.outra}>{t.outra}</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor={id('fatura-valor')}>{t.faturaMedia}</label>
          <select id={id('fatura-valor')} name="fatura_media" defaultValue="">
            <option value="">{t.selOpt}</option>
            {t.faturaOpts.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor={id('msg')}>{t.mensagem}</label>
        <textarea id={id('msg')} name="mensagem" placeholder={t.mensagemPh} />
      </div>

      <div className="field">
        <label htmlFor={id('fatura')}>{t.anexo}</label>
        <input id={id('fatura')} name="fatura" type="file" accept=".pdf,.jpg,.jpeg,.png"
          aria-invalid={errors.fatura ? 'true' : undefined} />
        {errors.fatura && <p className="form__err">{errors.fatura}</p>}
      </div>

      <div className="gdpr">
        <input id={id('rgpd')} name="rgpd" type="checkbox" aria-invalid={errors.rgpd ? 'true' : undefined} />
        <label htmlFor={id('rgpd')} style={labStyle}>
          {t.gdprA} <Link href={`${p}/politica-privacidade/`}>{t.gdprLink}</Link> {t.gdprB}
        </label>
      </div>
      {errors.rgpd && <p className="form__err">{errors.rgpd}</p>}

      <button className="btn btn--amber btn--block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t.aEnviar : t.enviar} <span className="arrow" aria-hidden="true">→</span>
      </button>

      {status === 'error' && (
        <p className="form__err" role="alert" style={{ marginTop: 12 }}>
          {t.errBody}{' '}
          <a href={SITE.phoneHref} style={{ textDecoration: 'underline' }}>{SITE.phoneDisplay}</a> ·{' '}
          <a href={`mailto:${SITE.email}`} style={{ textDecoration: 'underline' }}>{SITE.email}</a>
        </p>
      )}
      <p className="form__note">{t.nota}</p>
    </form>
  );
}
