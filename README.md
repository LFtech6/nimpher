# Nimpher — Website institucional (redesign 2026)

Site estático construído com **Next.js 14 (App Router, `output: 'export'`)**.
Sem loja online, sem base de dados, sem servidor — apenas HTML/CSS/JS pré-gerados.
Idioma: **português europeu (AO90)**.

## Estrutura

```
app/                    Páginas (App Router)
  page.jsx              Página inicial
  servicos/             Hub de soluções (URL preservado do site atual)
  servicos/[slug]/      8 páginas de solução (geradas de data/solutions.js)
  projetos/ sobre/ contactos/ pedir-orcamento/
  politica-privacidade/ politica-cookies/
  not-found.jsx         404 (serve também os antigos URLs da loja removidos)
components/             Header, Footer, LeadForm, FlowPanel, etc.
data/site.js            NAP, contactos, navegação  ← editar aqui os dados da empresa
data/solutions.js       Conteúdo das 8 soluções    ← editar aqui os textos
public/                 logo, favicon, robots.txt, sitemap.xml
vercel.json             Redirecionamentos 301 (SEO) + security headers
```

## Versão inglesa (/en/)

O site é bilingue: **pt-PT** na raiz (`app/(pt)/`) e **inglês** em `/en/` (`app/(en)/en/`),
com comutador PT/EN no cabeçalho (e no menu móvel) e etiquetas `hreflang` em todas as
páginas principais.

- As traduções dos **componentes partilhados** (menus, formulários, rodapé, FAQ) vivem em
  `data/i18n.js`; as das **soluções** em `SOLUTIONS_EN`, no fim de `data/solutions.js`.
- O **texto das páginas** está dentro de cada página. **Qualquer alteração de copy tem de
  ser feita nas duas árvores** — `app/(pt)/...` e `app/(en)/en/...` — que são espelhos.
- Os URLs ingleses mantêm os mesmos slugs portugueses sob `/en/` (ex.:
  `/en/servicos/solar-residencial/`). É deliberado: um só sistema de slugs, redirects e
  sitemap simples; o `hreflang` trata do SEO entre línguas.

## Como correr localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera o site estático em ./out
```

## Publicar na Vercel

1. Criar repositório Git com este projeto e importá-lo em vercel.com (framework: Next.js — detecção automática; o `output: 'export'` é respeitado).
2. Associar o domínio `nimpher.com` no painel da Vercel e atualizar os DNS no registrar.
3. O ficheiro `vercel.json` aplica automaticamente os redirecionamentos 301 e os security headers.

## ⚠️ Configuração obrigatória antes do lançamento

### 1. Entrega do formulário (5 minutos)
O formulário está pronto mas **sem endpoint de entrega**. Sem este passo, mostra
uma mensagem de erro honesta com o telefone como alternativa.

1. Criar conta num serviço de entrega de formulários: **Formspree** (formspree.io),
   **Basin** (usebasin.com) ou **Web3Forms** (web3forms.com) — todos com plano gratuito
   e suporte a anexos.
2. Configurar a entrega para `geral@nimpher.com`.
3. Colar o endpoint em `components/LeadForm.jsx`, constante `FORM_ENDPOINT`
   (ex.: `https://formspree.io/f/XXXXXXXX`).
4. Testar um envio real com anexo.

Mais tarde, se preferirem, o endpoint pode ser substituído por uma Vercel Function
própria sem alterar mais nada.

### 2. Factos por confirmar — lista completa de `TODO(Nimpher)`

| Onde | O que falta |
|---|---|
| `data/site.js` | Denominação legal completa · **NIF** (obrigatório no rodapé) · horário · confirmação do número WhatsApp · link direto do Livro de Reclamações |
| `app/page.jsx` (hero) | 3.º indicador com facto real (n.º de instalações ou kWp instalados) |
| `app/page.jsx` + `app/projetos/page.jsx` | 3+ projetos reais: fotografia, concelho, tipo de cliente, potência (kWp) — substituem as etiquetas "a confirmar" |
| `app/page.jsx` (Porquê) | Certificações/credenciações: DGEG, alvará, seguros — e fotografia real da equipa em obra |
| `components/Faq.jsx` | Área de atuação (resposta à pergunta "Em que zonas trabalham?") |
| `app/sobre/page.jsx` | Equipa, certificações (secção comentada, pronta a preencher) |
| `app/politica-privacidade/page.jsx` | Rever minuta; prazo de conservação; identificar prestadores (alojamento + formulários). Recomenda-se revisão jurídica |
| `app/politica-cookies/page.jsx` | Decidir analítica (recomendado: Vercel Analytics ou Plausible — sem cookies, sem banner) |
| `app/layout.jsx` | Criar imagem OG `public/og-nimpher.jpg` (1200×630) a partir de fotografia real |
| Testemunhos | Quando existirem 2–3 citações reais de clientes (nome + empresa), acrescentar secção na homepage |

