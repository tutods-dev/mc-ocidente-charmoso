import type {
  Gallery,
  Image,
  PaginatedResults,
  ServiceCard,
  VideoUrlWithCover,
} from '~/shared/types';
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
  'title' | 'headline' | 'slug' | 'thumbnail' | 'services'
>;

type PaginatedProjects = PaginatedResults<ProjectCard[]>;

export type { Project, ProjectCard, PaginatedProjects };
