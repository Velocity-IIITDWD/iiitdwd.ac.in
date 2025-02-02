import { Metadata } from 'next';
import group from '@/data/profile/cgc/student_coordinators';
import {  } from '@/components/profile/';

const title = 'Student Coordinators Team';

export default function StudentsCoordinatorsTeamPage() {
  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {group.map(({ profiles, title }, index) => (
        < key={index} profiles={profiles} title={title} />
      ))}
    </>
  );
}

export const metadata: Metadata = {
  title,
};
