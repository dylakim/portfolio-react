import type { JSX } from 'react';
import classNames from 'classnames';

import { skills } from './skills';
import styles from './skill.module.css';
import type { Skill } from './types';

type SkillStyle = 'pill' | 'pillCondensed' | 'icon';
type SkillIconSize = 'default' | 'large';

export interface SkillProps {
  skill: Skill;
  style?: SkillStyle;
  isDark?: boolean;
  iconSize?: SkillIconSize;
  className?: string;
}

export function Skill({
  skill,
  style = 'pill',
  isDark = false,
  iconSize = 'default',
  className,
}: SkillProps): JSX.Element {
  const { displayName, icon, darkIcon } = skills[skill] ?? {};

  return (
    <div className={classNames(styles.skill, className, styles[style])}>
      {icon || darkIcon ? (
        <div className={classNames(styles.skillIcon, styles[`${iconSize}`])}>
          {isDark && darkIcon ? darkIcon : icon}
        </div>
      ) : null}
      {style === 'pill' ? <span>{displayName}</span> : null}
    </div>
  );
}
