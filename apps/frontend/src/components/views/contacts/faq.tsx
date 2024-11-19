import { For } from 'solid-js';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui';
import type { ContactsSingleton } from '~/shared/types';

type Props = Pick<NonNullable<ContactsSingleton['faq']>, 'questions'>;

function Faq(props: Props) {
  return (
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
  );
}

export { Faq };
