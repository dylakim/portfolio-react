import type { Meta, StoryObj } from '@storybook/react';

import { Experience } from './experience';
import merkleLogo from '../../assets/merkleLogo.png';

const meta = {
  component: Experience,
} satisfies Meta<typeof Experience>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    location: 'Location',
    positionTitle: 'React Front End Engineer',
    companyName: 'Company Name',
    startDate: '1/2026',
    endDate: 'Present',
    skills: ['react', 'typescript', 'scss', 'scss', 'react', 'typescript'],
    logo: merkleLogo,
    positionDescription: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nec elit eget finibus.',
      'Nunc consequat, mauris at sagittis euismod, est leo accumsan augue, in pharetra nulla orci pulvinar magna.',
    ],
  },
};
