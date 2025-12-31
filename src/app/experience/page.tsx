import classNames from 'classnames';

import { Education } from 'components/education';
import { Experience } from 'components/experience';
import { ButtonLink } from 'basics/buttonLink/buttonLink';

import styles from './page.module.css';
import { education, experiences } from './data';

export default function Page() {
  return (
    <div className={classNames(styles.page, 'verticalFlex')}>
      <section className={classNames(styles.experience, 'verticalFlex')}>
        <h2>Experiences</h2>

        <div className={classNames(styles.experienceList, 'verticalFlex')}>
          {experiences.map((experience) => (
            <Experience
              key={`${experience.positionTitle} ${experience.companyName}`}
              {...experience}
            />
          ))}
        </div>
      </section>

      <section className={classNames(styles.education, 'verticalFlex')}>
        <h2>Education</h2>

        <div className={classNames(styles.educationList, 'verticalFlex')}>
          {education.map((edu) => (
            <Education key={edu.title} {...edu} />
          ))}
        </div>
      </section>

      <section className={styles.resume}>
        <ButtonLink
          href="/Resume.pdf"
          label="Download Resume"
          target="_blank"
        />
      </section>
    </div>
  );
}
