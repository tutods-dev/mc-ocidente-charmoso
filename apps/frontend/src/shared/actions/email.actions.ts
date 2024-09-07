import { action } from '@solidjs/router';
import { env } from '~/shared/utils';
import { baseView, transporter } from '~/shared/utils/mail';
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
    await transporter.sendMail({
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
  } catch (error) {
    // TODO: treat error
  }
});

export { sendEmailAction };
