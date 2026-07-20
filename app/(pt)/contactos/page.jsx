import Link from 'next/link';
import MiniForm from '@/components/MiniForm';
import { ContactInfo } from '@/components/ContactBits';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Contactos — Nimpher, Braga',
  description:
    'Contacte a Nimpher em Braga: telefone 253 672 653, email geral@nimpher.com, WhatsApp ou formulário. Rua Doutor Eduardo Sá Malheiro 85/89, 4705-267 Braga.',
  alternates: { canonical: '/contactos/', languages: { 'pt-PT': '/contactos/', en: '/en/contactos/' } },
};

/* Página de contacto geral — deliberadamente distinta da página de orçamento:
   fundo claro, canais em destaque, mapa em largura total e formulário CURTO.
   O formulário completo de qualificação vive apenas em /pedir-orcamento/. */
export default function Contactos() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>Contactos
          </nav>
          <h1>Fale connosco.</h1>
          <p>
            Telefone, WhatsApp, email ou formulário — responda quem responder, fala sempre com
            quem percebe do assunto.
          </p>
        </div>
      </section>

      <section className="section section--paper" id="contacto">
        <div className="wrap">
          <div className="contactsplit">
            <div>
              <ContactInfo lang="pt" light />
              <div className="quotehint">
                <p><strong>Precisa de um orçamento?</strong> Use o formulário dedicado — com mais dois ou três dados, o estudo fica logo mais rápido.</p>
                <Link className="textlink" href="/pedir-orcamento/">Ir para o pedido de orçamento →</Link>
              </div>
            </div>
            <MiniForm lang="pt" idPrefix="contactos" />
          </div>

          <div className="mapbox">
            {/* Mapa por embed público (sem chave de API exposta — o site atual
                expõe uma chave Google Maps no URL do iframe; este formato não usa chave). */}
            <iframe
              title="Localização da Nimpher em Braga"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Rua%20Doutor%20Eduardo%20S%C3%A1%20Malheiro%2085%2C%204705-267%20Braga&z=15&output=embed"
              style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(.25) contrast(1.05)' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
