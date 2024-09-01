import { defineField, defineType } from 'sanity';
import {
  isFileRequired,
  isSlugRequired,
  isTextRequired,
} from '../../shared/validations';

const serviceSchema = defineType({
  title: 'Serviços',
  name: 'service',
  type: 'document',
  fields: [
    defineField({
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => [...isTextRequired(Rule, 'título')],
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        maxLength: 96,
        source: 'title',
      },
      validation: (Rule) => isSlugRequired(Rule, 'slug'),
    }),
    defineField({
      title: 'Imagem',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'exif'],
      },
      validation: (Rule) => isFileRequired(Rule, 'imagem'),
    }),
    defineField({
      title: 'Breve descrição',
      name: 'description',
      type: 'text',
      initialValue: undefined,
      rows: 3,
      validation: (Rule) => [
        Rule.required().warning(
          'O campo descrição não é obrigatório, porém ajuda a melhorar a pontuação da página a nível de SEO.',
        ),
        Rule.min(50).warning('Uma boa descrição deverá ter entre 50 a 160 caracteres.'),
        Rule.max(160).warning(
          'Atenção! Uma descrição demasiado longa poderá ser cortada durante a visualização nos motores de pesquisa (como Google).',
        ),
      ],
    }),
  ],
});

export { serviceSchema };
