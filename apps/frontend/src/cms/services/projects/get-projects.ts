import { cache } from '@solidjs/router';
import {
  client,
  getPaginatedProjectsQuery,
  getPagination,
  getProjectsQuery,
  getTotalOfProjectsFromServiceQuery,
  getTotalOfProjectsQuery,
} from '~/cms';
import { DEFAULT_PAGINATION_OFFSET } from '~/shared/constants';
import type { PaginatedProjects, ProjectCard } from '~/shared/types';

/**
 * Service to retrieve the total of projects.
 * @params serviceSlug Service slug to get the count of projects for the specific service
 */
const getTotalOfProjects = cache(async (serviceSlug?: string): Promise<number> => {
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
}, 'total-projects');

/**
 * Service to retrive a list of projects.
 * @param page Current page
 */
const getProjects = cache(async (page = 1): Promise<ProjectCard[]> => {
  'use server';

  try {
    return client.fetch<ProjectCard[]>(getProjectsQuery, {
      ...getPagination(page),
    });
  } catch {
    return [];
  }
}, 'projects');

/**
 * Service to retrieve paginated projects, returning the total of projects and the list of projects for the current page.
 * @param page Page number
 * @param offset Number of results per page
 */
const getPaginatedProjects = cache<
  (page?: number, offset?: number) => Promise<PaginatedProjects>
>(async (page = 1, offset = DEFAULT_PAGINATION_OFFSET) => {
  try {
    const { start, end } = getPagination(page, offset);

    return client.fetch<PaginatedProjects>(getPaginatedProjectsQuery, {
      start,
      end,
    });
  } catch {
    return {
      total: 0,
      data: [],
    };
  }
}, 'paginated-projects');

export { getProjects, getTotalOfProjects, getPaginatedProjects };
