import { client } from '../utils/sanity';
import { linkGroups } from '@/data/krc/dataTelFull';

export const migrateKrcDataTelFull = async () => {
  const transaction = client.transaction();

  for(const group of linkGroups) {
    transaction.create({
      _type: 'krcDataTelFull',
      heading: group.heading,
      card: group.card.map(card => ({
        _type: 'object',
        _key: crypto.randomUUID(),
        title: card.title,
        description: card.description,
        accessInfo: card.accessInfo,
        buttonText: card.buttonText,
        link: card.link
      }))
    })
  }
  const results = await transaction.commit();
  console.log(`Created ${results.results.length} krc/dataTelFull documents in a single transaction.`);
}