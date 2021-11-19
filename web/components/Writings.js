import CallToAction from './CallToAction';
import Divider from './Divider';

const Article = ({ article }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-block py-4"
  >
    <div className="text-sm text-white-transparent">
      {article.source}
    </div>
    <h4 className="articleTitle underline-white-transparent">
      {article.title}
    </h4>
  </a>
);

const Writings = ({ writings }) => {
  const {
    title,
    introText,
    articles,
    callToAction,
    siteSettings,
  } = writings;

  const halfOfArticles = Math.round(articles.length / 2);
  const firstHalfArticles = articles.slice(0, halfOfArticles);
  const secondHalfArticles = articles.slice(halfOfArticles);

  return (
    <div>
      <h1>
        {title}
      </h1>
      <Divider />
      <div className="sm:grid sm:grid-cols-6 gap-x-6">
        <div className="sm:col-span-5">
          <div>
            {introText}
          </div>
          <Divider />
        </div>
        <div className="sm:col-span-3">
          {firstHalfArticles.map((article) => (
            <Article article={article} key={article.title} />
          ))}
        </div>
        <div className="sm:col-span-3">
          {secondHalfArticles.map((article) => (
            <Article article={article} key={article.title} />
          ))}
        </div>
        {callToAction?.title && (
          <div className="sm:col-span-2">
            <CallToAction
              title={callToAction.title}
              text={callToAction.text}
              buttonText={callToAction.buttonText}
              email={siteSettings.email}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Writings;
