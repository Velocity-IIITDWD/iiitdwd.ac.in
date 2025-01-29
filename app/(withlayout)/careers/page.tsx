import { client } from '@/lib/sanity/client';
import CareersPage from './CareersPage';

const query = '*[_type == "jobs"]';

async function fetchData() {
  const data = (await client.fetch(query) as any[]);
  return data;
};

export default async function Careers() {
  const data = await fetchData();
  return (
    <CareersPage Fulldata={data} />
  );
}