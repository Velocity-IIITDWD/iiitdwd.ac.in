import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { events } from '@/data/events';

export function generateStaticParams(): { eventId: string }[] {
  return events.map(e => ({ eventId: e.id }));
}

const DynamicComponentWithNoSSR = dynamic(() => import('@/components/event'), {
  ssr: false,
});

export default function EventDetails({
  params,
}: {
  params: { eventId: string };
}) {
  // let eveId: Number = params.eventId;

  return (
    <div >
      <DynamicComponentWithNoSSR eventId={params.eventId} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Events',
};
