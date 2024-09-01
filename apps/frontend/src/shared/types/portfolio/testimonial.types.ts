import type { ProjectCard } from '~/shared/types/portfolio/project.types';
import type { Testimonial as TestimonialType } from '~/shared/types/sanity.types';

type Testimonial = Omit<TestimonialType, 'project'> & {
  project?: ProjectCard;
};

type TestimonialCard = Pick<Testimonial, '_id' | 'client' | 'content' | 'url'>;

export type { Testimonial, TestimonialCard };
