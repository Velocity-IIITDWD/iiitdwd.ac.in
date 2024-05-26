import { Metadata } from 'next';

const title = 'Research';

export default function VisitorPage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};