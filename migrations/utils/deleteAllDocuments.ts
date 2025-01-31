import { client } from './sanity.ts';
import { GetAllDocumentIds } from '@/lib/sanity/Queries';

export async function deleteAllDocuments() {
  try {
    // Fetch all document IDs
    const documentIds = await client.fetch(GetAllDocumentIds);
    const transaction = client.transaction();

    for (const docId of documentIds) {
      transaction.delete(docId);
    }
    const results = await transaction.commit();
    console.log(`Deleted ${results.results.length} documents.`);
    return true;
  } catch (error) {
    console.error('Error deleting documents:', error);
    return false;
  }
}
