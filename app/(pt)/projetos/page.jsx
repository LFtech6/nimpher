import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SolutionCta } from '@/components/ContactBits';

export const metadata = {
  title: 'Projetos e Instalações',
  description:
    'Projetos de energia solar, automação industrial e climatização realizados pela Nimpher. Instalações reais para casas, empresas e indústria, desde 2010.',
  alternates: { canonical: '/projetos/', languages: { 'pt-PT': '/projetos/', en: '/en/projetos/' } },
};

/* TODO(Nimpher): para cada projeto, fornecer fotografia, concelho, tipo de
   cliente, ano e potência (kWp) quando aplicável. Os cartões abaixo usam as
   fotografias reais do site atual, com etiqueta visível de dados por confirmar.
   Substituir os URLs remotos por ficheiros locais otimizados (WebP) em
   /public/projetos/ — padrão: instalacao-fotovoltaica-<concelho>-nimpher.webp */
const GALLERY = [
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=356&iH=398&oX=0&oY=0&cW=356&cH=398/fotovoltaicos5.jpg', alt: 'Instalação fotovoltaica em cobertura', meta: 'Fotovoltaico', title: 'Instalação fotovoltaica' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/fotovoltaico2_nimpher.png', alt: 'Painéis solares instalados pela Nimpher', meta: 'Fotovoltaico', title: 'Sistema de autoconsumo' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=368&iH=407&oX=0&oY=6&cW=368&cH=395/fotovoltaico1_nimpher.png', alt: 'Instalação solar fotovoltaica', meta: 'Fotovoltaico', title: 'Instalação fotovoltaica' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/fotovoltaico5_nimpher.png', alt: 'Sistema fotovoltaico em cobertura', meta: 'Fotovoltaico', title: 'Sistema fotovoltaico' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/automacaoindustrial_nimpher.png', alt: 'Quadro elétrico de automação industrial', meta: 'Automação industrial', title: 'Automação industrial' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=368&iH=407&oX=0&oY=6&cW=368&cH=395/pisoradiante_nimpher.png', alt: 'Instalação de piso radiante elétrico', meta: 'Climatização', title: 'Piso radiante elétrico' },
];

export default function Projetos() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>Projetos
          </nav>
          <h1>Instalações reais, resultados reais.</h1>
          <p>
            Uma seleção de projetos realizados pela Nimpher desde 2010 — fotovoltaico, automação
            industrial e climatização, para casas, empresas e indústria.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <div className="projgrid">
            {GALLERY.map((p, i) => (
              <Reveal as="article" key={`${p.title}-${i}`} className="proj" delay={(i % 3) * 0.06}>
                <div className="proj__ph"><img src={p.img} alt={p.alt} loading="lazy" /></div>
                <div className="proj__body">
                  <span className="proj__meta">{p.meta}</span>
                  <h3>{p.title}</h3>
                  <span className="placeholder-tag">Concelho, cliente e potência — a confirmar pela Nimpher</span>
                </div>
              </Reveal>
            ))}
          </div>
          <SolutionCta title="O próximo projeto pode ser o seu." />
        </div>
      </section>
    </>
  );
}
