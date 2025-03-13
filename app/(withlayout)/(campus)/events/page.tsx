import { eventInf } from '@/data/events';
import { FetchSanity } from '@/lib/sanity/client';
import { queryEvents } from '@/lib/sanity/Queries';
import { Metadata } from 'next';
import Events from './Events';

export const metadata: Metadata = {
  title: 'Events',
};

// Fetching events at build time (SSG)
export default async function Home() {
  const events = (await FetchSanity(queryEvents)) as eventInf[];
  if (!Array.isArray(events)) return null;

  return (
    <div>
      <Events events={events} />
    </div>
  );
}
