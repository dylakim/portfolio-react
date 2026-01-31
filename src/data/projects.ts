import type { ProjectType } from 'types/project';

import atdImage from '../assets/projects/atd-edu-landing.png';
import atdCardCarousel from '../assets/projects/atd-card-carousel.png';
import atdPlpHeader from '../assets/projects/atd-product-list-page-header.png';
import atdYou from '../assets/projects/atd-you.png';
import portfolioImage from '../assets/projects/portfolio.png';
import skoalRewardsPreview from '../assets/projects/skoal-rewards-full-crop.png';
import dunkinExtras from '../assets/projects/dunkinextra.png';
import dylaDev from '../assets/projects/dylaDev.png';

export const projects: Record<string, ProjectType> = {
  portfolio: {
    slug: 'portfolio',
    title: 'Portfolio',
    shortDescription:
      'A personal portfolio website built with React, TypeScript, and Next.js and deployed with Vercel.',
    description:
      "A personal portfolio website designed to showcase my development work and technical expertise. Built with React, TypeScript, and Next.js, the site demonstrates modern web development practices including type-safe coding, file-based routing, and performance optimization. The clean, minimalist aesthetic centers around a green color palette that reflects my personal brand.</p><p>The project follows a component-driven development approach, with all UI components designed in Figma and documented in Storybook for isolated development and testing. Deployed through Vercel's automated pipeline, the site benefits from continuous integration and seamless updates, ensuring the portfolio remains current with my latest work and skills.</p>",
    keyFeatures: [
      'Modern React & TypeScript stack - Leveraged type-safe development practices for robust, maintainable code',
      'Next.js routing and optimization - Implemented file-based routing and performance optimizations for seamless navigation',
      'Continuous deployment with Vercel - Automated build and deployment pipeline for rapid iteration',
      'Component documentation with Storybook - Maintained an isolated development environment for building and testing reusable UI components',
      'Design system in Figma - Created a custom component library and design system to ensure visual consistency across the site',
    ],
    keySkills: ['react'],
    skills: [
      'react',
      'javascript',
      'typescript',
      'nextjs',
      'html',
      'css',
      'storybook',
      'figma',
      'vercel',
    ],
    buttons: [
      { label: 'GitHub', href: 'https://github.com/dylakim/portfolio-react' },
      {
        label: 'Storybook',
        href: 'https://storybook.kim.dyla.dev/',
      },
    ],
    previewImage: {
      image: {
        src: portfolioImage,
        alt: "Screenshot of Kim Dyla's portfolio website",
      },
    },
  },
  'association-for-talent-development': {
    slug: 'association-for-talent-development',
    title: 'Association for Talent Development',
    role: 'React Front End Engineer',
    company: 'Merkle - Customer Experience and Commerce',
    shortDescription:
      "A modern redesign of ATD's Courses & Certification section, built with React, TypeScript, and Contentful.",
    description:
      "<p>Association for Talent Development (ATD) is a leading knowledge platform for workplace learning and development professionals, offering educational courses, certification programs, workshops, and community resources. ATD partnered with Merkle to redesign the Courses & Certification section of their public website.</p><p>This project presented unique challenges: a tight 2-month timeline, a client-managed codebase and Contentful instance, and evolving design requirements. I served as a key contributor, leveraging my Contentful Certified Professional credential to architect new content types and components while learning GraphQL for content queries and working extensively with ChakraUI.</p><p>My contributions centered on designing and implementing new Contentful content types and components tailored to ATD's content strategy. I also redesigned and optimized existing UI components to align with the new visual direction while improving performance. Throughout the project, I introduced quality-of-life improvements that enhanced both the developer experience and overall site functionality.</p><p>This project expanded my technical toolkit with hands-on experience in GraphQL and deepened my expertise in headless CMS architecture. Below are a few examples of the components for which I was responsible.</p>",
    keyFeatures: [
      'Enterprise React & TypeScript application - Contributed to a large-scale, production-grade codebase with modern development practices',
      'Courses & Certification redesign - Delivered a contemporary visual refresh that elevated the user experience while maintaining brand consistency',
      'Flexible content architecture - Engineered Contentful content types that balance content author autonomy with seamless, intuitive end-user experiences',
      'Backward-compatible component system - Preserved existing component functionality while introducing opt-in design updates, allowing content authors to migrate at their own pace',
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
        label: 'ATD Courses & Certification',
        href: 'https://www.td.org/education',
      },
    ],
    previewImage: {
      image: {
        src: atdImage,
        alt: 'Screenshot of ATD Education landing page',
      },
      caption:
        'A basic version of the header component features a headline, description, and CTA buttons on the left, and an image on the right. Highly reusable card components are featured here in two variations. Cards components are contained in a CardCollection component, set in the grid layout.',
    },
    images: [
      {
        image: {
          src: atdCardCarousel,
          alt: 'Screenshot of a card carousel displaying three ATD educational programs',
        },
        caption:
          'Another version of the Card component inside a CardCollection component. This CardCollection is set to display as a carousel with 3 cards visible.',
      },
      {
        image: {
          src: atdPlpHeader,
          alt: 'Screenshot of an ATD product list page header with breadcrumb navigation and course details.',
        },
        caption:
          'A version of the header component with a featured course displayed in the right column instead of an image.',
      },
      {
        image: {
          src: atdYou,
          alt: 'Screenshot of the ATDYou header section with breadcrumbs and subscription details.',
        },
        caption:
          'Another version of the header component with subscription details displayed in the right column instead of an image.',
      },
    ],
  },
  'center-for-internet-security': {
    slug: 'center-for-internet-security',
    title: 'Center for Internet Security',
    role: 'React Front End Engineer',
    company: 'Merkle - Customer Experience and Commerce',
    shortDescription:
      'A cybersecurity member portal built with React, TypeScript, and Sitecore',
    description:
      "<p>The Center for Internet Security (CIS) partnered with Merkle to completely rebuild and redesign their member portal and develop new platform features. This private, member-only application serves CIS's cybersecurity community with essential tools and resources, powered by Sitecore as the content management system. The project presented a unique opportunity: build out the new portal based on existing functionality in year one, followed by a comprehensive redesign in year two. The redesign allowed us to refactor the codebase, eliminate technical debt, and introduce TypeScript for improved type safety and developer experience.</p><p>As an equal contributor on the development team, I built fully-featured components, prioritizing reusability and Sitecore integration, and took ownership of various features. I advocated for adopting TypeScript during the redesign, recognizing its value for long-term maintainability. This project marked my first professional experience with React and provided valuable hands-on practice with TypeScript. The opportunity to revisit and refine our work proved surprisingly rewarding—much like methodically organizing a cluttered space, we emerged with a cleaner, more maintainable codebase that better served both the development team and CIS members.</p>",
    keyFeatures: [
      'React & TypeScript architecture - Built a modern, type-safe application with improved code quality and developer experience',
      "Headless Sitecore integration - Integrated React components with Sitecore's headless CMS architecture, decoupling content management from presentation for greater flexibility",
      'Technical debt reduction - Leveraged the redesign phase to implement TypeScript, refactor components, and establish best practices',
      'Feature development and expansion - Extended portal functionality with net-new capabilities tailored to member needs',
    ],
    keySkills: ['react'],
    skills: [
      'react',
      'javascript',
      'typescript',
      'nextjs',
      'html',
      'css',
      'sitecore',
      'storybook',
      'jest',
      'reactTestingLibrary',
    ],
    buttons: [{ label: 'CIS Portal', href: 'https://portal.cisecurity.org/' }],
    previewImage: {
      image: {
        src: atdImage,
        alt: '',
      },
    },
  },
  'altria-loyalty': {
    slug: 'altria-loyalty',
    title: 'Altria Loyalty Programs and Component Library',
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription:
      'Scalable loyalty programs for Altria brands, powered by a custom Vue.js component library.',
    description: `<p>Altria, a long-standing HelloWorld client, sought to build loyalty programs for three flagship brands—Skoal, Copenhagen, and On! Nicotine—to drive consumer engagement, retention, and brand loyalty. Each program operates as a digital punch card system: consumers enter codes found on products to earn punches, and upon completing a card, they can redeem rewards of increasing value, incentivizing repeat purchases.</p><p>With three nearly identical programs on the roadmap, differentiated only by branding and strategy, I identified an opportunity to optimize our development approach. I spearheaded the creation of the team's first component library, built with Vue.js, to streamline development and ensure consistent, maintainable code across all programs. This foundational architecture enabled efficient delivery of multiple brand experiences while reducing technical debt and accelerating future feature development.</p><p><i>Disclaimer: While I contributed to a project for a tobacco company that encouraged product use through loyalty rewards, I want to be clear that I do not support marketing of a product with known, severe health risks. I believe it is unethical to encourage increased use of a substance linked to cancer for material incentives.</i></p>`,
    keyFeatures: [
      'Custom Vue.js component library - Developed and published as a private npm package, enabling rapid development and centralized maintenance across multiple brand programs',
      'Multi-brand application suite - Delivered three fully responsive, production-ready Vue.js applications with shared functionality and brand-specific customization',
      'Streamlined deployment pipeline - Established a unified development workflow that enabled simultaneous updates and feature rollouts across all three brand applications from a single codebase',
    ],
    keySkills: ['vue'],
    skills: ['vue', 'javascript', 'scss', 'mocha', 'chai', 'npm'],
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
    previewImage: {
      image: {
        src: skoalRewardsPreview,
        alt: 'Screenshot of the Skoal Rewards program',
      },
    },
  },
  'dunkin-at-home-extras': {
    slug: 'dunkin-at-home-extras',
    title: "Dunkin' At Home Extras Loyalty Program",
    role: 'Senior Promotions Front End Developer',
    company:
      'Merkle - Promotions, Loyalty, and Messaging (formerly HelloWorld)',
    shortDescription:
      "A rewards program that incentivized at-home Dunkin' coffee purchases during the COVID-19 pandemic.",
    description:
      "<p>Dunkin' At Home Extras is a rewards program designed to incentivize purchases of Dunkin' coffee products for home consumption. Launched during the COVID-19 pandemic when at-home coffee consumption surged, users earn points by uploading photos of grocery receipts containing eligible Dunkin' purchases, which can be redeemed for Dunkin' gift cards.</p><p>As the lead front-end developer on this cross-functional team, I architected and built a fully responsive Vue.js application that adheres to WCAG AAA accessibility standards. The program bridges the gap between retail grocery shopping and brand loyalty, creating a seamless digital experience that encourages repeat purchases and strengthens customer engagement with the Dunkin' brand outside of their traditional café locations.</p>",
    keyFeatures: [
      "Receipt scanning and validation - Engineered a user-friendly upload system that processes grocery receipt images and validates Dunkin' product purchases for point accrual",
      'Vue.js responsive application - Developed a mobile-first, fully responsive interface optimized for seamless experiences across all devices',
      'WCAG AAA accessibility compliance - Implemented the highest level of accessibility standards, ensuring an inclusive experience for all users',
    ],
    keySkills: ['vue'],
    skills: ['vue', 'javascript', 'html', 'scss'],
    buttons: [
      {
        label: "Dunkin' At Home Extras",
        href: 'https://www.dunkinextras.com/',
      },
    ],
    previewImage: {
      image: {
        src: dunkinExtras,
        alt: "Screenshot of the Dunkin' at Home Extras Loyalty Program",
      },
    },
  },
  'dyla-home-page': {
    slug: 'dyla-home-page',
    title: 'Dyla Home Page',
    shortDescription:
      'A minimalist landing page for the Dyla family powered by React and deployed with Vercel',
    description:
      "Dyla.dev is a shared personal landing page that serves as a digital home base for my partner and me. The site features a curated slideshow of our favorite travel destinations alongside quick links to our social media profiles, GitHub repositories, and personal websites.</p><p>Built with React, TypeScript, and Next.js, this minimalist project demonstrates clean, efficient web development while providing a centralized hub for our online presence. Deployed through Vercel's seamless pipeline, the landing page maintains fast load times and reliable performance, offering visitors an immediate snapshot of our shared interests and individual work.",
    keySkills: ['react'],
    skills: [
      'react',
      'javascript',
      'typescript',
      'html',
      'scss',
      'nextjs',
      'vercel',
    ],
    buttons: [
      { label: 'dyla.dev', href: 'https://dyla.dev/' },
      { label: 'GitHub', href: 'https://github.com/dylakim/dyla-domain' },
    ],
    previewImage: {
      image: {
        src: dylaDev,
        alt: 'Screenshot of the dyla.dev landing page',
      },
    },
  },
};
