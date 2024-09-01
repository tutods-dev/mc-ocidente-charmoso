import type { GetProjectQueryResult } from '@/shared/types';
import { For, Show } from 'solid-js';
import { twMerge } from 'tailwind-merge';

type Props = Pick<NonNullable<GetProjectQueryResult>, 'local' | 'date' | 'services'>;

function ProjectDetailsSection({ local, date, services }: Props) {
  return (
    <ul class={'flex flex-col'}>
      <Show when={services}>
        <li
          class={twMerge(
            'flex items-center gap-2 border-b border-b-gray-300 px-1 pt-6 pb-4 first:pt-2',
          )}
        >
          <span class={'flex-1 font-semibold font-serif text-gray-800 text-lg'}>
            Serviços realizados
          </span>
          <span class={'flex-1 break-words text-right text-gray-600'}>
            <For each={services}>
              {(service, index) => (
                <>
                  <a
                    href={`/servicos/${service.slug}`}
                    class={
                      'border-b-2 border-b-transparent font-medium transition-all duration-300 ease-in-out hover:border-b-gray-900 hover:text-gray-900'
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
      </Show>

      <Show when={local}>
        <li
          class={twMerge(
            'flex items-center gap-2 border-b border-b-gray-300 px-1 pt-6 pb-4 first:pt-2',
          )}
        >
          <span class={'flex-1 font-semibold font-serif text-gray-800 text-lg'}>
            Local
          </span>
          <span class={'flex-1 text-right text-gray-600'}>{local}</span>
        </li>
      </Show>

      <Show when={date} keyed={true}>
        {(projectDate) => (
          <li
            class={twMerge(
              'flex items-center gap-2 border-b border-b-gray-300 px-1 pt-6 pb-4 first:pt-2',
            )}
          >
            <span class={'flex-1 font-semibold font-serif text-gray-800 text-lg'}>
              Data
            </span>
            <span class={'flex-1 text-right text-gray-600'}>
              {new Date(projectDate).toLocaleDateString('pt-PT', {
                dateStyle: 'long',
              })}
            </span>
          </li>
        )}
      </Show>
    </ul>
  );
}

export { ProjectDetailsSection };
