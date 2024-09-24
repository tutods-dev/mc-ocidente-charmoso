import { Link, Meta, Title } from '@solidjs/meta';
import { createAsync } from '@solidjs/router';
import { type JSXElement, Show, mergeProps } from 'solid-js';
import { getSeoSettings } from '~/cms/services';
import { urlFor } from '~/cms/utils';
import type { ImageWithAlt } from '~/shared/types';

type Props = {
  /**
   * Page title.
   */
  title: string;

  /**
   * Page description.
   */
  description?: string;

  /**
   * List of keywords related with the page,
   */
  keywords?: string[];

  /**
   * Share image.
   */
  image?: string;

  /**
   * Additional meta tags.
   */
  children?: JSXElement;
};

function PageSeo(rawProps: Props) {
  const seoSettings = createAsync(() => getSeoSettings(), { deferStream: true });

  const props = mergeProps(
    {
      keywords: seoSettings()?.keywords ?? ['design de interiores', 'móveis'],
      description: seoSettings()?.description,
      image: seoSettings()?.thumbnail
        ? urlFor(seoSettings()?.thumbnail as ImageWithAlt)
            .width(800)
            .height(600)
            .url()
        : undefined,
    },
    rawProps,
  );

  return (
    <>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta http-equiv="content-language" content="Portuguese" />
      <Meta name="language" content="Portuguese" />

      {/* Default social tags */}
      <Meta property="og:locale" content="Portuguese" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content={props.image} />

      {/* Favicon */}
      <Link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Robots */}
      <Meta name="robots" content="index, follow" />

      <Title>
        {props.title} | {seoSettings()?.title}
      </Title>

      <Meta name="description" content={props.description} />
      <Meta
        name="keywords"
        content={[seoSettings()?.keywords, props.keywords].join(', ')}
      />

      {/* Social tags */}
      <Meta property="og:site_name" content={seoSettings()?.title} />
      <Meta property="og:title" content={`${props.title} | ${seoSettings()?.title}`} />
      <Meta property="og:description" content={props.description} />

      <Show when={props.children}>{props.children}</Show>
    </>
  );
}

export { PageSeo };
