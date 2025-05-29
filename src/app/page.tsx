import classNames from 'classnames';
import Image from 'next/image';

import { Skill } from 'components/skill';
import type { Skill as SkillType } from 'components/skill/types';

import styles from './page.module.css';

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
    <div className={classNames(styles.aboutPage, 'verticalFlex')}>
      <section className={classNames(styles.aboutMe, 'horizontalFlex')}>
        <div className={classNames(styles.aboutMeDescription, 'verticalFlex')}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            fermentum lectus. Phasellus maximus porttitor elit sit amet
            volutpat. Nam non elit risus. Vivamus ante elit, euismod lacinia
            quam at, efficitur maximus lacus. Morbi id risus est. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. In eget commodo neque, eget aliquam neque. Aenean ut urna
            et nibh accumsan semper.
          </p>
        </div>
        <Image
          src="/profileImage.jpg"
          width="217"
          height="217"
          alt="Profile photo of Kim"
          className={styles.profileImage}
        />
      </section>

      <section className={classNames(styles.skills, 'verticalFlex')}>
        <h2>Skills</h2>
        <div className={classNames(styles.skillsList, 'horizontalFlex')}>
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
