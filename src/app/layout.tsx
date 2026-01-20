import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import classNames from 'classnames';
import type { Metadata } from 'next';

import { montserrat, playfairDisplay, quicksand } from 'utils/fonts';

import './globals.css';

import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { MobileNavigation } from 'components/mobileNavigation';

import styles from './layout.module.css';

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
      <body
        className={classNames(
          quicksand.variable,
          playfairDisplay.variable,
          montserrat.variable
        )}
      >
        <Header />
        <MobileNavigation />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
