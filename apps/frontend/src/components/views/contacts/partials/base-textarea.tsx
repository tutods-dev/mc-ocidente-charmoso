import type { FieldApi } from '@tanstack/solid-form';
import { type ComponentProps, For, type JSXElement, Match, Show, Switch, mergeProps, splitProps } from 'solid-js';
import {
  TextField,
  TextFieldDescription,
  TextFieldErrorMessage,
  TextFieldLabel,
  TextFieldTextArea,
} from '~/components/ui';
import { cn } from '~/lib/utils';

type Props = Omit<ComponentProps<typeof TextFieldTextArea>, 'onChange'> &
  Pick<ComponentProps<typeof TextField>, 'onChange'> & {
    children?: JSXElement;

    // biome-ignore lint/suspicious/noExplicitAny:
    field: FieldApi<any, any, any, any, any>;

    helpMessage?: string;
  };

function BaseTextArea(rawProps: Props) {
  const props = mergeProps({ class: '' }, rawProps);
  const [commonProps, eventProps, inputProps] = splitProps(
    props,
    ['field', 'children', 'class', 'helpMessage'],
    ['onChange'],
  );

  return (
    <TextField
      validationState={commonProps.field.state.meta.errors.length ? 'invalid' : 'valid'}
      onChange={eventProps.onChange}
      class="flex flex-col gap-1.5"
    >
      <TextFieldLabel for={inputProps.name ?? inputProps.id}>
        {commonProps.children}

        <Show when={inputProps.required}>
          <span class="text-red-500">*</span>
        </Show>
      </TextFieldLabel>
      <TextFieldTextArea
        {...inputProps}
        name={inputProps.name ?? inputProps.id}
        class={cn([
          commonProps.class,
          {
            'border-destructive text-destructive': commonProps.field.state.meta.errors.length,
          },
        ])}
      />

      <Switch>
        <Match when={commonProps.field.state.meta.errors} keyed={true}>
          {(errors) => <For each={errors}>{(error) => <TextFieldErrorMessage>{error}</TextFieldErrorMessage>}</For>}
        </Match>

        <Match when={commonProps.helpMessage}>
          <TextFieldDescription>{commonProps.helpMessage}</TextFieldDescription>
        </Match>
      </Switch>
    </TextField>
  );
}

export { BaseTextArea };
