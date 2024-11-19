import type { ServiceCard } from '~/shared/types/portfolio/service.types';
import type { Testimonial as TestimonialType } from '~/shared/types/sanity.types';

type Testimonial = TestimonialType & {
  service?: ServiceCard;
};

type TestimonialCard = Pick<Testimonial, 'client' | 'content' | 'url'>;

export type { Testimonial, TestimonialCard };
