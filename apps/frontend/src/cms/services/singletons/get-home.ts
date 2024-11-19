import { query } from '@solidjs/router';
import { client } from '~/cms';
import { getHomeQuery } from '~/cms/queries/singletons';
import type { Home } from '~/shared/types';

/**
 * Service to retrieve the data for the homepage.
 */
const getHome = query<() => Promise<Home | undefined>>(async () => {
  'use server';

  try {
    return client.fetch<Home>(getHomeQuery);
  } catch {
    return;
  }
}, 'home');

export { getHome };
