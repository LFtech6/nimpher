import { T } from '../data/i18n';

/* Marquee de clientes — trust signal mais forte do site atual, preservado.
   NOTA(Nimpher): substituir os URLs remotos por ficheiros locais otimizados
   (PNG/WebP com fundo transparente) antes do lançamento, em /public/clientes/. */

const CLIENTS = [
  ['primor.png', 'Primor'],
  ['dgema.png', 'DGEMA'],
  ['acl.png', 'ACL'],
  ['lagondola.png', 'La Gondola'],
  ['braval1.png', 'Braval'],
  ['continental.png', 'Continental'],
  ['meatrading.png', 'Meatrading'],
  ['flavioandre.png', 'Flávio e André'],
  ['quantal.png', 'Quantal'],
  ['tia8.png', 'Tia Isabel'],
  ['Untitled-1.png', 'Aca Group'],
  ['Background.png', 'Norcranes'],
  ['12.png', 'Frilider'],
  ['meltinologo.png', 'Meltino'],
];

const BASE = 'https://nimpher.com/wp-content/uploads/2019/10/';

export default function ClientsMarquee({ lang = 'pt' }) {
  const label = T[lang].clients;
  const logos = CLIENTS.map(([file, name]) => (
    <img key={file} src={`${BASE}${file}`} alt={name} loading="lazy" height="40" />
  ));
  const dup = CLIENTS.map(([file]) => (
    <img key={`d-${file}`} src={`${BASE}${file}`} alt="" aria-hidden="true" loading="lazy" height="40" />
  ));
  return (
    <section className="clients" aria-label={label}>
      <div className="clients__lbl"><span className="eyebrow">{label}</span></div>
      <div className="marquee">
        {/* Faixa duplicada para loop contínuo; a cópia é decorativa (aria-hidden). */}
        <div className="marquee__track">{logos}{dup}</div>
      </div>
    </section>
  );
}
