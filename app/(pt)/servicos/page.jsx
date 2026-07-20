import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SolutionCta } from '@/components/ContactBits';
import { Icons } from '@/components/Icons';
import { SOLUTIONS } from '@/data/solutions';

export const metadata = {
  title: 'Soluções de Energia Solar e Eficiência Energética',
  description:
    'Solar residencial e industrial, baterias, carregamento elétrico, eficiência energética, climatização, bombagem solar e automação industrial. Chave-na-mão em Braga desde 2010.',
  alternates: { canonical: '/servicos/', languages: { 'pt-PT': '/servicos/', en: '/en/servicos/' } },
};

export default function Servicos() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>Soluções
          </nav>
          <h1>Soluções energéticas, de fim a fim.</h1>
          <p>
            Oito áreas de intervenção, uma só equipa de engenharia — do estudo dos seus consumos
            ao comissionamento do sistema. Sem prateleiras, sem pacotes pré-feitos: cada solução
            é dimensionada ao seu caso.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <div className="solgrid">
            {SOLUTIONS.map((s, i) => {
              const Ico = Icons[s.icon];
              return (
                <Reveal as="article" key={s.slug} className="card" delay={(i % 4) * 0.06}>
                  <span className="card__ico"><Ico /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <div className="chips">{s.chips.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
                  <div className="card__links">
                    <Link className="textlink" href={`/servicos/${s.slug}/`}>Saber mais →</Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <SolutionCta />
        </div>
      </section>
    </>
  );
}
