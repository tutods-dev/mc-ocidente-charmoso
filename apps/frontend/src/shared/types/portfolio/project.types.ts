import type { Gallery, Image, ServiceCard, VideoUrlWithCover } from '~/shared/types';
import type { Project as ProjectSchema } from '~/shared/types/sanity.types';

type Project = Omit<
  ProjectSchema,
  'image' | 'gallery' | 'video' | 'services' | 'slug'
> & {
  slug: string;
  image: Image;
  gallery: Gallery;
  video?: VideoUrlWithCover;
  services: ServiceCard[];
};

type ProjectCard = Pick<Project, '_id' | 'title' | 'headline' | 'slug' | 'image'>;

export type { Project, ProjectCard };
