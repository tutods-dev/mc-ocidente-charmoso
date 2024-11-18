import { defineField, defineType } from 'sanity';
import { isFileRequired, isSlugRequired, isTextRequired } from '../../shared/validations';

const serviceSchema = defineType({
  title: 'Serviços',
  name: 'service',
  type: 'document',
  fields: [
    defineField({
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => isTextRequired(Rule, 'título'),
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
      description: 'A breve descrição é especialmente utilizada para melhorar o SEO da página.',
      name: 'headline',
      rows: 3,
      title: 'Breve descrição',
      type: 'text',
      validation: (Rule) => [
        Rule.required().warning('A breve descrição não é obrigatória, porém poderá ajudar a melhorar o SEO da página!'),
        Rule.max(160).warning(
          'Atenção! Descrições longas podem ser cortadas pelos motores de pesquisa a quando da sua visualização.',
        ),
      ],
    }),
    defineField({
      title: 'Imagem principal',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'exif'],
      },
      validation: (Rule) => isFileRequired(Rule, 'imagem'),
    }),
    defineField({
      title: 'Conteúdo',
      name: 'content',
      type: 'blockContent',
      options: { spellCheck: true },
      // TODO: add validation
      // validation: Rule => [
      //     Rule.
      // ]
    }),
    defineField({
      title: 'Galeria',
      name: 'gallery',
      type: 'gallery',
    }),
    defineField({
      title: 'Mostrar testemunho(s)?',
      name: 'showTestimonials',
      type: 'boolean',
      description:
        'Se esta opção estiver marcada e existir testemunho(s) associado a este serviço, na página do seriço serão apresentados o(s) testemunho(s).',
      initialValue: true,
    }),
    defineField({
      title: 'Serviço em destaque?',
      name: 'isHighlighted',
      type: 'boolean',
      initialValue: false,
      description:
        'Se esta opção estiver marcada, o serviço será marcado como destaque, o que indica que o mesmo será apresentado em páginas onde apenas são apresentados alguns serviços.',
    }),
  ],
});

export { serviceSchema };
