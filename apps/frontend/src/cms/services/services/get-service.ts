import { query, redirect } from '@solidjs/router';
import { client } from '~/cms';
import { getServiceQuery } from '~/cms/queries/services';
import type { Service } from '~/shared/types';

/**
 * Service to retrieve a specific service.
 * @param slug Service slug
 */
const getService = query(async (slug: string): Promise<undefined | Service> => {
  'use server';

  try {
    const service = await client.fetch<Service>(getServiceQuery, {
      slug,
    });

    // If the service isn't found, redirect to the list of services
    if (!service) {
      throw redirect('/servicos');
    }

    return service;
  } catch {
    throw redirect('/servicos');
  }
}, 'service');

export { getService };
