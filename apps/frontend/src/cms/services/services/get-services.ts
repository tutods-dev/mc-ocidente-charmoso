import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getServicesQuery } from '~/cms/queries';
import type { ServiceCard } from '~/shared/types';

/**
 * Service to retrieve a list of available services.
 */
const getServices = cache<() => Promise<ServiceCard[]>>(async () => {
  'use server';

  try {
    return client.fetch(getServicesQuery);
  } catch {
    return [];
  }
}, 'services');

export { getServices };
