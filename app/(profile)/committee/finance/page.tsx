import { Metadata } from 'next';
import group from '@/data/profile/committee/finance';
import { ProfileGroup } from '@/components/profile/ProfileGroup';

const title = 'Finance Committee';

export default function FinanceCommitteePage() {
  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {group.map(({ profiles, title }, index) => (
        <ProfileGroup key={index} profiles={profiles} title={title} />
      ))}
    </>
  );
}

export const metadata: Metadata = {
  title,
};
