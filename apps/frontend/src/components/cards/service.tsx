import { Image } from '@unpic/solid';
import { Show } from 'solid-js';
import { urlFor } from '~/cms/utils';
import { Button } from '~/components/ui';
import { cn } from '~/lib/utils';
import type { ServiceCard as ServiceCardType } from '~/shared/types';
import { getBlurHashImage } from '~/shared/utils/images';

function ServiceCard(props: ServiceCardType) {
  return (
    <a class="group" href={`/projetos?service=${props.slug}`}>
      <article class="relative isolate min-h-[400px] overflow-hidden rounded-sm">
        <Image
          src={urlFor(props.thumbnail)
            .auto('format')
            .width(800)
            .height(800)
            .quality(80)
            .url()}
          layout="fullWidth"
          class="absolute inset-0 size-full object-cover object-center"
          background={getBlurHashImage(props.thumbnail)}
          alt={props.title}
        />

        <div
          class={cn([
            'absolute inset-0',
            'flex flex-col justify-end',
            'px-6 pb-8',
            'transition-all duration-300 ease-in-out',
            'bg-gradient-to-b from-zinc-500/0 to-foreground/50 text-zinc-100',
            'group-hover:from-zinc-500/30 group-hover:to-foreground/90',
          ])}
        >
          <h3 class={cn({ 'mb-1': !props.description })}>{props.title}</h3>
          <Show when={props.description} keyed={true}>
            {(description) => <p class="mt-1 mb-2">{description}</p>}
          </Show>

          <Button
            class="inline-flex w-fit items-center px-0 text-zinc-100"
            variant="link"
          >
            Ver projetos&nbsp;
            <i class="ph ph-arrow-right text-xs leading-none" />
          </Button>
        </div>
      </article>
    </a>
  );
}

export { ServiceCard };
