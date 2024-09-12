import { Link, Meta } from '@solidjs/meta';

function DefaultSeo() {
  // const seoSettings = createAsync(() => getSeoSettings(), { deferStream: true });

  return (
    <>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta http-equiv="content-language" content="Portuguese" />
      <Meta name="language" content="Portuguese" />

      {/* Default social tags */}
      <Meta property="og:locale" content="Portuguese" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="/media/design.webp" />

      {/* Favicon */}
      <Link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Robots */}
      <Meta name="robots" content="index, follow" />

      {/*<Show when={seoSettings()} keyed={true}>*/}
      {/*  {(seo) => (*/}
      {/*    <>*/}
      {/*      <Title>*/}
      {/*        {seo.title} <Show when={seo.slogan}>-</Show>{' '}*/}
      {/*        <Show when={seo.slogan} keyed={true}>*/}
      {/*          {(slogan) => <>{slogan}</>}*/}
      {/*        </Show>*/}
      {/*      </Title>*/}

      {/*      <Show when={seo.defaultDescription} keyed={true}>*/}
      {/*        {(description) => <Meta name="description" content={description} />}*/}
      {/*      </Show>*/}
      {/*      <Meta name="keywords" content={seo.keywords?.join(', ')} />*/}

      {/*      /!* Social tags *!/*/}
      {/*      <Meta property="og:site_name" content={seo.title} />*/}
      {/*      <Meta*/}
      {/*        property="og:title"*/}
      {/*        content={`${seo.title} ${seo.slogan && `- ${seo.slogan}`}`}*/}
      {/*      />*/}
      {/*      <Meta property="og:description" content={seo.defaultDescription} />*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</Show>*/}
    </>
  );
}

export { DefaultSeo };
