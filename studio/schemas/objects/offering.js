export default {
  name: 'offering',
  title: 'Offering',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Include the dollar sign if there is one',
    },
    {
      name: 'additionalDescription',
      title: 'Additional Description',
      type: 'blockContent',
      description: 'Optional',
    },
    {
      name: 'specialReading',
      title: 'Special Reading',
      type: 'boolean',
    },
    {
      name: 'bookingOptions',
      title: 'Booking Options',
      type: 'array',
      of: [{type: 'button'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'showBookNowText',
      title: 'Show Book Now Text',
      type: 'boolean',
    },
  ],
}