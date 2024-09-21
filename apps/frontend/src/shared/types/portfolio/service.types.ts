import type { Image } from '~/shared/types';
import type { Service as ServiceSchema } from '~/shared/types/sanity.types';

type Service = Omit<ServiceSchema, 'thumbnail' | 'slug'> & {
  slug: string;
  thumbnail: Image;
};

type ServiceCard = Pick<Service, 'title' | 'description' | 'slug' | 'thumbnail'>;

export type { Service, ServiceCard };
