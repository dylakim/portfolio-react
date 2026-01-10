import classNames from 'classnames';

import { ProjectListItem } from 'components/projectListItem';

import { projects } from './data';
import styles from './projectsPage.module.css';

export default function Page() {
  return (
    <div className={classNames(styles.page)}>
      <section className={classNames(styles.projectsSection, 'verticalFlex')}>
        <h2>Projects</h2>

        <div className={classNames(styles.projectList)}>
          {projects.map((project, index) => (
            <ProjectListItem key={`project-${index}`} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
