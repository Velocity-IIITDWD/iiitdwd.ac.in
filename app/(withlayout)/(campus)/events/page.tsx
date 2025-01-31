import { eventInf } from '@/data/events';
import { FetchSanity } from '@/lib/sanity/client';
import { queryEvents } from '@/lib/sanity/Queries';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const events = (await FetchSanity(queryEvents)) as eventInf[];
  if (!Array.isArray(events)) return null;

  return (
    <div>
      <br></br>
      <h1 className="text-4xl font-bold text-dwd-primary mx-9 text-center font-roboto">
        Events
      </h1>
      <br></br>
      <div className="container mx-auto p-4">
        <div className="mx-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {events.map((_, index) => (
            <ComponentEvent key={index} index={index} events={events} />
          ))}
        </div>
      </div>
    </div>
  );
}
interface ComponentEventProps {
  index: number;
  events: eventInf[];
}

function ComponentEvent({ index, events }: ComponentEventProps) {
  const eventImageSrc = events[index].href;
  const link: string = '/events/' + events[index].id;
  return (
    <div className="bg-gray-100 gap-2 flex flex-col overflow-hidden rounded-xl transition duration-300 shadow-lg hover:bg-gray-50 hover:text-white cursor-pointer ">
      <Image
        // changed
        width={0}
        height={0}
        sizes="100%"
        // className="w-full h-72 object-cover rounded-lg"
        className=" h-72 object-cover flex-none w-full"
        src={eventImageSrc}
        alt="Weekly Events"
      />

      <div className="p-5 h-full flex-1 justify-between flex flex-col text-dwd-primary">
        <div>
          <p className="text-lg leading-tight font-semibold tracking-tight">
            {events[index].text}
          </p>
          <p className="text-xs">{events[index].organiser?.name}</p>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <p className="text-xs font-semibold px-4 py-2 rounded-full border border-dwd-primary">
            Date: {events[index].timestamp}
          </p>

          <Link href={link}>
            <button className=" bg-dwd-primary text-xs text-white px-4 py-2 rounded-full">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Events',
};
