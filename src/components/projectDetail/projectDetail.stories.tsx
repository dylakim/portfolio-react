import type { Meta, StoryObj } from '@storybook/react';

import { projects } from 'data/projects';

import { ProjectDetail } from './projectDetail';

const meta = {
  component: ProjectDetail,
} satisfies Meta<typeof ProjectDetail>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...projects['portfolio'],
  },
};
