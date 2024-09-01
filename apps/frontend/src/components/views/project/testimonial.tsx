import { getProjectTestimonial } from '@/cms/services/testimonials/get-project-testimonial';
import { TestimonialCard } from '@/components/cards';
import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';

type Props = {
  /**
   * Project slug.
   */
  slug: string;
};

function ProjectTestimonialSection({ slug }: Props) {
  const data = createAsync(() => getProjectTestimonial(slug));

  return (
    <Show when={data()} keyed={true}>
      {(testimonial) => <TestimonialCard {...testimonial} />}
    </Show>
  );
}

export { ProjectTestimonialSection };
