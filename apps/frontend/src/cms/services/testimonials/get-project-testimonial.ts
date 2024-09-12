import { cache } from '@solidjs/router';
import { client } from '~/cms/client';
import { getProjectTestimonialQuery } from '~/cms/queries';
import type { GetProjectTestimonialQueryResult } from '~/shared/types';

// TODO: type
/**
 * Service to retrieve the testimonial for a specific project.
 * @param slug Project slug
 */
const getProjectTestimonial = cache(async (slug: string) => {
  'use server';

  return client.fetch<GetProjectTestimonialQueryResult>(getProjectTestimonialQuery, {
    slug,
  });
}, 'cta-settings');

export { getProjectTestimonial };
