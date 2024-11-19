import { useAction } from '@solidjs/router';
import { createForm } from '@tanstack/solid-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { Show, createSignal } from 'solid-js';
import { z } from 'zod';
import { Button } from '~/components/ui';
import { cn } from '~/lib/utils';
import { sendEmailAction } from '~/shared/actions';
import { BaseInput, BaseTextArea } from './partials';

function ContactForm() {
  const [isSent, setIsSent] = createSignal(false);
  const sendEmail = useAction(sendEmailAction);

  const form = createForm(() => ({
    defaultValues: {
      name: '',
      email: '',
      phone: 0,
      message: '',
      acceptance: false,
    },
    onSubmit: async ({ value }) => {
      try {
        await sendEmail(value);
      } catch {
        throw new Error('Failed to send email');
        //   Treat error
      }
    },
    // Add a validator to support Zod usage in Form and Field
    validatorAdapter: zodValidator(),
  }));

  /**
   * Callback function responsible for treat the submission of the form.
   * @param evt Form event
   */
  async function handleSubmit(evt: Event & { submitter: HTMLElement | null }) {
    evt.preventDefault();
    evt.stopPropagation();

    try {
      await form.handleSubmit();
      form.reset();

      setIsSent(true);
      // TODO: show toast
    } catch {
      //   treat error
    }
  }

  return (
    <form onSubmit={handleSubmit} class={'space-y-6'}>
      <Show when={isSent()}>
        <div
          data-aos={'fade-down'}
          class={cn(['px-2 py-3', 'rounded border border-green-500', 'bg-green-50/20', 'text-sm'])}
        >
          <h4 class="font-semibold text-lg">Obrigado!</h4>
          <p>A sua mensagem foi enviada com sucesso, iremos responder o mais breve possível.</p>
        </div>
      </Show>

      <form.Field
        name="name"
        validators={{
          onSubmit: z
            .string({
              required_error: 'Por favor, preencha o seu nome.',
            })
            .min(2, 'Por favor, preencha o seu nome.'),
          onChange: z
            .string({
              required_error: 'Por favor, preencha o seu nome.',
            })
            .min(2, 'Por favor, preencha o seu nome.'),
        }}
      >
        {(field) => (
          <BaseInput
            type={'text'}
            required={true}
            id={field().name}
            name={field().name}
            onBlur={field().handleBlur}
            onChange={(value) => field().handleChange(value)}
            field={field()}
            placeholder={'Por favor introduza o seu nome.'}
          >
            Nome
          </BaseInput>
        )}
      </form.Field>

      <form.Field
        name="email"
        validators={{
          onSubmit: z
            .string({
              required_error: 'Por favor, preencha o seu nome.',
            })
            .email('Por favor, introduza um email válido'),
          onChange: z
            .string({
              required_error: 'Por favor, preencha o seu nome.',
            })
            .email('Por favor, introduza um email válido'),
        }}
      >
        {(field) => (
          <BaseInput
            required={true}
            id={field().name}
            name={field().name}
            type={'email'}
            onBlur={field().handleBlur}
            onChange={(value) => field().handleChange(value)}
            field={field()}
            placeholder={'Por favor introduza o seu email.'}
          >
            Email
          </BaseInput>
        )}
      </form.Field>

      <form.Field
        name="phone"
        validators={{
          onChange: z
            .number({
              invalid_type_error: 'Por favor, introduza apenas números.',
            })
            .refine((value) => {
              if (!value) {
                return true;
              }

              return /^\d{9}$/.test(String(value));
            }, 'Por favor, introduza um contacto válido.')
            .optional(),
          onSubmit: z
            .number({
              invalid_type_error: 'Por favor, introduza apenas números.',
            })
            .refine((value) => {
              if (!value) {
                return true;
              }

              return /^\d{9}$/.test(String(value));
            }, 'Por favor, introduza um contacto válido.')
            .optional(),
        }}
      >
        {(field) => (
          <BaseInput
            id={field().name}
            name={field().name}
            type={'number'}
            onBlur={field().handleBlur}
            onChange={(value) => field().handleChange(Number(value))}
            field={field()}
            pattern={'d{9}'}
            placeholder={'Por favor introduza o seu contacto telefónico.'}
          >
            Contacto telefónico
          </BaseInput>
        )}
      </form.Field>

      <form.Field
        name="message"
        validators={{
          onChange: z
            .string({
              required_error: 'Por favor, preencha a mensagem.',
            })
            .min(5, 'A sua mensagem deve conter, pelo menos, 5 caracteres.'),
        }}
      >
        {(field) => (
          <BaseTextArea
            rows={5}
            id={field().name}
            name={field().name}
            onBlur={field().handleBlur}
            required={true}
            onChange={(value) => field().handleChange(value)}
            field={field()}
            placeholder={'Por favor introduza a sua mensagem.'}
          >
            Mensagem
          </BaseTextArea>
        )}
      </form.Field>

      {/*<form.Field*/}
      {/*  name="acceptance"*/}
      {/*  validators={{*/}
      {/*    onSubmit: z.boolean({*/}
      {/*      required_error: 'Por favor, aceite os termos e condições para continuar.',*/}
      {/*    }),*/}
      {/*    onChange: z.boolean({*/}
      {/*      required_error: 'Por favor, aceite os termos e condições para continuar.',*/}
      {/*    }),*/}
      {/*  }}*/}
      {/*  // biome-ignore lint/correctness/noChildrenProp: <explanation>*/}
      {/*  children={(field) => (*/}
      {/*    // TODO*/}
      {/*    <Checkbox*/}
      {/*      required={true}*/}
      {/*      id={field().name}*/}
      {/*      name={field().name}*/}
      {/*      onBlur={field().handleBlur}*/}
      {/*      onClick={() => field().handleChange((prev) => !prev)}*/}
      {/*      field={field()}*/}
      {/*    >*/}
      {/*      Li e aceito a{' '}*/}
      {/*      <a href={'/politica-de-privacidade'} class={'font-semibold underline'}>*/}
      {/*        Política de Privacidade*/}
      {/*      </a>{' '}*/}
      {/*      e submeto o tratamento dos meus dados pessoais neste formulário.*/}
      {/*    </Checkbox>*/}
      {/*  )}*/}
      {/*/>*/}

      <form.Subscribe
        selector={(state) => ({
          canSubmit: state.canSubmit,
          isSubmitting: state.isSubmitting,
        })}
      >
        {(state) => (
          <Button
            disabled={!state().canSubmit || state().isSubmitting}
            class={cn(['w-fit', { 'animate-pulse': state().isSubmitting }])}
            type={'submit'}
          >
            Enviar
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}

export { ContactForm };
