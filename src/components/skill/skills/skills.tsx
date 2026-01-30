import type { JSX } from 'react';
import {
  SiAngular,
  SiAngularHex,
  SiChai,
  SiChaiHex,
  SiChakraui,
  SiChakrauiHex,
  SiContentful,
  SiContentfulHex,
  SiCss3,
  SiCss3Hex,
  SiDrupal,
  SiDrupalHex,
  SiFigma,
  SiFigmaHex,
  SiFirebase,
  SiFirebaseHex,
  SiGit,
  SiGitHex,
  SiGraphql,
  SiGraphqlHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiJest,
  SiJestHex,
  SiJquery,
  SiJqueryHex,
  SiMocha,
  SiMochaHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNpm,
  SiNpmHex,
  SiReact,
  SiSass,
  SiSassHex,
  SiSitecore,
  SiSitecoreHex,
  SiStorybook,
  SiStorybookHex,
  SiTestinglibrary,
  SiTestinglibraryHex,
  SiTypescript,
  SiTypescriptHex,
  SiVercel,
  SiVercelHex,
  SiVuedotjs,
  SiVuedotjsHex,
  SiWordpress,
  SiWordpressHex,
  SiYaml,
  SiYamlHex,
} from '@icons-pack/react-simple-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

import type { Skill } from '../types';

interface SkillRenderingOptions {
  displayName: string;
  icon?: JSX.Element;
  darkIcon?: JSX.Element;
}

export const skills: Record<Skill, SkillRenderingOptions> = {
  angular: {
    displayName: 'Angular',
    icon: <SiAngular color={SiAngularHex} />,
  },
  chai: {
    displayName: 'Chai',
    icon: <SiChai color={SiChaiHex} />,
  },
  chakraUI: {
    displayName: 'Chakra UI',
    icon: <SiChakraui color={SiChakrauiHex} />,
  },
  contentful: {
    displayName: 'Contentful',
    icon: <SiContentful color={SiContentfulHex} />,
  },
  css: {
    displayName: 'CSS',
    icon: <SiCss3 color={SiCss3Hex} />,
  },
  drupal: {
    displayName: 'Drupal',
    icon: <SiDrupal color={SiDrupalHex} />,
  },
  figma: {
    displayName: 'Figma',
    icon: <SiFigma color={SiFigmaHex} />,
  },
  firebase: {
    displayName: 'Firebase',
    icon: <SiFirebase color={SiFirebaseHex} />,
  },
  git: {
    displayName: 'Git',
    icon: <SiGit color={SiGitHex} />,
  },
  graphQL: {
    displayName: 'GraphQL',
    icon: <SiGraphql color={SiGraphqlHex} />,
  },
  html: {
    displayName: 'HTML',
    icon: <SiHtml5 color={SiHtml5Hex} />,
  },
  javascript: {
    displayName: 'JavaScript',
    icon: <SiJavascript color={SiJavascriptHex} />,
  },
  jest: {
    displayName: 'Jest',
    icon: <SiJest color={SiJestHex} />,
  },
  jquery: {
    displayName: 'jQuery',
    icon: <SiJquery color={SiJqueryHex} />,
  },
  mocha: {
    displayName: 'Mocha',
    icon: <SiMocha color={SiMochaHex} />,
  },
  nextjs: {
    displayName: 'Next.js',
    icon: <SiNextdotjs color={SiNextdotjsHex} />,
  },
  npm: {
    displayName: 'NPM',
    icon: <SiNpm color={SiNpmHex} />,
  },
  photoshop: {
    displayName: 'Photoshop',
  },
  react: {
    displayName: 'React',
    icon: <SiReact color="#087EA4" />,
    darkIcon: <SiReact color="#58C4DC" />,
  },
  reactTestingLibrary: {
    displayName: 'React Testing Library',
    icon: <SiTestinglibrary color={SiTestinglibraryHex} />,
  },
  rest: {
    displayName: 'REST',
    icon: <FontAwesomeIcon icon={faGear} color="#083257" />,
  },
  scss: {
    displayName: 'SCSS',
    icon: <SiSass color={SiSassHex} />,
  },
  sitecore: {
    displayName: 'Sitecore',
    icon: <SiSitecore color={SiSitecoreHex} />,
  },
  storybook: {
    displayName: 'Storybook',
    icon: <SiStorybook color={SiStorybookHex} />,
  },
  templateToolkit: {
    displayName: 'Template Toolkit',
  },
  typescript: {
    displayName: 'TypeScript',
    icon: <SiTypescript color={SiTypescriptHex} />,
  },
  vercel: {
    displayName: 'Vercel',
    icon: <SiVercel color={SiVercelHex} />,
  },
  vue: {
    displayName: 'Vue',
    icon: <SiVuedotjs color={SiVuedotjsHex} />,
  },
  vuex: {
    displayName: 'Vuex',
    icon: <SiVuedotjs color={SiVuedotjsHex} />,
  },
  wcag: {
    displayName: 'WCAG',
    icon: <FontAwesomeIcon icon={faUniversalAccess} color="#139ED9" />,
  },
  wordpress: {
    displayName: 'WordPress',
    icon: <SiWordpress color={SiWordpressHex} />,
  },
  yaml: {
    displayName: 'YAML',
    icon: <SiYaml color={SiYamlHex} />,
  },
};
