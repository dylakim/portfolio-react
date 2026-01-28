import type { Meta, StoryObj } from '@storybook/react';

import { Skill } from '../skill';

const meta = {
  component: Skill,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Angular: Story = {
  args: {
    skill: 'angular',
  },
};

export const Chai: Story = {
  args: {
    skill: 'chai',
  },
};

export const ChakraUi: Story = {
  args: {
    skill: 'chakraUI',
  },
};

export const Contentful: Story = {
  args: {
    skill: 'contentful',
  },
};

export const CSS: Story = {
  args: {
    skill: 'css',
  },
};

export const Figma: Story = {
  args: {
    skill: 'figma',
  },
};

export const Firebase: Story = {
  args: {
    skill: 'firebase',
  },
};

export const Git: Story = {
  args: {
    skill: 'git',
  },
};

export const GraphQl: Story = {
  args: {
    skill: 'graphQL',
  },
};

export const HTML: Story = {
  args: {
    skill: 'html',
  },
};

export const Javascript: Story = {
  args: {
    skill: 'javascript',
  },
};

export const Jest: Story = {
  args: {
    skill: 'jest',
  },
};

export const Jquery: Story = {
  args: {
    skill: 'jquery',
  },
};

export const Mocha: Story = {
  args: {
    skill: 'mocha',
  },
};

export const Nextjs: Story = {
  args: {
    skill: 'nextjs',
  },
};

export const Npm: Story = {
  args: {
    skill: 'npm',
  },
};

export const Photoshop: Story = {
  args: {
    skill: 'photoshop',
  },
};

export const React: Story = {
  args: {
    skill: 'react',
  },
};

export const ReactDark: Story = {
  args: {
    skill: 'react',
    isDark: true,
    style: 'icon',
  },
};

export const ReactTestingLibrary: Story = {
  args: {
    skill: 'reactTestingLibrary',
  },
};

export const Rest: Story = {
  args: {
    skill: 'rest',
  },
};

export const SCSS: Story = {
  args: {
    skill: 'scss',
  },
};

export const Sitecore: Story = {
  args: {
    skill: 'sitecore',
  },
};

export const Storybook: Story = {
  args: {
    skill: 'storybook',
  },
};

export const TemplateToolkit: Story = {
  args: {
    skill: 'templateToolkit',
  },
};

export const Typescript: Story = {
  args: {
    skill: 'typescript',
  },
};

export const Vue: Story = {
  args: {
    skill: 'vue',
  },
};

export const Vuex: Story = {
  args: {
    skill: 'vuex',
  },
};

export const Wcag: Story = {
  args: {
    skill: 'wcag',
  },
};

export const Yaml: Story = {
  args: {
    skill: 'yaml',
  },
};
