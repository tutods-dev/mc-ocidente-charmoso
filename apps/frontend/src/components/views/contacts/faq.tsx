import { For, Show } from 'solid-js';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components';
import { cn } from '~/libs/cn';
import type { ContactsSingleton } from '~/shared/types';

type Props = NonNullable<ContactsSingleton['faq']>;

function Faq(props: Props) {
  return (
    <Show when={props.questions?.length}>
      <section class="py-8 md:py-12">
        <div class="container">
          <Show when={props.title} keyed={true}>
            {(title) => (
              <h2
                class={cn([
                  'mb-2 text-center font-semibold',
                  { 'mb-6': !props.headline },
                ])}
              >
                {title}
              </h2>
            )}
          </Show>

          <Show when={props.headline} keyed={true}>
            {(headline) => <p class="mb-6 text-center">{headline}</p>}
          </Show>

          <Accordion multiple={false} collapsible={true} class="w-full">
            <For each={props.questions}>
              {(question, index) => (
                <AccordionItem value={`item-${index() + 1}`}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              )}
            </For>
          </Accordion>
        </div>
      </section>
    </Show>
  );
}

export { Faq };
