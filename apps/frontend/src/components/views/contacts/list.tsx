import { For, Match, Show, Switch } from 'solid-js';
import type { SocialNetworksAndContacts } from '~/shared/types';
import { getContactUrl, getFormattedPhone } from '~/shared/utils';

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
                  <li class="flex items-center gap-4">
                    <span class="inline-flex size-8 shrink-0 items-center justify-center rounded bg-zinc-800 text-white">
                      <i class={'ph ph-phone-call'} />
                    </span>

                    <div>
                      <h3 class="font-bold text-sm">
                        <Switch>
                          <Match when={contact.type === 'email'}>Email</Match>

                          <Match when={contact.type === 'phone'}>Contacto móvel</Match>
                        </Switch>
                      </h3>

                      <p class="text-lg">
                        <a
                          class="text-zinc-600 underline transition-colors ease-in-out hover:text-zinc-950"
                          href={`${getContactUrl(contact.type)}${contact.value}`}
                          rel="noopener noreferrer"
                        >
                          {contact.type === 'phone'
                            ? getFormattedPhone(contact.value)
                            : contact.value}
                        </a>{' '}
                        <Show when={contact.type === 'phone'}>
                          <small class="text-xs">
                            (Chamada para rede móvel nacional)
                          </small>
                        </Show>
                      </p>
                    </div>
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
