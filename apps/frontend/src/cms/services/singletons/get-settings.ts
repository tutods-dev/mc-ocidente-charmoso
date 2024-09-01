import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getCtaSettingsQuery } from '~/cms/queries';
import type { CtaSettings } from '~/shared/types/singletons/settings.types';

/**
 * Service to retrive the CTA settings.
 * @param isEnable Indicates if the query can be executed or not
 */
const getCtaSettings = cache<(isEnabled: boolean) => Promise<CtaSettings | undefined>>(
  async (isEnabled = true) => {
    'use server';

    if (!isEnabled) {
      return;
    }

    try {
      return client.fetch<CtaSettings>(getCtaSettingsQuery);
    } catch {
      return;
    }
  },
  'cta-settings',
);

export { getCtaSettings };
