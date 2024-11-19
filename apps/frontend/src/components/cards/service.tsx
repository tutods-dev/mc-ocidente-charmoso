import { Image } from '@unpic/solid';
import { type ComponentProps, Show, mergeProps, splitProps } from 'solid-js';
import { urlFor } from '~/cms/utils';
import { cn } from '~/lib/utils';
import type { ServiceCard as ServiceCardType } from '~/shared/types';
import { getBlurHashImage } from '~/shared/utils/images';

type Props = ServiceCardType & Pick<ComponentProps<'a'>, 'class'>;

function ServiceCard(rawProps: Props) {
  const props = mergeProps(rawProps, {
    class: '',
  });
  const [serviceProps, styleProps, otherProps] = splitProps(
    props,
    ['thumbnail', 'slug', 'headline', 'title'],
    ['class'],
  );

  return (
    <a
      {...otherProps}
      href={`/servicos/${serviceProps.slug}`}
      class={cn(['group shadow transition duration-300 ease-in-out', styleProps.class])}
    >
      <article class={cn(['relative isolate', 'h-96 md:h-[500px]', 'rounded-lg', 'overflow-hidden'])}>
        <Image
          loading="lazy"
          layout="fullWidth"
          src={urlFor(serviceProps.thumbnail).auto('format').quality(80).width(600).url()}
          alt={serviceProps.title}
          background={getBlurHashImage(serviceProps.thumbnail)}
          class="-z-10 absolute inset-0 size-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        <section class="flex size-full flex-col justify-end bg-gradient-to-b from-50% from-transparent to-foreground px-6 py-8 text-zinc-50 transition-colors duration-300 ease-in-out hover:from-0% group-hover:to-foreground">
          <h3 class={cn(['font-semibold text-white', { 'mb-4': !serviceProps.headline }])}>{serviceProps.title}</h3>

          <Show when={serviceProps.headline}>
            <p class="mt-0.5 mb-4 line-clamp-6 text-md">{serviceProps.headline}</p>
          </Show>
        </section>
      </article>
    </a>
  );
}

export { ServiceCard };
