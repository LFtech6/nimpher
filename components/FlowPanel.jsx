import { Icons } from './Icons';
import { T } from '../data/i18n';

/**
 * Painel de fluxo de energia — elemento-assinatura do hero.
 * Sol → Casa/Indústria (autoconsumo) → Bateria + Rede (excedente).
 * Animação calma; estático com prefers-reduced-motion (CSS).
 * Decorativo: aria-hidden, sem informação exclusiva aqui.
 */
export default function FlowPanel({ lang = 'pt' }) {
  const t = T[lang].flow;
  return (
    <div className="flow" aria-hidden="true">
      <svg viewBox="0 0 400 416" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5A623" />
            <stop offset="1" stopColor="#2E7D5B" />
          </linearGradient>
        </defs>
        {/* Sol → Casa / Indústria (autoconsumo) */}
        <path d="M200 62 C200 130 110 150 78 205" fill="none" stroke="url(#fg)" strokeWidth="2" opacity=".35" />
        <path d="M200 62 C200 130 290 150 322 205" fill="none" stroke="url(#fg)" strokeWidth="2" opacity=".35" />
        <path d="M200 62 C200 130 110 150 78 205" fill="none" stroke="#F5A623" strokeWidth="2" className="dash" />
        <path d="M200 62 C200 130 290 150 322 205" fill="none" stroke="#F5A623" strokeWidth="2" className="dash" />
        {/* Casa → Bateria (acumulação de excedente) */}
        <path d="M84 236 C100 290 108 300 116 336" fill="none" stroke="#2E7D5B" strokeWidth="2" opacity=".4" />
        <path d="M84 236 C100 290 108 300 116 336" fill="none" stroke="#5FB48D" strokeWidth="1.8" className="dash" />
        {/* Indústria → Rede (venda de excedente) */}
        <path d="M316 236 C300 290 292 300 284 336" fill="none" stroke="#93A4B3" strokeWidth="2" opacity=".4" />
        <path d="M316 236 C300 290 292 300 284 336" fill="none" stroke="#C4D2DD" strokeWidth="1.6" className="dash" />
        <g className="pulse">
          <circle cx="200" cy="112" r="2.5" fill="#fff" />
          <circle cx="140" cy="172" r="2.5" fill="#fff" />
          <circle cx="260" cy="172" r="2.5" fill="#fff" />
          <circle cx="102" cy="288" r="2.2" fill="#9fdcbd" />
          <circle cx="298" cy="288" r="2.2" fill="#d5e0e9" />
        </g>
      </svg>

      <div className="flow__node flow__node--sun">
        <div className="flow__dot">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#241500" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
          </svg>
        </div>
        {t.solar}
      </div>

      <div className="flow__node flow__node--home">
        <div className="flow__dot"><Icons.home stroke="#F5A623" /></div>
        {t.casa}
      </div>
      <div className="flow__node flow__node--ind">
        <div className="flow__dot"><Icons.factory stroke="#F5A623" /></div>
        {t.industria}
      </div>
      <div className="flow__node flow__node--batt">
        <div className="flow__dot"><Icons.battery stroke="#7FD0AC" /></div>
        {t.bateria}
      </div>
      <div className="flow__node flow__node--grid">
        <div className="flow__dot">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4D2DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 21l4-18 4 18M6 10h12M5 15h14M8 21h8" />
          </svg>
        </div>
        {t.rede}
      </div>

      <span className="flow__tag flow__tag--auto">{t.auto}</span>
      <span className="flow__tag flow__tag--exc">{t.exc}</span>
    </div>
  );
}
