import { client } from '../utils/sanity';
import group from '@/data/academics/research';

export const migrateReserch= async () => {
  const transaction = client.transaction();
  
  for (const g of group) {
    transaction.create({
      _type: 'profiles',
      title: g.title,
      profiles: g.profiles.map((profile) => ({
        title: profile.title,
        content: profile.content,
        imageURL: profile.imageURL,
      })),
    })
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} research documents in a single transaction.`);
}
