import classNames from 'classnames';
import Link from 'next/link';

import { NavigationLinks } from 'components/navigationLinks';

import styles from './header.module.css';

export function Header() {
  return (
    <header className={classNames(styles.header, 'horizontalFlex')}>
      <div className={styles.logo}>
        <Link href="/">kim.dyla</Link>
      </div>

      <NavigationLinks
        className={classNames(styles.navLinks)}
        linkProps={{ activeClassName: styles.active }}
      />
    </header>
  );
}
