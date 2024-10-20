import { For, Match, Show, Switch } from 'solid-js';
import type { SocialNetworksAndContacts } from '~/shared/types';
import {
  getContactIcon,
  getContactUrl,
  getFormattedPhone,
  getSocialNetworkIcon,
  getSocialNetworkLabel,
} from '~/shared/utils';

type Props = {
  title?: string;
  headline?: string;
  contacts: SocialNetworksAndContacts['contacts'];
  social: SocialNetworksAndContacts['social'];
};

function ContactsList(props: Props) {
  return (
    <section class="">
      <div>
        <Show when={props.title} keyed={true}>
          {(title) => <h2 class="font-semibold">{title}</h2>}
        </Show>
        <Show when={props.headline} keyed={true}>
          {(headline) => <p class="mt-2">{headline}</p>}
        </Show>

        <Show keyed={true} when={props.contacts}>
          {(contacts) => (
            <ul class="mt-6 space-y-6">
              <For each={contacts}>
                {(contact) => (
                  <li>
                    <a
                      href={`${getContactUrl(contact.type)}${contact.value}`}
                      class="group flex gap-4"
                      rel="noopener noreferrer"
                    >
                      <span class="inline-flex size-10 shrink-0 items-center justify-center rounded bg-zinc-800 text-2xl text-white transition-colors duration-300 ease-in-out group-hover:bg-zinc-200 group-hover:text-zinc-900">
                        <i class={getContactIcon(contact.type)} />
                      </span>

                      <div>
                        <h3 class="font-bold text-md md:text-sm">
                          <Switch>
                            <Match when={contact.type === 'email'}>Email</Match>

                            <Match when={contact.type === 'phone'}>
                              Contacto móvel
                            </Match>
                          </Switch>
                        </h3>

                        <p class="text-lg">
                          <span class="underline">
                            {contact.type === 'phone'
                              ? getFormattedPhone(contact.value)
                              : contact.value}
                          </span>{' '}
                          <Show when={contact.type === 'phone'}>
                            <small class="block text-sm sm:inline md:text-xs">
                              (Chamada para rede móvel nacional)
                            </small>
                          </Show>
                        </p>
                      </div>
                    </a>
                  </li>
                )}
              </For>
            </ul>
          )}
        </Show>

        <Show keyed={true} when={props.social}>
          {(social) => (
            <ul class="mt-6 flex flex-wrap items-center gap-2">
              <For each={social}>
                {(item) => (
                  <li>
                    <a
                      aria-label={getSocialNetworkLabel(item.network)}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex size-10 shrink-0 items-center justify-center rounded bg-zinc-800 text-2xl text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-zinc-200 hover:text-zinc-900"
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
    </section>
  );
}

export { ContactsList };
