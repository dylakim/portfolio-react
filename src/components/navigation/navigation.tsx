'use client';

import classNames from 'classnames';
import Link from 'next/link';

import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';

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
    <nav className={classNames(styles.navigation, 'horizontal-flex')}>
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
