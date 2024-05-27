import { Metadata } from 'next';
import group from '@/data/profile/board_of_governors';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import Link from 'next/link';

const title = 'Board of Governors';

export default function BoardOfGovernorsPage() {
  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {group.map(({ profiles, title }, index) => (
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
