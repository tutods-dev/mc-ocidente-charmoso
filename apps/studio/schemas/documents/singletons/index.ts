import { aboutUsSchema } from '@/schemas/documents/singletons/about-us.schema';
import { contactsSchema } from '@/schemas/documents/singletons/contacts.schema';
import { homeSchema } from '@/schemas/documents/singletons/home.schema';
import { archivesSchema } from './archives.schema';
import { settingsSchema } from './settings.schema';

const singletonSchemas = [
  homeSchema,
  settingsSchema,
  archivesSchema,
  contactsSchema,
  aboutUsSchema,
];

export { singletonSchemas };
