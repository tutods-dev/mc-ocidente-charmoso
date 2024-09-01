import { blockSchemas } from './blocks';
import { documentSchemas } from './documents';

export const schemaTypes = [...documentSchemas, ...blockSchemas];
