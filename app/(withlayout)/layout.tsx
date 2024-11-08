import Footer from './Footer';
import Header from './Header';

import '@/app/globals.css';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}