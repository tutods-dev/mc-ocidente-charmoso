import { query } from '@solidjs/router';
import { client } from '~/cms';
import { getServicesArchiveQuery } from '~/cms/queries/singletons';
import type { Archives } from '~/shared/types';

/**
 * Service to retrieve the services archive settings.
 */
const getServicesArchive = query<() => Promise<Archives['services'] | undefined>>(async () => {
  'use server';

  try {
    return client.fetch<Archives['services']>(getServicesArchiveQuery);
  } catch {
    return;
  }
}, 'services-archive');

export { getServicesArchive };
