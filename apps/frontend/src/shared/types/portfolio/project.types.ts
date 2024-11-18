import type { Gallery, Image, PaginatedResults, VideoUrlWithCover } from '~/shared/types';
import type { Service as ServiceSchema } from '~/shared/types/sanity.types';

type Service = Omit<ServiceSchema, 'thumbnail' | 'gallery' | 'slug'> & {
  slug: string;
  description?: string;
  thumbnail: Image;
  gallery: Gallery;
  video?: VideoUrlWithCover;
};

type ServiceCard = Pick<Service, 'title' | 'headline' | 'slug' | 'thumbnail'>;

type PaginatedServices = PaginatedResults<ServiceCard[]>;

export type { Service, ServiceCard, PaginatedServices };
