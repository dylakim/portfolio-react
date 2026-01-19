import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import type { ProjectType } from 'types/project';
import { SkillGroup } from 'components/skillGroup';

import styles from './projectListItem.module.css';

export type ProjectListItemProps = Pick<
  ProjectType,
  'slug' | 'previewImage' | 'title' | 'shortDescription' | 'keySkills'
>;

export function ProjectListItem({
  slug,
  previewImage,
  title,
  shortDescription,
  keySkills,
}: ProjectListItemProps) {
  return (
    <Link href={`/projects/${slug}`} className={styles.projectListItemLink}>
      <article className={classNames(styles.projectListItem, 'verticalFlex')}>
        <div className={styles.projectPreviewImageContainer}>
          <Image
            src={previewImage.src}
            alt={previewImage.alt}
            fill={true}
            className={styles.projectPreviewImage}
          />
        </div>

        <div className={classNames(styles.projectOverview, 'verticalFlex')}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p>{shortDescription}</p>
        </div>

        {keySkills?.length && (
          <SkillGroup
            skills={keySkills}
            skillProps={{
              style: 'icon',
              isDark: true,
              iconSize: 'large',
            }}
            className={styles.skillsContainer}
          />
        )}
      </article>
    </Link>
  );
}
