import { client } from '@/cms';
import { getProjectQuery } from '@/cms/queries/projects/get-project';
import type { GetProjectQueryResult } from '@/shared/types';
import { cache, redirect } from '@solidjs/router';

/**
 * Service to retrive a specific project.
 * @param slug Project slug
 */
const getProject = cache(
  async (slug: string): Promise<undefined | GetProjectQueryResult> => {
    'use server';

    try {
      const project = await client.fetch<GetProjectQueryResult>(getProjectQuery, {
        slug,
      });

      // If the project isn't found, redirect to the list of projects
      if (!project) {
        throw redirect('/projetos');
      }

      return project;
    } catch {
      throw redirect('/projetos');
    }
  },
  'project',
);

export { getProject };
