import classNames from 'classnames';
import { Skill, type SkillProps } from 'components/skill/skill';
import type { Skill as SkillType } from 'components/skill/types';

import styles from './skillGroup.module.css';

interface SkillGroupProps {
  skills: SkillType[];
  skillProps?: Omit<SkillProps, 'skill'>;
  className?: string;
}

export function SkillGroup({ skills, skillProps, className }: SkillGroupProps) {
  return (
    <div
      className={classNames(
        styles.skillGroupContainer,
        className,
        'horizontalFlex'
      )}
    >
      {skills?.length &&
        skills.map((skill) => (
          <Skill key={skill} skill={skill} {...skillProps} />
        ))}
    </div>
  );
}
