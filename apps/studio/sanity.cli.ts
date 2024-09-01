import { defineCliConfig } from 'sanity/cli';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
    dataset: process.env.SANITY_STUDIO_DATASET ?? '',
  },
  studioHost: 'mc-ocidente-charmoso',

  vite: {
    // @ts-ignore
    plugins: [tsconfigPaths()],
  },
});
