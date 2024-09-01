import { createClient } from '@sanity/client';

import { env } from '@/shared/utils/env';

/**
 * Sanity CMS client.
 */
const client = createClient({
  projectId: env.sanity.projectId,
  dataset: env.sanity.dataset,
  useCdn: env.isProduction,
  apiVersion: env.sanity.apiVersion,
  perspective: 'published',
});

// Exports
export { client };
export * from './utils';
export * from './queries';
export * from './services';
export * from './components';
