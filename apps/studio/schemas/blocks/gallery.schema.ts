import { defineArrayMember, defineField, defineType } from 'sanity';
import { isTextRequired } from '../../shared/validations';

const gallerySchema = defineType({
  title: 'Galeria de imagens',
  name: 'gallery',
  type: 'array',
  options: {
    layout: 'grid',
  },
  of: [
    defineArrayMember({
      title: 'Imagem',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'exif'],
      },
      fields: [
        defineField({
          hidden: ({ parent }) => !parent?.asset,
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description:
            'O texto alternativo serve como legenda oculta da imagem, é utilizada por razões de SEO.',
          validation: (Rule) => isTextRequired(Rule, 'texto alternativo'),
        }),
        defineField({
          hidden: ({ parent }) => !parent?.asset,
          name: 'caption',
          title: 'Legenda',
          type: 'string',
          validation: (Rule) =>
            Rule.required().warning(
              'A legenda da imagem não é obrigatória, porém pode ajudar a melhorar o SEO da página.',
            ),
        }),
      ],
    }),
  ],
});

export { gallerySchema };
