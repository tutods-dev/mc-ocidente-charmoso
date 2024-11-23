import { Meta, Title } from '@solidjs/meta';
import { createAsync } from '@solidjs/router';
import { type JSXElement, Match, Show, Switch } from 'solid-js';
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

function PageSeo(props: Props) {
  const seoSettings = createAsync(() => getSeoSettings(), {
    deferStream: true,
  });

  return (
    <>
      {/* Title */}
      <Switch>
        <Match when={props.title}>
          <Title>
            {props.title} | {seoSettings()?.title}
          </Title>
          <Meta property="og:image:alt" content={props.title ?? seoSettings()?.title} />
          <Meta property="og:title" content={`${props.title} | ${seoSettings()?.title}`} />
        </Match>
        <Match when={!props.title}>
          <Title>{seoSettings()?.title}</Title>
          <Meta property="og:title" content={seoSettings()?.title} />
          <Meta property="og:image:alt" content={props.title ?? seoSettings()?.title} />
        </Match>
      </Switch>

      {/* Description */}
      <Switch>
        <Match when={props.description}>
          <Meta name="description" content={props.description} />
          <Meta property="og:description" content={props.description} />
        </Match>
        <Match when={!props.description && seoSettings()?.description}>
          <Meta name="description" content={seoSettings()?.description} />
          <Meta property="og:description" content={seoSettings()?.description} />
        </Match>
      </Switch>

      <Meta name="keywords" content={[seoSettings()?.keywords, props.keywords].flat().join(', ')} />
      <Meta property="og:site_name" content={seoSettings()?.title} />

      {/* Share thumbnail */}
      <Switch>
        <Match when={props.image}>
          <Meta property="og:image" content={props.image} />
        </Match>
        <Match when={!props.image && seoSettings()?.thumbnail}>
          <Meta
            property="og:image"
            content={urlFor(seoSettings()?.thumbnail as ImageWithAlt)
              .width(800)
              .height(600)
              .url()}
          />
        </Match>
      </Switch>

      <Show when={props.children}>{props.children}</Show>
    </>
  );
}

export { PageSeo };
