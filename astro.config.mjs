// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://narakode.id',
  integrations: [icon(), sitemap(), mdx(), partytown({ config: { forward: ['dataLayer.push'] } })],

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'monokai'
    }
  }
});