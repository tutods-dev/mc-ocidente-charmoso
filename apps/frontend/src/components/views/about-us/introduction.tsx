import { Image } from '@unpic/solid';
import clsx from 'clsx';
import { For, Show } from 'solid-js';
import { urlFor } from '~/cms/utils';
import { Stat } from '~/components/common';
import { cn } from '~/lib/utils';
import type { AboutUs } from '~/shared/types';
import { getBlurHashImage } from '~/shared/utils/images';

function IntroductionSection(props: NonNullable<AboutUs['aboutUs']>) {
  return (
    <section class="py-16">
      <div
        class={cn([
          'container grid grid-cols-1 items-center gap-4',
          {
            'sm:grid-cols-2 sm:gap-8': props?.thumbnail,
          },
        ])}
      >
        <section>
          <h2 class={clsx({ 'mb-4': !props.description })}>{props.title}</h2>
          <Show when={props.description} keyed={true}>
            {(description) => <p class="mt-2 mb-4">{description}</p>}
          </Show>

          <Show when={props.stats}>
            <ul class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
              <For each={props.stats}>{(stat) => <Stat {...stat} />}</For>
            </ul>
          </Show>
        </section>
        <Show when={props.thumbnail} keyed={true}>
          {(thumbnail) => (
            <figure class="relative min-h-80 overflow-hidden rounded-sm">
              <Image
                layout="fullWidth"
                class="absolute inset-0 object-cover"
                background={getBlurHashImage(thumbnail)}
                alt={thumbnail.alt ?? props.title}
                src={urlFor(thumbnail)
                  .auto('format')
                  .width(800)
                  .height(800)
                  .quality(80)
                  .url()}
              />
            </figure>
          )}
        </Show>
      </div>
    </section>
  );
}

export { IntroductionSection };
