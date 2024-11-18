import { action } from '@solidjs/router';
import { env, transporter } from '~/shared/utils';
import { baseView } from '~/shared/utils/mail';

type FormData = {
  name: string;
  email: string;
  phone?: number;
  message: string;
  acceptance: boolean;
};

const sendEmailAction = action<[data: FormData]>(async (data) => {
  'use server';

  try {
    await transporter().sendMail({
      from: env.email.email,
      to: env.email.email,
      subject: 'Formulário de contacto',
      html: baseView({
        email: data.email,
        message: data.message,
        name: data.name,
        phone: data.phone ? data.phone : undefined,
        title: 'Impulsionar',
      }),
    });
  } catch {
    // TODO: treat error
  }
});

export { sendEmailAction };
