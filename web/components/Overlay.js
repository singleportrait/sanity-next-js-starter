import { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import BlockContent from '@sanity/block-content-to-react';

import Button from './Button';
import CloseIcon from './icons/CloseIcon';

const Overlay = ({
  openText,
  title,
  text,
  openWithButton = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={className}>
        {openWithButton && (
          <Button onClick={() => setIsOpen(true)} message={openText} />
        )}
        {!openWithButton && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            message={openText}
            className="text-left font-light underline"
          >
            {openText}
          </button>
        )}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-primary-saturated-transparent-80 cursor-pointer" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-98"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-98"
            >
              <div className="max-w-2xl inline-block w-full my-4 sm:my-8 text-left overflow-hidden align-middle transition-all transform rounded-xl p-2.5 border border-white-transparent bg-white bg-opacity-20">
                <div className="rounded-lg p-8 border border-white-transparent bg-primary-dark-transparent-overlay">
                  <button
                    type="button"
                    className="absolute right-8 mt-0 transition-all hover:mt-0.5 text-white outline-none"
                    onClick={onClose}
                  >
                    <CloseIcon />
                  </button>
                  <Dialog.Title as="h2" className="pr-8">
                    {title}
                  </Dialog.Title>
                  <div className="richTextFormatting my-6">
                    <BlockContent blocks={text} />
                  </div>
                  <Button
                    message="Close"
                    onClick={onClose}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Overlay;
