import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from './buttonLink';

const meta = {
  component: ButtonLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
    label: 'Button Link',
  },
};
