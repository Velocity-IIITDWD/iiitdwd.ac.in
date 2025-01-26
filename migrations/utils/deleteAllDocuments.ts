import { client } from './sanity.ts';

export async function deleteAllDocuments() {
  try {
    // Fetch all document IDs
    const query = `*[_type != "system.document" && !(_id in path("_.**")) && !(_id in path("drafts.**"))]._id`;
    const documentIds = await client.fetch(query);
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
