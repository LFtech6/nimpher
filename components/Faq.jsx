import { Icons } from './Icons';
import { T } from '../data/i18n';

export default function Faq({ lang = 'pt' }) {
  const items = T[lang].faq;
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <span className="faq__x" aria-hidden="true"><Icons.plus /></span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
