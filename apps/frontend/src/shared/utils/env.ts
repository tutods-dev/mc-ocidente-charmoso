/**
 * Environment variables.
 */
const env = {
  sanity: {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: 'X',
  },
  isProduction: import.meta.env.NODE_ENV === 'production',
} as const;

export { env };
