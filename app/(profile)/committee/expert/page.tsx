import { Metadata } from 'next';

const title = 'Expert Committee';

export default function ExpertCommitteePage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};