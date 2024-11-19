import { query } from '@solidjs/router';
import { client } from '~/cms';
import { getSocialNetworksAndContactsQuery } from '~/cms/queries/singletons';
import type { SocialNetworksAndContacts } from '~/shared/types';

/**
 * Service to retrieve social networks and contacts from settings
 */
const getSocialNetworksAndContacts = query(async (): Promise<SocialNetworksAndContacts> => {
  'use server';

  try {
    return client.fetch<SocialNetworksAndContacts>(getSocialNetworksAndContactsQuery);
  } catch {
    return {
      social: [],
      contacts: [],
    };
  }
}, 'social-networks-and-contacts');

export { getSocialNetworksAndContacts };
