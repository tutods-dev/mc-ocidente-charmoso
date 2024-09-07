import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getCtaSettingsQuery, getSocialNetworksAndContactsQuery } from '~/cms/queries';
import type {
  CtaSettings,
  SocialNetworksAndContacts,
} from '~/shared/types/singletons/settings.types';

/**
 * Service to retrieve the CTA settings.
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

/**
 * Service to retrieve social networks and contacts from settings
 */
const getSocialNetworksAndContacts = cache(
  async (): Promise<SocialNetworksAndContacts> => {
    'use server';

    try {
      return client.fetch<SocialNetworksAndContacts>(getSocialNetworksAndContactsQuery);
    } catch {
      return {
        social: [],
        contacts: [],
      };
    }
  },
  'social-networks-and-contacts',
);

export { getCtaSettings, getSocialNetworksAndContacts };
