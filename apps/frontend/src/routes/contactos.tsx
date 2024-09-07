import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getContacts } from '~/cms';
import { ContactFormSection } from '~/components/views/contacts';

function ContactsRouter() {
  const data = createAsync(() => getContacts());
  // const contactsAndSocial = createAsync(() => getSocialNetworksAndContacts());

  return (
    <main>
      <header class="py-16">
        <div class="container flex flex-col items-center justify-center gap-2 text-center">
          <h1 class="font-bold">{data()?.title ?? 'Contactos'}</h1>

          <Show when={data()?.headline} keyed={true}>
            {(headline) => <p class="text-lg">{headline}</p>}
          </Show>
        </div>
      </header>

      <section class="py-16">
        <div class="container">
          <ContactFormSection />
        </div>
      </section>
    </main>
  );
}

export default ContactsRouter;
