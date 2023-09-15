import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), storyblok({
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
      'all-articles': 'storyblok/AllArticles',
    }
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "hybrid",
  adapter: vercel()
});