import { type RouteDefinition, createAsync, useSearchParams } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getPaginatedServices } from '~/cms/services/services/get-services';
import { getServicesArchive } from '~/cms/services/singletons/get-archives';
import { ServiceCard } from '~/components/cards';
import { PageSeo } from '~/components/seo';
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui';
import { cn } from '~/lib/utils';
import { DEFAULT_PAGINATION_OFFSET } from '~/shared/constants';

export const route: RouteDefinition = {
  preload: async () => {
    return Promise.all([getServicesArchive(), getPaginatedServices(1, DEFAULT_PAGINATION_OFFSET)]);
  },
};

function Services() {
  const [searchParams, setSearchParams] = useSearchParams();

  const listSettings = createAsync(() => getServicesArchive());
  const data = createAsync(async () => {
    let currentPage = searchParams.page ? Number(searchParams.page) : 1;

    const pages = await getPaginatedServices(currentPage, DEFAULT_PAGINATION_OFFSET);
    const numberOfPages = Math.ceil(pages.total / DEFAULT_PAGINATION_OFFSET);

    if (currentPage > pages.total) {
      currentPage = numberOfPages;
    }

    const { data, total } = await getPaginatedServices(currentPage, DEFAULT_PAGINATION_OFFSET);

    return {
      data,
      total,
      currentPage,
      numberOfPages: Math.ceil(total / DEFAULT_PAGINATION_OFFSET),
    };
  });

  /**
   * Callback function to change to a new page.
   * @param page Current page
   */
  function handlePageChange(page: number) {
    setSearchParams({ page });
  }

  return (
    <>
      <PageSeo
        title={listSettings()?.title ?? 'Projetos'}
        description={listSettings()?.headline}
        keywords={[listSettings()?.title.toLowerCase() ?? 'servicos']}
      />
      <main>
        <header class="flex flex-col items-center justify-center gap-2 py-4 md:gap-4 md:py-8 lg:py-16">
          <div class="container flex flex-col items-center justify-center gap-2 text-center">
            <h1 class="font-bold">{listSettings()?.title ?? 'Projetos'}</h1>

            <Show when={listSettings()?.headline} keyed={true}>
              {(headline) => <p class="text-lg">{headline}</p>}
            </Show>
          </div>
        </header>

        <Show when={data()?.data.length}>
          <section class="py-4 md:py-8 lg:py-16">
            <div class="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <For each={data()?.data}>
                {(service) => (
                  <ServiceCard
                    title={service.title}
                    headline={service.headline}
                    thumbnail={service.thumbnail}
                    slug={service.slug}
                  />
                )}
              </For>
            </div>
          </section>
        </Show>

        <Show when={data()?.numberOfPages} keyed={true}>
          {(numberOfPages) => (
            <section class={cn('py-2', { hidden: numberOfPages === 1 })}>
              <div class="container flex justify-end">
                <Pagination
                  count={numberOfPages}
                  defaultPage={1}
                  fixedItems={true}
                  onPageChange={handlePageChange}
                  page={Number(searchParams.page) ?? 1}
                  itemComponent={(props) => <PaginationItem page={props.page}>{props.page}</PaginationItem>}
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
    </>
  );
}

export default Services;
