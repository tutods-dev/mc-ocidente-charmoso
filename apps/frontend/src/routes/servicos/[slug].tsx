import { type RouteDefinition, createAsync, useParams } from '@solidjs/router';
import { For, Show } from 'solid-js';

import { PortableText } from '@portabletext/solid';
import { components } from '~/cms/components';
import { getService } from '~/cms/services';
import { urlFor } from '~/cms/utils';
import { ImageWithPreview } from '~/components/common';
import { PageSeo } from '~/components/seo';
import { ServiceTestimonialsSection } from '~/components/views/service';
import { cn, getTruncatedStringWithEllipsis } from '~/shared/utils';
import { getBlurHashImage } from '~/shared/utils/images';

export const route: RouteDefinition = {
  preload: ({ params }) => getService(params.slug),
};

function ProjectDetails() {
  // Hooks
  const params = useParams<{ slug: string }>();

  // Data fetching
  const data = createAsync(() => getService(params.slug), {
    name: `service-${params.slug}`,
  });

  return (
    <Show when={data()} keyed={true}>
      {(service) => (
        <>
          <PageSeo
            title={service.title}
            keywords={[service.title.toLowerCase()]}
            description={service.description ? getTruncatedStringWithEllipsis(service.description) : undefined}
            image={urlFor(service.thumbnail).width(800).height(600).auto('format').url()}
          />
          <main>
            <section class="flex items-center justify-center pt-12 pb-10 md:py-12">
              <section
                class={cn([
                  'container relative grid grid-cols-1 gap-8',
                  {
                    'md:grid-cols-2 lg:grid-cols-[1fr_0.75fr]': !!service.gallery,
                  },
                ])}
              >
                <section class={'flex flex-col gap-6'}>
                  <For each={service.gallery}>
                    {(image) => (
                      <ImageWithPreview
                        src={urlFor(image).url()}
                        alt={image.alt}
                        blurHash={getBlurHashImage(image)}
                        width={image.asset.metadata?.dimensions?.width}
                        height={image.asset.metadata?.dimensions?.height}
                        classList={{
                          image: 'aspect-square',
                          figure: 'rounded-sm',
                        }}
                      />
                    )}
                  </For>
                </section>
                <section class={'order-first md:sticky md:top-10 md:right-0 md:order-last md:h-fit md:py-10 lg:top-24'}>
                  <h1 class="tracking-wide">{service.title}</h1>

                  <Show when={service.content} keyed={true}>
                    {(content) => (
                      <div class={cn(['relative my-4', 'overflow-y-hidden', 'transition duration-300 ease-in-out'])}>
                        <PortableText components={components} value={content} />
                      </div>
                    )}
                  </Show>

                  <Show keyed={true} when={service.showTestimonials}>
                    <ServiceTestimonialsSection slug={service.slug} />
                  </Show>
                </section>
              </section>
            </section>
          </main>
        </>
      )}
    </Show>
  );
}

export default ProjectDetails;
