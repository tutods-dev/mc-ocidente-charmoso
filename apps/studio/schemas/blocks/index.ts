import { blockContentSchema } from './block-content.schema';
import { gallerySchema } from './gallery.schema';
import { imageWithAltAndCaptionSchema, imageWithAltSchema } from './image.schema';
import { videoUrlWithCoverSchema } from './video.schema';

const blockSchemas = [
  blockContentSchema,
  imageWithAltSchema,
  imageWithAltAndCaptionSchema,
  gallerySchema,
  videoUrlWithCoverSchema,
];

export { blockSchemas };
