import classNames from 'classnames';

import { projects } from 'data/projects';
import { ProjectListItem } from 'components/projectListItem';

import styles from './projectsPage.module.css';

export default function Page() {
  return (
    <div className={classNames(styles.page)}>
      <section className={classNames(styles.projectsSection, 'verticalFlex')}>
        <h2>Projects</h2>

        <div className={classNames(styles.projectList, 'gridTwoColumn')}>
          {Object.values(projects).map((project) => (
            <ProjectListItem key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
