import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { client } from '~/cms';

/**
 * Callback function to get image URL for a Sanity image.
 * @param source Image source
 * @returns Image url builder
 */
function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}

export { urlFor };
