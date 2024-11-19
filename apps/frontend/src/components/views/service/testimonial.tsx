import { createAsync } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getServiceTestimonial } from '~/cms/services/testimonials/get-service-testimonial';
import { TestimonialCard } from '~/components/cards';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui';

type Props = {
  /**
   * Service slug.
   */
  slug: string;
};

function ServiceTestimonialsSection({ slug }: Props) {
  const data = createAsync(() => getServiceTestimonial(slug));

  return (
    <Show when={data()} keyed={true}>
      {(testimonials) => (
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <For each={testimonials}>
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
      )}
    </Show>
  );
}

export { ServiceTestimonialsSection };
