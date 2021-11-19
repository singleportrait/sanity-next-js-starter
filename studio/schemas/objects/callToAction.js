export default {
  name: 'callToAction',
  title: 'Call To Action',
  type: 'object',
  description: 'Currently, this section always links to the site settings contact email address',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Default: Get in touch',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Default text: Email me',
    },
  ]
}