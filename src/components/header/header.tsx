'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from 'data/navigation';

import styles from './header.module.css';

export function Header() {
  const pathname = usePathname();
  const parentPathname = pathname.split('/').filter((i) => i.length)[0];

  return (
    <header className={classNames(styles.header, 'horizontalFlex')}>
      <div className={styles.logo}>kim.dyla</div>

      <nav className={classNames(styles.navLinks, 'horizontalFlex')}>
        {navLinks.map(({ path, label }) => {
          const isActive = parentPathname === path.replace('/', '');

          return (
            <Link
              key={label}
              href={path}
              className={classNames({
                [styles.active]: isActive,
              })}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
