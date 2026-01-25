import type { ButtonLinkProps } from 'basics/buttonLink/buttonLink';
import type { Skill } from 'components/skill/types';

import type { ImageWithCaptionProps } from 'components/imageWithCaption';
import type { ImageType } from './image';

export interface ProjectType {
  slug: string;
  title: string;
  role?: string;
  company?: string;
  shortDescription: string;
  description: string;
  keyFeatures?: string[];
  keySkills: Skill[];
  skills?: Skill[];
  buttons?: ButtonLinkProps[];
  previewImage: ImageType;
  images?: ImageWithCaptionProps[];
}
