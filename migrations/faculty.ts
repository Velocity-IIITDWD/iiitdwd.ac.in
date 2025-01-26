import { client } from './utils/sanity.ts';
import { ProfileProps as faculties } from '../data/faculty_profile.ts';

export async function migrateFaculties() {
  const transaction = client.transaction();

  for (const faculty of faculties) {
    transaction.create({
      _type: 'faculty',
      facultyId: faculty.id,
      content: {
        head: {
          name: faculty.content.head.name,
          profile_pdf:
            (faculty.content.head.profile_pdf &&
              `https://iiitdwd.ac.in${faculty.content.head.profile_pdf}`) ||
            '',
        },
        card: {
          photo:
            (faculty.content.card.photo &&
              `https://iiitdwd.ac.in${faculty.content.card.photo}`) ||
            '',
          PhD: faculty.content.card.PhD || '',
          designation: faculty.content.card.designation || '',
          department: faculty.content.card.department || '',
          mail_id: faculty.content.card.mail_id || '',
          cabin_number: faculty.content.card.cabin_number || '',
          position: faculty.content.card.position || [],
        },
        body: {
          profile_text: faculty.content.body.profile_text || '',
          interest_areas: faculty.content.body.interest_areas,
        },
      },
    });
  }
  const results = await transaction.commit();
  console.log(
    `Created ${results.results.length} faculties in a transaction.`
  );
}
