import { type RouteDefinition, createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getAboutUs } from '~/cms/services/singletons';
import { PageSeo } from '~/components/seo';
import { FactorySection, IntroductionSection, ProcessSection, ServicesSection } from '~/components/views/about-us';

export const route: RouteDefinition = {
  preload: () => getAboutUs(),
};

function AboutUsRoute() {
  const data = createAsync(() => getAboutUs());

  return (
    <>
      <PageSeo title={data()?.title ?? 'Sobre nós'} description={data()?.headline} />
      <main>
        <header class="py-8 md:py-16">
          <div class="container flex flex-col items-center justify-center gap-2 text-center">
            <h1 class="font-bold">{data()?.title ?? 'Sobre nós'}</h1>

            <Show when={data()?.headline} keyed={true}>
              {(headline) => <p class="text-lg">{headline}</p>}
            </Show>
          </div>
        </header>

        <Show when={data()?.aboutUs} keyed={true}>
          {(aboutUs) => <IntroductionSection {...aboutUs} />}
        </Show>

        <Show when={data()?.factory} keyed={true}>
          {(factory) => <FactorySection {...factory} />}
        </Show>

        <Show when={data()?.process} keyed={true}>
          {(process) => <ProcessSection {...process} />}
        </Show>

        <ServicesSection {...data()?.services} title={data()?.services?.title ?? 'O que fazemos?'} />
      </main>
    </>
  );
}

export default AboutUsRoute;
