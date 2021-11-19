export default {
  name: 'artist',
  title: 'Artist',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'asset',
    },
    {
      name: 'streamingOptions',
      title: 'Streaming Options',
      type: 'array',
      of: [{ type: 'streamingOption'}],
      validation: Rule => Rule.unique(),
    },
    {
      name: 'articles',
      title: 'Recent Work',
      type: 'array',
      of: [{ type: 'simpleArticle' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}