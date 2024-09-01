import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
  ssr: true,
  server: {
    minify: false,
    prerender: {
      crawlLinks: false,
    },
  },
});
