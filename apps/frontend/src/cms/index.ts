import { createClient } from '@sanity/client';

import { env } from '~/shared/utils/env';

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

export { client };
