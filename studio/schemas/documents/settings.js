export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Contact email',
      type: 'string',
      validation: (Rule) => [
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
        Rule.required().error('A contact email is required'),
      ]
    },
    {
      name: 'logoColor',
      title: 'Logo Color',
      type: 'string',
      description: 'For best results, use a hex color (e.g. #ffffff). If not provided, this will fall back to #ffddab',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Other pages will use this if not provided',
    },
  ]
}