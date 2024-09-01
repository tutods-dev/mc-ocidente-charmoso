import { For, Show } from 'solid-js';
import { urlFor } from '~/cms';
import type { GetProjectsQueryResult } from '~/shared/types';
import { cn } from '~/shared/utils';

type Props = Pick<
  GetProjectsQueryResult[number],
  'title' | 'slug' | 'thumbnail' | 'headline' | 'services'
>;

function ProjectCard(props: Props) {
  return (
    <a
      href={`/projetos/${props.slug}`}
      class={'group shadow transition duration-300 ease-in-out'}
    >
      <article
        class={cn(['relative isolate', 'overflow-hidden', 'h-[500px] rounded-lg'])}
      >
        <img
          src={urlFor(props.thumbnail).format('webp').maxWidth(1500).url()}
          alt={props.title}
          class={
            '-z-10 absolute inset-0 size-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105'
          }
        />

        <section class="flex size-full flex-col justify-end bg-gradient-to-b from-transparent to-80% to-gray-900/60 px-6 py-8 text-gray-50 transition-colors duration-300 ease-in-out group-hover:to-gray-900/80">
          <h3 class={'font-semibold text-white'}>{props.title}</h3>

          <Show when={props.headline}>
            <p class={'mt-1 mb-4 line-clamp-3 text-sm'}>{props.headline}</p>
          </Show>

          <Show when={props.services.length}>
            <ul class={'flex flex-wrap items-center gap-2'}>
              <For each={props.services}>
                {(service) => (
                  <li
                    class={
                      'inline-flex rounded-full border-white bg-gray-400/30 px-2 py-0.5 text-gray-50 text-sm'
                    }
                  >
                    {/*<a*/}
                    {/*  class={*/}
                    {/*    'inline-flex rounded-full border-white bg-gray-400/30 px-2 py-0.5 font-semibold text-gray-50 text-sm'*/}
                    {/*  }*/}
                    {/*  href={`/servicos/${service.slug}`}*/}
                    {/*>*/}
                    {service.title}
                    {/*</a>*/}
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
