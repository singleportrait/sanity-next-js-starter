import classNames from 'classnames';
import { useState } from 'react';

import QuoteMarks from './icons/QuoteMarks';
import RightArrow from './icons/RightArrow';

const Testimonials = ({ testimonials }) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const updateCurrentQuote = (i) => {
    if (i === testimonials.length - 1) setCurrentQuote(0);

    setCurrentQuote(i + 1);
  };

  return (
    <div className="sm:w-auto overflow-hidden sm:overflow-auto -mx-4 xs:-mx-8 sm:mx-0">
      <div className={classNames({
        'grid sm:grid-cols-6 sm:gap-x-6 sm:w-full sm:items-center my-4 relative transform translate-x-0 sm:translate-x-0 transition-transform duration-500': true,
        'grid-cols-3 w-3xfull': testimonials.length === 3,
        'grid-cols-2 w-2xfull': testimonials.length === 2,
        '-translate-x-1/2': testimonials.length === 2 && currentQuote === 1,
        '-translate-x-1/3': testimonials.length === 3 && currentQuote === 1,
        '-translate-x-2/3': testimonials.length === 3 && currentQuote === 2,
      })}
      >
        {testimonials.map((quote, i) => (
          <div
            key={quote}
            className={classNames({
              'px-4 xs:px-8 sm:px-0 h3 sm:h4 text-primary-light flex gap-x-2 items-start': true,
              'sm:col-span-2': testimonials.length > 1,
              'sm:col-start-2': testimonials.length < 3 && i === 0,
              'sm:col-span-4': testimonials.length === 1,
            })}
          >
            <div className="flex-shrink-0 mt-1 text-white-transparent">
              <QuoteMarks />
            </div>
            {quote}
            {testimonials.length > 1 && (
              <button
                type="button"
                onClick={() => updateCurrentQuote(i)}
                className="block sm:hidden mt-1.5 flex-shrink-0 text-white"
              >
                <RightArrow />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
