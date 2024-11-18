import { createAsync } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getServiceTestimonial } from '~/cms/services/testimonials/get-service-testimonial';
import { Carousel, CarouselContent, CarouselItem } from '~/components';
import { TestimonialCard } from '~/components/cards';

type Props = {
  /**
   * Project slug.
   */
  slug: string;
};

function ProjectTestimonialSection({ slug }: Props) {
  const data = createAsync(() => getServiceTestimonial(slug));

  return (
    <Show when={data()} keyed={true}>
      {(testimonials) => (
        <Carousel>
          <CarouselContent>
            <For each={testimonials}>
              {(testimonial) => (
                <CarouselItem>
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
        </Carousel>
      )}
    </Show>
  );
}

export { ProjectTestimonialSection };
