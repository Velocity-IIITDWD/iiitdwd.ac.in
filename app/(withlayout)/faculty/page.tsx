import { client } from '@/lib/sanity/client';
import FacultyList from './FacultyList';
import { ProfileProp } from '@/data/faculty_profile';
import { queryFaculty } from '@/lib/sanity/Queries';

async function getData() {
  const data = (await client.fetch(queryFaculty)) as any[];

  const mappedFaculties = data.map(({ facultyId, content }) => ({
    id: facultyId,
    content,
  })) as ProfileProp[];

  mappedFaculties.sort((a, b) => a.id.localeCompare(b.id));

  return mappedFaculties;
}

export default async function Faculty () {
  const faculties = await getData();
  
  return (
    <>
      <FacultyList ll={faculties} />
    </>
  );
};