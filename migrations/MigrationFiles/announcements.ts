import { client } from '../utils/sanity';
import { announcements } from '../../data/announcements';

export const migrateAnnouncements = async () => {
  const transaction = client.transaction();

  for (const announcement of announcements) {
    transaction.create({
      _type: 'announcement',
      link: announcement.link,
      text: announcement.text,
      new: announcement.new,
      date: announcement.date,
      month: announcement.month,
      year: announcement.year,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} announcement documents in a single transaction.`);
};
