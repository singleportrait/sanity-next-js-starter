import { readingsQuery } from '../lib/queries';
import { getClient } from '../lib/sanityServer';
import { usePreviewSubscription } from '../lib/sanity';

import Layout from '../components/Layout';
import Readings from '../components/Readings';

const ReadingsPage = ({
  data,
  preview,
}) => {
  const { data: readings } = usePreviewSubscription(readingsQuery, {
    initialData: data,
    enabled: preview,
  });

  // console.log('Readings', readings);

  return (
    <Layout
      preview={preview}
      slug="readings"
      title={readings.title}
      description={readings.seoDescription || readings.siteSettings.seoDescription}
      image={readings.seoImage || readings.siteSettings.seoImage}
      logoColor={readings.siteSettings.logoColor}
      addLogoPadding
    >
      <Readings readings={readings} />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const readings = await getClient(preview).fetch(readingsQuery);
  return {
    props: {
      data: readings,
      preview,
    },
  };
}

export default ReadingsPage;
