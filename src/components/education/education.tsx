import type { PropsWithChildren } from 'react';
import styles from './education.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface EducationProps extends PropsWithChildren {
  completionYear: string;
  location?: string;
  title: string;
}

export function Education({
  children,
  completionYear,
  location,
  title,
}: EducationProps) {
  return (
    <article className={classNames(styles.education, 'verticalFlex')}>
      <div className={classNames(styles.educationHeader, 'verticalFlex')}>
        <div className={classNames(styles.educationMeta, 'horizontalFlex')}>
          <h3 className="heading4">{title}</h3>
          <p className={styles.completionYear}>{completionYear}</p>
        </div>

        {location ? (
          <p className={classNames(styles.location, 'horizontalFlex')}>
            <FontAwesomeIcon icon={faLocationDot} /> {location}
          </p>
        ) : null}
      </div>

      {children}
    </article>
  );
}
