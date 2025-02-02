import { Metadata } from 'next';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { ProfileGroup as ProfileGroupType } from '@/types/profile';
import { FetchSanity } from '@/lib/sanity/client';
import { GetAllSenate } from '@/lib/sanity/Queries';

const title = 'Senate';

export default async function SenatePage() {
  const data = await FetchSanity(GetAllSenate) as ProfileGroupType[];
  
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
