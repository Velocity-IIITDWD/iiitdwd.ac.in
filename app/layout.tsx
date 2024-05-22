import './globals.css';
import {
  ChevronDownIcon,
  CopyrightIcon,
  FacebookIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  YoutubeIcon,
} from 'lucide-react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import { announcements } from '@/data/announcements';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const inter = Inter({ subsets: ['latin'] });

type HeaderDropdownProps = {
  trigger: React.ReactNode;
  subItems: React.ReactNode[];
};

function HeaderDropdown({ trigger, subItems }: HeaderDropdownProps) {
  return (
    <div className="relative flex items-center group cursor-pointer">
      {trigger}{' '}
      <ChevronDownIcon
        className="rotate-0 transition-transform duration-500 group-hover:rotate-180"
        size="1rem"
      />
      <div className="invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute top-full z-10 ">
        <div className="invisible h-2"></div>
        <div
          className="w-max flex flex-col gap-4 border border-dwd-secondary1 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-200 bg-white p-4"
        >
          {subItems}
        </div>
      </div>
    </div>
  );
}

function Header() {
  const latestAnnouncement = announcements.length
    ? announcements[0]
    : undefined;

  const AboutMenu = HeaderDropdown({
    trigger: <>About</>,
    subItems: [
      <Link
        className="hover:underline"
        href="/about/introduction"
        key="introduction"
      >
        Introduction
      </Link>,
      <Link className="hover:underline" href="/about/vision" key="vision">
        Vision and Message
      </Link>,
      <Link className="hover:underline" href="/about/message" key="message">
        Director&apos;s Message
      </Link>,
      <Link
        className="hover:underline"
        href="/about/organization"
        key="organization"
      >
        Organization
      </Link>,
    ],
  });

  const CampusMenu = HeaderDropdown({
    trigger: <>Campus</>,
    subItems: [
      <Link
        className="hover:underline"
        href="/campus/facilities"
        key="facilities"
      >
        Facilities
      </Link>,
      <Link className="hover:underline" href="/campus/clubs" key="clubs">
        Clubs
      </Link>,
      <Link className="hover:underline" href="/campus/events" key="events">
        Events
      </Link>,
      <Link className="hover:underline" href="/campus/magazine" key="magazine">
        Magazine
      </Link>,
    ],
  });

  const AdmissionsMenu = HeaderDropdown({
    trigger: <>Admissions</>,
    subItems: [
      <Link className="hover:underline" href="/admissions/btech" key="btech">
        BTech
      </Link>,
      <Link className="hover:underline" href="/admissions/phd" key="phd">
        PhD
      </Link>,
    ],
  });

  const AcademicsMenu = HeaderDropdown({
    trigger: <>Academics</>,
    subItems: [
      <Link className="hover:underline" href="/academics/faculty" key="faculty">
        Facilities
      </Link>,
      <Link
        className="hover:underline"
        href="/academics/research"
        key="research"
      >
        Research
      </Link>,
      <Link
        className="hover:underline"
        href="/academics/departments"
        key="departments"
      >
        Departments
      </Link>,
    ],
  });

  return (
    <header className="flex flex-col w-full h-fit">
      <div className="flex flex-col lg:flex-row lg:items-center bg-dwd-secondary1 px-2 gap-4">
        {latestAnnouncement && (
          <div className="flex justify-end lg:w-1/2 overflow-hidden">
            <div className="w-1/2 overflow-clip">
              <div className="animate-marquee whitespace-nowrap">
                <Link
                  href={latestAnnouncement.href}
                  className="flex gap-2 items-center"
                >
                  <span className="text-xs px-1 text-white bg-red-500 animate-pulse">
                    NEW
                  </span>
                  {latestAnnouncement.text}
                  <span className="text-xs px-1 text-white bg-red-500 animate-pulse">
                    NEW
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="flex gap-2 lg:w-1/2 text-center lg:text-left text-xs *:odd:font-bold">
          <div>Tenders</div>
          <div>|</div>
          <div>AIMS</div>
          <div>|</div>
          <div>Students Fee Portal</div>
        </div>
      </div>
      <div className="flex flex-row lg:flex-row items-center justify-start border border-dwd-secondary1 relative h-16 lg:h-24">
        {/* Big screen image */}
        <Image
          src="/brand/logo-medium-light.png"
          width={0}
          height={0}
          sizes="100%"
          style={{ height: '100%', width: 'auto' }}
          alt="IIIT Dharwad Logo"
          className="block lg:hidden xl:block mr-auto"
        />
        {/* Medium screen logo */}
        <Image
          src="/brand/logo-square-light.png"
          width={0}
          height={0}
          sizes="100%"
          style={{ height: '100%', width: 'auto' }}
          alt="IIIT Dharwad Logo"
          className="hidden lg:block xl:hidden mr-auto"
        />

        {/* Mobile navbar */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="ml-auto mr-4 lg:hidden">
              <MenuIcon size="2rem" />
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-2 mt-4 -mr-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>

              <details className="group">
                <summary className="flex items-center justify-between focus:outline-none">
                  <div>About</div>
                  <ChevronDownIcon
                    size="1rem"
                    className="rotate-0 group-open:rotate-180 transition-transform duration-300"
                  />
                </summary>
                <div className="mt-2 ml-8 flex flex-col gap-2">
                  <Link
                    className="hover:underline"
                    href="/about/introduction"
                    key="introduction"
                  >
                    Introduction
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/about/vision"
                    key="vision"
                  >
                    Vision and Message
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/about/message"
                    key="message"
                  >
                    Director&apos;s Message
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/about/organization"
                    key="organization"
                  >
                    Organization
                  </Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between focus:outline-none">
                  <div>Campus</div>
                  <ChevronDownIcon
                    size="1rem"
                    className="rotate-0 group-open:rotate-180 transition-transform duration-300"
                  />
                </summary>
                <div className="mt-2 ml-8 flex flex-col gap-2">
                  <Link
                    className="hover:underline"
                    href="/campus/facilities"
                    key="facilities"
                  >
                    Facilities
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/campus/clubs"
                    key="clubs"
                  >
                    Clubs
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/campus/events"
                    key="events"
                  >
                    Events
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/campus/magazine"
                    key="magazine"
                  >
                    Magazine
                  </Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between focus:outline-none">
                  <div>Admissions</div>
                  <ChevronDownIcon
                    size="1rem"
                    className="rotate-0 group-open:rotate-180 transition-transform duration-300"
                  />
                </summary>
                <div className="mt-2 ml-8 flex flex-col gap-2">
                  <Link
                    className="hover:underline"
                    href="/admissions/btech"
                    key="btech"
                  >
                    BTech
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/admissions/phd"
                    key="phd"
                  >
                    PhD
                  </Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between focus:outline-none">
                  <div>Academics</div>
                  <ChevronDownIcon
                    size="1rem"
                    className="rotate-0 group-open:rotate-180 transition-transform duration-300"
                  />
                </summary>
                <div className="mt-2 ml-8 flex flex-col gap-2">
                  <Link
                    className="hover:underline"
                    href="/academics/faculty"
                    key="faculty"
                  >
                    Facilities
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/academics/research"
                    key="research"
                  >
                    Research
                  </Link>
                  <Link
                    className="hover:underline"
                    href="/academics/departments"
                    key="departments"
                  >
                    Departments
                  </Link>
                </div>
              </details>

              <Link href="/placements" className="hover:underline">
                Placements
              </Link>
              <Link href="/tenders" className="hover:underline">
                Tenders
              </Link>
              <Link href="/jobs" className="hover:underline">
                Jobs
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navbar */}
        <div className="ml-auto hidden lg:flex items-center justify-center mr-4 gap-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {AboutMenu}
          {CampusMenu}
          {AdmissionsMenu}
          {AcademicsMenu}
          <Link href="/placements" className="hover:underline">
            Placements
          </Link>
          <Link href="/tenders" className="hover:underline">
            Tenders
          </Link>
          <Link href="/jobs" className="hover:underline">
            Jobs
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

function XIcon({ size } = { size: '2rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="mt-auto flex flex-col bg-dwd-primary text-white text-xs w-full h-fit px-8 py-4 gap-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-start lg:justify-between">
        <div className="flex flex-col w-fit gap-4">
          <h2 className="font-bold text-lg lg:text-2xl">Address</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <HomeIcon size="1rem" /> IIIT Dharwad Campus, Ittigatti Road, Near
              Sattur Colony, Dharwad 580009
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon size="1rem" />
              <span>
                <a href="tel:0836 2250879">0836 2250879</a>,
                <a href="tel:9449732959">9449732959</a>
              </span>
            </div>
            <a
              href="mailto:contact@iiitdwd.ac.in"
              className="flex gap-2 items-center"
            >
              <MailIcon size="1rem" />
              contact@iiitdwd.ac.in
            </a>
          </div>
        </div>
        <div className="flex flex-col w-fit gap-4">
          <h2 className="font-bold text-lg lg:text-2xl">Social Links</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/iiitdharwad/"
              className="flex gap-2"
            >
              <LinkedinIcon size="1rem" /> LinkedIn
            </a>
            <a
              href="https://www.facebook.com/IIIT-Dharwad-107055984131970/"
              className="flex gap-2"
            >
              <FacebookIcon size="1rem" /> Facebook
            </a>
            <a href="https://twitter.com/dharwad_iiit" className="flex gap-2">
              <XIcon size="1rem" /> Twitter
            </a>
            <a href="https://twitter.com/dharwad_iiit" className="flex gap-2">
              <YoutubeIcon size="1rem" /> YouTube
            </a>
          </div>
        </div>
        <div className="w-fit lg:mt-12">
          Copyright <CopyrightIcon className="inline" size="1rem" /> 2024 IIIT
          Dharwad, All rights reserved
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex flex-row flex-wrap gap-2 text-sm *:odd:font-bold">
          <a href="https://iiitdwd.ac.in/docs/iiit_ppp_2017.pdf">
            IIIT PPP Act
          </a>{' '}
          |<a href="https://iiitdwd.ac.in/docs/ARIIA.pdf">ARIIA</a> |
          <a href="https://iiitdwd.ac.in/docs/RTI.pdf">RTI</a> |
          <a href="https://aims.iiitdwd.ac.in/aims/">AIMS</a> |
          <a href="https://gmail.com/">Webmail</a> |
          <a href="https://iiitdwd.ac.in/ICC.php">ICC</a> |
          <a href="https://iiitdwd.ac.in/Annual_Reports.php">Annual Reports</a>
        </div>
        <div className="font-bold text-lg">
          <Link href="/contact" className="underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
