import { CogIcon } from '@sanity/icons';
import { ptPTLocale } from '@sanity/locale-pt-pt';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
import { singletonTypes, singletonsActions } from './shared';

export default defineConfig({
  name: 'default',
  title: 'MC Ocidente Charmoso',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonsActions.has(action))
        : input,
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons
            S.listItem()
              .title('Definições do Website')
              .id('settings')
              .icon(CogIcon)
              .child(S.document().schemaType('settings').documentId('settings')),

            S.divider(),

            // Regular document types
            S.documentTypeListItem('project'),
            S.documentTypeListItem('service'),
            S.documentTypeListItem('testimonial'),
          ]),
    }),
    // For production environment, remove the vision plugin
    ...(process.env.NODE_ENV !== 'production' ? [visionTool()] : []),
    ptPTLocale({
      title: 'Português',
    }),
  ],
});
