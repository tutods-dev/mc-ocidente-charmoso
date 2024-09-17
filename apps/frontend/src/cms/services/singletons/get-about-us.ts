import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getAboutUsQuery } from '~/cms/queries';
import type { AboutUs } from '~/shared/types';

/**
 * Service to retrieve the about us page settings.
 */
const getAboutUs = cache<() => Promise<AboutUs | undefined>>(async () => {
  'use server';

  try {
    return client.fetch<AboutUs>(getAboutUsQuery);
  } catch {
    return;
  }
}, 'about-us-page');

export { getAboutUs };
