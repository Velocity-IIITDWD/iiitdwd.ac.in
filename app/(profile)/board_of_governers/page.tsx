import { Metadata } from 'next';

const title = 'Board of Governers';

export default function BoardOfGovernersPage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};