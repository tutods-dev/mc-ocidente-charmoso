import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getContactsQuery } from '~/cms/queries/singletons/get-contacts-page';
import type { Contacts } from '~/shared/types';

/**
 * Service to retrieve the contacts page settings.
 */
const getContacts = cache<() => Promise<Contacts | undefined>>(async () => {
  'use server';

  try {
    return client.fetch<Contacts>(getContactsQuery);
  } catch {
    return;
  }
}, 'contacts-page');

export { getContacts };
