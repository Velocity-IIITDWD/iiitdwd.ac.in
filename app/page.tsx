'use client';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
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
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import MainCarousel from '@/components/HomePage/MainCarousel';
import HomeCarousel from '@/components/HomePage/HomeCarousel';
import { GalleryImages } from '@/data/gallery';

export default function Home() {
  const parallaxSectionRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const parallaxSection = parallaxSectionRef.current;

    if (parallaxSection) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Calculate dynamic background position (adjust as needed)
        const backgroundPosition = `50% ${
          0.3 * viewportHeight - (scrollY / viewportHeight) * 100
        }px`;

        parallaxSection.style.backgroundPosition = backgroundPosition;
      };

      const handleIntersection = (entries: any) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll); // Add event listener
        } else {
          window.removeEventListener('scroll', handleScroll); // Remove event listener
        }
      };

      const options = {
        root: null, // Observe relative to viewport
        threshold: 0.5, // Consider section in viewport when 50% visible
      };

      const observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(parallaxSection);

      observerRef.current = observer; // Store observer for cleanup
    }

    // Cleanup function to remove observer on unmount
    return () => {
      const observer = observerRef.current;
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  return (
    <div className="flex flex-col h-full w-full">
      <MainCarousel>
        {images.map((item, index) => (
          <Card
            key={index}
            className="w-full h-full relative flex-[0_0_100%] overflow-hidden"
          >
            <CardContent className="flex p-0 relative bg-gray-200 h-[60vh] items-center justify-center">
              <Image
                alt="main image"
                src={item?.url}
                width={0}
                height={0}
                sizes="100%"
                style={{ height: '100%', width: '100%' }}
                className="w-full relative object-cover object-center"
              />

              <div className="absolute bottom-4 left-1/2 w-fit max-w-full -translate-x-1/2 bg-slate-900/40 backdrop-blur p-2 rounded text-white">
                {item?.caption}
              </div>
            </CardContent>
          </Card>
        ))}
      </MainCarousel>

      <section className="my-20 bg-gray-200 md:py-20 py-10 w-full flex flex-col items-center md:px-24 sm:px-10 p-4 gap-6">
        <p className="text-dwd-primary text-2xl font-bold">Announcements</p>

        <div className="grid text-dwd-primary text-justify lg:grid-cols-3 grid-cols-1 px-4">
          <ul className="list-disc pl-8 p-4 px-8 border-0 border-dwd-primary border-r-0 border-b lg:border-b-0 lg:border-r flex flex-col gap-6">
            <li>
              IIIT Dharwad rolling out AICTE-Quality Improvement PG Certificate
              Program in Cybersecurity!
            </li>
            <li>One Day Workshop on Fractal Academics on June 15, 2024</li>
          </ul>
          <ul className="list-disc pl-8 p-4 px-8 border-0 border-dwd-primary border-r-0 border-b lg:border-b-0 lg:border-r flex flex-col gap-6">
            <li>
              IIIT Dharwad rolling out AICTE-Quality Improvement PG Certificate
              Program in Cybersecurity!
            </li>
            <li>One Day Workshop on Fractal Academics on June 15, 2024</li>
          </ul>
          <ul className="list-disc pl-8 p-4 px-8 flex flex-col gap-6">
            <li>
              IIIT Dharwad rolling out AICTE-Quality Improvement PG Certificate
              Program in Cybersecurity!
            </li>
            <li>One Day Workshop on Fractal Academics on June 15, 2024</li>
          </ul>
        </div>
        <Link
          href={'/announcements'}
          className="border border-dwd-primary rounded px-4 py-2 hover:bg-dwd-primary hover:text-white  transition duration-300"
        >
          View All
        </Link>
      </section>

      <section className="w-full h-full bg-fixed relative overflow-hidden before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-gray-900/80 bg-cover bg-repeat-y bg-[url('/HomePage/IIIT_Dharwad.jpg')]">
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
              className="w-full h-full relative flex-[0_0_100%] lg:flex-[0_0_33.33%] overflow-hidden"
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
                <div className="w-full text-dwd-primary p-4 flex flex-col gap-2 items-center justify-center">
                  <p className="text-md text-center font-semibold">
                    {item?.Header1}
                  </p>
                  <p className="text-sm">{item?.Header2}</p>
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

      <section className="w-full py-10 px-6 md:px-44">
        <p className="text-dwd-primary text-2xl font-bold px-10 mb-10">
          Event Calendar
        </p>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full relative overflow-hidden"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex justify-center flex-col-reverse lg:flex-row items-center gap-6 p-6">
                      <div className="flex text-justify flex-1 flex-col h-full text-dwd-primary gap-6">
                        <p className="text-xl font-semibold mb-4">
                          Event Heading - Drone Sessions
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris at mauris eget odio pharetra placerat.
                          Aliquam ultricies molestie diam, vel mollis quam porta
                          sit amet. Ut feugiat felis quis sapien sodales, quis
                          lacinia risus laoreet. Nullam interdum in ex eget
                          porttitor. Proin felis magna, sodales id dui nec,
                          cursus porta magna. Fusce sapien orci, scelerisque ut
                          efficitur ut, tempus ut lacus.
                        </p>
                        <p>
                          Ut fringilla faucibus purus eget malesuada. Duis nec
                          tempus leo. In laoreet, erat vitae iaculis molestie,
                          mauris augue efficitur dui, vitae viverra dolor orci
                          eget sem. Aliquam ut rhoncus risus, quis fermentum mi.
                          Etiam nec orci nec est dignissim lobortis. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="font-semibold mb-4">Date- XX/XX/XXXX</p>
                        <Link
                          href={'/'}
                          className="flex w-fit rounded hover:bg-dwd-primary hover:text-white transition duration-300 border border-dwd-primary py-2 px-4 gap-2"
                        >
                          Read More
                          <ExternalLink />
                        </Link>
                      </div>
                      <div className="w-full flex-none aspect-square lg:w-1/3 bg-gray-300 rounded shadow"></div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2" />
        </Carousel>
      </section>

      <section
        id="parallax"
        ref={parallaxSectionRef}
        className="w-full h-full bg-fixed relative overflow-hidden before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-gray-900/80 bg-cover bg-repeat-y bg-[url('/HomePage/LandingPage.png')]"
      >
        <div className="relative py-24 lg:py-44 z-[1] text-white max-w-[1000px] mx-auto w-full px-10 flex flex-col md:flex-row gap-10 md:gap-4">
          <div className="flex basis-1/3 flex-col gap-2 items-center justify-center">
            <p className="text-3xl font-bold">1000+</p>
            <div className="bg-gray-400 w-20 h-1 rounded relative before:block before:bg-gray-400 before:absolute before:left-1/2 before:-translate-x-1/2 before:aspect-square before:w-[10px] before:top-1/2 before:-translate-y-1/2 before:rotate-45"></div>
            <p className="font-semibold">Alumini</p>
          </div>
          <div className="flex basis-1/3 flex-col gap-2 items-center justify-center">
            <p className="text-3xl font-bold">100+</p>
            <div className="bg-gray-400 w-20 h-1 rounded relative before:block before:bg-gray-400 before:absolute before:left-1/2 before:-translate-x-1/2 before:aspect-square before:w-[10px] before:top-1/2 before:-translate-y-1/2 before:rotate-45"></div>
            <p className="font-semibold">Faculty</p>
          </div>
          <div className="flex basis-1/3 flex-col gap-2 items-center justify-center">
            <p className="text-3xl font-bold">150+</p>
            <div className="bg-gray-400 w-20 h-1 rounded relative before:block before:bg-gray-400 before:absolute before:left-1/2 before:-translate-x-1/2 before:aspect-square before:w-[10px] before:top-1/2 before:-translate-y-1/2 before:rotate-45"></div>
            <p className="font-semibold">Publications</p>
          </div>
          <div className="flex basis-1/3 flex-col gap-2 items-center justify-center">
            <p className="text-3xl font-bold">750+</p>
            <div className="bg-gray-400 w-20 h-1 rounded relative before:block before:bg-gray-400 before:absolute before:left-1/2 before:-translate-x-1/2 before:aspect-square before:w-[10px] before:top-1/2 before:-translate-y-1/2 before:rotate-45"></div>
            <p className="font-semibold">Placements</p>
          </div>
        </div>
      </section>

      <section className="my-16 w-full bg-gray-200 py-10 px-6 md:px-20">
        <p className="text-dwd-primary text-2xl font-bold px-10 mb-10">
          Gallery
        </p>
        <HomeCarousel>
          {GalleryImages.map((item, index) => (
            <Card
              key={index}
              className="w-full h-full relative flex-[0_0_50%] lg:flex-[0_0_25%] overflow-hidden"
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
        </HomeCarousel>
      </section>
    </div>
  );
}
