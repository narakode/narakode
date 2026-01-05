// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://narakode.id',
  integrations: [icon(), sitemap(), partytown({ config: { forward: ['dataLayer.push'] } })],
  vite: {
    plugins: [tailwindcss()]
  },
});
