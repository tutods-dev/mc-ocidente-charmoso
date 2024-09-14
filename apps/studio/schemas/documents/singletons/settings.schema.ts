import { defineArrayMember, defineField, defineType } from 'sanity';

import { isTextRequired, isUrlRequired, socialList } from '../../../shared';

export const settingsSchema = defineType({
  // icon: CogIcon,
  name: 'settings',
  title: 'Definições do Website',
  type: 'document',
  fields: [
    defineField({
      group: 'seo',
      initialValue: 'MC Ocidente Charmoso',
      name: 'title',
      title: 'Nome do website',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Por favor, preencha o nome do website.'),
    }),
    defineField({
      description: 'Descrição breve sobre o website, utilizada para fins de SEO.',
      group: 'seo',
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: (Rule) =>
        Rule.required().warning(
          'É recomendado ter uma descrição do website para melhorar o SEO do website.',
        ),
    }),
    defineField({
      group: 'seo',
      name: 'thumbnail',
      title: 'Imagem padrão',
      type: 'imageWithAlt',
      description:
        'Imagem usada para apresentar na pré-visualização das redes sociais.',
      validation: (Rule) =>
        Rule.required().warning(
          'É recomendado ter uma imagem padrão para apresentar nas redes sociais caso a página em questão não possua nenhuma imagem.',
        ),
    }),
    defineField({
      description:
        'Palavras-chave ou keywors são palavras que podem estar relacionads com o website, tais como: "cozinhas", "design de interiores", etc.',
      group: 'seo',
      name: 'keywords',
      of: [{ type: 'string' }],
      title: 'Palavras-chave',
      type: 'array',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      description:
        '"Call to Action" é um secção que tem como objetivo atrair a atenção do utilizador para uma ação, como por exemplo entrar em contacto.',
      type: 'object',
      group: 'pages',
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
          validation: (Rule) =>
            Rule.required().warning(
              'A descrição da "Call to Action" não é obrigatório, porém pode auxiliar na melhoria do SEO do website.',
            ),
        }),
        defineField({
          name: 'points',
          title: 'Pontos',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string',
              name: 'point',
            }),
          ],
        }),
        defineField({
          name: 'button',
          title: 'Texto do botão de contactos',
          type: 'string',
          description:
            'Texto apresentado no botão que redireciona para os contactos ao clicar.',
          initialValue: 'Fale connosco',
          validation: (Rule) => isTextRequired(Rule, 'text do botão de contactos'),
        }),
      ],
    }),
    defineField({
      description: 'Insert all your social networks.',
      group: 'social',
      name: 'social',
      of: [
        defineArrayMember({
          name: 'social',
          title: 'Rede Social',
          type: 'object',
          fields: [
            defineField({
              name: 'network',
              options: {
                list: socialList,
              },
              title: 'Social Network',
              type: 'string',
              validation: (Rule) =>
                Rule.required().error('Please select the social network.'),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (Rule) => [
                Rule.uri({
                  allowRelative: false,
                }).error('O link da rede social deve ser válido!'),
                isUrlRequired(Rule, 'link da rede social'),
              ],
            }),
          ],
          preview: {
            prepare(selection) {
              return {
                ...selection,
                title: selection.title
                  ? [selection.title[0].toUpperCase(), selection.title.slice(1)].join(
                      '',
                    )
                  : selection.title,
              };
            },
            select: {
              subtitle: 'link',
              title: 'network',
            },
          },
        }),
      ],
      title: 'Social Networks',
      type: 'array',
    }),
    defineField({
      description:
        'Contactos para apresentar na página de contactos, tais como email, telefone, etc.',
      group: 'social',
      name: 'contacts',
      title: 'Contactos',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contact',
          title: 'Contacto',
          type: 'object',
          preview: {
            select: {
              title: 'value',
            },
          },
          fields: [
            defineField({
              name: 'type',
              title: 'Tipo',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Email',
                    value: 'email',
                  },
                  {
                    title: 'Contacto telefónico',
                    value: 'phone',
                  },
                ],
              },
              validation: (Rule) =>
                Rule.required().error('Por favor selecione um tipo de contacto.'),
            }),
            defineField({
              name: 'value',
              title: 'Valor',
              type: 'string',
              validation: (Rule) =>
                Rule.required().error('Por favor preencha o contacto.'),
            }),
          ],
        }),
      ],
    }),
  ],
  groups: [
    {
      default: true,
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'pages',
      title: 'Páginas',
    },
    {
      name: 'social',
      title: 'Redes Sociais & Contactos',
    },
    // {
    //   name: 'other',
    //   title: 'Outros',
    // },
  ],
});
