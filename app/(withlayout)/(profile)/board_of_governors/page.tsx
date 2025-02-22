import { Metadata } from 'next';;
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import { ProfileGroup as ProfileGroupType } from '@/types/profile';
import Link from 'next/link';
import { FetchSanity } from '@/lib/sanity/client';
import { GetBoard } from '@/lib/sanity/Queries';

const title = 'Board of Governors';

export default async function BoardOfGovernorsPage() {
  const data = await FetchSanity(GetBoard) as ProfileGroupType[];
  
  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {data.map(({ profiles, title }, index) => (
        <ProfileGroup key={index} profiles={profiles} title={title} />
      ))}
      <Link
        className="ml-12 mb-12 text-dwd-primary text-2xl font-bold after:-translate-y-1/3 after:absolute relative after:content-[url('/icons/linkIcon.svg')]"
        href="/board_of_governors/former"
      >
        Former Members
      </Link>
    </>
  );
}

export const metadata: Metadata = {
  title,
};
