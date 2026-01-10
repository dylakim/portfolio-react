import classNames from 'classnames';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Skill } from 'components/skill';
import type { Skill as SkillType } from 'components/skill/types';

import styles from './projectListItem.module.css';

export interface ProjectListItemProps {
  slug: string;
  previewImage: StaticImageData;
  title: string;
  shortDescription: string;
  skills: SkillType[];
}

export function ProjectListItem({
  slug,
  previewImage,
  title,
  shortDescription,
  skills,
}: ProjectListItemProps) {
  return (
    <Link href={`/projects/${slug}`} className={styles.projectListItemLink}>
      <article className={classNames(styles.projectListItem, 'verticalFlex')}>
        <div className={styles.projectPreviewImageContainer}>
          <Image
            src={previewImage}
            alt={`${title} Screenshot`}
            fill={true}
            className={styles.projectPreviewImage}
          />
        </div>

        <div className={classNames(styles.projectOverview, 'verticalFlex')}>
          <h3>{title}</h3>
          <p>{shortDescription}</p>
        </div>

        <div className={classNames(styles.skillsContainer, 'horizontalFlex')}>
          {skills?.length &&
            skills.map((skill) => (
              <Skill
                key={`${title}-${skill}`}
                skill={skill}
                style="icon"
                isDark={true}
                className={styles.skillIcon}
              />
            ))}
        </div>
      </article>
    </Link>
  );
}
