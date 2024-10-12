import { Image } from '@unpic/solid';
import { Show } from 'solid-js';
import { urlFor } from '~/cms/utils';
import { Timeline } from '~/components/ui/timeline';
import { cn } from '~/lib/utils';
import type { AboutUs } from '~/shared/types';
import { getBlurHashImage } from '~/shared/utils/images';

function ProcessSection(props: NonNullable<AboutUs['process']>) {
  return (
    <section class="py-4 md:py-16">
      <div
        class={cn([
          'container grid grid-cols-1 gap-4',
          { 'lg:grid-cols-2 lg:gap-12': props.thumbnail },
        ])}
      >
        <section class="md:py-8">
          <h2 class="mb-8">{props.title}</h2>

          <Show when={props.steps} keyed={true}>
            {(steps) => <Timeline activeItem={steps.length} items={steps} />}
          </Show>
        </section>
        <Show when={props.thumbnail} keyed={true}>
          {(thumbnail) => (
            <figure class="relative min-h-72 overflow-hidden rounded-sm">
              <Image
                alt={thumbnail.alt}
                layout="fullWidth"
                background={getBlurHashImage(thumbnail)}
                class="absolute inset-0 object-cover object-center"
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

export { ProcessSection };
