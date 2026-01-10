import type { ProjectListItemProps } from 'components/projectListItem';

import atd from '../../assets/projects/atd.png';

export const projects: ProjectListItemProps[] = [
  {
    slug: 'portfolio',
    previewImage: atd,
    title: 'Portfolio',
    shortDescription:
      'This portfolio website built with React and Next.js to showcase my skills.',
    skills: ['react'],
  },
  {
    slug: 'association-for-talent-development',
    previewImage: atd,
    title: 'Association for Talent Development',
    shortDescription:
      'A redesign of the education section of the ATD public site to improve the overall look and feel, user experience, and content authoring experience.',
    skills: ['react'],
  },
  {
    slug: 'center-for-internet-security',
    previewImage: atd,
    title: 'Center for Internet Security',
    shortDescription:
      'An internal portal for CIS customers to manage their services and products.',
    skills: ['react'],
  },
  {
    slug: 'altria-loyalty-component-library',
    previewImage: atd,
    title: 'Altria Loyalty Component Library',
    shortDescription:
      "A component library dedicated to streamlining the development and maintenance process of Altria's loyalty programs.",
    skills: ['vue'],
  },
  {
    slug: 'admin-tool-ui-library-migration',
    previewImage: atd,
    title: 'Admin Tool UI Library Migration',
    shortDescription:
      'Updating internal admin tool from Buefy to Ant Design ahead of the Vue 2 to Vue 3 migration.',
    skills: ['vue'],
  },
  {
    slug: 'dunkin-at-home-extras',
    previewImage: atd,
    title: "Dunkin' At Home Extras Loyalty Program",
    shortDescription:
      "Loyalty program for Dunkin' to promote their at home products, particularly during the COVID-19 pandemic.",
    skills: ['vue'],
  },
  {
    slug: 'altria-loyalty-programs',
    previewImage: atd,
    title: 'Altria Loyalty Programs',
    shortDescription: 'Loyalty program hubs for Altria brands.',
    skills: ['vue'],
  },
  {
    slug: 'dyla-home-page',
    previewImage: atd,
    title: 'Dyla Home Page',
    shortDescription: 'The Dyla family landing page.',
    skills: ['vue'],
  },
];
