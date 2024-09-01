import { client } from '@/cms';
import { getRelatedProjectsByServiceQuery } from '@/cms/queries';
import type { Project, Service } from '@/shared/types';
import type { SanityAssetDocument } from '@sanity/client';
import { cache } from '@solidjs/router';

type RelatedProjectsByService = Pick<Project, '_id' | 'slug'> &
  {
    thumbnail: Omit<Project['thumbnail'], 'asset'> & {
      asset: SanityAssetDocument;
    };
    services: Pick<Service, '_id' | 'slug' | 'title'>[];
  }[];

/**
 * Service to retrive a specific project.
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
