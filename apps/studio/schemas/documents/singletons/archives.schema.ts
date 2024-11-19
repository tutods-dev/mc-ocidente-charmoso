import { defineField, defineType } from 'sanity';

import { isTextRequired } from '../../../shared';

const archivesSchema = defineType({
  name: 'archives',
  title: 'Listagens',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Listagens',
    }),
  },
  fields: [
    defineField({
      name: 'services',
      title: 'Serviços',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título da página',
          type: 'string',
          validation: (Rule) => isTextRequired(Rule, 'título da página'),
        }),
        defineField({
          name: 'headline',
          title: 'Descrição',
          description: 'Pequena descrição sobre a página',
          type: 'text',
          rows: 3,
          validation: (Rule) => [
            Rule.min(0).warning('A descrição não é obrigatória, porém pode ajudar a melhorar o SEO da página'),
            Rule.min(50).warning('Para uma descrição curta é recomendado entre 50 a 160 caracteres.'),
            Rule.max(160).warning('Para uma descrição curta é recomendado entre 50 a 160 caracteres.'),
          ],
        }),
      ],
    }),
  ],
});

export { archivesSchema };
