import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amberlinks.github.io',
  base: '/solact-website',
  output: 'static',
  compressHTML: true,
  trailingSlash: 'ignore',
});
