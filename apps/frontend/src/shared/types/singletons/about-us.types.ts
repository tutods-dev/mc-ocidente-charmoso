import type { ImageWithAlt, ImageWithAltAndCaption } from '~/shared/types';
import type { AboutUs as AboutUsSchema } from '~/shared/types/sanity.types';

type AboutUs = Omit<AboutUsSchema, 'aboutUs' | 'factory' | 'process'> & {
  aboutUs?: Omit<NonNullable<AboutUsSchema['aboutUs']>, 'thumbnail'> & {
    thumbnail?: ImageWithAlt;
  };

  factory?: Omit<NonNullable<AboutUsSchema['factory']>, 'gallery'> & {
    gallery?: ImageWithAltAndCaption[];
  };

  process?: Omit<NonNullable<AboutUsSchema['process']>, 'thumbnail'> & {
    thumbnail?: ImageWithAlt;
  };
};

export type { AboutUs };
