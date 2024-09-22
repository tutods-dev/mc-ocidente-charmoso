import { PortableText } from '@portabletext/solid';
import { createAsync } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { components } from '~/cms/components';
import { getServices } from '~/cms/services';
import { ServiceCard } from '~/components/cards';
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui';
import { cn } from '~/lib/utils';
import type { AboutUs } from '~/shared/types';

function ServicesSection(props: NonNullable<AboutUs['services']>) {
  // Fetch services
  const services = createAsync(() => getServices());

  return (
    <section class="py-4 md:py-16">
      <div class="container grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8">
        <section>
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <For each={services() ?? []}>
                {(service) => (
                  <CarouselItem
                    class={cn([
                      'md:basis-1/2',
                      { 'md:basis-full': services()?.length === 1 },
                    ])}
                  >
                    <ServiceCard {...service} />
                  </CarouselItem>
                )}
              </For>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section class="order-first py-4 md:order-last">
          <h2
            class={cn([
              {
                'mb-4': !props.description,
              },
            ])}
          >
            {props.title}
          </h2>
          <Show when={props.description} keyed={true}>
            {(description) => (
              <div class="mt-2 mb-4">
                <PortableText value={description} components={components} />
              </div>
            )}
          </Show>

          <Button
            as="a"
            href="/projetos"
            variant="ghost"
            class="inline-flex items-center"
          >
            Ver projetos <i class="ph ph-arrow-right text-xs leading-none" />
          </Button>
        </section>
      </div>
    </section>
  );
}

export { ServicesSection };
