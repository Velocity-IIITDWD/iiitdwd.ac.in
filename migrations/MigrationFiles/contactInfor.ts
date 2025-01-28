import { client } from '../utils/sanity';
import { contacts, contactCategories } from '../../data/contactInfo';

export const migrateContacts = async () => {
  const transaction = client.transaction();

  for (const category of contactCategories) {
    transaction.create({
      _type: 'contactCategory',
      category: category,
    });
  }

  for (const [categoryKey, categoryContacts] of Object.entries(contacts)) {
    for (const contact of categoryContacts) {
      transaction.create({
        _type: 'contact',
        category: categoryKey,
        name: contact.name,
        designation: contact.designation,
        contactNumber: contact.contactNumber,
      });
    }
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} contact documents in a single transaction.`);
};
