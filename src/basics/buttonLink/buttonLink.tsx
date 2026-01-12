import classNames from 'classnames';
import type { AnchorHTMLAttributes } from 'react';

import styles from './buttonLink.module.css';

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  label: string;
}

export function ButtonLink({ className, label, ...rest }: ButtonLinkProps) {
  return (
    <a className={classNames(styles.buttonLink, className)} {...rest}>
      {label}
    </a>
  );
}
