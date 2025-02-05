import { Metadata } from 'next';
import { ProfileGroup as ProfileGroupType } from '@/types/profile';

import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { FetchSanity } from '@/lib/sanity/client';
import { GetFormerBoard } from '@/lib/sanity/Queries';
const title = 'Former Board of Governors Members';


export default async function FormerBoardOfGovernorsPage() {
  const data = await FetchSanity(GetFormerBoard) as ProfileGroupType[];

  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {data.map(({ profiles, title }, index) => (
        <ProfileGroup key={index} profiles={profiles} title={title} />
      ))}
    </>
  );
}

export const metadata: Metadata = {
  title,
};
