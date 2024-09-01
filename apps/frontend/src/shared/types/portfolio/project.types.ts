import type { Gallery, Image, ServiceCard, VideoUrlWithCover } from '~/shared/types';
import type { Project as ProjectSchema } from '~/shared/types/sanity.types';

type Project = Omit<
  ProjectSchema,
  'thumbnail' | 'gallery' | 'video' | 'services' | 'slug'
> & {
  slug: string;
  thumbnail: Image;
  gallery: Gallery;
  video?: VideoUrlWithCover;
  services: ServiceCard[];
};

type ProjectCard = Pick<
  Project,
  '_id' | 'title' | 'headline' | 'slug' | 'thumbnail' | 'services'
>;

export type { Project, ProjectCard };
