import { client } from '@/lib/sanity/client';
import CareersPage from './CareersPage';
import { queryJobs } from '@/lib/sanity/Queries';

async function fetchData() {
  const data = (await client.fetch(queryJobs) as any[]);
  return data;
};

export default async function Careers() {
  const data = await fetchData();
  return (
    <CareersPage Fulldata={data} />
  );
}