import { query } from '@solidjs/router';
import { client } from '~/cms';
import { getSeoSettingsQuery } from '~/cms/queries/singletons';
import type { SeoSettings } from '~/shared/types';

/**
 * Service to retrieve settings related with SEO.
 */
const getSeoSettings = query(async (): Promise<SeoSettings> => {
  'use server';

  try {
    return client.fetch<SeoSettings>(getSeoSettingsQuery);
  } catch {
    return {
      title: 'MC Ocidente Charmoso',
      keywords: [''],
      description: '',
    };
  }
}, 'seo-settings');

export { getSeoSettings };
