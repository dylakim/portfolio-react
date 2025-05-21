import type { JSX } from 'react';
import {
  SiCss3,
  SiCss3Hex,
  SiFigma,
  SiFigmaHex,
  SiGit,
  SiGitHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiJest,
  SiJestHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiReact,
  SiSass,
  SiSassHex,
  SiSitecore,
  SiSitecoreHex,
  SiStorybook,
  SiStorybookHex,
  SiTypescript,
  SiTypescriptHex,
  SiVuedotjs,
  SiVuedotjsHex,
} from '@icons-pack/react-simple-icons';

import type { Skill } from '../types';

interface SkillRenderingOptions {
  displayName: string;
  icon: JSX.Element;
}

export const skills: Record<Skill, SkillRenderingOptions> = {
  css: {
    displayName: 'CSS',
    icon: <SiCss3 color={SiCss3Hex} />,
  },
  figma: {
    displayName: 'Figma',
    icon: <SiFigma color={SiFigmaHex} />,
  },
  git: {
    displayName: 'Git',
    icon: <SiGit color={SiGitHex} />,
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
  nextjs: {
    displayName: 'Next.js',
    icon: <SiNextdotjs color={SiNextdotjsHex} />,
  },
  react: {
    displayName: 'React',
    icon: <SiReact color="#087EA4" />,
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
  typescript: {
    displayName: 'TypeScript',
    icon: <SiTypescript color={SiTypescriptHex} />,
  },
  vue: {
    displayName: 'Vue',
    icon: <SiVuedotjs color={SiVuedotjsHex} />,
  },
};
