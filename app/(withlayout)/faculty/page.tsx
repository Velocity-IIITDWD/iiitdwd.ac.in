import { client } from '@/lib/sanity/client';
import FacultyList from './FacultyList';
import { ProfileProp } from '@/data/faculty_profile';

const query = '*[_type == "faculty"]';

async function getData() {
  const data = (await client.fetch(query)) as any[];

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