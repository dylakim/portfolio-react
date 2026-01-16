import type { StoryObj } from '@storybook/react';
import { ColorTile } from './colorTile';

import styles from './colorTile.module.css';

const meta = {
  title: 'Variables/colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className={styles.colorTileGroup}>
      <ColorTile colorVariable="--gray" />
      <ColorTile colorVariable="--green-dark" />
      <ColorTile colorVariable="--green-x-light" />
      <ColorTile colorVariable="--yellow" />
    </div>
  ),
};
