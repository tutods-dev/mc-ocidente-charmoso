import { createTransport } from 'nodemailer';
import { env } from '~/shared/utils/env';

const transporter = createTransport({
  host: process.env.SMTP_HOST ?? '',
  port: Number(process.env.SMTP_PORT) ?? 587,
  secureConnection: Boolean(process.env.SMTP_SECURE) ?? false,
  auth: {
    user: process.env.SMTP_EMAIL ?? '', // generated ethereal user
    pass: process.env.SMTP_PASSWORD ?? '', // generated ethereal password
  },
});

// verify connection configuration
transporter.verify((error, success) => {
  if (env.isProduction) {
    return;
  }

  if (error) {
    console.error('📥 Email serverw error:', error);
  } else {
    console.info('📤 Email server is ready to send messages!');
  }
});

export { transporter };
export * from './base-view';
