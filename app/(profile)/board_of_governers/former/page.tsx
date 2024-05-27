import { Metadata } from 'next';
import group from '@/data/profile/board_of_governers/former';
import { ProfileGroup } from '@/components/profile/ProfileGroup';

const title = 'Former Board of Governers Members';

export default function FormerBoardOfGovernersPage() {
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
