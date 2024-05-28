import { events } from '@/data/events';
import Image from 'next/image';
import Link from 'next/link';
// import { handleClientScriptLoad } from "next/script";
export default function Home() {
  return (
    <div>
      <br></br>
      <h1 className="text-3xl text-dwd-primary mx-9 text-center font-roboto">
        Events
      </h1>
      <br></br>
      <div className="container mx-auto p-4">
        <div className="mx-9 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {events.map((_, index) => (
            <ComponentEvent key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
interface ComponentEventProps {
  index: number;
}

function ComponentEvent({ index }: ComponentEventProps) {
  const eventImageSrc = events[index].href;
  const link: string = '/events/' + events[index].id;
  return (
    <div className=" bg-gray-200 p-12 rounded-xl transition duration-300 shadow hover:bg-dwd-secondary1 hover:text-white cursor-pointer">
      <Image
        // changed
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-72 object-cover rounded-lg"
        src={eventImageSrc}
        alt="Weekly Events"
      />
      <div className="mt-8 ">
        <h2 className="text-2xl text-cardText font-bold">
          {events[index].text}
        </h2>
        <p className="text-dwd-primary">Date: {events[index].timestamp}</p>
       
          <Link href={link}>
            <button className="mt-4 bg-dwd-primary text-xs text-white px-8 py-4 rounded">
              Know More
            </button>
          </Link>
      </div>
    </div>
  );
}
