import classNames from 'classnames';
import Image from 'next/image';
import type { RefObject } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

import type { ImageType } from 'types/image';

import styles from './imageOverlay.module.css';

interface ImageOverlayProps {
  ref: RefObject<HTMLDialogElement | null>;
  image?: ImageType;
}
export default function ImageOverlay({ ref, image }: ImageOverlayProps) {
  const { src, alt } = image || {};

  function handleClose() {
    if (ref.current) ref.current.close();
  }

  return (
    <dialog
      ref={ref}
      closedby="any"
      className={classNames(styles.imageOverlayDialog)}
    >
      <div className={styles.imageOverlayContainer}>
        <div className={styles.closeButtonContainer}>
          <button
            onClick={handleClose}
            className={styles.closeButton}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
          </button>
        </div>

        {src && <Image src={src} alt={alt || ''} className={styles.image} />}
      </div>
    </dialog>
  );
}
