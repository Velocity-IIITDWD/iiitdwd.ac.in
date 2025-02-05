import { eventInf } from '@/data/events';
import { FetchSanity } from '@/lib/sanity/client';
import { queryEventById, queryEventIds } from '@/lib/sanity/Queries';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

export async function generateStaticParams(): Promise<{ eventId: string }[]> {
  const data = await FetchSanity(queryEventIds);

  if (!data || !Array.isArray(data) || data.length === 0) {
    console.error('No event data found.');
    return [];
  }

  return data;
}

const EventComponent = dynamic(() => import('@/components/event'), {
  ssr: false,
});

export default async function EventDetails({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await FetchSanity(queryEventById, {id: params.eventId}) as eventInf;

  if (!event) notFound();

  return (
    <EventComponent event={event} />
  );
}

export const metadata: Metadata = {
  title: 'Events',
};
