import { Metadata } from 'next';
import Tenders from './Tenders';
import { FetchSanity } from '@/lib/sanity/client';
import { queryTenders } from '@/lib/sanity/Queries';

export default async function TendersPage() {
  const now = Date.now();
  const active: Tender[] = [];
  const archive: Tender[] = [];
  const tenders = await FetchSanity(queryTenders);

  for (const tender of tenders) {
    const newTender = {
      ...tender,
      publishDate: Date.parse(tender.publishDate as string),
      submissionDeadline: Date.parse(tender.submissionDeadline as string),
    };
    if (newTender.cancelled || newTender.submissionDeadline <= now)
      archive.push(newTender);
    else active.push(newTender);
  }

  return <Tenders active={active} archive={archive} />;
}

export const metadata: Metadata = {
  title: 'Tenders',
};
