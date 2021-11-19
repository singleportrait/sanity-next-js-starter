export default {
  name: 'readings',
  title: 'Readings',
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
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
    },
    {
      name: 'aboutText',
      title: 'About Text',
      type: 'blockContent',
    },
    {
      name: 'aboutImage',
      title: 'About Image',
      type: 'asset',
    },
    {
      name: 'aboutDropOutline',
      title: 'Use horizontal droplet outline for about image',
      type: 'boolean',
    },
    {
      name: 'aboutButtonText',
      title: 'About Button Text',
      type: 'string',
    },
    {
      name: 'philosophy',
      title: 'Philosophy',
      type: 'philosophy',
    },
    {
      name: 'offeringsTitle',
      title: 'Offerings Section Title',
      type: 'string',
    },
    {
      name: 'offeringsTextFirst',
      title: 'Offerings Text First Column',
      type: 'blockContent',
      description: 'On mobile, these will collapse into one column. If only one is filled out, it will appear in one column',
    },
    {
      name: 'offeringsTextSecond',
      title: 'Offerings Text Second Column',
      type: 'blockContent',
    },
    {
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [{type: 'offering'}],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        name: 'quote',
        title: 'Quote',
        type: 'text',
      }],
      validation: Rule => Rule.max(3).error('Only 3 quotes are allowed currently'),
    },
    {
      name: 'aboutMeTitle',
      title: 'About Me Title',
      type: 'string',
    },
    {
      name: 'aboutMeImage',
      title: 'About Me Image',
      type: 'asset',
    },
    {
      name: 'aboutMeText',
      title: 'About Me Text',
      type: 'text',
    },
    {
      name: 'newsletterSignup',
      title: 'Newsletter Signup',
      type: 'newsletterSignup',
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
  ],
};