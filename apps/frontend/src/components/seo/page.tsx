import { Meta, Title } from '@solidjs/meta';
import { createAsync } from '@solidjs/router';
import { type JSXElement, Match, Show, Switch, mergeProps } from 'solid-js';
import { getSeoSettings } from '~/cms/services/singletons/settings';
import { urlFor } from '~/cms/utils';
import type { ImageWithAlt } from '~/shared/types';

type Props = {
  /**
   * Page title.
   */
  title?: string;

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
  const seoSettings = createAsync(() => getSeoSettings(), {
    deferStream: true,
  });

  const props = mergeProps(rawProps, {
    keywords: seoSettings()?.keywords ?? ['design de interiores', 'móveis'],
    description: seoSettings()?.description,
    image: seoSettings()?.thumbnail
      ? urlFor(seoSettings()?.thumbnail as ImageWithAlt)
          .width(800)
          .height(600)
          .url()
      : undefined,
  });

  return (
    <>
      {/* Title */}
      <Switch>
        <Match when={props.title}>
          <Title>
            {props.title} | {seoSettings()?.title}
          </Title>
        </Match>
        <Match when={props.title}>
          <Title>{seoSettings()?.title}</Title>
        </Match>
      </Switch>

      <Meta name="description" content={props.description ?? seoSettings()?.description} />
      <Meta name="keywords" content={[seoSettings()?.keywords, props.keywords].flat().join(', ')} />

      {/* Social tags */}
      <Meta property="og:site_name" content={seoSettings()?.title} />
      <Meta
        property="og:title"
        content={props.title ? `${props.title} | ${seoSettings()?.title}` : seoSettings()?.title}
      />
      <Meta property="og:image" content={props.image} />
      <Meta property="og:image:alt" content={props.title ?? seoSettings()?.title} />
      <Meta property="og:description" content={props.description} />

      <Show when={props.children}>{props.children}</Show>
    </>
  );
}

export { PageSeo };
