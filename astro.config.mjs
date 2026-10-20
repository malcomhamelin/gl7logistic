// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: remplacer par le nom de domaine définitif avant la mise en ligne.
export default defineConfig({
  site: 'https://www.gl7logistic.fr',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/merci') })],
});
