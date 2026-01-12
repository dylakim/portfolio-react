import type { Meta, StoryObj } from '@storybook/react';

import { ProjectDetail } from './projectDetail';
import atdImage from '../../assets/projects/atd.png';

const meta = {
  component: ProjectDetail,
} satisfies Meta<typeof ProjectDetail>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Project Title',
    role: 'Frontend Developer',
    company: 'Company Name',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br><br>
      Lorem ipsum dolor sit amet, <a href="/">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      `,
    skills: ['react', 'typescript', 'nextjs'],
    buttons: [
      {
        label: 'View Project',
        href: '#',
        target: '_blank',
      },
      {
        label: 'View Code',
        href: '#',
        target: '_blank',
      },
    ],
    primaryImages: [{ src: atdImage, alt: '' }],
    secondaryImages: [
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
      { src: atdImage, alt: '' },
    ],
  },
};
