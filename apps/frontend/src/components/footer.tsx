import { createAsync } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getSocialNetworksAndContacts } from '~/cms/services/singletons/settings';
import { getSocialNetworkIcon, getSocialNetworkLabel } from '~/shared/utils';
import 'boxicons/css/boxicons.min.css';
import { Logo } from './common';

function Footer() {
  const listOfContacts = createAsync(() => getSocialNetworksAndContacts());

  return (
    <footer class="flex flex-col gap-3 border-t border-t-zinc-200 bg-zinc-100 py-4 md:py-8">
      <div class="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
        <a href="/" class="inline-flex items-center justify-center md:justify-start">
          <Logo class="h-auto w-full max-w-20" />
        </a>

        <Show keyed={true} when={listOfContacts()?.social}>
          {(social) => (
            <ul class="flex items-center justify-center gap-2 md:justify-end">
              <For each={social}>
                {(item) => (
                  <li>
                    <a
                      aria-label={getSocialNetworkLabel(item.network)}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex size-8 shrink-0 items-center justify-center rounded bg-zinc-800 text-lg text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-zinc-300 hover:text-zinc-900"
                    >
                      <i class={getSocialNetworkIcon(item.network)} />
                    </a>
                  </li>
                )}
              </For>
            </ul>
          )}
        </Show>
      </div>
      <div class="container grid grid-cols-1 gap-4 border-t border-t-zinc-100 md:grid-cols-2 lg:gap-8">
        <p class="text-center text-xs md:text-left">
          Copyright© {new Date().getFullYear()} - <strong>MC Ocidente Charmoso</strong>. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

export { Footer };
