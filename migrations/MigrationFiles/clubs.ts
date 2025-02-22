import { client } from '../utils/sanity';
import clubs from '@/data/members';

export const migrateClubs = async () => {
  const transaction = client.transaction();
  for (const club of clubs) {
    transaction.create({
      _type: 'club',
      name: club.name,
      aboutText: club.aboutText,
      members: club.members.map(member => ({
        _key: crypto.randomUUID(),
        ...member
      })),
      imagePath: club.imagePath,
      isTechnical: club.isTechnical,
      github: club.github,
      instagram: club.instagram,
      linkedin: club.linkedin,
      gmail: club.gmail,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} clubs in a transaction.`);
}