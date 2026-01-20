import classNames from 'classnames';
import Image from 'next/image';

import { Skill } from 'components/skill';
import { skills } from 'data/skills';

import styles from './page.module.css';
import profileImage from '../assets/profileImage.jpg';

export default function Home() {
  return (
    <div className={classNames(styles.aboutPage, 'verticalFlex')}>
      <section className={classNames(styles.aboutMe, 'horizontalFlex')}>
        <div className={classNames(styles.aboutMeDescription, 'verticalFlex')}>
          <h1>Hello! 👋🏻 I&apos;m Kim</h1>
          <p>
            Experienced Front End Developer with a decade of expertise
            transforming complex requirements into intuitive, accessible web
            experiences. Background spans agency work building solutions for
            diverse clients, with strengths in popular frontend frameworks,
            component-driven architecture, and fostering development best
            practices. Eager to transition to a product-focused role where I can
            invest deeply in a mission-driven product, continue leveraging
            modern frontend technologies, and contribute to work that creates
            real value for users and communities.
          </p>
        </div>
        <Image
          src={profileImage}
          alt="Profile photo of Kim Dyla"
          className={styles.profileImage}
        />
      </section>

      <section className={classNames(styles.skills, 'verticalFlex')}>
        <h2>Key Skills</h2>
        <div className={classNames(styles.skillsList, 'horizontalFlex')}>
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
