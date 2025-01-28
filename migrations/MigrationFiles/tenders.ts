import { client } from '../utils/sanity.ts';
import { tenders } from '../../data/tenders.ts';

export async function migrateTenders() {
  const transaction = client.transaction();

  for (const tender of tenders) {
    transaction.create({
      _type: 'tender',
      title: tender.title,
      cancelled: tender.cancelled || false,
      corrections: tender.corrections?.map(
        (correction: { title: string; link: string }) => ({
          title: correction.title,
          link: correction.link,
        })
      ),
      documents: tender.documents?.map(
        (document: { title: string; link: string }) => ({
          title: document.title,
          link: document.link,
        })
      ),
      link: tender.link,
      publishDate: tender.publishDate,
      submissionDeadline: tender.submissionDeadline,
      updatedAt: tender.updatedAt || Date.now(),
    });
  }

  const results = await transaction.commit();
  console.log(
    `Created ${results.results.length} tenders in a transaction.`
  );
}
