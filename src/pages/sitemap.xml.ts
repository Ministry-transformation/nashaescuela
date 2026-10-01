import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  if (!site) return new Response('Sitemap requires PUBLIC_SITE_URL.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  const root = (import.meta.env.PUBLIC_SITE_URL || site.toString()).replace(/\/$/, '');
  const pairs = [
    { es: '/es/', ru: '/ru/' },
    { es: '/kids/es/', ru: '/kids/ru/' },
  ];
  const urls = pairs.flatMap(({ es, ru }) => [es, ru].map((path) =>
    `<url><loc>${root}${path}</loc><xhtml:link rel="alternate" hreflang="es" href="${root}${es}"/><xhtml:link rel="alternate" hreflang="ru" href="${root}${ru}"/><xhtml:link rel="alternate" hreflang="x-default" href="${root}${es}"/></url>`
  )).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
