import { Metadata } from 'next';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { ProfileGroup as ProfileGroupType } from '@/types/profile';
import { GetFormer } from '@/lib/sanity/Queries';
import { FetchSanity } from '@/lib/sanity/client';

const title = 'Former Directors';

export default async function FormerDirectorsPage() {
  const data = await FetchSanity(GetFormer) as ProfileGroupType[];

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
