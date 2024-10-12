import { For, Show } from 'solid-js';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  TestimonialCard,
} from '~/components';
import { cn } from '~/libs/cn';
import type { Home } from '~/shared/types';

type Props = NonNullable<Home['testimonials']>;

function TestimonialsSection(props: Props) {
  return (
    <section class="py-4 md:py-16">
      <div class="container grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8">
        <section>
          <Show when={props.title} keyed={true}>
            {(title) => (
              <h2 class={cn(['mb-1 text-center', { 'mb-6': !props.headline }])}>
                {title}
              </h2>
            )}
          </Show>

          <Show when={props.headline} keyed={true}>
            {(headline) => <p class={'mb-2 text-center'}>{headline}</p>}
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
                  <TestimonialCard showProjectButton={true} {...testimonial} />
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
          <div class="mt-2 flex items-center justify-end gap-4">
            <CarouselPrevious class="static translate-y-0" />
            <CarouselNext class="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export { TestimonialsSection };
