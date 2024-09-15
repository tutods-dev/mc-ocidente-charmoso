import { isTextRequired } from '@/shared';
import { defineField, defineType } from 'sanity';

const aboutUsSchema = defineType({
  name: 'about-us',
  title: 'Sobre Nós',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Sobre Nós',
    }),
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => isTextRequired(Rule, 'título'),
    }),
    defineField({
      name: 'headline',
      rows: 3,
      title: 'Breve descrição',
      type: 'text',
      validation: (Rule) => [
        Rule.min(0).warning(
          'A descrição não é obrigatória, porém pode ajudar a melhorar o SEO da página',
        ),
        Rule.min(50).warning(
          'Para uma descrição curta é recomendado entre 50 a 160 caracteres.',
        ),
        Rule.max(160).warning(
          'Para uma descrição curta é recomendado entre 50 a 160 caracteres.',
        ),
      ],
    }),
  ],
});

export { aboutUsSchema };
