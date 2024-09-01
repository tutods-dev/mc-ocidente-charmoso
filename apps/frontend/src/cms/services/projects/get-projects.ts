import {
  client,
  getPagination,
  getProjectsQuery,
  getTotalOfProjectsFromServiceQuery,
  getTotalOfProjectsQuery,
} from '@/cms';
import type { GetProjectsQueryResult } from '@/shared/types';
import { cache } from '@solidjs/router';

/**
 * Service to retrieve the total of projects.
 * @params serviceSlug Service slug to get the count of projects for the specific service
 */
const getTotalOfProjects = async (serviceSlug?: string): Promise<number> => {
  try {
    let total = 0;

    if (serviceSlug) {
      total = await client.fetch<number>(getTotalOfProjectsFromServiceQuery, {
        serviceSlug,
      });
    } else {
      total = await client.fetch<number>(getTotalOfProjectsQuery);
    }

    return total;
  } catch {
    return 0;
  }
};

/**
 * Service to retrive a list of projects.
 * @param page Current page
 */
const getProjects = cache(async (page = 1): Promise<GetProjectsQueryResult> => {
  'use server';

  try {
    return client.fetch<GetProjectsQueryResult>(getProjectsQuery, {
      ...getPagination(page),
    });
  } catch {
    return [];
  }
}, 'projects');

export { getProjects, getTotalOfProjects };
