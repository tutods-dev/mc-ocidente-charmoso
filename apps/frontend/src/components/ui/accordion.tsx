import type { AccordionContentProps, AccordionItemProps, AccordionTriggerProps } from '@kobalte/core/accordion';
import { Accordion as AccordionPrimitive } from '@kobalte/core/accordion';
import type { PolymorphicProps } from '@kobalte/core/polymorphic';
import { type ParentProps, type ValidComponent, splitProps } from 'solid-js';
import { cn } from '~/lib/utils';

export const Accordion = AccordionPrimitive;

type accordionItemProps<T extends ValidComponent = 'div'> = AccordionItemProps<T> & {
  class?: string;
};

export const AccordionItem = <T extends ValidComponent = 'div'>(props: PolymorphicProps<T, accordionItemProps<T>>) => {
  const [local, rest] = splitProps(props as accordionItemProps, ['class']);

  return <AccordionPrimitive.Item class={cn('border-b', local.class)} {...rest} />;
};

type accordionTriggerProps<T extends ValidComponent = 'button'> = ParentProps<
  AccordionTriggerProps<T> & {
    class?: string;
  }
>;

export const AccordionTrigger = <T extends ValidComponent = 'button'>(
  props: PolymorphicProps<T, accordionTriggerProps<T>>,
) => {
  const [local, rest] = splitProps(props as accordionTriggerProps, ['class', 'children']);

  return (
    <AccordionPrimitive.Header class="flex" as="div">
      <AccordionPrimitive.Trigger
        class={cn(
          'group',
          'flex flex-1 items-center justify-between py-4 font-medium text-sm transition-shadow',
          'focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring',
          '[&[data-expanded]>i]:rotate-180',
          local.class,
        )}
        {...rest}
      >
        <span class="transition-all duration-300 ease-in-out group-hover:underline">{local.children}</span>

        <i class={'ph ph-caret-down text-muted-foreground leading-none transition-transform duration-200'} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

type accordionContentProps<T extends ValidComponent = 'div'> = ParentProps<
  AccordionContentProps<T> & {
    class?: string;
  }
>;

export const AccordionContent = <T extends ValidComponent = 'div'>(
  props: PolymorphicProps<T, accordionContentProps<T>>,
) => {
  const [local, rest] = splitProps(props as accordionContentProps, ['class', 'children']);

  return (
    <AccordionPrimitive.Content
      class={cn('animate-accordion-up overflow-hidden text-sm data-[expanded]:animate-accordion-down', local.class)}
      {...rest}
    >
      <div class="pt-0 pb-4">{local.children}</div>
    </AccordionPrimitive.Content>
  );
};
