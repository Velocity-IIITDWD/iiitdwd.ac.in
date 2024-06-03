import './globals.css';
import { Metadata } from 'next';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
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
