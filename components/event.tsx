'use client';
import { events } from '@/data/events';
import { eventInf } from '@/data/events';
import React from 'react';
import NotFound404 from '@/app/not-found'
import Image from 'next/image';
interface eventInformation {
  id: number;
  href: string;
  text: string;
  timestamp: string;
  allImage: string[];
}
interface DynamicComponentProps {
  eventId: Number;
}
export default function EventDetails({ eventId }: DynamicComponentProps) {
  const EventId: Number = eventId;
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
      eventId={theEvent.id}
      text={theEvent.text}
      allImage={theEvent.allImage}
    />
  );
}

interface ComponentEventProps {
  eventId: number;
  text: string;
  allImage: string[];
}

function EventPage({ eventId, text, allImage }: ComponentEventProps) {
  eventId--;

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
    <div>
      <h1 className="text-3xl text-dwd-primary mx-9 text-center mt-12 mb-0 font-roboto">
        {text}
      </h1>
      <div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-lg mt-12">
        <div className="flex transition-transform duration-500 ease-in-out justify-center items-center">
          {allImage.map((str: string) => (
            <Image
              key={str}
              className="slide w-auto max-w-full h-[60vh] block box-border"
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
            <p>Start date : {events[eventId].details.startDate}</p>
            <p>End date : {events[eventId].details.endDate}</p>
            <p>Ticket price : {events[eventId].details.ticketPrice} </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Organiser</h2>
            <p>{events[eventId].organiser.name}</p>
            <p>{events[eventId].organiser.designation}</p>
            <p>{events[eventId].organiser.contact}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Venue</h2>
            <p>Place : {events[eventId].venue.place}</p>
            <p>Street : {events[eventId].venue.street}</p>
            <p>City : {events[eventId].venue.city}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-2">Content Section</h2>
          <p>{events[eventId].aboutEvent}</p>
        </div>
      </div>
    </div>
  );
}
