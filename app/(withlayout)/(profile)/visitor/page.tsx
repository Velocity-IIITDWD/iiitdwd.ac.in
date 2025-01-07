import { Metadata } from 'next';
import group from '@/data/profile/visitor';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { client } from '@/lib/sanity/client';
import { GetAllVisitors } from '@/lib/sanity/Queries';

const title = 'Visitor';


export default async function VisitorPage() {
  const GetSanityData = async () => {
    try {
      const res = await client.fetch(GetAllVisitors);
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
