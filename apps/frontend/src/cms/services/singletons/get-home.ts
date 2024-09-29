import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getHomeQuery } from '~/cms/queries';
import type { Home } from '~/shared/types';

/**
 * Service to retrieve the data for the homepage.
 */
const getHome = cache<() => Promise<Home | undefined>>(async () => {
  'use server';

  try {
    return client.fetch<Home>(getHomeQuery);
  } catch {
    return;
  }
}, 'home');

export { getHome };
