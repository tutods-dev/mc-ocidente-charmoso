import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getHomeQuery } from '~/cms/queries';

/**
 * Service to retrieve the data for the homepage.
 */
const getHome = cache(() => {
  'use server';

  try {
    return client.fetch(getHomeQuery);
  } catch {
    return undefined;
  }
}, 'home');

export { getHome };
