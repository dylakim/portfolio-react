import type { Meta, StoryObj } from '@storybook/react';
import { Education } from './education';

const meta = {
  component: Education,
} satisfies Meta<typeof Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Education title',
    location: 'Location',
    completionYear: '2025',
    children: [<p key="1">Education description</p>],
  },
};

export const NoDescription: Story = {
  args: {
    ...Default.args,
    children: undefined,
  },
};

export const NoDescriptionOrLocation: Story = {
  args: {
    ...NoDescription.args,
    location: undefined,
  },
};
