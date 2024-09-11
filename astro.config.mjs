import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

/* import vercel from "@astrojs/vercel/serverless"; */
import vercel from "@astrojs/vercel/static"

export default defineConfig({
  integrations: [tailwind(), preact()],
  site: "https://my-portfolio-delta-one-61.vercel.app",
  output: "static",
  adapter: vercel(),
});



/*   build: {
    format: "file"
  },

  trailingSlash: "never",
  site: "https://my-portfolio-delta-one-61.vercel.app", */