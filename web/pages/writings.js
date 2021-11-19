import { writingsQuery } from '../lib/queries';
import { getClient } from '../lib/sanityServer';
import { usePreviewSubscription } from '../lib/sanity';

import Layout from '../components/Layout';
import Writings from '../components/Writings';

const WritingsPage = ({
  data,
  preview,
}) => {
  const { data: writings } = usePreviewSubscription(writingsQuery, {
    initialData: data,
    enabled: preview,
  });

  // console.log('Writings page', writings);

  return (
    <Layout
      preview={preview}
      slug="writings"
      title={writings.title}
      description={writings.seoDescription || writings.siteSettings.seoDescription}
      image={writings.seoImage || writings.siteSettings.seoImage}
      logoColor={writings.siteSettings.logoColor}
      addLogoPadding
    >
      <Writings writings={writings} />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const writings = await getClient(preview).fetch(writingsQuery);
  return {
    props: {
      data: writings,
      preview,
    },
  };
}

export default WritingsPage;
