import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getProjectsArchiveQuery, getServicesArchiveQuery } from '~/cms/queries';
import type { Archives } from '~/shared/types';

/**
 * Service to retrieve the projects archive settings.
 */
const getProjectsArchive = cache<() => Promise<Archives['projects'] | undefined>>(
  async () => {
    'use server';

    try {
      return client.fetch<Archives['projects']>(getProjectsArchiveQuery);
    } catch {
      return;
    }
  },
  'projects-archive',
);

/**
 * Service to retrieve the services archive settings.
 */
const getServicesArchive = cache<() => Promise<Archives['services'] | undefined>>(
  async () => {
    'use server';

    try {
      return client.fetch<Archives['services']>(getServicesArchiveQuery);
    } catch {
      return;
    }
  },
  'services-archive',
);

export { getProjectsArchive, getServicesArchive };
