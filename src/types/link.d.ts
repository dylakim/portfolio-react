import type { UrlObject } from 'url';

export interface Link {
  label: string;
  path: string | UrlObject;
}
