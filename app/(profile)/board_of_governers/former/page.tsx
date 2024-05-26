import { Metadata } from 'next';

const title = 'Former BOG Members';

export default function FormerBoardOfGovernersPage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};