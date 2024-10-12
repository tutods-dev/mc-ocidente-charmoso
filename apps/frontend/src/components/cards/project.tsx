import { Image } from '@unpic/solid';
import { type ComponentProps, For, Show, mergeProps, splitProps } from 'solid-js';
import { urlFor } from '~/cms/utils';
import { Badge } from '~/components/ui';
import type { ProjectCard as ProjectCardType } from '~/shared/types';
import { cn } from '~/shared/utils';
import { getBlurHashImage } from '~/shared/utils/images';

type Props = ProjectCardType & Pick<ComponentProps<'a'>, 'class'>;

function ProjectCard(rawProps: Props) {
  const props = mergeProps(rawProps, {
    class: '',
  });
  const [projectProps, styleProps, otherProps] = splitProps(
    props,
    ['thumbnail', 'slug', 'headline', 'services', 'title'],
    ['class'],
  );

  return (
    <a
      {...otherProps}
      href={`/projetos/${projectProps.slug}`}
      class={cn(['group shadow transition duration-300 ease-in-out', styleProps.class])}
    >
      <article
        class={cn(['relative isolate', 'overflow-hidden', 'h-[500px] rounded-lg'])}
      >
        <Image
          loading="lazy"
          layout="fullWidth"
          src={urlFor(projectProps.thumbnail)
            .auto('format')
            .quality(80)
            .width(600)
            .url()}
          alt={projectProps.title}
          background={getBlurHashImage(projectProps.thumbnail)}
          class="-z-10 absolute inset-0 size-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        <section class="flex size-full flex-col justify-end bg-gradient-to-b from-50% from-transparent to-foreground px-6 py-8 text-zinc-50 transition-colors duration-300 ease-in-out hover:from-0% group-hover:to-foreground">
          <h3
            class={cn(['font-semibold text-white', { 'mb-4': !projectProps.headline }])}
          >
            {projectProps.title}
          </h3>

          <Show when={projectProps.headline}>
            <p class="mt-0.5 mb-4 line-clamp-3 text-md">{projectProps.headline}</p>
          </Show>

          <Show when={projectProps.services.length}>
            <ul class="flex flex-wrap items-center gap-2">
              <For each={projectProps.services}>
                {(service) => (
                  <li>
                    <Badge round={true} variant="secondary" class="pointer-events-none">
                      {service.title}
                    </Badge>
                  </li>
                )}
              </For>
            </ul>
          </Show>
        </section>
      </article>
    </a>
  );
}

export { ProjectCard };
