import { aboutUsSchema } from '@/schemas/documents/singletons/about-us.schema';
import { contactsSchema } from '@/schemas/documents/singletons/contacts.schema';
import { archivesSchema } from './archives.schema';
import { settingsSchema } from './settings.schema';

const singletonSchemas = [
  settingsSchema,
  archivesSchema,
  contactsSchema,
  aboutUsSchema,
];

export { singletonSchemas };
