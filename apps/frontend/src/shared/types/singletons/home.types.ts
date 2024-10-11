import type { AboutUs, ProjectCard } from '~/shared/types';

type Home = {
  aboutUs: AboutUs['aboutUs'];
  projects?: {
    title: string;
    headline: string;
    data: ProjectCard[];
  };
};

export type { Home };
