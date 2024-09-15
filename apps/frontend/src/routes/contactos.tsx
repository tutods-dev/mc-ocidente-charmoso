import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getContacts, getSocialNetworksAndContacts } from '~/cms/services';
import { PageSeo } from '~/components/seo';
import { ContactForm, ContactsList, Faq } from '~/components/views/contacts';
import { cn } from '~/libs/cn';
import 'boxicons/css/boxicons.min.css';

function ContactsRouter() {
  const data = createAsync(() => getContacts());
  const listOfContacts = createAsync(() => getSocialNetworksAndContacts());

  return (
    <main>
      <PageSeo
        title={data()?.title ?? 'Contactos'}
        description={data()?.headline}
        keywords={['contactos', 'questões frequentes', 'perguntas frequentes']}
      />
      <header class="py-16">
        <div class="container flex flex-col items-center justify-center gap-2 text-center">
          <h1 class="font-bold">{data()?.title ?? 'Contactos'}</h1>

          <Show when={data()?.headline} keyed={true}>
            {(headline) => <p class="text-lg">{headline}</p>}
          </Show>
        </div>
      </header>

      <section class="py-8 md:py-12">
        <div class="container grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-[0.5fr_1fr]">
          <Show
            when={
              !!listOfContacts()?.contacts?.length || !!listOfContacts()?.social?.length
            }
          >
            <ContactsList
              title={data()?.list?.title}
              headline={data()?.list?.headline}
              contacts={listOfContacts()?.contacts}
              social={listOfContacts()?.social}
            />
          </Show>

          <section>
            <Show when={data()?.form?.title} keyed={true}>
              {(title) => (
                <h2
                  class={cn([
                    'mb-1 font-semibold',
                    { 'mb-6': !data()?.form?.headline },
                  ])}
                >
                  {title}
                </h2>
              )}
            </Show>

            <Show when={data()?.form?.headline} keyed={true}>
              {(headline) => <p class={'mb-6'}>{headline}</p>}
            </Show>
            <ContactForm />
          </section>
        </div>
      </section>

      <Show when={data()?.faq} keyed={true}>
        {(faq) => (
          <section class="py-8 md:py-12">
            <div class="container">
              <Show when={faq.title} keyed={true}>
                {(title) => (
                  <h2
                    class={cn([
                      'mb-2 text-center font-semibold',
                      { 'mb-6': !faq.headline },
                    ])}
                  >
                    {title}
                  </h2>
                )}
              </Show>

              <Show when={faq.headline} keyed={true}>
                {(headline) => <p class="mb-6 text-center">{headline}</p>}
              </Show>

              <Faq questions={faq.questions} />
            </div>
          </section>
        )}
      </Show>
    </main>
  );
}

export default ContactsRouter;
