import { client } from '../utils/sanity';
import { ProfileGroup } from '../../types/profile';
import staff from '../../data/profile/staff';
import visitor from '../../data/profile/visitor';
import senate from '@/data/profile/senate';
import formerDirectors from '@/data/profile/director/former';
import chairperson from '@/data/profile/chairperson';
import board_of_governors from '@/data/profile/board_of_governors';
import former_bog from '@/data/profile/board_of_governors/former';
import research from '@/data/academics/research';
import student_coordinators from '@/data/profile/cgc/student_coordinators';

const migrateProfileGroup = async (type: string, data: ProfileGroup[]) => {
  const transaction = client.transaction();

  for (const staff of data) {
    transaction.create({
      _type: type,
      title: staff.title,
      profiles: staff.profiles.map((profile) => ({
        _key: crypto.randomUUID(),
        title: profile.title,
        content: profile.content,
        imageURL: profile.imageURL,
      })),
    });
  }

  const results = await transaction.commit();
  console.log(
    `Created ${results.results.length} ${type} entries in a transaction.`
  );
};

export const migrateAllProfiles = async () => {
  const profileGroups = [
    { type: 'boardOfGovernor', data: board_of_governors },
    { type: 'chairPerson', data: chairperson },
    { type: 'student_coordinators', data: student_coordinators },
    { type: 'formerBoardOfGovernor', data: former_bog },
    { type: 'formerDirector', data: formerDirectors },
    { type: 'researchProfiles', data: research },
    { type: 'senate', data: senate },
    { type: 'staff', data: staff },
    { type: 'visitor', data: visitor },
  ];

  for (const { type, data } of profileGroups) {
    await migrateProfileGroup(type, data);
  }
};
