import type { AboutUs, ServiceCard, TestimonialCard } from '~/shared/types';
import type { Home as HomeSchema } from '~/shared/types/sanity.types';

type Home = {
  aboutUs: AboutUs['aboutUs'];
  services?: NonNullable<HomeSchema['services']> & {
    data: ServiceCard[];
  };
  testimonials?: NonNullable<HomeSchema['testimonials']> & {
    data: TestimonialCard[];
  };
};

export type { Home };
