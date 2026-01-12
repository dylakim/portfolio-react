import type { ProjectType } from 'types/project';

import atdImage from '../assets/projects/atd.png';

export const projects: Record<string, ProjectType> = {
  portfolio: {
    slug: 'portfolio',
    title: 'Portfolio',
    role: 'React Front End Engineer',
    company: 'Merkle - Customer Experience and Commerce',
    shortDescription:
      'This portfolio website built with React and Next.js to showcase my skills.',
    description:
      'This portfolio website built with React and Next.js to showcase my skills. <br><br>TODO: add link to public Storybook',
    keySkills: ['react'],
    skills: ['react', 'typescript', 'nextjs', 'css'],
    previewImage: { src: atdImage, alt: 'testing' },
    primaryImages: [
      { src: atdImage, alt: 'test' },
      { src: atdImage, alt: '' },
    ],
  },
  'association-for-talent-development': {
    slug: 'association-for-talent-development',
    title: 'Association for Talent Development',
    role: 'React Front End Engineer',
    company: 'Merkle - Customer Experience and Commerce',
    shortDescription:
      'A redesign of the education section of the ATD public site to improve the overall look and feel, user experience, and content authoring experience.',
    description:
      'A redesign of the education section of the ATD public site to improve the overall look and feel, user experience, and content authoring experience.',
    keySkills: ['react'],
    skills: ['react', 'typescript', 'nextjs', 'css'],
    previewImage: { src: atdImage, alt: '' },
    primaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
  'center-for-internet-security': {
    slug: 'center-for-internet-security',
    title: 'Center for Internet Security',
    role: 'React Front End Engineer',
    company: 'Merkle - Customer Experience and Commerce',
    shortDescription:
      'An internal portal for CIS customers to manage their services and products.',
    description:
      'An internal portal for CIS customers to manage their services and products.',
    keySkills: ['react'],
    skills: ['react', 'typescript', 'nextjs', 'css'],
    previewImage: { src: atdImage, alt: '' },
    primaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
  'altria-loyalty-component-library': {
    slug: 'altria-loyalty-component-library',
    title: 'Altria Loyalty Component Library',
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription:
      "A component library dedicated to streamlining the development and maintenance process of Altria's loyalty programs.",
    description:
      "A component library dedicated to streamlining the development and maintenance process of Altria's loyalty programs.",
    keySkills: ['vue'],
    skills: ['vue', 'css'],
    previewImage: { src: atdImage, alt: '' },
    primaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
  'admin-tool-ui-library-migration': {
    slug: 'admin-tool-ui-library-migration',
    title: 'Admin Tool UI Library Migration',
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription:
      'Updating internal admin tool from Buefy to Ant Design ahead of the Vue 2 to Vue 3 migration.',
    description:
      'Updating internal admin tool from Buefy to Ant Design ahead of the Vue 2 to Vue 3 migration.',
    keySkills: ['vue'],
    skills: ['vue', 'css'],
    previewImage: { src: atdImage, alt: '' },
    primaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
  'dunkin-at-home-extras': {
    slug: 'dunkin-at-home-extras',
    title: "Dunkin' At Home Extras Loyalty Program",
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription:
      "Loyalty program for Dunkin' to promote their at home products, particularly during the COVID-19 pandemic.",
    description:
      "Loyalty program for Dunkin' to promote their at home products, particularly during the COVID-19 pandemic.",
    keySkills: ['vue'],
    skills: ['vue', 'css'],
    previewImage: { src: atdImage, alt: '' },
    primaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
  'altria-loyalty-programs': {
    slug: 'altria-loyalty-programs',
    title: 'Altria Loyalty Programs',
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription: 'Loyalty program hubs for Altria brands.',
    description: 'Loyalty program hubs for Altria brands.',
    keySkills: ['vue'],
    skills: ['vue', 'css'],
    previewImage: { src: atdImage, alt: '' },
    primaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
  'dyla-home-page': {
    slug: 'dyla-home-page',
    title: 'Dyla Home Page',
    shortDescription: 'The Dyla family landing page.',
    description: 'The Dyla family landing page.',
    keySkills: ['vue'],
    skills: ['vue', 'css'],
    previewImage: { src: atdImage, alt: '' },
    primaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
};
