import { defineField, defineType } from 'sanity';
import {
  isFileRequired,
  isSlugRequired,
  isTextRequired,
} from '../../shared/validations';

const projectSchema = defineType({
  title: 'Projetos',
  name: 'project',
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
      title: 'Mostrar testemunho?',
      name: 'showTestimonial',
      type: 'boolean',
      description:
        'Se esta opção estiver marcada e existir testemunho associado a este projeto, na página do projeto será apresentado o testemunho.',
      initialValue: true,
    }),
    defineField({
      title: 'Data do projeto',
      name: 'date',
      type: 'date',
      //   TODO: add validations
    }),
    defineField({
      title: 'Local',
      name: 'local',
      type: 'string',
      description: 'Local onde foi realizado o projeto.',
    }),
    defineField({
      title: 'Projeto em destaque?',
      name: 'isHighlighted',
      type: 'boolean',
      initialValue: false,
      description:
        'Se esta opção estiver marcada, o projeto será marcado como destaque, o que indica que o mesmo será apresentado em páginas onde apenas são apresentados alguns projetos (no caso os projetos em destaque).',
    }),
    defineField({
      title: 'Serviços',
      name: 'services',
      type: 'array',
      of: [{ to: { type: 'service' }, type: 'reference' }],
      validation: (Rule) => [
        Rule.required().error('Por favor, selecione pelo menos um serviço!'),
        Rule.min(1).error('Por favor, selecione pelo menos um serviço!'),
      ],
    }),
  ],
});

export { projectSchema };
