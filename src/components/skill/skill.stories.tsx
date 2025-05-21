import type { Meta, StoryObj } from '@storybook/react';
import { Skill } from './skill';

const meta = {
  component: Skill,
  tags: ['autodocs'],
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    skill: 'react',
    style: 'icon',
  },
};

export const Pill: Story = {
  args: {
    skill: 'react',
  },
};

export const pillCondensed: Story = {
  args: {
    skill: 'react',
    style: 'pillCondensed',
  },
};
