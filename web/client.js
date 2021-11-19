import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'lvf7syii',
  dataset: 'production',
  useCdn: true,
});
