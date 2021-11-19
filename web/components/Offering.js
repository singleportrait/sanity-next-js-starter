import Image from 'next/image';
import classNames from 'classnames';

import BookingOption from './BookingOption';
import Divider from './Divider';
import Overlay from './Overlay';
import Diamond from './icons/Diamond';

import specialBg from '../public/images/special_reading_bg-alt.jpg';

const Offering = ({ offering }) => (
  <div className="rounded-xl p-2.5 border border-white-transparent bg-white bg-opacity-5 relative">
    {offering.specialReading && (
      <div className="absolute inset-2.5">
        <Image
          src={specialBg}
          layout="fill"
          sizes="1000px"
          quality="90"
          className="rounded-lg"
          alt="Special Reading background image"
        />
      </div>
    )}
    <div className={classNames({
      'rounded-lg p-2 border bg-primary-saturated-transparent relative': true,
      'border-white': offering.specialReading,
      'border-white-transparent': !offering.specialReading,
    })}
    >
      {offering.specialReading && (
        <div className="flex justify-center items-center gap-x-2 pb-1.5 text-sm border-b border-white-transparent">
          Special Offering
          <Diamond />
          Limited Time Only
        </div>
      )}
      <div className="pt-6 pb-8 px-3 xs:px-4 sm:px-8 flex flex-col items-center">
        <h2 className="text-center px-4">
          {offering.title}
        </h2>
        <Divider smallMargin />
        <div className="flex items-center gap-x-6 xs:gap-x-8 sm:mx-4">
          <div className="h2 whitespace-nowrap">
            {offering.price}
          </div>
          <div className="leading-snug">
            {offering.description}

            {offering.additionalDescription && (
              <Overlay
                title={offering.title}
                text={offering.additionalDescription}
                openText="Learn more"
                className="mt-4"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-3 sm:gap-x-4 pt-4 pb-2 px-4 border-t border-white-transparent">
        {offering.showBookNowText && (
          <span className="text-sm leading-tight">
            Book now:
          </span>
        )}
        {offering.bookingOptions.map((option) => (
          <BookingOption option={option} key={option.text} />
        ))}
      </div>
    </div>
  </div>
);

export default Offering;
