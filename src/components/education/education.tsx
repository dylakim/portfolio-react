import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './education.module.css';
export interface EducationProps {
  completionYear: string;
  location?: string;
  title: string;
  description?: string;
}

export function Education({
  completionYear,
  location,
  title,
  description,
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

      {description ? <p>{description}</p> : null}
    </article>
  );
}
