export default {
  name: 'streamingOption',
  title: 'Streaming Option',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Bandcamp',
            value: 'bandcamp',
          },
          {
            title: 'Apple Music',
            value: 'appleMusic',
          },
          {
            title: 'Spotify',
            value: 'spotify',
          },
          {
            title: 'Soundcloud',
            value: 'soundcloud',
          },
          {
            title: 'Youtube',
            value: 'youtube',
          },
          {
            title: 'Instagram',
            value: 'instagram',
          },
        ]
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required(),
    },
  ]
}