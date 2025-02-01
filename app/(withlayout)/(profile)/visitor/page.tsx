import { Metadata } from 'next';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { FetchSanity } from '@/lib/sanity/client';
import { GetAllVisitors } from '@/lib/sanity/Queries';
import { ProfileGroup as ProfileGroupType } from '@/types/profile';

const title = 'Visitor';

export default async function VisitorPage() {
  const data = await FetchSanity(GetAllVisitors) as ProfileGroupType[];

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
