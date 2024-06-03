'use client';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { images, ProgramCardDetails, Programs } from '@/data/homePage';

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
import { useState } from 'react';
import { url } from 'inspector';

export default function Home() {
  const [program, setProgram] = useState(0);

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

                  <div className="absolute text-sm md:text-base bottom-4 left-1/2 w-fit max-w-full -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white text-center">
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

                <div className="absolute text-sm md:text-base bottom-4 left-1/2 w-fit max-w-full -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white text-center">
                  {item?.caption}
                </div>
              </CardContent>
            </Card>
          )
        )}
      </MainCarousel>

      <section className="my-20 bg-white border-t border-b shadow_inset border-slate-100 md:py-20 py-10 w-full flex flex-col lg:flex-row-reverse items-center md:px-20 sm:px-10 p-4 gap-6">
        <Image
          alt="main image"
          src={'/images/IIIT_Dharwad.jpg'}
          width={0}
          height={0}
          sizes="100%"
          style={{ height: 'auto', width: '100%' }}
          className="w-full rounded shadow-lg lg:basis-1/3 overflow-hidden object-cover object-center"
        />
        <div className="w-full lg:basis-2/3 flex flex-col h-full">
          <div className="w-full items-center p-2 border-b border-b-slate-500 flex justify-between">
            <div className="text-dwd-primary font-semibold text-xl">
              Announcements
            </div>
            <Link href={'/announcements'} className="text-red-500">
              View all
            </Link>
          </div>
          <div className="relative">
            <div className="flex flex-col gap-2 p-3 w-full">
              {announcements
                ?.filter((item) => item.new)
                .map((item, index) => (
                  <a
                    href={item?.link}
                    target="_blank"
                    key={index}
                    className="text-dwd-primary shadow group relative hover:bg-dwd-primary hover:text-white bg-[#C7D3DE50] rounded items-center cursor-pointer p-1 pr-12 flex gap-2"
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

      <section className="w-full h-full bg-fixed relative overflow-hidden before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] bg-cover bg-repeat-y bg-[url('/images/IIIT_Dharwad.jpg')]">
        <div className="my-16 z-[1] relative w-full flex flex-col items-center md:px-24 sm:px-10 p-4 gap-6">
          <p className="text-white text-3xl font-bold">About Us</p>

          <div className="w-full flex items-center flex-col lg:flex-row-reverse lg:w-4/5 gap-6 px-3">
            <div className="flex text-justify text-lg font-base flex-1 flex-col text-white gap-3 lg:py-8">
              <p>
                IIIT Dharwad, established in 2015 under a
                Public-Private-Partnership, offers cutting-edge BTech programs
                in IT fields to bridge the skill gap and address India&apos;s
                social challenges through technology. Strategically located in
                the educational hub of Hubballi-Dharwad, it aims to become a
                premier institute of national importance.
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

      {/* <section className="w-full flex my-16 flex-col gap-4">
        <div className="flex justify-center gap-4 flex-col w-full max-w-[1000px] mx-auto lg:flex-row">
          <div className="shadow-lg rounded w-full basis-1/2 flex flex-col gap-3 text-black p-4">
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold">Posts from @dharwad_iiit</p>
              <a
                href="https://x.com/intent/follow?screen_name=dharwad_iiit"
                target="_blank"
                className="bg-black cursor-pointer text-white py-2 px-4 rounded-full"
              >
                Follow
              </a>
            </div>
          </div>

          <div className="shadow-lg rounded w-full basis-1/2 flex flex-col gap-3 text-black p-4">
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold">Posts from @dharwad_iiit</p>
              <a
                href="https://www.linkedin.com/in/iiitdharwad/"
                target="_blank"
                className="bg-[#0A66C2] cursor-pointer text-white py-2 px-4 rounded-full"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section
        style={{
          backgroundImage: `url(${Programs[program]?.image})`,
        }}
        className="my-16 bg-fixed w-full p-4 bg-cover relative bg-center before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3]"
      >
        <div className="w-full relative flex-none items-center justify-center z-[1] max-w-[1200px] mx-auto h-full flex flex-col lg:flex-row gap-4 px-4 py-10">
          <div className="flex gap-1 text-dwd-primary flex-col bg-white rounded h-full p-8 pt-10">
            <p className="text-4xl font-bold">Academic</p>
            <p className="text-4xl font-bold mb-4">Programmes</p>
            <div
              onClick={() => setProgram(0)}
              className={`p-2 uppercase font-semibold hover:text-white rounded cursor-pointer transition-colors duration-200 ease-linear bg_slider ${
                program === 0
                  ? 'bg-[-100%_100%] text-white'
                  : 'bg-white text-dwd-primary'
              }`}
            >
              Computer Science and Engineering
            </div>
            <div
              onClick={() => setProgram(1)}
              className={`p-2 uppercase font-semibold rounded hover:text-white cursor-pointer transition-colors duration-200 ease-linear bg_slider ${
                program === 1
                  ? 'bg-[-100%_100%] text-white'
                  : 'bg-white text-dwd-primary'
              }`}
            >
              Data Science and Artificial Intelligence
            </div>
            <div
              onClick={() => setProgram(2)}
              className={`p-2 uppercase font-semibold rounded hover:text-white cursor-pointer transition-colors duration-200 ease-linear bg_slider ${
                program === 2
                  ? 'bg-[-100%_100%] text-white'
                  : 'bg-white text-dwd-primary'
              }`}
            >
              Electronics and Communications Engineering
            </div>
          </div>
          <div className="w-full flex-1 gap-4 h-full text-white flex flex-col md:pl-10">
            <p className="text-2xl font-semibold">{Programs[program]?.title}</p>
            <p className="text-base">{Programs[program]?.description}</p>
          </div>
        </div>
      </section>

      {/* <section className="my-16 w-full bg-gray-200 py-10 px-6 md:px-20">
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
      </section> */}

      <section className="w-full py-10">
        <p className="text-dwd-primary text-2xl font-bold px-10 mb-10">
          Event Calendar
        </p>
        <AutoScrollCarousel>
          {events?.map((item) => (
            <Card
              className="w-full relative shadow-md flex-[0_0_100%] lg:flex-[0_0_50%] 2xl:flex-[0_0_33.33%]"
              key={item?.id}
            >
              {/* <CardContent className="flex justify-center h-full flex-row items-center gap-6 p-4 lg:p-6 max-lg:flex-col">
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
                <div className="flex-none aspect-square overflow-hidden w-1/2 lg:w-1/3 bg-gray-30 rounded-lg shadow-lg border max-lg:-order-1">
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
              </CardContent> */}
              <CardContent
                // style={{ background: `url('${item?.href}')` }}
                // className="flex bg-cover h-full w-full text-white relative bg-bottom before:absolute before:top-0 before:h-full before:w-full before:left-0 z-0 before:bg-[#041e3fd7] justify-between flex-col p-5 overflow-hidden rounded"
                className="flex h-full flex-col-reverse sm:flex-row justify-between p-0 overflow-hidden rounded"
              >
                <div className="flex flex-col h-full justify-between p-5 basis-1/2">
                  <div className="flex flex-col">
                    <p className="text-lg leading-tight font-semibold tracking-tight">
                      {item?.text}
                    </p>
                    <p className="text-xs">{item?.organiser?.name}</p>
                    <div className="text-sm py-4">{item?.aboutEvent}</div>
                  </div>
                  <Link
                    href={`/events/${item?.id}`}
                    className="bg-dwd-primary flex gap-3 text-sm items-center w-fit text-white px-4 py-2 rounded-full"
                  >
                    Read More
                    <ExternalLink size={16} />
                  </Link>
                </div>
                <div className="basis-1/2 w-full aspect-square rounded shadow-lg">
                  <Image
                    alt="main image"
                    src={item?.href}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ height: '100%', width: '100%' }}
                    className=" object-cover object-center"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </AutoScrollCarousel>
      </section>

      <section className="w-full h-full bg-fixed relative overflow-hidden before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] bg-cover bg-repeat-y bg-[url('/images/LandingPage.png')]">
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
            <p className="font-semibold">Alumni</p>
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
