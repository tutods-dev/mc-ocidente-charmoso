import type { ImageWithAltAndCaption } from './image.types';

type UrlBlock = {
  href: string;
  _key: string;
  targetBlank: boolean;
  _type: 'link';
};

type BlockReference = {
  _key: string;
  _type: 'block';
  style: string;
  children: {
    _key: string;
    _type: string;
    text: string;
    marks: string[];
  }[];
  markDefs: {
    _key: string;
    _type: string;
  }[];
  listItem?: 'bullet' | 'number';
};

type BlockContent = Array<BlockReference | ImageWithAltAndCaption>;

// TODO: add relatedPosts & gallery
type ComplexBlockContent = Array<BlockReference | ImageWithAltAndCaption>;

export type { BlockContent, ComplexBlockContent, UrlBlock };
