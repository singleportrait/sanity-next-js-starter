export default {
  name: 'artists',
  title: 'Artists',
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
      name: 'artists',
      title: 'Artists',
      type: 'array',
      of: [{ type: 'artist' }],
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