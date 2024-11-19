import { CommentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { GOOGLE_URL_REGEX } from '../../shared/constants';
import { isTextRequired } from '../../shared/validations';

const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testemunhos',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'client',
      title: 'Nome do Cliente',
      type: 'string',
      validation: (Rule) => isTextRequired(Rule, 'nome do cliente'),
    }),
    defineField({
      name: 'content',
      title: 'Testemunho',
      type: 'text',
      validation: (Rule) => [
        ...isTextRequired(Rule, 'testemunho'),
        Rule.min(10).warning('O testemunho deve conter mais de 10 caracteres.'),
      ],
    }),
    defineField({
      name: 'url',
      title: 'Link do Google Feedback',
      type: 'url',
      validation: (Rule) => [
        Rule.required().warning(
          'O link do Google Feedback não é obrigatório, porém é um extra para validar que o testemunho é real.',
        ),
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }).error('Por favor, introduza um link válido.'),
        Rule.custom((link) => {
          if (!link) {
            return true;
          }

          if (!GOOGLE_URL_REGEX.test(link)) {
            return 'Por favor, introduza um link do Google feedback.';
          }

          return true;
        }),
      ],
    }),
    defineField({
      name: 'service',
      title: 'Serviço',
      description: 'Indique qual o serviço a que se refere este testemunho',
      type: 'reference',
      to: {
        type: 'service',
      },
    }),
  ],
});

export { testimonialSchema };
