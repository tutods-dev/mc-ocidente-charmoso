import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
} from '~/shared/types/sanity.types';

type Image = {
  asset: SanityImageAsset;
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: 'image';
};

type ImageWithAlt = Image & {
  alt: string;
};

type ImageWithAltAndCaption = ImageWithAlt & {
  caption?: string;
};

export type { Image, ImageWithAlt, ImageWithAltAndCaption };
