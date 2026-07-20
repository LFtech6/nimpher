import Link from 'next/link';
import { SITE } from '../data/site';
import { Icons } from './Icons';
import { T, prefix } from '../data/i18n';

export function ContactInfo({ lang = 'pt', light = false }) {
  const t = T[lang].contact;
  return (
    <div className={`cinfo${light ? ' cinfo--light' : ''}`}>
      <div className="cline">
        <div className="cline__ico"><Icons.phone width={20} height={20} /></div>
        <div>
          <div className="cline__lab">{t.telefone}</div>
          <a className="cline__val" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
        </div>
      </div>
      <div className="cline">
        <div className="cline__ico cline__ico--wa"><Icons.whatsapp /></div>
        <div>
          <div className="cline__lab">{t.whatsapp}</div>
          <a className="cline__val" href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
            {t.enviarMsg}
          </a>
          {/* TODO(Nimpher): confirmar que o número 253 672 653 tem WhatsApp ativo,
              ou substituir SITE.whatsappHref pelo número correto em data/site.js */}
        </div>
      </div>
      <div className="cline">
        <div className="cline__ico"><Icons.mail width={20} height={20} /></div>
        <div>
          <div className="cline__lab">{t.email}</div>
          <a className="cline__val" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>
      <div className="cline">
        <div className="cline__ico"><Icons.pin width={20} height={20} /></div>
        <div>
          <div className="cline__lab">{t.morada}</div>
          <div className="cline__val">
            {SITE.address.street}<br />{SITE.address.postalCode} {SITE.address.city}
          </div>
        </div>
      </div>
      {/* TODO(Nimpher): horário de funcionamento — acrescentar aqui e em data/site.js */}
    </div>
  );
}

export function SolutionCta({ lang = 'pt', title }) {
  const t = T[lang].solutionCta;
  const p = prefix(lang);
  return (
    <div className="solcta">
      <div>
        <h2>{title || t.title}</h2>
        <p>{t.text}</p>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link className="btn btn--amber" href={`${p}/pedir-orcamento/`}>
          {T[lang].cta} <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <a className="btn btn--ghost-light" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
      </div>
    </div>
  );
}
