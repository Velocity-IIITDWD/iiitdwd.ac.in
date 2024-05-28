import dynamic from 'next/dynamic';

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
