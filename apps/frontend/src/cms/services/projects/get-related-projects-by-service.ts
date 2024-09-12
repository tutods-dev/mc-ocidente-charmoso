import { cache } from '@solidjs/router';
import { client } from '~/cms/client';
import { getRelatedProjectsByServiceQuery } from '~/cms/queries';
import type { Image, Project, Service } from '~/shared/types';

type RelatedProjectsByService = Pick<Project, 'slug'> &
  {
    thumbnail: Image;
    services: Pick<Service, 'slug' | 'title'>[];
  }[];

/**
 * Service to retrieve a specific project.
 * @param slug Project slug to exclude from the search
 * @param serviceSlugs List of service slugs
 * @param start Offset (how many results should skip).
 * @param end Limit (how much results retrieve)
 */
const getRelatedProjectsByService = cache(
  async (slug: string, serviceSlugs: string[], start = 0, end = 6) => {
    'use server';

    try {
      return client.fetch<RelatedProjectsByService>(getRelatedProjectsByServiceQuery, {
        slug,
        serviceSlugs,
        start,
        end,
      });
    } catch {
      return [];
    }
  },
  'related-projects',
);

export { getRelatedProjectsByService };
