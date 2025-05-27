import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';

import { quicksand } from 'utils/fonts';

import './globals.css';

import { Footer } from 'components/footer';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Kim Dyla',
  description: "Kim Dyla's Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable}`}>
        <nav>Navigation</nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
