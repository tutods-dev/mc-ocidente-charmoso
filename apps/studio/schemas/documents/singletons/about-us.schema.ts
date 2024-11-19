import { isNumberRequired, isTextRequired } from '@/shared';
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
        Rule.min(0).warning('A descrição não é obrigatória, porém pode ajudar a melhorar o SEO da página'),
        Rule.min(50).warning('Para uma descrição curta é recomendado entre 50 a 160 caracteres.'),
        Rule.max(160).warning('Para uma descrição curta é recomendado entre 50 a 160 caracteres.'),
      ],
    }),
    defineField({
      name: 'aboutUs',
      title: 'Sobre nós',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule) => isTextRequired(Rule, 'título'),
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'blockContent',
        }),
        defineField({
          name: 'thumbnail',
          title: 'Imagem',
          type: 'imageWithAlt',
        }),
        defineField({
          name: 'stats',
          title: 'Números',
          type: 'array',
          of: [
            defineField({
              name: 'counter',
              type: 'object',
              fields: [
                defineField({
                  title: 'Valor',
                  name: 'value',
                  description: 'Exemplo: 100',
                  type: 'number',
                  validation: (Rule) => isNumberRequired(Rule, 'valor'),
                }),
                defineField({
                  title: 'Extra',
                  name: 'extra',
                  type: 'string',
                }),
                defineField({
                  title: 'Mostrar extra no inicío?',
                  name: 'isPrefix',
                  type: 'boolean',
                  hidden: ({ document }) => !!document?.extra,
                  initialValue: true,
                  description:
                    'Se marcar esta opção, o extra (por exemploe: "+"), será apresentado antes do valor anteriormente inserido. Por exemplo: +100.',
                }),
                defineField({
                  title: 'Legenda',
                  name: 'label',
                  type: 'string',
                  validation: (Rule) => isTextRequired(Rule, 'legenda'),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'factory',
      title: 'Sobre a fábrica',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule) => isTextRequired(Rule, 'título'),
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'gallery',
          type: 'array',
          title: 'Galeria',
          validation: (Rule) => Rule.min(0).error('Selecione pelo menos 1 imagem!'),
          of: [
            defineField({
              name: 'img',
              type: 'imageWithAltAndCaption',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Como funciona',
      description: 'Esta secção destina-se a explicar quais os passos da elaboração de um projeto',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule) => isTextRequired(Rule, 'título'),
        }),
        defineField({
          name: 'thumbnail',
          title: 'Imagem',
          type: 'imageWithAlt',
        }),
        defineField({
          name: 'steps',
          title: 'Passos',
          type: 'array',
          of: [
            defineField({
              name: 'step',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (Rule) => isTextRequired(Rule, 'título'),
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  rows: 5,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Serviços',
      description: 'Esta secção destina-se a apresentar os serviços realizados.',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule) => isTextRequired(Rule, 'título'),
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'blockContent',
        }),
      ],
    }),
  ],
});

export { aboutUsSchema };
