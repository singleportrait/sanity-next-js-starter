import { Fragment } from 'react';

import Divider from './Divider';
import ArtistImage from './ArtistImage';
import StreamingOptions from './StreamingOptions';
import CallToAction from './CallToAction';

const Artists = ({ artists }) => {
  const {
    title,
    introText,
    artists: artistsList,
    callToAction,
    siteSettings,
  } = artists;

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
        {artistsList.map((artist, i) => (
          <Fragment key={artist.title}>
            {i > 0 && (
              <div className="sm:col-span-6">
                <Divider />
              </div>
            )}
            <div className="sm:col-span-3 my-8 sm:my-12 relative">
              <div
                className="max-w-22 relative mx-auto sm:mx-0"
              >
                <ArtistImage image={artist.image} title={artist.title} i={i} />
              </div>
            </div>
            <div className="sm:col-span-3 my-8 sm:my-12">
              {artist.streamingOptions && (
                <StreamingOptions options={artist.streamingOptions} />
              )}
              {artist.articles && (
                <div className="md:pr-8">
                  <Divider />
                  <h3>
                    Recent work:
                  </h3>
                  {artist.articles.map((article) => (
                    <a
                      key={article.url}
                      href={article.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-block py-3"
                    >
                      <h4 className="articleTitle articleTitle-sm underline-white-transparent">
                        {article.title}
                      </h4>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Fragment>
        ))}
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

export default Artists;
