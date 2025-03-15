'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { eventInf } from '@/data/events';
import { Metadata } from 'next';

interface EventFilterProps {
  events: eventInf[];
}

interface ComponentEventProps {
  index: number;
  events: eventInf[];
}

interface EventFilterProps {
  events: eventInf[];
}

export default function Events({ events }: EventFilterProps) {
  const [filter, setFilter] = useState<'all' | 'institute' | 'club'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Applyed simple search and filter logic
  const filteredEvents = events.filter((event) => {
    const eventType = event.typeEvent ?? 'institute'; // Default to "institute" if undefined
    const matchesFilter = filter === 'all' || eventType === filter;
    const matchesSearch = event.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <br />
      <h1 className="text-4xl font-bold text-dwd-primary mx-9 text-center font-roboto">
        Events
      </h1>
      <br />

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between px-4">
          {/* Filter Buttons */}
          <div className="flex my-12 gap-4 mt-4 md:mt-0">
            <button
              className={`px-4 py-2 rounded-full border ${
                filter === 'all'
                  ? 'bg-dwd-primary text-white'
                  : 'border-dwd-primary'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${
                filter === 'institute'
                  ? 'bg-dwd-primary text-white'
                  : 'border-dwd-primary'
              }`}
              onClick={() => setFilter('institute')}
            >
              Institute
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${
                filter === 'club'
                  ? 'bg-dwd-primary text-white'
                  : 'border-dwd-primary'
              }`}
              onClick={() => setFilter('club')}
            >
              Club
            </button>
          </div>

          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3"
          />
        </div>
        <div className="mx-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 pb-5">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((_, index) => (
              <ComponentEvent
                key={index}
                index={index}
                events={filteredEvents}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
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
