import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Basics/layout',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const verticalFlex: Story = {
  render: () => (
    <div className="verticalFlex">
      <p>Vertical Flex Top</p>
      <p>Vertical Flex Bottom</p>
    </div>
  ),
};

export const horizontalFlex: Story = {
  render: () => (
    <div className="horizontalFlex">
      <p>Horizontal Flex Left</p>
      <p>Horizontal Flex Right</p>
    </div>
  ),
};
