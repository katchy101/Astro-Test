import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [ tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      config: 'storyblok/Config',
      hero: 'storyblok/Hero',
      article: 'storyblok/Article',
      'popular-articles': 'storyblok/PopularArticles',
      'all-articles': 'storyblok/AllArticles'
    }
  }), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    },
    optimizeDeps: {
      exclude: ['js-big-decimal']
    }
  },
  output: "server",
  adapter: vercel(),
});