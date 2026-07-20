import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SolutionCta } from '@/components/ContactBits';

export const metadata = {
  title: 'Projects & Installations',
  description:
    'Solar energy, industrial automation and climate control projects delivered by Nimpher. Real installations for homes, businesses and industry, since 2010.',
  alternates: { canonical: '/en/projetos/', languages: { 'pt-PT': '/projetos/', en: '/en/projetos/' } },
};

/* TODO(Nimpher): per project — photo, municipality, client type, year and kWp. */
const GALLERY = [
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=356&iH=398&oX=0&oY=0&cW=356&cH=398/fotovoltaicos5.jpg', alt: 'Rooftop photovoltaic installation', meta: 'Photovoltaics', title: 'Photovoltaic installation' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/fotovoltaico2_nimpher.png', alt: 'Solar panels installed by Nimpher', meta: 'Photovoltaics', title: 'Self-consumption system' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=368&iH=407&oX=0&oY=6&cW=368&cH=395/fotovoltaico1_nimpher.png', alt: 'Solar photovoltaic installation', meta: 'Photovoltaics', title: 'Photovoltaic installation' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/fotovoltaico5_nimpher.png', alt: 'Rooftop photovoltaic system', meta: 'Photovoltaics', title: 'Photovoltaic system' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=360&iH=398&oX=2&oY=0&cW=356&cH=398/automacaoindustrial_nimpher.png', alt: 'Industrial automation electrical panel', meta: 'Industrial automation', title: 'Industrial automation' },
  { img: 'https://nimpher.com/wp-content/uploads/brizy/429/assets/images/iW=368&iH=407&oX=0&oY=6&cW=368&cH=395/pisoradiante_nimpher.png', alt: 'Electric radiant floor installation', meta: 'Climate control', title: 'Electric radiant floor' },
];

export default function ProjetosEn() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link><span aria-hidden="true">/</span>Projects
          </nav>
          <h1>Real installations, real results.</h1>
          <p>
            A selection of projects delivered by Nimpher since 2010 — photovoltaics, industrial
            automation and climate control, for homes, businesses and industry.
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
                  <span className="placeholder-tag">Municipality, client and capacity — to be confirmed by Nimpher</span>
                </div>
              </Reveal>
            ))}
          </div>
          <SolutionCta lang="en" title="The next project could be yours." />
        </div>
      </section>
    </>
  );
}
