import { artistsQuery } from '../lib/queries';
import { getClient } from '../lib/sanityServer';
import { usePreviewSubscription } from '../lib/sanity';

import Layout from '../components/Layout';
import Artists from '../components/Artists';

const ArtistsPage = ({
  data,
  preview,
}) => {
  const { data: artists } = usePreviewSubscription(artistsQuery, {
    initialData: data,
    enabled: preview,
  });

  // console.log('Artists page', artists);

  return (
    <Layout
      preview={preview}
      slug="artists"
      title={artists.title}
      description={artists.seoDescription || artists.siteSettings.seoDescription}
      image={artists.seoImage || artists.siteSettings.seoImage}
      logoColor={artists.siteSettings.logoColor}
      addLogoPadding
    >
      <Artists artists={artists} />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const artists = await getClient(preview).fetch(artistsQuery);
  return {
    props: {
      data: artists,
      preview,
    },
  };
}

export default ArtistsPage;
