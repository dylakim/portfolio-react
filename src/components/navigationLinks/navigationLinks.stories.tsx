import type { Meta, StoryObj } from '@storybook/react';
import { NavigationLinks } from './navigationLinks';

const meta = {
  component: NavigationLinks,
} satisfies Meta<typeof NavigationLinks>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
