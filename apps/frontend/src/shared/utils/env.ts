/**
 * Environment variables.
 */
const env = {
  sanity: {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: 'X',
  },
  email: {
    host: process.env.SMTP_HOST ?? '',
    port: Number.isNaN(process.env.SMTP_PORT) ? Number(process.env.SMTP_PORT) : 587,
    email: process.env.SMTP_EMAIL ?? '',
    password: process.env.SMTP_PASSWORD ?? '',
    secure: Boolean(process.env.SMTP_SECURE),
  },
  isProduction: import.meta.env.NODE_ENV === 'production',
} as const;

export { env };
