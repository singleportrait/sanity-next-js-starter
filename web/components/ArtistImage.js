import Image from 'next/image';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';

import { urlForImage } from '../lib/sanity';

import ArtistDrop1 from './icons/ArtistDrop1';
import ArtistDrop2 from './icons/ArtistDrop2';

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const animationTransition = {
  delay: 0.1,
  duration: 0.2,
};

const ArtistImage = ({ image, title, i }) => {
  const controls = useAnimation();

  const displayImage = () => {
    controls.start('visible');
  };

  return (
    <>
      <div
        style={{
          clipPath: `url(#svg-artist-image-${i})`,
          backgroundColor: image.bgColor || 'rgba(9, 82, 99, .7)',
        }}
      >
        {image.asset && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            transition={animationTransition}
          >
            <Image
              src={urlForImage(image)
                .width(1000)
                .height(1350)
                .fit('crop')
                .url()}
              width="1000"
              height="1350"
              sizes="(min-width: 640px) 500px, 100vw"
              alt={image.alt}
              priority={i === 0}
              onLoadingComplete={() => displayImage()}
            />
          </motion.div>
        )}
        {!image.asset && (
          <div
            className="w-full h-0"
            style={{
              paddingBottom: '135%',
            }}
          />
        )}
      </div>
      {(i + 1) % 2 === 1 && <ArtistDrop1 id={`artist-image-${i}`} />}
      {(i + 1) % 2 === 0 && <ArtistDrop2 id={`artist-image-${i}`} />}
      <h2
        className={classNames({
          absolute: true,
          'top-7 left-2 sm:left-6': image.asset,
          'w-full text-center top-4/9': !image.asset,
        })}
      >
        {title}
      </h2>
    </>
  );
};

export default ArtistImage;
