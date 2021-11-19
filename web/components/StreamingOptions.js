import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

import classNames from 'classnames';
import Button from './Button';

const splitCamelCase = (string) => string.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

const StreamingOptionsColumn = ({ options }) => (
  <div className="flex flex-col items-center sm:items-start justify-center xs:w-1/3 sm:w-auto">
    {options.map((option) => (
      <a
        key={option.url}
        href={option.url}
        target="_blank"
        rel="noreferrer noopener"
        className="py-1.5 underline underline-white-transparent text-sm"
      >
        {splitCamelCase(option.type)}
      </a>
    ))}
  </div>
);

const StreamingOptions = ({ options }) => {
  const [open, setOpen] = useState(false);

  const halfOptionsCount = Math.round(options.length / 2);
  const firstHalfOptions = options.slice(0, halfOptionsCount);
  const secondHalfOptions = options.slice(halfOptionsCount);

  return (
    <div className="sm:pt-8 pb-2 relative flex items-center justify-center sm:justify-start">
      <Button
        message={open ? 'Close' : 'Listen'}
        className="relative z-10 w-19"
        onClick={() => setOpen(!open)}
      />
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div
          className={classNames({
            'absolute sm:z-10 sm:left-24 md:left-28 top-0 sm:top-auto sm:-mt-1 w-full px-2 xs:px-0 sm:w-auto flex justify-between sm:justify-center sm:gap-x-4 md:gap-x-6 lg:gap-x-10': true,
            '-mt-4': options.length > 2,
            '-mt-8': options.length > 4,
          })}
        >
          <StreamingOptionsColumn options={firstHalfOptions} />
          {secondHalfOptions && (
            <StreamingOptionsColumn options={secondHalfOptions} />
          )}
        </div>
      </Transition>
    </div>
  );
};

export default StreamingOptions;
