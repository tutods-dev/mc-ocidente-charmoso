import type { ImageWithAlt } from '~/shared/types/blocks';

type VideoUrlWithCover = {
  _type: 'videoUrlWithCover';
  url?: string;
  cover?: ImageWithAlt;
};

export type { VideoUrlWithCover };
