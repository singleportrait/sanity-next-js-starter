import Link from 'next/link';
import { getClient } from '../lib/sanityServer';
import Layout from '../components/Layout';
import { indexQuery } from '../lib/queries';

const Index = ({ indexData }) => {
  const {
    logoColor,
    seoDescription,
    seoImage,
  } = indexData;

  // console.log('Index data', indexData);

  return (
    <Layout
      logoColor={logoColor}
      description={seoDescription}
      image={seoImage}
    >
      <div className="flex flex-col justify-end items-start">
        <Link href="/readings" passHref>
          <button type="button" className="py-4 pl-4 text-left">
            <h2>
              Readings
            </h2>
          </button>
        </Link>
        <Link href="/artists" passHref>
          <button type="button" className="py-4 pl-4 text-left">
            <h2>
              Artists
            </h2>
          </button>
        </Link>
        <Link href="/writings" passHref>
          <button type="button" className="py-4 pl-4 -mb-4 text-left">
            <h2>
              Writings
            </h2>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const indexData = await getClient().fetch(indexQuery);
  return {
    props: {
      indexData,
    },
  };
}

export default Index;
