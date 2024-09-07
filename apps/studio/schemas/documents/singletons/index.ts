import { contactsSchema } from '@/schemas/documents/singletons/contacts.schema';
import { archivesSchema } from './archives.schema';
import { settingsSchema } from './settings.schema';

const singletonSchemas = [settingsSchema, archivesSchema, contactsSchema];

export { singletonSchemas };