### 3. Localizar imagens (performance)
As fotografias e logótipos de clientes apontam ainda para `nimpher.com/wp-content/...`
(o site WordPress atual). Antes de desligar o WordPress:

1. Descarregar todas as imagens usadas (procurar `nimpher.com/wp-content` no código).
2. Otimizar para WebP (~80% qualidade) e guardar em `public/projetos/` e `public/clientes/`.
   Padrão de nomes SEO: `instalacao-fotovoltaica-<concelho>-nimpher.webp`.
3. Substituir os URLs nos ficheiros: `app/page.jsx`, `app/projetos/page.jsx`,
   `components/ClientsMarquee.jsx`.

## Checklist de lançamento (SEO e qualidade)

**Antes do switch de DNS**
- [ ] `FORM_ENDPOINT` configurado e testado com anexo (ver acima)
- [ ] NIF + denominação legal no rodapé (`data/site.js`)
- [ ] Imagens localizadas em `/public` (ponto 3)
- [ ] Verificar propriedade do domínio no **Google Search Console** (se ainda não estiver)
- [ ] Testar em preview da Vercel: todas as páginas, menu móvel, formulário, mapa

**No dia do lançamento**
- [ ] Apontar DNS para a Vercel; confirmar HTTPS ativo
- [ ] Testar redirecionamentos 301: `/loja/`, `/categoria-produto/monitores-de-energia/`, os 8 `/produto/owl*` → devem aterrar em `/servicos/...`
- [ ] Testar 404: `/produto/desembaciador-01/`, `/carrinho/`, `/finalizar-compra/`, `/minha-conta/`, `/sem-categoria/` → página 404 personalizada (equivalente a 410 para desindexação)
- [ ] Submeter `https://nimpher.com/sitemap.xml` no Search Console
- [ ] Validar dados estruturados: https://search.google.com/test/rich-results (Organization, LocalBusiness, Service, BreadcrumbList)
- [ ] Lighthouse móvel ≥ 90 em Performance/Accessibility/SEO

**Pós-lançamento**
- [ ] **Restringir ou revogar a chave Google Maps exposta** no site antigo (`/contactos/` atual expõe a chave no iframe; o novo mapa não usa chave, mas a chave antiga continua válida na conta Google Cloud até ser restringida)
- [ ] Search Console: monitorizar Cobertura e 404s durante 90 dias; se surgirem URLs antigos com tráfego inesperado, acrescentar redirect em `vercel.json`
- [ ] Atualizar o perfil Google Business (categoria "Empresa de energia solar", link para o site, fotos dos projetos)
- [ ] Pedir aos clientes satisfeitos avaliações Google (única via legítima para estrelas — nunca inventar reviews no schema)

## Notas de arquitetura

- **410 vs 404:** a Vercel em modo estático não devolve 410; os URLs de loja
  removidos sem sucessor devolvem 404 com página personalizada. Para a
  desindexação do Google, 404 e 410 têm efeito equivalente (o 410 é apenas
  ligeiramente mais rápido). Se um dia for crítico, uma Vercel Function pode
  devolver 410 nesses caminhos.
- **Fontes:** carregadas via Google Fonts `<link>` com `display=swap`. Para
  eliminar a dependência externa, podem ser self-hosted mais tarde (baixar
  woff2 + `@font-face` em `globals.css`).
- **Sem cookies próprios:** o site não instala cookies; só o iframe do Google
  Maps (página de contactos) pode definir cookies de terceiros — refletido na
  Política de Cookies.
