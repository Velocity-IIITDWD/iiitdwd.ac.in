import { Metadata } from 'next';

const title = 'Former Directors';

export default function FormerDirectorsPage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};