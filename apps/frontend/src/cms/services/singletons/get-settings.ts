import { client } from '@/cms';
import { getCtaSettingsQuery } from '@/cms/queries';
import type { GetCtaSettingsQueryResult } from '@/shared/types';
import { cache } from '@solidjs/router';

/**
 * Service to retrive the CTA settings.
 * @param isEnable Indicates if the query can be executed or not
 */
const getCtaSettings = cache(async (isEnabled = true) => {
  'use server';

  if (!isEnabled) {
    return;
  }

  return client.fetch<GetCtaSettingsQueryResult>(getCtaSettingsQuery);
}, 'cta-settings');

export { getCtaSettings };
