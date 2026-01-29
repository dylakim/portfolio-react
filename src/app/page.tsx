import classNames from 'classnames';
import Image from 'next/image';
import Markdown from 'react-markdown';

import { Skill } from 'components/skill';
import { body, headline, skillsHeadline } from 'data/aboutMe';
import { skills } from 'data/skills';

import styles from './page.module.css';
import profileImage from '../assets/profileImage.jpg';

export default function Home() {
  return (
    <div className={classNames(styles.aboutPage, 'verticalFlex')}>
      <section className={classNames(styles.aboutMe, 'horizontalFlex')}>
        <div className={classNames(styles.aboutMeDescription, 'verticalFlex')}>
          <h1>{headline}</h1>
          <Markdown>{body}</Markdown>
        </div>

        <Image
          src={profileImage}
          alt="Profile photo of Kim Dyla"
          className={styles.profileImage}
        />
      </section>

      <section className={classNames(styles.skills, 'verticalFlex')}>
        <h2>{skillsHeadline}</h2>
        <div className={classNames(styles.skillsList, 'horizontalFlex')}>
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
