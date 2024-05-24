import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | IIIT Dharwad',
    default: 'IIIT Dharwad',
  },
  description: 'IIIT Dharwad',
};