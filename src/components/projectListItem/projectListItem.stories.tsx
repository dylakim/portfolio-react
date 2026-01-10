import type { Meta, StoryObj } from '@storybook/react';

import { ProjectListItem } from './projectListItem';
import atd from '../../assets/projects/atd.png';

const meta = {
  component: ProjectListItem,
} satisfies Meta<typeof ProjectListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slug: 'project-title',
    previewImage: atd,
    title: 'Project Title',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: ['react'],
  },
};
