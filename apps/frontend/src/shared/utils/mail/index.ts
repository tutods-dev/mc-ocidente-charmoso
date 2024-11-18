import { createTransport } from 'nodemailer';
import { env } from '~/shared/utils';

function transporter() {
  'use server';

  const localTransporter = createTransport({
    host: env.email.host,
    from: env.email.email,
    port: env.email.port,
    secureConnection: env.email.secure,
    auth: {
      user: env.email.email,
      pass: env.email.password,
    },
  });

  // verify connection configuration
  localTransporter.verify((error) => {
    if (env.isProduction) {
      return;
    }

    if (error) {
      console.error('📥 Email server error:', error);
    } else {
      console.info('📤 Email server is ready to send messages!');
    }
  });

  return localTransporter;
}

export { transporter };
export * from './base-view';
