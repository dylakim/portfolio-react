import classNames from 'classnames';

import { Education } from 'components/education';

import styles from './page.module.css';

export default function Page() {
  return (
    <section className={classNames(styles.education, 'verticalFlex')}>
      <h2>Education</h2>

      <div className={classNames(styles.educationList, 'verticalFlex')}>
        <Education
          title="Sitecore Personalization Certification"
          completionYear="2024"
        />

        <Education title="Sitecore CDP Certification" completionYear="2024" />

        <Education
          title="Bachelor of Arts"
          completionYear="2013"
          location="Michigan State University"
        >
          <p>
            Media Arts and Technology degree concentrating on Front-End Web
            Development, User Experience, and Human Computer Interaction.
            Specialization in Digital Humanities.
          </p>
        </Education>
      </div>
    </section>
  );
}
