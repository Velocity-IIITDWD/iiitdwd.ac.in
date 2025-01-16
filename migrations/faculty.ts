import { client } from './utils/sanity.ts';
import { ProfileProps as faculties } from '../data/faculty_profile.ts';

export async function migrateFaculties() {
  try {
    const transaction = client.transaction();

    for (const faculty of faculties) {
      // Step 1: Check if a document with the same facultyId already exists
      const existingFaculty = await client.fetch(
        `*[_type == "faculty" && facultyId == "${faculty.id}"][0]`
      );

      // Step 2: If the document exists, delete it
      if (existingFaculty) {
        transaction.delete(existingFaculty._id);
        console.log(`Deleted existing faculty with ID: ${existingFaculty._id}`);
      }

      // Step 3: Create a new document with the updated data
      transaction.create({
        _type: 'faculty',
        facultyId: faculty.id,
        content: {
          head: {
            name: faculty.content.head.name,
            profile_pdf: faculty.content.head.profile_pdf || '',
          },
          card: {
            photo: (faculty.content.card.photo && `https://iiitdwd.ac.in/${faculty.content.card.photo}`) || '',
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

      console.log(`Created/updated faculty with ID: ${faculty.id}`);
    }

    // Commit the transaction
    const results = await transaction.commit();
    console.log(`Successfully migrated ${results.results.length} faculty records.`);
  } catch (error) {
    console.error('Error migrating faculties:', error);
  }
}

migrateFaculties();