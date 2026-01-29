import type { ProjectType } from 'types/project';

import atdImage from '../assets/projects/atd.png';
import atd1Image from '../assets/projects/atd1.png';
import atd2Image from '../assets/projects/atd2.png';
import atd3Image from '../assets/projects/atd3.png';
import portfolioImage from '../assets/projects/portfolio.png';
import skoalRewardsPreview from '../assets/projects/skoal-rewards-crop.png';
import skoalRewards from '../assets/projects/skoal-rewards.png';
import dunkinExtras from '../assets/projects/dunkinextra.png';
import dylaDev from '../assets/projects/dylaDev.png';

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
      'A redesign of the education section of the ATD public site to improve the overall look and feel, user experience, and content authoring experience',
    description:
      'Association for Talent Development, or ATD, is a knowledge base for people who develop talent in the workplace. They offer a library of educational courses, certification programs, and workshops among other community resources. ATD came to Merkle seeking a redesign of the Courses & Certification section of their public site. With a 2 month timeline, a client managed codebase and Contentful space, and ever-changing designs, we had our work cut out for us. This project gave me the opportunity to work with Contentful for the first time and make use of my recently acquired Contentful Certified Professional credential. It also introduced me to GraphQL, which was used to query Contentful, and ChakraUI, which was already heavily used in the project. My contribution included creating new Contentful content types and components, redesigning and improving existing components, and sneaking in some quality of life improvements.',
    keyFeatures: [
      'Large-scale React and Typescript project',
      'Modern design refresh of Courses & Certification',
      'Thoughtful Contentful content types with the purpose of giving content authors flexibility while maintaining an intuitive user experience',
      "Backwards compatibility: components that already existed were not visually impacted. Content authors can choose when to use a component's new design.",
    ],
    keySkills: ['react'],
    skills: [
      'react',
      'typescript',
      'contentful',
      'chakraUI',
      'graphQL',
      'nextjs',
      'figma',
    ],
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
  'altria-loyalty': {
    slug: 'altria-loyalty',
    title: 'Altria Loyalty Programs and Component Library',
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription:
      "A component library built to streamline the development and maintenance of Altria's loyalty programs.",
    description: `<p>Altria, one of HelloWorld's long term clients, wanted to build a loyalty program for its biggest brands - Skoal, Copenhagen, and On! Nicotine - in order to drive consumer engagement, retention, and brand loyalty. The programs would be punch card systems where consumers can find a code on a product and earn a punch. A predetermined number of punches completes a punchcard, at which point the user can choose a reward. The monetary value of the rewards increase as the consumer completes more punch cards, encouraging them to purchase more products.</p><p>The team knew at least three programs were expected to be delivered and each would be nearly identical to each other in functionality. Site branding and program strategy would set the programs apart. Given this knowledge, I decided to create a component library, the first of its kind on this team, in order to streamline the development and maintenance of the long running programs. The component library and the programs were built with Vue.js.</p><p><i>Disclaimer: While I contributed to a project for a tobacco company that encouraged product use through loyalty rewards, I want to be clear that I do not support marketing of a product with known, severe health risks. I believe it is unethical to encourage increased use of a substance linked to cancer for material incentives.</i></p>`,
    keyFeatures: [
      'A component library, made available as a private node package, optimized development of and proved to be an efficient way to maintain shared components.',
      'Three nearly identical, responsive, Vue.js web applications ',
    ],
    keySkills: ['vue'],
    skills: ['vue', 'javascript', 'scss', 'mocha', 'chai', 'npm'],
    previewImage: {
      src: skoalRewardsPreview,
      alt: 'Screenshot of the Skoal Rewards program punch cards',
    },
    buttons: [
      { label: 'Skoal Rewards', href: 'https://www.skoal.com/rewards/' },
      {
        label: 'Copenhagen Rewards',
        href: 'https://www.freshcope.com/rewards/',
      },
      {
        label: 'On! Nicotine',
        href: 'https://www.onnicotine.com/rewards/',
      },
    ],
    images: [
      {
        image: {
          src: skoalRewards,
          alt: 'Screenshot of the Skoal Rewards program',
        },
      },
    ],
  },
  'dunkin-at-home-extras': {
    slug: 'dunkin-at-home-extras',
    title: "Dunkin' At Home Extras Loyalty Program",
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription:
      "Dunkin' Donuts loyalty program to promote and encourage the use of their at-home products, particularly during the COVID-19 pandemic",
    description:
      "Dunkin' At Home Extras is a rewards program for purchasing Dunkin' Coffee products for use at home. Users can upload their grocery receipts and earn points for their Dunkin' purchases. Points can be redeemed for Dunkin' gift cards. I was the lead front end developer on the cross-discipline team that built this program.",
    keySkills: ['vue'],
    skills: ['vue', 'javascript', 'scss'],
    buttons: [
      {
        label: "Dunkin' At Home Extras",
        href: 'https://www.dunkinextras.com/',
      },
    ],
    previewImage: {
      src: dunkinExtras,
      alt: 'Screenshot of the Dunkin at Home Extras Loyalty Program',
    },
  },
  'dyla-home-page': {
    slug: 'dyla-home-page',
    title: 'Dyla Home Page',
    shortDescription: 'The Dyla family landing page',
    description:
      'My husband and I both have subdomains on dyla.com. We needed something at the top level domain it would be pretty odd if you went to dyla.com from kim.dyla.com and nothing was there. So, I built a basic, little splash page that highlights some of our favorite things. Enjoy pictures from our favorite vacations and a rotating random cocktail picker.',
    keySkills: ['vue'],
    skills: ['vue', 'javascript', 'scss', 'firebase'],
    buttons: [
      { label: 'dyla.dev', href: 'https://dyla.dev/' },
      { label: 'GitHub', href: 'https://github.com/dylakim/dyla-home' },
    ],
    previewImage: { src: dylaDev, alt: 'Screenshot of the dyla.dev home page' },
  },
};
