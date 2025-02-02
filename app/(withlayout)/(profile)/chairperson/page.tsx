import { Metadata } from 'next';
import {  } from '@/components/profile/';
import {  as Type } from '@/types/profile';
import { FetchSanity } from '@/lib/sanity/client';
import { GetChairperson } from '@/lib/sanity/Queries';

const title = 'Chairperson';

export default async function ChairpersonPage() {
  const data = await FetchSanity(GetChairperson) as Type[];

  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {data.map(({ profiles, title }, index) => (
        < key={index} profiles={profiles} title={title} />
      ))}
    </>
  );
}

export const metadata: Metadata = {
  title,
};
