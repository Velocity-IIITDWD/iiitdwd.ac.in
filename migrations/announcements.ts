import { client } from './utils/sanity.ts';
import { announcements } from '../data/announcements.ts';

export async function migrateAnnouncements() {
  try {
    const transaction = client.transaction();

    for (const announcement of announcements) {
      transaction.create({
        _type: 'announcement',
        link: announcement.link,
        text: announcement.text,
        new: announcement.new,
        year: announcement.year,
        month: announcement.month,
      });
    }

    const results = await transaction.commit();
    console.log(
      `Created ${results.results.length} announcements in a transaction.`
    );
  } catch (error) {
    console.error('Error migrating announcements:', error);
  }
}

migrateAnnouncements();
