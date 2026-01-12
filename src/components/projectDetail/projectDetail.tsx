'use client';
import classNames from 'classnames';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { ButtonGroup } from 'components/buttonGroup';
import ImageOverlay from 'components/imageOverlay/imageOverlay';
import { SkillGroup } from 'components/skillGroup';

import type { ImageType } from 'types/image';
import type { ProjectType } from 'types/project';

import styles from './projectDetail.module.css';

export type ProjectDetailProps = Pick<
  ProjectType,
  | 'title'
  | 'role'
  | 'company'
  | 'description'
  | 'skills'
  | 'buttons'
  | 'primaryImages'
  | 'secondaryImages'
>;

export function ProjectDetail({
  title,
  role,
  company,
  description,
  skills,
  buttons,
  primaryImages,
  secondaryImages,
}: ProjectDetailProps) {
  const imageOverlay = useRef<HTMLDialogElement>(null);
  const [currentImage, setCurrentImage] = useState<ImageType>();

  function handleImageClick(image: ImageType) {
    setCurrentImage(image);
    if (imageOverlay.current) {
      imageOverlay.current.showModal();
    }
  }

  return (
    <>
      <article className={classNames(styles.projectDetail, 'verticalFlex')}>
        <div
          className={classNames(styles.projectDetailContainer, 'verticalFlex')}
        >
          <div className={classNames(styles.header, 'verticalFlex')}>
            <h2>{title}</h2>

            <div>
              {role && <p>{role}</p>}
              {company && <p>{company}</p>}
            </div>
          </div>

          <div className="gridTwoColumn">
            <div className={classNames(styles.mainContent, 'verticalFlex')}>
              {skills?.length && <SkillGroup skills={skills} />}

              <p dangerouslySetInnerHTML={{ __html: description }} />

              {buttons?.length && <ButtonGroup buttons={buttons} />}
            </div>

            {primaryImages?.length && (
              <div className="verticalFlex">
                {primaryImages.map((image, index) => {
                  const { src, alt } = image;
                  return (
                    <button
                      key={`primary-image-${index}`}
                      onClick={() => handleImageClick(image)}
                      className={styles.imageButton}
                    >
                      <Image src={src} alt={alt} className={styles.image} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {secondaryImages?.length && (
            <div className="gridTwoColumn">
              {secondaryImages.map(({ src, alt }, index) => (
                <Image
                  key={`secondary-image-${index}`}
                  src={src}
                  alt={alt}
                  className={styles.image}
                />
              ))}
            </div>
          )}
        </div>
      </article>

      <ImageOverlay ref={imageOverlay} image={currentImage} />
    </>
  );
}
