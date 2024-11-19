import { For, Show } from 'solid-js';
import { ServiceCard } from '~/components/cards';
import { Button, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui';
import { cn } from '~/lib/utils';
import type { Home } from '~/shared/types';

type Props = NonNullable<Home['services']>;

function ServicesSection(props: Props) {
  return (
    <section class="py-4 md:py-16">
      <div class="container flex flex-col justify-center">
        <Show when={props.title} keyed={true}>
          {(title) => <h2 class={cn(['mb-1 text-center', { 'mb-2': !props.headline }])}>{title}</h2>}
        </Show>

        <Show when={props.headline} keyed={true}>
          {(headline) => <p class={'mb-2 text-center'}>{headline}</p>}
        </Show>

        <Button href="/servicos" as="a" class="mb-4 inline-flex gap-1 self-center" variant="ghost">
          Ver todos os projetos <i class="ph ph-arrow-right" />
        </Button>

        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <For each={props.data}>
              {(service) => (
                <CarouselItem class={cn(['md:basis-1/2 lg:basis-1/3'])}>
                  <ServiceCard {...service} />
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
      </div>
    </section>
  );
}

export { ServicesSection };
