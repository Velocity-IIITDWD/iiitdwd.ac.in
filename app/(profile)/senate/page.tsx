import { Metadata } from 'next';

const title = 'Senate';

export default function SenatePage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};