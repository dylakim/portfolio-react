import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import { globalFontsDecorator } from './decorators/globalFontsDecorator';

import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [{ name: 'Dark Green', value: '#142121' }],
      default: 'Dark Green',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    layout: 'fullscreen',
  },
  decorators: [globalFontsDecorator],
};

export default preview;
