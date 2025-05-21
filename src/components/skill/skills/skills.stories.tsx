import type { Meta, StoryObj } from '@storybook/react';
import { Skill } from '../skill';

const meta = {
  component: Skill,
  tags: ['autodocs'],
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Git: Story = {
  args: {
    skill: 'git',
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

export const Nextjs: Story = {
  args: {
    skill: 'nextjs',
  },
};

export const React: Story = {
  args: {
    skill: 'react',
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
