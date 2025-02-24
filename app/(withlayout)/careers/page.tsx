import { FetchSanity } from '@/lib/sanity/client';
import CareersPage from './CareersPage';
import { queryJobs } from '@/lib/sanity/Queries';

const checkValid = (s: string) => {
  const currDate = new Date();
  const jobDate = new Date(s);

  return jobDate >= currDate;
};

export default async function Careers() {
  const data = (await FetchSanity(queryJobs)) as any[];

  const updatedData = data
    .map((job) => {
      const isDateValid = checkValid(job.lastDate);
      return {
        ...job,
        application: isDateValid && job.application ? job.application : '#',
        generalInstructions: job.generalInstructions ?? '',
        actualDate: job.lastDate,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.actualDate).getTime() - new Date(a.actualDate).getTime()
    );

  return <CareersPage data={updatedData} />;
}
