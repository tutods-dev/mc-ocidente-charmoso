import { urlFor } from '~/cms/utils';
import type { Image, ImageWithAlt } from '~/shared/types';

function getBlurHashImage(image: Image | ImageWithAlt) {
  if (image.asset.metadata?.lqip) {
    return image.asset.metadata?.lqip;
  }

  return urlFor(image)
    .size(25, 25)
    .quality(60)
    .blur(60)
    .fit('max')
    .auto('format')
    .url();
}

export { getBlurHashImage };
