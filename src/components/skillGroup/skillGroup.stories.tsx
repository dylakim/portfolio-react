import type { Meta, StoryObj } from '@storybook/react';
import { SkillGroup } from './skillGroup';

const meta = {
  component: SkillGroup,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SkillGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    skills: ['react', 'typescript', 'css', 'photoshop', 'html', 'nextjs'],
  },
};
