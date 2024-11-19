import { query } from '@solidjs/router';
import { client } from '~/cms';
import { getContactsQuery } from '~/cms/queries/singletons/get-contacts-page';
import type { ContactsSingleton } from '~/shared/types';

/**
 * Service to retrieve the contacts page settings.
 */
const getContacts = query<() => Promise<ContactsSingleton | undefined>>(async () => {
  'use server';

  try {
    return client.fetch<ContactsSingleton>(getContactsQuery);
  } catch {
    return;
  }
}, 'contacts-page');

export { getContacts };
