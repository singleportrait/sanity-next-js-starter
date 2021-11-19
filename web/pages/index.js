import Link from 'next/link';
import groq from 'groq';
import client from '../client';

const Index = (props) => {
  const { posts = [] } = props;
  
  return (
  <div>
    <h1>Hello world :)</h1>
    {posts.map(({
      _id,
      title = '',
      slug = '',
      publishedAt = '',
    }) => slug && (
      <li key={_id}>
        <Link href="/post/[slug]" as={`/post/${slug.current}`}>
          <a>{title}</a>
        </Link>
        {' '}
        ({new Date(publishedAt).toDateString()})
      </li>
    ))}
  </div>
);
    };

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
});

export default Index;
