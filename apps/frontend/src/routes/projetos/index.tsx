import { getProjects } from '@/cms/services/projects/get-projects';
import { ProjectCard } from '@/components/cards/project';
import { createAsync } from '@solidjs/router';
import { For, Show } from 'solid-js';

export default function Projects() {
  // const [searchParams, setSearchParams] = useSearchParams();
  //
  // const totalOfProjects = createAsync(() => getTotalOfProjects());
  //
  // const [paginationProps, page, setPage] = createPagination({
  //   pages: Math.ceil((totalOfProjects() ?? 0) / DEFAULT_PAGINATION_OFFSET),
  // });

  const projects = createAsync(() => getProjects(1));
  //
  // createEffect(() => {
  //   setSearchParams({
  //     page: page(),
  //   });
  // });

  return (
    <main>
      <header class={'py-12'}>
        <div class="container flex flex-col items-center justify-center text-center">
          <h1>Projetos</h1>
        </div>
      </header>

      <section>
        <Show when={projects()}>
          <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <For each={projects()}>
              {(project) => (
                <ProjectCard
                  title={project.title}
                  headline={project.headline}
                  thumbnail={project.thumbnail}
                  services={project.services}
                  slug={project.slug}
                />
              )}
            </For>
          </div>
        </Show>
      </section>
    </main>
  );
}
