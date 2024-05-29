import { Metadata } from 'next';
import group from '@/data/profile/chairperson/former';
import { ProfileGroup } from '@/components/profile/ProfileGroup';

const title = 'Former Chairperson';

export default function FormerChairpersonPage() {
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
