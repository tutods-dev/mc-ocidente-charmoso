import { serviceSchema } from './service.schema';
import { singletonSchemas } from './singletons';
import { testimonialSchema } from './testimonial.schema';

const documentSchemas = [serviceSchema, testimonialSchema, ...singletonSchemas];

export { documentSchemas };
