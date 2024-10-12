import type { AboutUs, ProjectCard, TestimonialCard } from '~/shared/types';
import type { Home as HomeSchema } from '~/shared/types/sanity.types';

type Home = {
  aboutUs: AboutUs['aboutUs'];
  projects?: NonNullable<HomeSchema['projects']> & {
    data: ProjectCard[];
  };
  testimonials?: NonNullable<HomeSchema['testimonials']> & {
    data: TestimonialCard[];
  };
};

export type { Home };
