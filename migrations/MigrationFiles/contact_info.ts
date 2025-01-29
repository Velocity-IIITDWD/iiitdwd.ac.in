import { client } from '../utils/sanity';
import { contacts, contactCategories } from '../../data/contactInfo';

type Contact = {
  name: string;
  designation: string;
  contactNumber: string;
};

export const migrateContactData = async (): Promise<void> => {
  try {
    let transaction = client.transaction();

    // Create Contact Categories
    const categoryRefs: Record<string, string> = {};

    for (const category of contactCategories) {
      const categoryDoc = {
        _type: 'contactCategory',
        category,
      };

      transaction.create(categoryDoc);
    }

    await transaction.commit();
    console.log(`Created ${contactCategories.length} Contact Categories`);

    const categories = await client.fetch(
      `*[_type == "contactCategory"]{ _id, category }`
    );

    categories.forEach((cat: { _id: string; category: string }) => {
      categoryRefs[cat.category] = cat._id;
    });

    // Create Contact Documents
    transaction = client.transaction();
    const contactRefs: Record<string, { _type: 'reference'; _ref: string }[]> =
      {};

    for (const [categoryKey, contactsList] of Object.entries(contacts)) {
      contactRefs[categoryKey] = [];

      const categoryName = contactCategories.find(
        (cat) =>
          cat.toLowerCase() ===
          categoryKey
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .toLowerCase()
      );

      if (!categoryName) {
        console.log(`No matching category found for key: ${categoryKey}`);
        continue;
      }

      for (const contact of contactsList) {
        const contactDoc = {
          _type: 'contact',
          name: contact.name,
          designation: contact.designation,
          contactNumber: contact.contactNumber,
          category: {
            _type: 'reference',
            _ref: categoryRefs[categoryName],
          },
        };

        transaction.create(contactDoc);
      }
    }

    await transaction.commit();
    console.log('All Contacts Created');

    // Fetch all created contacts
    const allContacts = await client.fetch(
      `*[_type == "contact"]{ _id, "category": category->{category}.category }`
    );

    // Group Contact References by Category for contactData schema
    allContacts.forEach((contact: { _id: string; category: string }) => {
      const categoryKey = Object.keys(contacts).find(
        (key) =>
          contact.category.toLowerCase() ===
          key
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .toLowerCase()
      );

      if (categoryKey) {
        if (!contactRefs[categoryKey]) {
          contactRefs[categoryKey] = [];
        }
        contactRefs[categoryKey].push({
          _type: 'reference',
          _ref: contact._id,
        });
      }
    });

    transaction = client.transaction();
    transaction.create({
      _type: 'contactData',
      ...contactRefs,
    });

    await transaction.commit();
    console.log('Contact Data Migration Completed Successfully.');
  } catch (error) {
    console.error('Error migrating contact data:', error);
  }
};
