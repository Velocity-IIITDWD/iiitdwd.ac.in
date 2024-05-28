import { Metadata } from 'next';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex grow justify-center">
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Admissions',
};
