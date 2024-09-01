import { projectSchema } from './project.schema';
import { serviceSchema } from './service.schema';
import { singletonSchemas } from './singletons';
import { testimonialSchema } from './testimonial.schema';

const documentSchemas = [
  serviceSchema,
  projectSchema,
  testimonialSchema,
  ...singletonSchemas,
];

export { documentSchemas };
