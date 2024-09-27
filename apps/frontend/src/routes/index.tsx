import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getSeoSettings } from '~/cms/services';
import { getHome } from '~/cms/services/services/get-home';
import { Button } from '~/components';
import { IntroductionSection } from '~/components/views/about-us';

function HomeRouter() {
  const seo = createAsync(() => getSeoSettings());
  const data = createAsync(() => getHome());

  return (
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
          </>
        )}
      </Show>
    </main>
  );
}

export default HomeRouter;
