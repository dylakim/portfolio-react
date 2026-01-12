import { montserrat, playfairDisplay, quicksand } from '../../src/utils/fonts';

export const globalFontsDecorator = (Story) => {
  return (
    <>
      <style>{`:root { --font-quicksand: "${quicksand.style.fontFamily}"; --font-montserrat: "${montserrat.style.fontFamily}"; --font-playfairDisplay: "${playfairDisplay.style.fontFamily}"; }`}</style>
      <Story />
    </>
  );
};
