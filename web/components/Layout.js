import classNames from 'classnames';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import Button from './Button';

import { urlForImage } from '../lib/sanity';

const Layout = ({
  preview,
  slug,
  title = '',
  description = '',
  image,
  logoColor,
  addLogoPadding = false,
  children,
}) => {
  const fullTitle = `${title}${title && ' | '}CHANN3L`;

  return (
    <>
      <div className="bg" />
      <div className="content">
        <div className="px-4 xs:px-8 py-12 sm:py-28 max-w-4xl mx-auto min-h-full mb-px relative flex">
          <Head>
            <title>{fullTitle}</title>
            <meta property="og:title" key="og_title" content={fullTitle} />
            {description && (
              <>
                <meta name="description" key="description" content={description} />
                <meta property="og:description" key="og_description" content={description} />
              </>
            )}
            {image && (
              <meta property="og:image" content={urlForImage(image).width(1200).quality(100).url()} />
            )}
            {/* Preload bg images for smooth transition between pages */}
            <link
              rel="preload"
              href="/images/marble_for_export-16_9-full_saturation-cropped_more.jpg"
              as="image"
              type="image/jpeg"
              media="(max-aspect-ratio: 3/4)"
            />
            <link
              rel="preload"
              href="/images/marble_for_export-16_9-cyan50-black20-cropped_more.jpg"
              as="image"
              type="image/jpeg"
              media="(max-aspect-ratio: 3/4)"
            />
            <link
              rel="preload"
              href="/images/marbled_for_export-dark-cyan15-black5.jpg"
              as="image"
              type="image/jpeg"
              media="(min-aspect-ratio: 3/4)"
            />
            <link
              rel="preload"
              href="/images/marbled_for_export-dark-cyan50-black20-progressive.jpg"
              as="image"
              type="image/jpeg"
              media="(min-aspect-ratio: 3/4)"
            />
          </Head>
          {preview && (
            <div className="absolute top-4 left-0 flex justify-center w-full gap-x-4 border-b border-white-transparent pb-4">
              <h2>Preview Mode</h2>
              <a href={`/api/exit-preview?document=${slug}`}>
                <Button message="Exit Preview" />
              </a>
            </div>
          )}
          <div className="absolute right-4 xs:right-8">
            <Logo color={logoColor} />
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classNames({
                flex: true,
                'mt-16': addLogoPadding,
              })}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Layout;
