'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link, { type LinkProps as NextLinkProps } from 'next/link';

import { navLinks } from 'data/navigation';

import styles from './navigationLinks.module.css';

interface LinkProps extends Omit<NextLinkProps, 'href'> {
  activeClassName?: string;
}

interface NavigationLinksProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  linkProps?: LinkProps;
}

export function NavigationLinks({
  orientation = 'horizontal',
  className,
  linkProps = {},
}: NavigationLinksProps) {
  const pathname = usePathname();
  const parentPathname =
    pathname !== '/' ? pathname?.split('/').filter((i) => i.length)[0] : '';

  const { activeClassName = '', ...rest } = linkProps;

  return (
    <nav
      className={classNames(styles.navigationLinks, className, {
        horizontalFlex: orientation === 'horizontal',
        verticalFlex: orientation === 'vertical',
      })}
    >
      {navLinks.map(({ path, label }) => {
        const isActive = parentPathname === path.replace('/', '');

        return (
          <Link
            key={label}
            href={path}
            className={classNames({
              [activeClassName]: isActive,
            })}
            {...rest}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
