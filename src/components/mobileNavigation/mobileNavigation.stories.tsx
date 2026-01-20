import type { Meta, StoryObj } from '@storybook/react';
import { MobileNavigation } from './mobileNavigation';

const meta = {
  component: MobileNavigation,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MobileNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
