import Link from 'next/link';
import { SolutionCta } from '@/components/ContactBits';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Sobre a Nimpher — Engenharia de Energia desde 2010',
  description:
    'A Nimpher é uma empresa de engenharia e serviços de Braga, especializada em energias renováveis e eficiência energética desde 2010. Conheça a nossa forma de trabalhar.',
  alternates: { canonical: '/sobre/', languages: { 'pt-PT': '/sobre/', en: '/en/sobre/' } },
};

export default function Sobre() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>Sobre
          </nav>
          <h1>Engenharia de energia, desde {SITE.since}.</h1>
          <p>
            Uma empresa de engenharia e serviços, sediada em Braga, especializada em energias
            renováveis e eficiência energética.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="prose">
            <h2>Quem somos</h2>
            <p>
              A Nimpher — Soluções Energéticas nasceu em {SITE.since}. Ao longo deste percurso,
              construímos uma carteira de clientes sólida — de habitações particulares a unidades
              industriais — que é a melhor prova da nossa qualidade, responsabilidade e confiança.
            </p>
            <p>
              Acompanhamos de perto os desenvolvimentos tecnológicos e as tendências de mercado,
              apoiados numa forte formação técnica especializada. É isso que nos permite apresentar
              soluções completas chave-na-mão: <strong>projeto, instalação e comissionamento</strong>,
              com uma única equipa responsável do primeiro estudo ao arranque do sistema.
            </p>
            <h2>O que fazemos</h2>
            <p>
              Sistemas solares fotovoltaicos e térmicos, baterias e armazenamento, climatização,
              humidificação industrial, bombagem solar, automação industrial, compensação de fator
              de potência e consultoria energética. Cada solução é dimensionada aos consumos reais
              de quem a vai usar — não a pacotes pré-feitos.
            </p>
            <h2>Como trabalhamos</h2>
            <p>
              Começamos sempre pelo estudo: analisar os consumos e a instalação antes de propor
              qualquer equipamento. Segue-se o projeto, a instalação por equipa especializada e o
              comissionamento — ensaios, arranque, licenciamento e monitorização. E depois do
              arranque, continuamos por perto, com assistência técnica e acompanhamento.
            </p>
            {/* TODO(Nimpher): secção de equipa (fotografias e funções), certificações,
                credenciações DGEG, alvará e seguros — acrescentar quando confirmados.
                Nada foi inventado nesta página. */}
          </div>
          <SolutionCta />
        </div>
      </section>
    </>
  );
}
