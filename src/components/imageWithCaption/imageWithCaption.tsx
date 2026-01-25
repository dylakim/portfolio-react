import classNames from 'classnames';
import Image from 'next/image';

import type { ImageType } from 'types/image';

import styles from './imageWithCaption.module.css';

export interface ImageWithCaptionProps {
  image: ImageType;
  caption?: string;
}

export default function ImageWithCaption({
  image,
  caption,
}: ImageWithCaptionProps) {
  const { src, alt } = image || {};

  return (
    <div className={classNames(styles.imageWithCaption, 'verticalFlex')}>
      <Image src={src} alt={alt || ''} className={styles.image} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
