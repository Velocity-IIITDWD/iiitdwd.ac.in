import { Metadata } from 'next';
import {  as Type } from '@/types/profile';

import {  } from '@/components/profile/';
import { FetchSanity } from '@/lib/sanity/client';
import { GetFormerBoard } from '@/lib/sanity/Queries';
const title = 'Former Board of Governors Members';


export default async function FormerBoardOfGovernorsPage() {
  const data = await FetchSanity(GetFormerBoard) as Type[];

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
