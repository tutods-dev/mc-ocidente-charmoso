import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getProjectTestimonialQuery } from '~/cms/queries';
import type { Testimonial } from '~/shared/types';

// TODO: type
/**
 * Service to retrieve the testimonial for a specific project.
 * @param slug Project slug
 */
const getProjectTestimonial = cache(async (slug: string) => {
  'use server';

  return client.fetch<Testimonial>(getProjectTestimonialQuery, {
    slug,
  });
}, 'cta-settings');

export { getProjectTestimonial };
