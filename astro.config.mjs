import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],

  build: {
    format: "file"
  },

  trailingSlash: "never",

  site: "https://my-portfolio-delta-one-61.vercel.app"
});