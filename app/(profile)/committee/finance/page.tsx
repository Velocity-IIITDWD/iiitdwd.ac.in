import { Metadata } from 'next';

const title = 'Finance Committee';

export default function FinanceCommitteePage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};