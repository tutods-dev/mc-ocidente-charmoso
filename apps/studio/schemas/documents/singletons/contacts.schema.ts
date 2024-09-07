import { isTextRequired } from '@/shared';
import { CommentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const contactsSchema = defineType({
  name: 'contacts',
  title: 'Contactos',
  icon: CommentIcon,
  type: 'document',
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
    defineField({
      name: 'list',
      title: 'Secção Lista de Contactos',
      type: 'object',
      description:
        'Os contactos são apresentados de acordo com os contactos registados na página de settings.',
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
          title: 'Descrição',
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
    }),
    defineField({
      name: 'form',
      title: 'Formulário',
      type: 'object',
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
          title: 'Descrição',
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
    }),
  ],
});

export { contactsSchema };
