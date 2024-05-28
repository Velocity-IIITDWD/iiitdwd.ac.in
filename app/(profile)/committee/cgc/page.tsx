import { Metadata } from 'next';
import group from '@/data/profile/committee/cgc';
import { ProfileGroup } from '@/components/profile/ProfileGroup';

const title = 'Career Guidance Cell Committee';

export default function CGCCommitteePage() {
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
