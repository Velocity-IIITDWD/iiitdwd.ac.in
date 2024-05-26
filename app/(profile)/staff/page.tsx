import { Metadata } from 'next';

const title = 'Staff';

export default function StaffPage() {
  return (
    <h1 className="heading-text">{title}</h1>
  );
}

export const metadata: Metadata = {
  title,
};