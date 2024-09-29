import type { ProjectCard } from '~/shared/types/portfolio/project.types';
import type { Testimonial as TestimonialType } from '~/shared/types/sanity.types';

type Testimonial = Omit<TestimonialType, 'project'> & {
  project?: ProjectCard;
};

type TestimonialCard = Pick<Testimonial, 'client' | 'content' | 'url' | 'project'>;

export type { Testimonial, TestimonialCard };
