import type { JSX } from 'react';

import { skills } from './skills';
import styles from './skill.module.css';
import type { Skill } from './types';
import classNames from 'classnames';

type SkillStyle = 'pill' | 'pillCondensed' | 'icon';

interface SkillProps {
  skill: Skill;
  style?: SkillStyle;
}

export function Skill({ skill, style = 'pill' }: SkillProps): JSX.Element {
  const { displayName, icon } = skills[skill] ?? {};

  return (
    <div className={classNames(styles.skill, styles[style])}>
      <div className={styles.skillIcon}>{icon}</div>
      {style === 'pill' ? <span>{displayName}</span> : null}
    </div>
  );
}
