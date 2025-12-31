import type { ExperienceProps } from 'components/experience';
import type { EducationProps } from 'components/education';

import helloworldLogo from '../../assets/helloworldLogo.png';
import merkleLogo from '../../assets/merkleLogo.png';
import aquentLogo from '../../assets/aquentLogo.png';

export const experiences: ExperienceProps[] = [
  {
    location: 'Remote',
    positionTitle: 'React Front End Engineer',
    companyName: 'Merkle',
    startDate: '9/2023',
    endDate: 'Present',
    logo: merkleLogo,
    skills: [
      'react',
      'typescript',
      'javascript',
      'nextjs',
      'html',
      'css',
      'chakraUI',
      'contentful',
      'sitecore',
      'rest',
      'graphQL',
      'jest',
      'reactTestingLibrary',
      'storybook',
      'figma',
      'wcag',
    ],
    positionDescription: [
      "Built and maintained a feature-rich React component library with robust page and component level authoring options for the Center for Internet Security's (CIS) web application that leverages Sitecore's headless CMS.",
      'Advocated for and integrated TypeScript during a full CIS library redesign initiative.',
      "Redesigned the Education section of the Association for Talent Development's (ATD) website using React, Typescript, and Contentful CMS. Delicately enhanced component feature sets by giving content authors the power to decide when to use upgraded components.",
      'Enforced clean coding practices through code reviews and unit tests.',
      'Earned Contentful Certified Professional certification.',
      'Earned Sitecore CDP and Personalize certifications.',
    ],
  },
  {
    location: 'Southfield, MI & Remote',
    positionTitle: 'Senior Promotions Front End Developer',
    companyName: 'Merkle - Promotions & Loyalty (formerly HelloWorld)',
    startDate: '1/2021',
    endDate: '9/2023',
    logo: helloworldLogo,
    skills: [
      'vue',
      'javascript',
      'css',
      'html',
      'scss',
      'chai',
      'mocha',
      'vuex',
      'photoshop',
      'rest',
      'wcag',
      'yaml',
    ],
    positionDescription: [
      'Architected a component library leveraging Vue.js to enhance the scalability and maintainability of enterprise web applications.',
      'Utilized modern development techniques to contribute to proprietary platforms, resulting in increased efficiencies and refactored legacy code.',
      'Conducted group and individual behavioral interviews to successfully hire new talent.',
      'Mentored students in the Kettering University co-op program.',
    ],
  },
  {
    location: 'Southfield, MI',
    positionTitle: 'Promotions Front End Developer',
    companyName: 'Merkle - Promotions & Loyalty (formerly HelloWorld)',
    startDate: '1/2021',
    endDate: '5/2015',
    logo: helloworldLogo,
    skills: [
      'vue',
      'javascript',
      'jquery',
      'angular',
      'vuex',
      'css',
      'scss',
      'photoshop',
      'rest',
      'templateToolkit',
      'wcag',
      'yaml',
    ],
    positionDescription: [
      'Developed 100+ brand engagement and promotional web applications using Javascript, HTML, CSS, Vue, and Angular.',
      'Applied Agile planning principles to ensure customized solutions based on client requirements were delivered efficiently.',
      'Worked closely with project managers and UX designers to transform project requirements and business objectives into polished user interfaces.',
      'Operated seamlessly in a global development environment, working effectively across multiple time zones and cultures.',
    ],
  },
  {
    location: 'Metro Detroit, MI',
    positionTitle: 'Front End Web Developer',
    companyName: 'Aquent - E7 Solutions & Meadowbrook Insurance Group',
    startDate: '9/2014',
    endDate: '4/2015',
    logo: aquentLogo,
    skills: ['html', 'css', 'javascript', 'jquery', 'wordpress', 'photoshop'],
    positionDescription: [
      'Designed and developed front-end features for a variety of internal and client projects.',
      'Administered the WordPress content management system for content teams.',
    ],
    isLastExperience: true,
  },
];

export const education: EducationProps[] = [
  {
    title: 'Sitecore Personalization Certification',
    completionYear: '2024',
  },
  {
    title: 'Sitecore CDP Certification',
    completionYear: '2024',
  },
  {
    title: 'Bachelor of Arts',
    completionYear: '2013',
    location: 'Michigan State University',
    description:
      'Media Arts and Technology degree concentrating on Front-End Web Development, User Experience, and Human Computer Interaction. Specialization in Digital Humanities.',
  },
];
