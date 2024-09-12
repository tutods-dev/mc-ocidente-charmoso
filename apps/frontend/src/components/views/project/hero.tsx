import { Show } from 'solid-js';
import { urlFor } from '~/cms/utils';
import type { Project } from '~/shared/types';
import { cn } from '~/shared/utils';

type Props = Pick<NonNullable<Project>, 'title' | 'headline' | 'thumbnail'>;

function ProjectHeroSection({ title, headline, thumbnail }: Props) {
  const thumbnailImg = urlFor(thumbnail).url();

  return (
    <section class="relative isolate flex h-full min-h-[65vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={thumbnailImg}
        alt={title}
        class="-z-10 absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div class={'-z-10 absolute inset-0 bg-gray-800/80'} />

      <section
        class={cn([
          'h-full',
          'container px-4 py-12',
          'flex flex-col justify-center',
          'text-center text-gray-50',
        ])}
      >
        <h1 class={'text-white'}>{title}</h1>
        <Show when={!!headline}>
          <p class={'mt-2 text-gray-100 text-lg leading-8'}>{headline}</p>
        </Show>

        <footer class="hidden items-center justify-center gap-2 sm:mt-8 sm:flex sm:justify-center">
          <a
            href="/projetos"
            class="inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold text-sm text-white leading-6 outline-none transition-colors duration-300 ease-in-out hover:text-white focus-visible:ring-1 focus-visible:ring-white"
          >
            Ver mais projetos
          </a>
          <a
            href="/contactos"
            class="inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold text-sm text-white leading-6 outline-none ring-1 ring-white/20 transition duration-300 ease-in-out hover:ring-white focus-visible:ring-white"
          >
            Fale connosco
            <i class="ph ph-arrow-right" />
          </a>
        </footer>
      </section>
    </section>
  );
}

export { ProjectHeroSection };
