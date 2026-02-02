import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faFile, faFire } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';
import type { AnchorHTMLAttributes } from 'react';

import styles from './footer.module.css';

interface FooterLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon: IconDefinition;
}

const footerLinks: FooterLink[] = [
  {
    label: 'kim@dyla.dev',
    href: 'mailto:kim@dyla.dev',
    icon: faAt,
  },
  {
    label: 'Github',
    href: 'https://github.com/dylakim',
    icon: faGithub,
    target: '_blank',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dylakim/',
    icon: faLinkedin,
    target: '_blank',
  },
  {
    label: 'Resume',
    href: '/resume-kim-dyla.pdf',
    icon: faFile,
    target: '_blank',
  },
  {
    label: 'dyla.dev',
    href: 'https://dyla.dev/',
    icon: faFire,
    target: '_blank',
  },
];

export function Footer() {
  return (
    <footer className={classNames(styles.footer, 'verticalFlex')}>
      <div className={classNames(styles.footerLinks, 'horizontalFlex')}>
        {footerLinks.map(({ label, icon, ...rest }) => {
          return (
            <a
              key={label}
              className={classNames(styles.footerLink, 'horizontalFlex')}
              {...rest}
            >
              <FontAwesomeIcon icon={icon} /> {label}
            </a>
          );
        })}
      </div>
      <hr className={styles.divider} />
      <div className={classNames(styles.copyright, 'horizontalFlex')}>
        <span>Kim Dyla</span> <FontAwesomeIcon icon={faCopyright} />{' '}
        <span>2026</span>
      </div>
    </footer>
  );
}
