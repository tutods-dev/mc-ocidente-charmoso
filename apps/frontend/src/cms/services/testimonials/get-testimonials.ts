import { cache } from '@solidjs/router';
import { client } from '~/cms';
import { getTestimonialsQuery } from '~/cms/queries';
import { getPagination } from '~/cms/utils';
import type { TestimonialCard } from '~/shared/types';

/**
 * Service to retrieve a list of services.
 * @param page Current page
 */
const getTestimonials = cache(async (page = 1): Promise<TestimonialCard[]> => {
  'use server';

  try {
    return client.fetch<TestimonialCard[]>(getTestimonialsQuery, {
      ...getPagination(page),
    });
  } catch {
    return [];
  }
}, 'testimonials');

export { getTestimonials };
