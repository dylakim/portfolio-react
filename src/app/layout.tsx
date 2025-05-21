import type { Metadata } from 'next';

import { quicksand } from 'utils/fonts';

import './globals.css';

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
        <footer>Footer</footer>
      </body>
    </html>
  );
}
