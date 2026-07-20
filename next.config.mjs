/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: every route is pre-rendered to plain HTML/CSS/JS.
  // No Node server required — deployable to Vercel as a static site.
  output: 'export',

  // Matches the existing WordPress URL style (/servicos/, /contactos/)
  // so preserved URLs stay byte-identical for SEO.
  trailingSlash: true,

  // next/image optimization needs a server; with static export we serve
  // plain images (real project photos should be pre-optimized to WebP/AVIF).
  images: { unoptimized: true },
};

export default nextConfig;
