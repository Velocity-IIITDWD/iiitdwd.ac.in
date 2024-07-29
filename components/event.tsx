'use client';
import { events } from '@/data/events';
import { eventInf } from '@/data/events';
import React from 'react';
import NotFound404 from '@/app/not-found';
import Image from 'next/image';
interface eventInformation {
  id: string;
  href: string;
  text: string;
  timestamp: string;
  allImage: string[];
}
interface DynamicComponentProps {
  eventId: string;
}
export default function EventDetails({ eventId }: DynamicComponentProps) {
  const EventId: string = eventId;

  const theEvent: eventInf | undefined = events.find(
    (event) => event.id == EventId
  );

  if (!theEvent) {
    return (
      <div>
        <NotFound404 />
      </div>
    );
  }

  return (
    <EventPage
      id={theEvent.id}
      text={theEvent.text}
      details={theEvent.details}
      venue={theEvent.venue}
      organiser={theEvent.organiser}
      aboutEvent={theEvent.aboutEvent}
      allImage={theEvent.allImage}
      href={theEvent.href}
      timestamp={theEvent.timestamp}
      // eventId={theEvent.id}
      // text={theEvent.text}
      // allImage={theEvent.allImage}
    />
  );
}
interface event {
  id: string;
  href: string;
  text: string;
  timestamp: string;
  allImage: string[];
  details: {
    startDate: string;
    endDate: string;
    ticketPrice: string;
  };
  venue: {
    place: string;
    street: string;
    city: string;
  };
  organiser: {
    name: string;
    designation: string;
    contact: string;
  };
  aboutEvent: string;
}
interface ComponentEventProps {
  eventId: string;
  text: string;
  allImage: string[];
}

function EventPage(theevent: event) {
  // eventId--;

  let slideIndex = 0;

  const showSlides = (n: number) => {
    let slides = document.querySelectorAll<HTMLElement>('.slide');
    //   console.log(slides.length);
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
      // console.log(slide);
      slide.style.display = 'none';
      if (index === slideIndex) {
        slide.style.display = 'block';
      }
    });
  };

  const plusSlides = (n: number) => {
    slideIndex += n;
    showSlides(slideIndex);
  };
  setInterval(() => {
    slideIndex += 1;
    showSlides(slideIndex);
  }, 3000);
  return (
  // {(true)?1:0}

    <div>
      <h1 className="text-3xl font-bold text-dwd-primary mx-9 text-center mt-12 mb-0 font-roboto">
        {theevent.text}
      </h1>
      <div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-lg mt-12">
        <div className="flex transition-transform duration-500 ease-in-out justify-center items-center">
          {theevent.allImage.map((str: string) => (
            <Image
              width={0}
              height={0}
              sizes="100%"
              key={str}
              className="slide w-auto max-w-full h-[50vh] lg:h-[60vh] block box-border"
              src={str}
              alt="Event 1"
            />
          ))}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 left-2 hover:bg-opacity-80"
            onClick={() => plusSlides(-1)}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 right-2 hover:bg-opacity-80"
            onClick={() => plusSlides(1)}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Details</h2>

            <p> {theevent.details.startDate}</p>
            <p>{theevent.details.endDate}</p>
            <p> {theevent.details.ticketPrice} </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Organiser</h2>
            <p>{theevent.organiser.name}</p>
            <p>{theevent.organiser.designation}</p>
            <p>{theevent.organiser.contact}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Venue</h2>
            <p>Place : {theevent.venue.place}</p>
            <p> {theevent.venue.street}</p>
            <p>City : {theevent.venue.city}</p>
          </div>
        </div>
        {theevent.aboutEvent && (
          <div className="bg-white p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-2">Event Description</h2>
            <p>{theevent.aboutEvent}</p>
          </div>
        )}
      </div>
    </div>
  );
}
