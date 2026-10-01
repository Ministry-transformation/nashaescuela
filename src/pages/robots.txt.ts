import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(site ? `User-agent: *\nAllow: /\nSitemap: ${(import.meta.env.PUBLIC_SITE_URL || site.toString()).replace(/\/$/, '')}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
