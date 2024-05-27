import { Metadata } from 'next';
import group from '@/data/profile/staff';
import { ProfileGroup } from '@/components/profile/ProfileGroup';

const title = 'Staff';

export default function StaffPage() {
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
