'use client';
import classNames from 'classnames';
import Image from 'next/image';

import { ButtonLink } from 'basics/buttonLink/buttonLink';
import ImageWithCaption from 'components/imageWithCaption/imageWithCaption';
import { SkillGroup } from 'components/skillGroup';
import type { ProjectType } from 'types/project';

import styles from './projectDetail.module.css';

export type ProjectDetailProps = Pick<
  ProjectType,
  | 'title'
  | 'role'
  | 'company'
  | 'description'
  | 'keyFeatures'
  | 'skills'
  | 'buttons'
  | 'previewImage'
  | 'images'
>;

export function ProjectDetail({
  title,
  role,
  company,
  description,
  keyFeatures,
  skills,
  buttons,
  previewImage,
  images,
}: ProjectDetailProps) {
  return (
    <>
      <article className={classNames(styles.projectDetail, 'verticalFlex')}>
        <div
          className={classNames(styles.projectDetailContainer, 'verticalFlex')}
        >
          <div className={classNames(styles.header, 'verticalFlex')}>
            <h1>{title}</h1>

            {role || company ? (
              <div className={classNames(styles.experience, 'horizontalFlex')}>
                {role && <p className={styles.role}>{role}</p>}
                &bull;
                {company && <p>{company}</p>}
              </div>
            ) : null}
          </div>

          <Image
            src={previewImage.src}
            alt={previewImage.alt}
            className={styles.image}
          />

          <div className={classNames(styles.mainContent, 'gridTwoColumn')}>
            <div className={classNames(styles.summary, 'verticalFlex')}>
              <h2>Summary</h2>
              <p dangerouslySetInnerHTML={{ __html: description }} />

              {keyFeatures?.length && (
                <div
                  className={classNames(
                    styles.keyFeaturesSection,
                    'verticalFlex'
                  )}
                >
                  <h3>Key Features</h3>

                  <ul className={styles.keyFeaturesList}>
                    {keyFeatures.map((keyFeature) => (
                      <li key={keyFeature} className={styles.keyFeature}>
                        {keyFeature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className={classNames(styles.rightPanel, 'verticalFlex')}>
              {buttons?.length && (
                <div className={classNames(styles.buttons, 'verticalFlex')}>
                  {buttons.map((button) => (
                    <ButtonLink
                      key={button.label}
                      {...button}
                      className={styles.button}
                    />
                  ))}
                </div>
              )}

              <div className="verticalFlex">
                <h3>Toolset</h3>
                {skills?.length && <SkillGroup skills={skills} />}
              </div>
            </div>
          </div>

          {images?.length ? (
            <div className={classNames(styles.imageList, 'verticalFlex')}>
              {images.map((image, index) => (
                <ImageWithCaption key={`secondary-image-${index}`} {...image} />
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
