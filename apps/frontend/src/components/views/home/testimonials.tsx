import { For, Show } from 'solid-js';
import { TestimonialCard } from '~/components/cards';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui';
import type { Home } from '~/shared/types';

type Props = NonNullable<Home['testimonials']>;

function TestimonialsSection(props: Props) {
  return (
    <section class="py-4 md:py-16">
      <div class="container grid grid-cols-1 items-center gap-2 md:gap-3 lg:grid-cols-2 lg:gap-8">
        <section>
          <Show when={props.title} keyed={true}>
            {(title) => <h2 class="mb-1">{title}</h2>}
          </Show>

          <Show when={props.headline} keyed={true}>
            {(headline) => <p>{headline}</p>}
          </Show>
        </section>

        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <For each={props.data}>
              {(testimonial) => (
                <CarouselItem>
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
          <div class="mt-2 flex items-center justify-end gap-4">
            <CarouselPrevious variant="secondary" class="static translate-y-0" />
            <CarouselNext variant="secondary" class="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export { TestimonialsSection };
