import { Metadata } from 'next';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { ProfileGroup as ProfileGroupType } from '@/types/profile';
import { FetchSanity } from '@/lib/sanity/client';
import { GetChair } from '@/lib/sanity/Queries';

const title = 'Chairperson';

export default async function ChairpersonPage() {
  const data = await FetchSanity(GetChair) as ProfileGroupType[];

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
