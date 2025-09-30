// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://narakode.com',
  integrations: [icon(), sitemap(), pagefind()],

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'monokai'
    }
  }
});