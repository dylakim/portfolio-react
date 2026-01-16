import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Variables/layout',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalFlex: Story = {
  render: () => (
    <div className="verticalFlex">
      <p>Vertical Flex Top</p>
      <p>Vertical Flex Bottom</p>
    </div>
  ),
};

export const HorizontalFlex: Story = {
  render: () => (
    <div className="horizontalFlex">
      <p>Horizontal Flex Left</p>
      <p>Horizontal Flex Right</p>
    </div>
  ),
};
