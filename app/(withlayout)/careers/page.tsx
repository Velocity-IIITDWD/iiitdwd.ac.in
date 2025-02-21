import { FetchSanity } from '@/lib/sanity/client';
import CareersPage from './CareersPage';
import { queryJobs } from '@/lib/sanity/Queries';

const checkValid = (s: string) => {
  const currDate = new Date();

  let jobDateString = s.trim();

  if (jobDateString.length <= 12) jobDateString += ' 11:59 PM';

  const sanitizedString = jobDateString.replace(/'/g, '');
  const [datePart, timePart] = sanitizedString.split(/\s*[\n\s]+\s*/);

  const dateSeparator = datePart.includes('/') ? '/' : '.';
  const [day, month, year] = datePart.split(dateSeparator).map(Number);

  const [time, modifier] = timePart.split(' ');
  const [hour, minute] = time.split(':').map(Number);

  const adjustedHour = modifier === 'PM' && hour !== 12 ? hour + 12 : hour;
  const finalHour = modifier === 'AM' && hour === 12 ? 0 : adjustedHour;

  const jobDate = new Date(year, month - 1, day, finalHour, minute);

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
