import { Metadata } from 'next';
import Tenders from './Tenders';
import { tenders } from '@/data/tenders';

export default function TendersPage() {
  const now = Date.now();
  const active: Tender[] = [];
  const archive: Tender[] = [];

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
