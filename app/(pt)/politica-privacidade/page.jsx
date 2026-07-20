import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados pessoais do site da Nimpher — Soluções Energéticas.',
  alternates: { canonical: '/politica-privacidade/', languages: { 'pt-PT': '/politica-privacidade/', en: '/en/politica-privacidade/' } },
  robots: { index: true, follow: true },
};

export default function Privacidade() {
  return (
    <>
      <section className="pagehero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <nav className="crumb" aria-label="Navegação estrutural">
            <Link href="/">Início</Link><span aria-hidden="true">/</span>Política de Privacidade
          </nav>
          <h1>Política de Privacidade</h1>
        </div>
      </section>
      <section className="section section--white" style={{ paddingTop: 56 }}>
        <div className="wrap prose">
          {/* NOTA: minuta funcional com marcadores. Deve ser revista pela Nimpher
              (e idealmente por apoio jurídico) antes do lançamento. Não substitui
              aconselhamento legal. */}
          <h2>Responsável pelo tratamento</h2>
          <p>
            {SITE.legalName} [denominação legal completa e NIF a confirmar], com sede em{' '}
            {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}, contactável através
            de {SITE.email} e {SITE.phoneDisplay}.
          </p>
          <h2>Dados recolhidos e finalidade</h2>
          <p>
            Através dos formulários deste site recolhemos os dados que nos fornece — nome, telefone,
            email, concelho, tipo de cliente, informação sobre a solução pretendida, mensagem e,
            opcionalmente, a fatura de eletricidade — com a única finalidade de responder ao seu
            pedido de contacto, estudo ou orçamento. A base legal do tratamento são as diligências
            pré-contratuais realizadas a seu pedido (art. 6.º, n.º 1, al. b) do RGPD) e o seu
            consentimento (al. a)).
          </p>
          <h2>Conservação</h2>
          <p>
            Os dados são conservados apenas pelo tempo necessário à gestão do seu pedido e de uma
            eventual relação contratual, ou até que solicite a sua eliminação. [Prazo concreto a
            definir pela Nimpher.]
          </p>
          <h2>Partilha de dados</h2>
          <p>
            Os dados não são vendidos nem cedidos a terceiros para fins de marketing. Podem ser
            tratados por prestadores técnicos estritamente necessários ao funcionamento do site e à
            entrega dos formulários (alojamento e serviço de envio de formulários), vinculados por
            obrigações de confidencialidade. [Identificar os prestadores utilizados após configuração.]
          </p>
          <h2>Os seus direitos</h2>
          <p>
            Nos termos do RGPD, pode solicitar o acesso, a retificação, a limitação, a portabilidade
            ou o apagamento dos seus dados, bem como retirar o consentimento, escrevendo para{' '}
            {SITE.email}. Tem ainda o direito de apresentar reclamação à CNPD (www.cnpd.pt).
          </p>
        </div>
      </section>
    </>
  );
}
