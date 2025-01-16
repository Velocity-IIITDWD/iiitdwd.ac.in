import { client } from './sanity.ts';

async function deleteAllDocuments() {
  try {
    // Fetch all document IDs
    const query = '*[_id in path("**")]._id';
    const documentIds = await client.fetch(query);

    if (documentIds.length === 0) {
      console.log('No documents found to delete.');
      return;
    }

    console.log(`Deleting ${documentIds.length} documents...`);

    // Delete documents one by one
    for (const docId of documentIds) {
      await client.delete(docId);
      console.log(`Deleted document with ID: ${docId}`);
    }

    console.log('All documents deleted successfully.');
  } catch (error) {
    console.error('Error deleting documents:', error);
  }
}

deleteAllDocuments();
