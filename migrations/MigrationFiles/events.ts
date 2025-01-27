import { client } from '../utils/sanity';
import { events } from '../../data/events';

export const migrateEvents = async () => {
  const transaction = client.transaction();

  for (const event of events) {
    transaction.create({
      _type: 'event',
      id: event.id,
      href: event.href,
      text: event.text,
      timestamp: event.timestamp,
      allImage: event.allImage,
      details: {
        startDate: event.details.startDate,
        endDate: event.details.endDate,
        ticketPrice: event.details.ticketPrice,
      },
      venue: {
        place: event.venue.place,
        street: event.venue.street,
        city: event.venue.city,
      },
      organiser: {
        name: event.organiser.name,
        designation: event.organiser.designation,
        contact: event.organiser.contact,
      },
      aboutEvent: event.aboutEvent,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} event documents in a single transaction.`);
};