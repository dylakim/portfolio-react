import { quicksand } from '../../src/utils/fonts';

export const globalFontsDecorator = (Story) => {
  return (
    <>
      <style>{`:root { --font-quicksand: "${quicksand.style.fontFamily}"; }`}</style>
      <Story />
    </>
  );
};
