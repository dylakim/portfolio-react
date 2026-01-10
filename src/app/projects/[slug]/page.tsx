import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong';
import classNames from 'classnames';

import { notFound } from 'next/navigation';
import { projects } from 'data/projects';

import styles from './projectPage.module.css';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!projects[slug]) notFound();

  const { title, description } = projects[slug];

  return (
    <div className={classNames(styles.page, 'verticalFlex')}>
      <Link
        href="/projects"
        className={classNames(styles.back, 'horizontalFlex')}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Back to Projects
      </Link>

      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
