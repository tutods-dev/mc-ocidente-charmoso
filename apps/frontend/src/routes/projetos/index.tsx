import { createAsync, useSearchParams } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getAvailableServices } from '~/cms/services';
import {
  getPaginatedProjects,
  getPaginatedProjectsByService,
} from '~/cms/services/projects/get-projects';
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
  const services = createAsync(() => getAvailableServices());
  const data = createAsync(async () => {
    let currentPage = searchParams.page ? Number(searchParams.page) : 1;
    const service = searchParams.service;

    const pages = await getPaginatedProjects(currentPage, DEFAULT_PAGINATION_OFFSET);
    const numberOfPages = Math.ceil(pages.total / DEFAULT_PAGINATION_OFFSET);

    if (currentPage > pages.total) {
      currentPage = numberOfPages;
    }

    if (service) {
      const { data, total } = await getPaginatedProjectsByService(
        service,
        currentPage,
        DEFAULT_PAGINATION_OFFSET,
      );

      return {
        data,
        total,
        currentPage,
      };
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
   * Callback function to change the service query parameter in order to filter
   * the projects from a new service.
   * @param service Current service.
   */
  function handleServiceChange(service?: string) {
    setSearchParams({ service, page: 1 });
  }

  /**
   * Callback function to change to a new page.
   * @param page Current page
   */
  function handlePageChange(page: number) {
    setSearchParams({ page });
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
                disabled={!searchParams.service}
              >
                Todos
              </MenubarTrigger>
            </MenubarMenu>
            <For each={services()}>
              {(service) => (
                <MenubarMenu>
                  <MenubarTrigger
                    onClick={() => handleServiceChange(service.slug)}
                    class="disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={searchParams.service === service.slug}
                  >
                    {service.title}
                  </MenubarTrigger>
                </MenubarMenu>
              )}
            </For>
          </Menubar>
        </div>
      </header>

      <Show when={data()?.data.length}>
        <section class="py-4 md:py-16">
          <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <For each={data()?.data}>
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
