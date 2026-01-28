'use client';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { useRef } from 'react';

import { NavigationLinks } from 'components/navigationLinks';

import styles from './mobileNavigation.module.css';

export function MobileNavigation() {
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

        <NavigationLinks
          orientation="vertical"
          className={classNames(styles.navLinks)}
          linkProps={{
            activeClassName: styles.active,
            onClick: closeMobileNav,
          }}
        />
      </dialog>
    </>
  );
}
