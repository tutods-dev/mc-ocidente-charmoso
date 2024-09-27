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
      name: 'test',
      title: 'Test',
      type: 'string',
    }),
  ],
});

export { homeSchema };
