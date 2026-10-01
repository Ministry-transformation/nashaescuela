import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: new URL(process.env.PUBLIC_SITE_URL || 'https://ministry-transformation.github.io/nashaescuela').origin,
  base: '/nashaescuela',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
