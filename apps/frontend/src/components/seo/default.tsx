import { Link, Meta, Title } from '@solidjs/meta';
import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getSeoSettings } from '~/cms/services';
import { urlFor } from '~/cms/utils';

function DefaultSeo() {
  const seoSettings = createAsync(() => getSeoSettings(), { deferStream: true });

  return (
    <>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta http-equiv="content-language" content="Portuguese" />
      <Meta name="language" content="Portuguese" />

      {/* Default social tags */}
      <Meta property="og:locale" content="Portuguese" />
      <Meta property="og:type" content="website" />

      {/* Favicon */}
      <Link rel="icon" href="/logo.svg" type="image/svg+xml" />

      {/* Robots */}
      <Meta name="robots" content="index, follow" />

      <Show when={seoSettings()} keyed={true}>
        {(seo) => (
          <>
            <Title>{seo.title}</Title>

            <Show when={seo.description} keyed={true}>
              {(description) => <Meta name="description" content={description} />}
            </Show>
            <Meta name="keywords" content={seo.keywords?.join(', ')} />

            {/* Social tags */}
            <Meta property="og:site_name" content={seo.title} />
            <Meta property="og:title" content={seo.title} />
            <Meta property="og:description" content={seo.description} />

            <Show when={seo.thumbnail} keyed={true}>
              {(thumbnail) => (
                <Meta
                  property="og:image"
                  content={urlFor(thumbnail)
                    .width(800)
                    .height(600)
                    .auto('format')
                    .url()}
                />
              )}
            </Show>
          </>
        )}
      </Show>
    </>
  );
}

export { DefaultSeo };
