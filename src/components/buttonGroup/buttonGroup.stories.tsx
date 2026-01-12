import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './buttonGroup';

const meta = {
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttons: [
      {
        label: 'Button 1',
        href: '#',
        target: '_blank',
      },
      {
        label: 'Button 2',
        href: '#',
      },
    ],
  },
};
