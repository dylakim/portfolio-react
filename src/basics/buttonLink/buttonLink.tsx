import classNames from 'classnames';
import styles from './buttonLink.module.css';
import type { AnchorHTMLAttributes } from 'react';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export function ButtonLink({className, ...rest}: ButtonLinkProps) {
  return <a className={classNames(styles.buttonLink, className)} {...rest}>Button Link</a>
}