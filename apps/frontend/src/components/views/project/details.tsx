import { For, Show } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import { Separator } from '~/components/ui';
import type { Project } from '~/shared/types';

type Props = Pick<NonNullable<Project>, 'local' | 'date' | 'services'>;

function ProjectDetailsSection({ local, date, services }: Props) {
  return (
    <ul class={'flex flex-col'}>
      <Show when={services}>
        <li
          class={twMerge(
            'flex flex-col px-1 pt-2 pb-4 md:flex-row md:items-center md:gap-2',
          )}
        >
          <span class={'flex-1 font-semibold font-serif text-lg text-zinc-800'}>
            Serviços realizados
          </span>
          <span class={'flex-1 break-words text-zinc-600 md:text-right'}>
            <For each={services}>
              {(service, index) => (
                <>
                  <a
                    href={`/servicos/${service.slug}`}
                    class={
                      'border-b-2 border-b-transparent font-medium transition-all duration-300 ease-in-out hover:border-b-zinc-900 hover:text-zinc-900'
                    }
                  >
                    {service.title}
                  </a>
                  {index() < services.length - 1 && ','}
                </>
              )}
            </For>
          </span>
        </li>
        <Separator />
      </Show>

      <Show when={local}>
        <li
          class={twMerge(
            'flex flex-col px-1 py-4 md:flex-row md:items-center md:gap-2',
          )}
        >
          <span class={'flex-1 font-semibold font-serif text-lg text-zinc-800'}>
            Local
          </span>
          <span class={'flex-1 text-zinc-600 md:text-right'}>{local}</span>
        </li>
        <Separator />
      </Show>

      <Show when={date} keyed={true}>
        {(projectDate) => (
          <>
            <li
              class={twMerge(
                'flex flex-col px-1 py-4 md:flex-row md:items-center md:gap-2',
              )}
            >
              <span class={'flex-1 font-semibold font-serif text-lg text-zinc-800'}>
                Data
              </span>
              <span class={'flex-1 text-zinc-600 md:text-right'}>
                {new Date(projectDate).toLocaleDateString('pt-PT', {
                  dateStyle: 'long',
                })}
              </span>
            </li>
            <Separator />
          </>
        )}
      </Show>
    </ul>
  );
}

export { ProjectDetailsSection };
