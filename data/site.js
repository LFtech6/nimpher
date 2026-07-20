// ---------------------------------------------------------------------------
// Dados centrais do site. NAP (nome, morada, telefone) definido UMA vez e
// reutilizado em todo o lado — consistência exigida para SEO local.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Nimpher',
  legalName: 'Nimpher — Soluções Energéticas', // TODO(Nimpher): denominação legal completa (ex.: "Nimpher, Lda.")
  nif: null, // TODO(Nimpher): NIF — obrigatório no rodapé antes do lançamento
  url: 'https://nimpher.com',
  phoneDisplay: '253 672 653',
  phoneHref: 'tel:+351253672653',
  email: 'geral@nimpher.com',
  address: {
    street: 'Rua Doutor Eduardo Sá Malheiro 85/89',
    postalCode: '4705-267',
    city: 'Braga',
    country: 'PT',
  },
  // TODO(Nimpher): confirmar número com WhatsApp. Mantém-se o número fixo como
  // destino wa.me até indicação em contrário (funciona se o número tiver WhatsApp).
  whatsappHref: 'https://wa.me/351253672653',
  hours: null, // TODO(Nimpher): horário de funcionamento (ex.: 'Seg–Sex, 9h–18h')
  since: 2010,
  // TODO(Nimpher): link oficial do Livro de Reclamações eletrónico
  livroReclamacoesUrl: 'https://www.livroreclamacoes.pt/',
};

export const NAV = [
  { href: '/', label: 'Início' },
  { href: '/servicos/', label: 'Soluções', hasMenu: true },
  { href: '/projetos/', label: 'Projetos' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/contactos/', label: 'Contactos' },
];

export const CTA = { href: '/pedir-orcamento/', label: 'Pedir orçamento' };
