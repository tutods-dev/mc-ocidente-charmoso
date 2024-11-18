import { PortableText } from '@portabletext/solid';
import { Image } from '@unpic/solid';
import clsx from 'clsx';
import { For, type JSX, Show, children } from 'solid-js';
import { components } from '~/cms/components';
import { urlFor } from '~/cms/utils';
import { Stat } from '~/components/cards';
import { cn } from '~/lib/utils';
import type { AboutUs } from '~/shared/types';
import { getBlurHashImage } from '~/shared/utils/images';

type Props = NonNullable<AboutUs['aboutUs']> & {
  /**
   * Additional button.
   */
  children?: JSX.Element;
};

function IntroductionSection(props: Props) {
  const resolved = children(() => props.children);

  return (
    <section class="py-4 md:py-16">
      <div
        class={cn([
          'container grid grid-cols-1 items-center gap-8',
          {
            'lg:grid-cols-2': props?.thumbnail,
          },
        ])}
      >
        <section>
          <h2 class={clsx({ 'mb-4': !props.description })}>{props.title}</h2>
          <Show when={props.description} keyed={true}>
            {(description) => (
              <p class="mt-2 mb-4">
                <PortableText value={description} components={components} />
              </p>
            )}
          </Show>

          <Show when={props.stats}>
            <ul class={cn(['grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6', { 'mb-6': resolved() }])}>
              <For each={props.stats}>{(stat) => <Stat {...stat} />}</For>
            </ul>
          </Show>

          <Show when={resolved()}>{resolved()}</Show>
        </section>
        <Show when={props.thumbnail} keyed={true}>
          {(thumbnail) => (
            <figure class="relative h-full min-h-80 overflow-hidden rounded-sm">
              <Image
                layout="fullWidth"
                class="absolute inset-0 h-full object-cover"
                background={getBlurHashImage(thumbnail)}
                alt={thumbnail.alt ?? props.title}
                src={urlFor(thumbnail).auto('format').width(800).height(800).quality(80).url()}
              />
            </figure>
          )}
        </Show>
      </div>
    </section>
  );
}

export { IntroductionSection };
