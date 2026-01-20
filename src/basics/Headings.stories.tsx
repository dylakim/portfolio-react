import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Variables/headings',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="verticalFlex">
      <h1>H1 - Page Header</h1>
      <h2>H2 - Section Header</h2>
      <h3>H3 - Sub Header</h3>
      <h4>H4 - Sub Header</h4>
      <h5>H5 - Sub Header</h5>
    </div>
  ),
};
