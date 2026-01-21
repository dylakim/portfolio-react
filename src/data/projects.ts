import type { ProjectType } from 'types/project';

import atdImage from '../assets/projects/atd.png';
import atd1Image from '../assets/projects/atd1.png';
import atd2Image from '../assets/projects/atd2.png';
import atd3Image from '../assets/projects/atd3.png';
import portfolioImage from '../assets/projects/portfolio.png';

export const projects: Record<string, ProjectType> = {
  portfolio: {
    slug: 'portfolio',
    title: 'Portfolio',
    shortDescription:
      'A portfolio website built with React and Next.js to showcase my skills.',
    description:
      'A portfolio website built with React and Next.js to showcase my skills and abilities. Designed with my favorite color, green, and a minimalist, clean look.',
    keyFeatures: [
      'Built with React and Typescript',
      'Leveraged Next.js for simple page routing',
      'Deployed with Vercel',
      'Managed components in Storybook',
      'Custom component-driven design using Figma',
    ],
    keySkills: ['react'],
    skills: ['react', 'typescript', 'nextjs', 'css'],
    buttons: [
      { label: 'GitHub', href: 'https://github.com/dylakim/portfolio-react' },
      {
        label: 'Storybook',
        href: 'https://portfolio-react-storybook.vercel.app/',
      },
    ],
    previewImage: {
      src: portfolioImage,
      alt: 'Screenshot of portfolio website',
    },
    images: [],
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
    keyFeatures: [
      'Large-scale React and Typescript project',
      'Thoughtful Contentful content types with the purpose of giving content authors flexibility while maintaining an intuitive user experience',
      'GraphQL is pretty neat',
    ],
    keySkills: ['react'],
    skills: ['react', 'typescript', 'nextjs', 'css'],
    buttons: [
      {
        label: 'ATD Education',
        href: 'https://www.td.org/education',
      },
    ],
    previewImage: {
      src: atdImage,
      alt: 'Screenshot of ATD Education landing page',
    },
    images: [
      {
        image: { src: atd1Image, alt: 'test' },
        caption: 'Tile in white. Tile group.',
      },
      {
        image: { src: atd2Image, alt: 'test' },
        caption: 'Tile in gray. Also buttons.',
      },
      {
        image: { src: atd3Image, alt: 'test' },
        caption: 'ATDYou Learning Library header',
      },
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
    images: [
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
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
    images: [
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
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
    images: [
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
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
    images: [
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
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
    images: [
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
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
    images: [
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
      { image: { src: atdImage, alt: 'test' }, caption: 'Test caption' },
    ],
  },
};
