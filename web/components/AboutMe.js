import Image from 'next/image';

import { urlForImage } from '../lib/sanity';

import Divider from './Divider';
import VerticalDrop from './icons/VerticalDrop';

const AboutMe = ({ title, text, image }) => (
  <div className="sm:col-span-4 sm:col-start-2 flex flex-col sm:items-center mt-2">
    <Divider />
    <h2 className="mb-6">
      {title || 'About Me'}
    </h2>
    <div className="flex items-center sm:items-start gap-x-4 sm:gap-x-7">
      {image && (
        <div className="relative sm:-mt-8">
          <div
            className="w-32 xs:w-36 sm:w-40 md:w-52 -ml-1.5 xs:-ml-4 sm:ml-0"
            style={{
              clipPath: 'url(#svg-aboutMe)',
            }}
          >
            <Image
              src={urlForImage(image)
                .width(600)
                .height(850)
                .fit('crop')
                .url()}
              width="600"
              height="850"
              sizes="(min-width: 640px) 500px, 50vw"
              alt={image.alt}
            />
          </div>
          <VerticalDrop id="aboutMe" />
        </div>
      )}
      <div className="max-w-xs">
        {text}
      </div>
    </div>
  </div>
);

export default AboutMe;
