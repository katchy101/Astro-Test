import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv("", process.cwd(), 'STORYBLOK')


// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    storyblok( {
      accessToken: env.STORYBLOK_TOKEN,
    })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});