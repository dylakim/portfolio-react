import { Skill } from 'components/skill';
import styles from './page.module.css';
import classNames from 'classnames';
import type { Skill as SkillType } from 'components/skill/types';

const skills: SkillType[] = [
  'react',
  'typescript',
  'javascript',
  'css',
  'jest',
  'sitecore',
  'nextjs',
  'storybook',
  'figma',
  'git',
  'html',
  'scss',
  'vue',
];

export default function Home() {
  return (
    <section className={classNames(styles.skills, 'verticalFlex')}>
      <h2>Skills</h2>
      <div className={classNames(styles.skillsList, 'horizontalFlex')}>
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
