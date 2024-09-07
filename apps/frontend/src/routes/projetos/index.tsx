import { createAsync, useSearchParams } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getPaginatedProjects } from '~/cms/services/projects/get-projects';
import { getProjectsArchive } from '~/cms/services/singletons/get-archives';
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from '~/components';
import { ProjectCard } from '~/components/cards/project';
import { DEFAULT_PAGINATION_OFFSET } from '~/shared/constants';

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  const listSettings = createAsync(() => getProjectsArchive());
  const data = createAsync(async () => {
    let currentPage = searchParams.page ? Number(searchParams.page) : 1;

    const pages = await getPaginatedProjects(currentPage, DEFAULT_PAGINATION_OFFSET);
    const numberOfPages = Math.ceil(pages.total / DEFAULT_PAGINATION_OFFSET);

    if (currentPage > pages.total) {
      currentPage = numberOfPages;
    }

    const { data, total } = await getPaginatedProjects(
      currentPage,
      DEFAULT_PAGINATION_OFFSET,
    );

    return {
      data,
      total,
      currentPage,
    };
  });

  function handlePageChange(page: number) {
    setSearchParams({ page }, { replace: true });
  }

  return (
    <main>
      <header class="py-16">
        <div class="container flex flex-col items-center justify-center gap-2 text-center">
          <h1 class="font-bold">{listSettings()?.title ?? 'Projetos'}</h1>

          <Show when={listSettings()?.headline} keyed={true}>
            {(headline) => <p class="text-lg">{headline}</p>}
          </Show>
        </div>
      </header>

      <Show when={data()?.data} keyed={true}>
        {(projects) => (
          <section class="py-16">
            <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <For each={projects}>
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
          </section>
        )}
      </Show>

      <Show when={data()?.total} keyed={true}>
        {(total) => (
          <section class="py-2">
            <div class="container flex justify-end">
              <Pagination
                count={total}
                defaultPage={1}
                fixedItems={true}
                onPageChange={handlePageChange}
                page={Number(searchParams.page) ?? 1}
                itemComponent={(props) => (
                  <PaginationItem page={props.page}>{props.page}</PaginationItem>
                )}
                ellipsisComponent={() => <PaginationEllipsis />}
              >
                <PaginationPrevious />
                <PaginationItems />
                <PaginationNext />
              </Pagination>
            </div>
          </section>
        )}
      </Show>
    </main>
  );
}

export default Projects;
