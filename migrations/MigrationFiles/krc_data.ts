import { client } from '../utils/sanity';
import { linkData } from '@/data/krc/data'

export const migrateKrcData= async () => {
  const transaction = client.transaction();

  for(const link of linkData) {
    transaction.create({
      _type: 'krcData',
      title: link.title,
      description: link.description,
      accessInfo: link.accessInfo,
      buttonText: link.buttonText,
      link: link.link
    })
  }
  const results = await transaction.commit();
  console.log(`Created ${results.results.length} krc/data documents in a single transaction.`);
}