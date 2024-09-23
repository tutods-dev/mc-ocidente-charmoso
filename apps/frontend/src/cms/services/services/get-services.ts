import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getAvailableServicesQuery, getServicesQuery } from '~/cms/queries';
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

/**
 * Service to retrieve a list of available services.
 */
const getAvailableServices = cache<
  () => Promise<Pick<ServiceCard, 'title' | 'slug'>[]>
>(async () => {
  'use server';

  try {
    return client.fetch<Pick<ServiceCard, 'title' | 'slug'>[]>(
      getAvailableServicesQuery,
    );
  } catch {
    return [];
  }
}, 'available-services');

export { getServices, getAvailableServices };
