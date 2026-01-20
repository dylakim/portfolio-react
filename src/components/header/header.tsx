'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from 'data/navigation';

import styles from './header.module.css';

export function Header() {
  const pathname = usePathname();

  return (
    <header className={classNames(styles.header, 'horizontalFlex')}>
      <div className={styles.logo}>kim.dyla</div>

      <nav className={classNames(styles.navLinks, 'horizontalFlex')}>
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
    </header>
  );
}
