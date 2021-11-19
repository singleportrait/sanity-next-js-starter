export default {
  name: 'newsletterSignup',
  title: 'Newsletter Signup',
  type: 'object',
  description: 'This is currently connected to the Mailchimp signup list. If someone has an error signing up, it will point them to your Site Settings contact email.',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Default: Subscribe for updates',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Default: no text'
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Default text: Submit',
    },
  ]
}