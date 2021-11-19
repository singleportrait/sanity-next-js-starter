import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import classNames from 'classnames';
import { urlForImage } from '../lib/sanity';

import Divider from './Divider';
import HorizontalDrop from './icons/HorizontalDrop';
import Overlay from './Overlay';
import Offering from './Offering';
import Testimonials from './Testimonials';
import AboutMe from './AboutMe';
import CallToAction from './CallToAction';
import MailchimpSignup from './MailchimpSignup';

const Readings = ({ readings }) => {
  const {
    title = '',
    introText = '',
    aboutTitle = '',
    aboutText = [],
    aboutImage,
    aboutDropOutline,
    aboutButtonText,
    philosophy,
    offeringsTitle,
    offeringsTextFirst,
    offeringsTextSecond,
    offerings,
    testimonials,
    aboutMeText,
    aboutMeTitle,
    aboutMeImage,
    newsletterSignup,
    callToAction,
    siteSettings,
  } = readings;

  return (
    <div>
      <h1>
        {title}
      </h1>
      <Divider />
      <div className="sm:grid sm:grid-cols-6 gap-x-8">
        <div className="sm:col-span-5">
          <h2 className="text-primary-light">
            {introText}
          </h2>
          <Divider />
        </div>
        <div className="sm:col-span-4 mb-6">
          <h2 className="mb-6">
            {aboutTitle || 'About My Practice'}
          </h2>
          <BlockContent
            blocks={aboutText}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
          />
          {philosophy.text && (
            <Overlay
              openText={aboutButtonText || 'Learn more'}
              text={philosophy.text}
              title={philosophy.title || 'CHANN3L Philosophy'}
              openWithButton
              className="mt-6"
            />
          )}
        </div>
        {aboutImage && (
          <div className="sm:col-span-2 flex items-center relative">
            <div
              className="w-full mt-2 mx-8 sm:mx-0"
              style={{
                clipPath: 'url(#svg-about)',
              }}
            >
              <Image
                alt={aboutImage.alt}
                src={urlForImage(aboutImage)
                  .width(600)
                  .height(350)
                  .fit('crop')
                  .url()}
                width="600"
                height="350"
                sizes="(min-width: 640px) 500px, 30vw"
              />
            </div>
            {aboutDropOutline && <HorizontalDrop id="about" />}
          </div>
        )}

        <div className="sm:col-span-6">
          <Divider center />
          <h2 className="mb-6 text-center">
            {offeringsTitle || 'Current Offerings:'}
          </h2>
        </div>
        {(offeringsTextFirst || offeringsTextSecond) && (
          <>
            <div className={classNames({
              richTextFormatting: true,
              'sm:col-span-3 sm:col-start-1': offeringsTextFirst && offeringsTextSecond,
              'sm:col-span-4 sm:col-start-2': !offeringsTextFirst || !offeringsTextSecond,
            })}
            >
              <BlockContent
                blocks={offeringsTextFirst || offeringsTextSecond}
              />
            </div>
            {offeringsTextFirst && offeringsTextSecond && (
              <div className="sm:col-span-3 sm:col-start-4 richTextFormatting">
                <BlockContent
                  blocks={offeringsTextSecond}
                />
              </div>
            )}
          </>
        )}
        <div className="sm:col-span-4 sm:col-start-2 space-y-8 my-8">
          {offerings.map((offering) => (
            <Offering offering={offering} key={offering.title} />
          ))}
        </div>
        {testimonials.length > 0 && (
          <>
            <div className="sm:col-span-6 flex flex-col sm:items-center">
              <Divider />
              <h2 className="mb-4">
                Testimonials
              </h2>
            </div>
            <div className="sm:col-span-6">
              <Testimonials testimonials={testimonials} />
            </div>
          </>
        )}
        {aboutMeText && (
          <AboutMe
            title={aboutMeTitle}
            text={aboutMeText}
            image={aboutMeImage}
          />
        )}
        <div className="sm:col-span-4 sm:col-start-2 flex flex-col items-center">
          <MailchimpSignup
            title={newsletterSignup?.title}
            text={newsletterSignup?.text}
            buttonText={newsletterSignup?.buttonText}
            contactEmail={siteSettings.email}
          />
        </div>
        {callToAction?.title && (
          <div className="sm:col-span-4 sm:col-start-2 flex flex-col items-center">
            <CallToAction
              title={callToAction.title}
              text={callToAction.text}
              buttonText={callToAction.buttonText}
              email={siteSettings.email}
              className="sm:items-center sm:text-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Readings;
