import { Show } from 'solid-js';
import type { SocialNetworksAndContacts } from '~/shared/types';

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
          {(title) => (
            <h2 class="font-semibold text-lg text-zinc-50 md:text-xl">{title}</h2>
          )}
        </Show>
        <Show when={props.headline} keyed={true}>
          {(headline) => <p class="mt-2">{headline}</p>}
        </Show>
      </div>
    </section>
  );
}

export { ContactsList };
