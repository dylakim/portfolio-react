import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';
import { faAt, faFile, faFire } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';

interface FooterLink {
  label: string;
  url: string;
  icon: IconDefinition;
}

const footerLinks: FooterLink[] = [
  {
    label: 'kim@dyla.dev',
    url: 'mailto:kim@dyla.dev',
    icon: faAt,
  },
  {
    label: 'Github',
    url: 'https://github.com/dylakim',
    icon: faGithub,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dylakim/',
    icon: faLinkedin,
  },
  {
    label: 'Resume',
    url: '',
    icon: faFile,
  },
  {
    label: 'dyla.dev',
    url: 'https://dyla.dev/',
    icon: faFire,
  },
];

export function Footer() {
  return (
    <footer className={classNames(styles.footer, 'vertical-flex')}>
      <div className={classNames(styles.footerLinks, 'horizontal-flex')}>
        {footerLinks.map(({ label, url, icon }) => {
          return (
            <a
              key={label}
              href={url}
              className={classNames(styles.footerLink, 'horizontal-flex')}
            >
              <FontAwesomeIcon icon={icon} /> {label}
            </a>
          );
        })}
      </div>
      <hr className={styles.divider} />
      <div className={classNames(styles.copyright, 'horizontal-flex')}>
        <span>Kim Dyla</span> <FontAwesomeIcon icon={faCopyright} />{' '}
        <span>2025</span>
      </div>
    </footer>
  );
}
