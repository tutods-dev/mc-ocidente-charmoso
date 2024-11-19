import { type RouteDefinition, createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getHome } from '~/cms/services/singletons';
import { getSeoSettings } from '~/cms/services/singletons/settings';
import { PageSeo } from '~/components/seo';
import { Button } from '~/components/ui';
import { IntroductionSection } from '~/components/views/about-us';
import { ServicesSection, TestimonialsSection } from '~/components/views/home';
import type { Home } from '~/shared/types';

export const route: RouteDefinition = {
  preload: () => Promise.all([getSeoSettings(), getHome()]),
};

function HomeRouter() {
  const seo = createAsync(() => getSeoSettings());
  const data = createAsync(() => getHome());

  return (
    <>
      <PageSeo />
      <main>
        <header class="py-8 md:py-16">
          <div class="container flex flex-col items-center justify-center gap-2 text-center">
            <h1 class="font-bold">{seo()?.title ?? 'MC Ocidente Charmoso'}</h1>

            <Show when={seo()?.description} keyed={true}>
              {(description) => <p class="text-lg">{description}</p>}
            </Show>
          </div>
        </header>

        <Show when={data()} keyed={true}>
          {(page) => (
            <>
              <Show when={page.aboutUs} keyed={true}>
                {(aboutUs) => (
                  <IntroductionSection {...aboutUs}>
                    <Button as="a" variant="ghost" href="/sobre-nos" class="gap-2">
                      Conheça-nos melhor!
                      <i class="ph ph-arrow-right text-xs leading-none" />
                    </Button>
                  </IntroductionSection>
                )}
              </Show>

              <Show when={page.services && !!page.services?.data.length}>
                <ServicesSection {...(page.services as NonNullable<Home['services']>)} />
              </Show>

              <Show when={page.testimonials && !!page.testimonials?.data.length}>
                <TestimonialsSection {...(page.testimonials as NonNullable<Home['testimonials']>)} />
              </Show>
            </>
          )}
        </Show>
      </main>
    </>
  );
}

export default HomeRouter;
