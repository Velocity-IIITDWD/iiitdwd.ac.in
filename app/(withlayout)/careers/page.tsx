import { FetchSanity } from '@/lib/sanity/client';
import CareersPage from './CareersPage';
import { queryJobs } from '@/lib/sanity/Queries';

export default async function Careers() {
  const data = (await FetchSanity(queryJobs) as any[]);
  return (
    <CareersPage Fulldata={data} />
  );
}