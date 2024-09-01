import type { Image } from '~/shared/types';
import type { Service as ServiceSchema } from '~/shared/types/sanity.types';

type Service = Omit<ServiceSchema, 'image' | 'slug'> & {
  slug: string;
  image: Image;
};

type ServiceCard = Pick<Service, 'title' | 'description' | 'slug' | 'image'>;

export type { Service, ServiceCard };
