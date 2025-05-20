import type { StoryObj } from "@storybook/react";

const meta = {
  title: 'Basics/Layout',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <div className="vertical-flex"><p>Thing 1</p><p>Thing 2</p></div>
};