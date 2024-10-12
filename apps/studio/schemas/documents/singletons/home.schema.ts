import { isTextRequired } from '@/shared';
import { defineField, defineType } from 'sanity';

const homeSchema = defineType({
  name: 'home',
  title: 'Página Inicial',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Página Inicial',
    }),
  },
  fields: [
    defineField({
      name: 'projects',
      title: 'Secção de Projetos',
      type: 'object',
      fields: [
        defineField({
          title: 'Título',
          name: 'title',
          type: 'string',
          validation: (Rule) => isTextRequired(Rule, 'título'),
        }),
        defineField({
          description:
            'A breve descrição é especialmente utilizada para melhorar o SEO da página.',
          name: 'headline',
          rows: 3,
          title: 'Breve descrição',
          type: 'text',
          validation: (Rule) => [
            Rule.required().warning(
              'A breve descrição não é obrigatória, porém poderá ajudar a melhorar o SEO da página!',
            ),
            Rule.max(160).warning(
              'Atenção! Descrições longas podem ser cortadas pelos motores de pesquisa a quando da sua visualização.',
            ),
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testemunhos',
      type: 'object',
      fields: [
        defineField({
          title: 'Título',
          name: 'title',
          type: 'string',
          validation: (Rule) => isTextRequired(Rule, 'título'),
        }),
        defineField({
          description:
            'A breve descrição é especialmente utilizada para melhorar o SEO da página.',
          name: 'headline',
          rows: 3,
          title: 'Breve descrição',
          type: 'text',
          validation: (Rule) => [
            Rule.min(0).warning(
              'A breve descrição não é obrigatória, porém poderá ajudar a melhorar o SEO da página!',
            ),
            Rule.max(160).warning(
              'Atenção! Descrições longas podem ser cortadas pelos motores de pesquisa a quando da sua visualização.',
            ),
          ],
        }),
      ],
    }),
  ],
});

export { homeSchema };
