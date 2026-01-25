'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { useRef } from 'react';

import { navLinks } from 'data/navigation';

import styles from './mobileNavigation.module.css';

export function MobileNavigation() {
  const pathname = usePathname();
  const parentPathname = pathname.split('/').filter((i) => i.length)[0];

  const navMenu = useRef<HTMLDialogElement>(null);

  function toggleMobileNav() {
    if (navMenu.current) navMenu.current.showModal();
  }

  function closeMobileNav() {
    if (navMenu.current) navMenu.current.close();
  }

  return (
    <>
      <button
        onClick={toggleMobileNav}
        className={styles.mobileNavigationToggle}
        aria-label="Open Navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <dialog ref={navMenu} className={styles.mobileNavigationMenu}>
        <button
          onClick={closeMobileNav}
          className={styles.mobileNavigationToggle}
          aria-label="Close Navigation"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <nav className={classNames(styles.navLinks, 'verticalFlex')}>
          {navLinks.map(({ path, label }) => {
            const isActive = parentPathname === path.replace('/', '');

            return (
              <Link
                key={label}
                href={path}
                className={classNames({ [styles.active]: isActive })}
                onClick={closeMobileNav}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </dialog>
    </>
  );
}
