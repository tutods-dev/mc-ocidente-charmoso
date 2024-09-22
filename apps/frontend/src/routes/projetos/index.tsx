import { createAsync, useSearchParams } from '@solidjs/router';
import { For, Show, createMemo } from 'solid-js';
import { getPaginatedProjects } from '~/cms/services/projects/get-projects';
import { getProjectsArchive } from '~/cms/services/singletons/get-archives';
import { ProjectCard } from '~/components/cards';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui';
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

  /**
   * Accessor to store the current service.
   */
  const currentTab = createMemo(() => {
    const service = searchParams.service;

    if (!service || service === 'all') {
      return 'all';
    }

    return service;
  });

  /**
   * Callback function to change the service query parameter in order to filter
   * the projects from a new service.
   * @param service Current service.
   */
  function handleServiceChange(service?: string) {
    if (!service) {
      setSearchParams({ service: undefined }, { replace: true });
      return;
    }

    setSearchParams({ service }, { replace: true });
  }

  /**
   * Callback function to change to a new page.
   * @param page Current page
   */
  function handlePageChange(page: number) {
    setSearchParams({ page }, { replace: true });
  }

  return (
    <main>
      <header class="flex flex-col items-center justify-center gap-2 py-4 md:gap-4 md:py-16">
        <div class="container flex flex-col items-center justify-center gap-2 text-center">
          <h1 class="font-bold">{listSettings()?.title ?? 'Projetos'}</h1>

          <Show when={listSettings()?.headline} keyed={true}>
            {(headline) => <p class="text-lg">{headline}</p>}
          </Show>
        </div>

        <div class="container flex items-center justify-center">
          <Menubar class="max-w-screen-lg items-center justify-center">
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => handleServiceChange()}
                class="disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentTab() === 'all'}
              >
                Todos
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => handleServiceChange('cozinhas')}
                class="disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentTab() === 'cozinhas'}
              >
                Cozinhas
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => handleServiceChange('quartos')}
                class="disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentTab() === 'quartos'}
              >
                Quartos
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>

      <Show when={data()?.data} keyed={true}>
        {(projects) => (
          <section class="py-4 md:py-16">
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
