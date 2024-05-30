'use client';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { images, ProgramCardDetails } from '@/data/homePage';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import MainCarousel from '@/components/HomePage/MainCarousel';
import HomeCarousel from '@/components/HomePage/HomeCarousel';
import { GalleryImages } from '@/data/gallery';
import { events } from '@/data/events';
import AnimatedCounter from '@/components/HomePage/AnimatedCounter';
import AutoScrollCarousel from '@/components/HomePage/AutoScrollCarousel';
import { announcements } from '@/data/announcements';

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <MainCarousel>
        {images.map((item, index) =>
          item?.link ? (
            <Link
              key={index}
              className="w-full h-full relative flex-[0_0_100%] overflow-hidden"
              href={item?.link}
            >
              <Card>
                <CardContent className="flex p-0 relative bg-gray-50 h-[60vh] items-center shadow-lg justify-center">
                  <Image
                    alt="main image"
                    src={item?.url}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="md:w-[80%] w-full h-[80%] md:h-full relative object-cover object-top"
                  />

                  <div className="absolute bottom-4 left-1/2 w-fit max-w-full -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white text-center">
                    {item?.caption}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <Card
              key={index}
              className="w-full h-full relative flex-[0_0_100%] overflow-hidden"
            >
              <CardContent className="flex p-0 relative bg-gray-50 h-[60vh] items-center shadow-lg justify-center">
                <Image
                  alt="main image"
                  src={item?.url}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="md:w-[80%] w-full h-[80%] md:h-full relative object-cover object-top"
                />

                <div className="absolute bottom-4 left-1/2 w-fit max-w-full -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white text-center">
                  {item?.caption}
                </div>
              </CardContent>
            </Card>
          )
        )}
      </MainCarousel>

      <section className="my-20 bg-gray-200 md:py-20 py-10 w-full flex flex-col md:flex-row-reverse items-center md:px-20 sm:px-10 p-4 gap-6">
        <Image
          alt="main image"
          src={'/images/IIIT_Dharwad.jpg'}
          width={0}
          height={0}
          sizes="100%"
          style={{ height: 'auto', width: '100%' }}
          className="w-full rounded shadow-lg md:basis-1/3 overflow-hidden object-cover object-center"
        />
        <div className="w-full basis-2/3 flex flex-col h-full">
          <div className="w-full items-center p-1 border-b border-b-slate-500 flex justify-between">
            <div className="text-dwd-primary font-semibold text-xl">
              Announcements
            </div>
            <Link href={'/announcements'} className="text-red-500">
              View all
            </Link>
          </div>
          <div className="overflow-hidden h-[40vh] relative">
            <div className="flex flex-col gap-2 p-2 absolute top-0 left-0 w-full">
              {announcements?.map((item, index) => (
                <a
                  href={item?.link}
                  target="_blank"
                  key={index}
                  className="text-dwd-primary hover:bg-dwd-primary/30 rounded items-center cursor-pointer p-1 flex gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-5 flex-none"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                  <div>{item?.text}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full bg-fixed relative overflow-hidden before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-gray-900/80 bg-cover bg-repeat-y bg-[url('/images/IIIT_Dharwad.jpg')]">
        <div className="my-16 z-[1] relative w-full flex flex-col items-center md:px-24 sm:px-10 p-4 gap-6">
          <p className="text-white text-2xl font-bold">About Us</p>

          <div className="w-full flex items-center flex-col lg:flex-row-reverse lg:w-4/5 gap-6 px-3">
            <div className="flex text-justify flex-1 flex-col text-white gap-3 lg:py-8">
              <p>
                IIIT Dharwad is an Institute of National Importance set up in
                2015 in Public-Private-Partnership mode between the Ministry of
                Education, Government of India, Government of Karnataka and
                industry partner Keonics under an Act of Parliament (23 of
                2017). The primary objective of setting up IIIT-Dharwad is to
                address the skill gap in high-end information technology and
                thereby enable India to retain its global leadership role in IT
                and allied areas.
              </p>
              <p>
                Towards this end, IIIT-Dharwad offers BTech degree programmes in
                Computer Science and Engineering, Electronics and Communication
                Engineering, and Data Science and Artificial Intelligence. As an
                Institute of National Importance, IIIT-Dharwad focuses on
                applying IT to solve problems of social relevance to India – the
                kind of solutions that do not usually result from the commercial
                forces of market dynamics or the priorities of the Western world
                outside of India.
              </p>
              <p>
                The twin cities of Hubballi and Dharwad are already a recognized
                center for educational institutes of repute including
                engineering, medical, law and other colleges, universities and
                an Indian Institute of Technology. With this environment and
                rapidly improving connectivity to the IT capital Bengaluru, IIIT
                Dharwad is strategically positioned to develop into one of the
                best institutes of national importance.
              </p>
              <Link
                href={'/about'}
                className="flex w-fit rounded hover:bg-dwd-secondary1/30 backdrop-blur hover:text-white transition duration-300 border border-white py-2 px-4 gap-2"
              >
                Read More
                <ExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16 w-full bg-gray-200 py-10 px-6 md:px-20">
        <p className="text-dwd-primary text-2xl font-bold px-10 mb-10">
          Programs
        </p>
        <HomeCarousel>
          {ProgramCardDetails.map((item, index) => (
            <Card
              key={index}
              className="w-full relative flex-[0_0_100%] lg:flex-[0_0_33.33%] overflow-hidden"
            >
              <CardContent className="flex p-0 flex-col aspect-square items-center justify-center">
                <Image
                  alt="main image"
                  src={item?.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ height: 'auto', width: '100%' }}
                  className="aspect-[4/3] overflow-hidden object-cover object-center"
                />
                <div className="w-full text-dwd-primary justify-between p-4 flex flex-col gap-2 items-center ">
                  <div className="flex flex-col w-full items-center justify-center">
                    <p className="text-md text-center font-semibold">
                      {item?.Header1}
                    </p>
                    <p className="text-sm">{item?.Header2}</p>
                  </div>
                  <Link
                    href={item?.link}
                    className="flex w-fit rounded hover:bg-dwd-primary hover:text-white transition duration-300 border border-dwd-primary py-2 px-4 gap-2"
                  >
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </HomeCarousel>
      </section>

      <section className="w-full py-10">
        <p className="text-dwd-primary text-2xl font-bold px-10 mb-10">
          Event Calendar
        </p>
        <AutoScrollCarousel>
          {events?.map((item) => (
            <Card
              className="w-full relative shadow-md flex-[0_0_100%] lg:flex-[0_0_33.33%]"
              key={item?.id}
            >
              <CardContent className="flex justify-center h-full flex-row items-center gap-6 p-4 md:p-6 max-md:flex-col">
                <div className="flex text-justify flex-1 flex-col h-full justify-between text-dwd-primary gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-semibold mb-4">{item?.text}</p>
                    <p>{item?.aboutEvent}</p>
                    <p className="font-semibold mb-4">Date: {item.timestamp}</p>
                  </div>

                  <Link
                    href={`/events/${item?.id}`}
                    className="flex w-fit rounded hover:bg-dwd-primary hover:text-white transition duration-300 border border-dwd-primary py-2 px-4 gap-2"
                  >
                    Read More
                    <ExternalLink />
                  </Link>
                </div>
                <div className="flex-none aspect-square overflow-hidden w-1/3 bg-gray-30 rounded-lg shadow-lg border max-md:-order-1">
                  <Image
                    alt="main image"
                    src={item?.href}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ height: '100%', width: '100%' }}
                    className="aspect-[4/3] overflow-hidden object-cover object-center"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </AutoScrollCarousel>
      </section>

      <section className="w-full h-full bg-fixed relative overflow-hidden before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-gray-900/80 bg-cover bg-repeat-y bg-[url('/images/LandingPage.png')]">
        <div className="relative py-24 lg:py-44 z-[1] text-white max-w-[1000px] mx-auto w-full px-10 items-center justify-center flex flex-col lg:flex-row gap-10 lg:gap-4">
          <div className="flex basis-1/3 px-6 flex-col gap-2 items-center justify-center">
            <div className="flex gap-2 items-center">
              <AnimatedCounter
                className="text-3xl font-bold"
                to={650}
                from={0}
              />
              <span className="text-3xl font-bold">+</span>
            </div>
            <div className="h-[3px] relative flex flex-col w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50 after:block after:absolute after:-bottom-1 after:left-1/2 after:w-1/3 after:h-[3px] after:-translate-x-1/2 after:border-t-0 after:bg-transparent after:bg-gradient-to-r after:from-transparent after:via-slate-200 after:to-transparent"></div>
            <p className="font-semibold">Alumini</p>
          </div>
          {/* <div className="flex basis-1/3 px-6 flex-col gap-2 items-center justify-center">
            <div className="flex gap-2 items-center">
              <AnimatedCounter
                className="text-3xl font-bold"
                to={750}
                from={0}
              />
              <span className="text-3xl font-bold">+</span>
            </div>
            <div className="h-[3px] relative flex flex-col w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50 after:block after:absolute after:-bottom-1 after:left-1/2 after:w-1/3 after:h-[3px] after:-translate-x-1/2 after:border-t-0 after:bg-transparent after:bg-gradient-to-r after:from-transparent after:via-slate-200 after:to-transparent"></div>
            <p className="font-semibold">Placements</p>
          </div> */}
          <div className="flex basis-1/3 px-6 flex-col gap-2 items-center justify-center">
            <div className="flex gap-2 items-center">
              <AnimatedCounter
                className="text-3xl font-bold"
                to={40}
                from={0}
              />
              <span className="text-3xl font-bold">+</span>
            </div>
            <div className="h-[3px] relative flex flex-col w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50 after:block after:absolute after:-bottom-1 after:left-1/2 after:w-1/3 after:h-[3px] after:-translate-x-1/2 after:border-t-0 after:bg-transparent after:bg-gradient-to-r after:from-transparent after:via-slate-200 after:to-transparent"></div>
            <p className="font-semibold">Faculty</p>
          </div>
          <div className="flex basis-1/4 px-6 flex-col gap-2 items-center justify-center">
            <div className="flex gap-2 items-center">
              <AnimatedCounter
                className="text-3xl font-bold"
                to={100}
                from={0}
              />
              <span className="text-3xl font-bold">+</span>
            </div>
            <div className="h-[3px] relative flex flex-col w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50 after:block after:absolute after:-bottom-1 after:left-1/2 after:w-1/3 after:h-[3px] after:-translate-x-1/2 after:border-t-0 after:bg-transparent after:bg-gradient-to-r after:from-transparent after:via-slate-200 after:to-transparent"></div>
            <p className="font-semibold">Publications</p>
          </div>
        </div>
      </section>

      <section className="my-16 w-full bg-gray-200 py-10 px-4 md:px-10">
        <p className="text-dwd-primary text-2xl font-bold px-10 mb-10">
          Gallery
        </p>
        <AutoScrollCarousel>
          {GalleryImages.map((item, index) => (
            <Card
              key={index}
              className="w-full h-full relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] overflow-hidden"
            >
              <CardContent className="flex cursor-pointer group aspect-square p-0 items-center relative justify-center">
                <Image
                  alt={item?.caption}
                  src={item?.url}
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ height: '100%', width: 'auto' }}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute group-hover:opacity-100 flex items-end font-semibold opacity-0 transition translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-gray-900/95 to-transparent duration-300 bottom-0 w-full left-0 text-white p-4 h-2/3">
                  {item?.caption}
                </div>
              </CardContent>
            </Card>
          ))}
        </AutoScrollCarousel>
      </section>
    </div>
  );
}
