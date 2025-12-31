import type { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Image, { type StaticImageData } from 'next/image';

import { Skill } from 'components/skill';
import type { Skill as SkillType } from 'components/skill/types';

import styles from './experience.module.css';

export interface ExperienceProps extends PropsWithChildren {
  location: string;
  positionTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  skills?: SkillType[];
  logo: StaticImageData;
  positionDescription: string[];
  isLastExperience?: boolean;
}

export function Experience({
  location,
  positionTitle,
  companyName,
  startDate,
  endDate,
  skills,
  logo,
  positionDescription,
  isLastExperience,
}: ExperienceProps) {
  return (
    <article
      className={classNames(styles.experience, 'verticalFlex', {
        [styles.lastExperience]: isLastExperience,
      })}
    >
      <div className={styles.companyLogoContainer}>
        <Image
          src={logo}
          alt={`${companyName} Logo`}
          className={styles.companyLogo}
        />
      </div>

      <div className={classNames(styles.experienceHeader, 'verticalFlex')}>
        <p className={classNames(styles.location, 'horizontalFlex')}>
          <FontAwesomeIcon icon={faLocationDot} /> {location}
        </p>

        <div className={classNames(styles.positionMeta, 'horizontalFlex')}>
          <p className={styles.dates}>
            {startDate} - {endDate}
          </p>

          <div>
            <h3 className={styles.positionTitle}>{positionTitle}</h3>

            <p className={styles.companyName}>{companyName}</p>
          </div>
        </div>
      </div>

      {skills && skills.length > 0 ? (
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <Skill key={`${positionTitle}-${skill}`} skill={skill} />
          ))}
        </div>
      ) : null}

      <ul className={styles.positionDescriptionList}>
        {positionDescription.map((desc, index) => (
          <li key={index} className={styles.positionDescription}>
            {desc}
          </li>
        ))}
      </ul>
    </article>
  );
}
