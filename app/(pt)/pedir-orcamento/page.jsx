import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { SITE } from '@/data/site';
import { Icons } from '@/components/Icons';

export const metadata = {
  title: 'Pedir Orçamento — Estudo Sem Compromisso',
  description:
    'Peça um orçamento à Nimpher: analisamos os seus consumos e respondemos com um estudo e uma proposta concreta, sem compromisso. Energia solar e eficiência em Braga.',
  alternates: { canonical: '/pedir-orcamento/', languages: { 'pt-PT': '/pedir-orcamento/', en: '/en/pedir-orcamento/' } },
};

const STEPS = [
  'Preencha o formulário (ou ligue-nos). Se puder, anexe a fatura de eletricidade — acelera o estudo.',
  'Analisamos os seus consumos e as condições da instalação.',
  'Recebe um estudo e uma proposta concreta, dimensionada ao seu caso. Sem compromisso.',
];

/* Página única do formulário completo de orçamento — layout claro e largo,
   deliberadamente distinto da faixa de conversão (navy) da homepage e da
   página de contactos. */
export default function PedirOrcamento() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>Pedir orçamento
          </nav>
          <h1>Peça o seu orçamento.</h1>
          <p>
            Diga-nos o que precisa e responderemos com um estudo e uma proposta concreta —
            dimensionada aos seus consumos reais, sem compromisso.
          </p>
          <ol className="qsteps">
            {STEPS.map((s, i) => (
              <li key={i}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap quote-grid">
          <aside className="quote-aside">
            <div className="cinfo cinfo--light">
              <div className="cline">
                <div className="cline__ico"><Icons.phone width={20} height={20} /></div>
                <div>
                  <div className="cline__lab">Prefere falar já?</div>
                  <a className="cline__val" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
                </div>
              </div>
              <div className="cline">
                <div className="cline__ico cline__ico--wa"><Icons.whatsapp /></div>
                <div>
                  <div className="cline__lab">WhatsApp</div>
                  <a className="cline__val" href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">Enviar mensagem</a>
                </div>
              </div>
              <div className="cline">
                <div className="cline__ico"><Icons.mail width={20} height={20} /></div>
                <div>
                  <div className="cline__lab">Email</div>
                  <a className="cline__val" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
            </div>
          </aside>
          <LeadForm lang="pt" light idPrefix="orc" />
        </div>
      </section>
    </>
  );
}
