import type { ButtonLinkProps } from 'basics/buttonLink/buttonLink';
import type { Skill } from 'components/skill/types';

import type { ImageType } from './image';

export interface ProjectType {
  slug: string;
  title: string;
  role?: string;
  company?: string;
  shortDescription: string;
  description: string;
  keySkills: Skill[];
  skills?: Skill[];
  buttons?: ButtonLinkProps[];
  previewImage: ImageType;
  primaryImages?: ImageType[];
  secondaryImages?: ImageType[];
}
