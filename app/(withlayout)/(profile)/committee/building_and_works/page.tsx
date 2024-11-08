import { Metadata } from 'next';
import group from '@/data/profile/committee/building_and_works';
import { ProfileGroup } from '@/components/profile/ProfileGroup';

const title = 'Building and Works committee';

export default function ExpertCommitteePage() {
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
