import { Metadata } from 'next';
import group from '@/data/profile/director/former';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { GetFormer } from '@/lib/sanity/Queries';
import { client } from '@/lib/sanity/client';

const title = 'Former Directors';

export default async function FormerDirectorsPage() {
  const GetSanityData = async () => {
    try {
      const res = await client.fetch(GetFormer);
      return res; // Return fetched data
    } catch (err) {
      console.error('Error fetching data:', err);
      return [];
    }
  };

  const data = await GetSanityData();

  const mergedData = [...group, ...data];
  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {mergedData.map(({ profiles, title }, index) => (
        <ProfileGroup key={index} profiles={profiles} title={title} />
      ))}
    </>
  );
}

export const metadata: Metadata = {
  title,
};
