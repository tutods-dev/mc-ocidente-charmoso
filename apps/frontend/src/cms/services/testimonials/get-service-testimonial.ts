import { query } from '@solidjs/router';
import { client } from '~/cms';
import { getServiceTestimonialQuery } from '~/cms/queries/testimonials';
import type { Testimonial } from '~/shared/types';

// TODO: type
/**
 * Service to retrieve the testimonial for a specific service.
 * @param slug Service slug
 */
const getServiceTestimonial = query(async (slug: string) => {
  'use server';

  return client.fetch<Testimonial[]>(getServiceTestimonialQuery, {
    slug,
  });
}, 'service-testimonial');

export { getServiceTestimonial };
