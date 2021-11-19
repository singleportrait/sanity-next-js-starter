export default {
  name: 'writings',
  title: 'Writings',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    },
    {
      name: 'articles',
      title: 'Writings',
      type: 'array',
      of: [{ type: 'article' }],
    },
    {
      name: 'callToAction',
      title: 'Footer Call To Action',
      type: 'callToAction',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'If left blank, this will fall back to the Site Settings metadata.',
    },
  ]
}