'use client';

import { eventInf } from '@/data/events';
import React from 'react';
import Image from 'next/image';

export default function EventPage({ event }: { event: eventInf }) {
  let slideIndex = 0;

  const showSlides = (n: number) => {
    let slides = document.querySelectorAll<HTMLElement>('.slide');
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
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
      <h1 className="text-3xl font-bold text-dwd-primary mx-9 text-center mt-12 mb-0 font-roboto">
        {event.text}
      </h1>
      <div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-lg mt-12">
        <div className="flex transition-transform duration-500 ease-in-out justify-center items-center">
          {event.allImage.map((str: string) => (
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

            <p> {event.details.startDate}</p>
            <p>{event.details.endDate}</p>
            <p> {event.details.ticketPrice} </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Organiser</h2>
            <p>{event.organiser.name}</p>
            <p>{event.organiser.designation}</p>
            <p>{event.organiser.contact}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Venue</h2>
            <p>Place : {event.venue.place}</p>
            <p> {event.venue.street}</p>
            <p>City : {event.venue.city}</p>
          </div>
        </div>
        {event.aboutEvent && (
          <div className="bg-white p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-2">Event Description</h2>
            <p>{event.aboutEvent}</p>
          </div>
        )}
      </div>
    </div>
  );
}
