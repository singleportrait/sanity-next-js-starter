export default {
  name: 'article',
  title: 'Writing',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'source',
      title: 'Source/Publication',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'source',
    },
  },
}