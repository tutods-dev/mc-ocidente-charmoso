import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getContacts } from '~/cms';
import { ContactForm } from '~/components/views/contacts';
import { cn } from '~/libs/cn';

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
          <Show when={data()?.form?.title} keyed={true}>
            {(title) => (
              <h2
                class={cn(['mb-1 font-semibold', { 'mb-6': !data()?.form?.headline }])}
              >
                {title}
              </h2>
            )}
          </Show>

          <Show when={data()?.form?.headline} keyed={true}>
            {(headline) => <p class={'mb-6'}>{headline}</p>}
          </Show>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

export default ContactsRouter;
