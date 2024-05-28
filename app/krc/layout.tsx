import { Metadata } from 'next';

export default function KRCLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  title: 'KRC',
};
