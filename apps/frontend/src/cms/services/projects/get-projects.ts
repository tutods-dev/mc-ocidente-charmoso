import { cache } from '@solidjs/router';
import {
  client,
  getPagination,
  getProjectsQuery,
  getTotalOfProjectsFromServiceQuery,
  getTotalOfProjectsQuery,
} from '~/cms';
import type { ProjectCard } from '~/shared/types';

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

export { getProjects, getTotalOfProjects };
