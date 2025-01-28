import { Metadata } from 'next';
import Reports from './Reports';


import { client } from '@/lib/sanity/client';
import { annualReportsStructure } from '@/data/annual_reports';

const query = '*[_type == "annualReport"]';

async function getData() {
  const data = (await client.fetch(query)) as annualReportsStructure[];
  return data;
}

export default async function Page() {

  const data = await getData();

  return (
    <div className="w-full flex justify-center">
      <div className="w-fit max-w-5xl p-4 flex flex-col gap-4 pb-12">
        <p className="text-dwd-primary font-bold text-4xl text-center mb-2 mt-2">
          Annual Reports
        </p>
        <Reports Fulldata={data} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Annual Reports',
};
