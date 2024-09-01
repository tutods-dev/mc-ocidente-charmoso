import { cache, redirect } from '@solidjs/router';
import { client } from '~/cms';
import { getProjectQuery } from '~/cms/queries/projects/get-project';
import type { Project } from '~/shared/types';

/**
 * Service to retrive a specific project.
 * @param slug Project slug
 */
const getProject = cache(async (slug: string): Promise<undefined | Project> => {
  'use server';

  try {
    const project = await client.fetch<Project>(getProjectQuery, {
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
}, 'project');

export { getProject };
