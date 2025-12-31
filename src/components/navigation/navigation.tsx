'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './navigation.module.css';

const navLinks = [
  {
    label: 'About Me',
    path: '/',
  },
  {
    label: 'Experience',
    path: '/experience',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={classNames(styles.navigation, 'horizontalFlex')}>
      {navLinks.map(({ path, label }) => (
        <Link
          key={label}
          href={path}
          className={classNames({ [styles.active]: pathname == path })}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
