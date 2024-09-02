import { archivesSchema } from './archives.schema';
import { settingsSchema } from './settings.schema';

const singletonSchemas = [settingsSchema, archivesSchema];

export { singletonSchemas };
