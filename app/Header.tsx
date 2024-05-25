'use client';

import React from 'react';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { announcements } from '@/data/announcements';

function onNavChange() {
  setTimeout(() => {
    const triggers = document.querySelectorAll(
      ".submenu-trigger[data-state='open']"
    );
    const dropdowns = document.querySelectorAll(
      ".nav-viewport[data-state='open']"
    );

    if (!triggers.length || !dropdowns.length) return;

    const { offsetLeft, offsetWidth } = triggers[0] as HTMLElement;
    let menuLeftPosition =
      offsetLeft + offsetWidth / 2 - triggers[0].clientWidth / 2;

    document.documentElement.style.setProperty(
      '--menu-left-position',
      `${menuLeftPosition}px`
    );
  }, 0);
}

function Header() {
  const latestAnnouncement = announcements.length
    ? announcements[0]
    : undefined;

  return (
    <header className="flex flex-col w-full h-fit">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-dwd-secondary1 px-2 lg:gap-4">
        {/* Pushes announcement to center */}
        <div className="hidden lg:block w-1/5"></div>
        {latestAnnouncement && (
          <div className="flex justify-end w-full lg:w-2/5 overflow-hidden">
            <div className="w-full overflow-clip">
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
        <div className="flex gap-2 lg:w-1/5 text-center lg:text-left text-xs *:odd:font-bold">
          {/* :TODO */}
          <Link className="whitespace-nowrap" href="/tenders">
            Tenders
          </Link>{' '}
          <div>|</div>
          <Link className="whitespace-nowrap" href="/idk">
            AIMS
          </Link>{' '}
          <div>|</div>
          <Link className="whitespace-nowrap" href="/idk">
            Students Fee Portal
          </Link>
        </div>
        <div className="hidden lg:block w-1/5"></div>
      </div>
      <div className="flex flex-row lg:flex-row items-center justify-start border-b border-dwd-secondary1 relative h-16 lg:h-24">
        <Link href="/" className="block h-full">
          {/* Big screen image */}
          <Image
            src="/brand/logo-full-light.png"
            width={0}
            height={0}
            sizes="100%"
            style={{ height: '90%', width: 'auto' }}
            alt="IIIT Dharwad Logo"
            className="block lg:hidden xl:block mr-auto"
            priority
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
            priority
          />
        </Link>

        {/* Mobile navbar */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="ml-auto mr-4 lg:hidden">
              <MenuIcon size="2rem" />
            </div>
          </SheetTrigger>

          <SheetContent side="left">
            <div className="flex flex-col gap-2 mt-4 -mr-2">
              <SheetTrigger asChild>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </SheetTrigger>

              <details className="group">
                <summary className="flex items-center justify-between focus:outline-none">
                  <div>About</div>
                  <ChevronDownIcon
                    size="1rem"
                    className="rotate-0 group-open:rotate-180 transition-transform duration-300"
                  />
                </summary>
                <div className="mt-2 ml-8 flex flex-col gap-2">
                  <SheetTrigger asChild>
                    <Link
                      className="hover:underline"
                      href="/about#introduction"
                      key="introduction"
                    >
                      Introduction
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link
                      className="hover:underline"
                      href="/about#directors-message"
                      key="message"
                    >
                      Director&apos;s Message
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link
                      className="hover:underline"
                      href="/about#family"
                      key="organization"
                    >
                      Our Family
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link
                      className="hover:underline"
                      href="/about#vision"
                      key="vision"
                    >
                      Vision
                    </Link>
                  </SheetTrigger>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between focus:outline-none">
                  <Link className="hover:underline" href="/campus">
                    Campus
                  </Link>
                  <ChevronDownIcon
                    size="1rem"
                    className="rotate-0 group-open:rotate-180 transition-transform duration-300"
                  />
                </summary>
                <div className="mt-2 ml-8 flex flex-col gap-2">
                  <SheetTrigger asChild>
                    <Link className="hover:underline" href="/campus/facilities">
                      Facilities
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link className="hover:underline" href="/campus/clubs">
                      Clubs
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link className="hover:underline" href="/campus/events">
                      Events
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link className="hover:underline" href="/campus/magazine">
                      Magazine
                    </Link>
                  </SheetTrigger>
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
                  <SheetTrigger asChild>
                    <Link className="hover:underline" href="/admissions/btech">
                      BTech
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link className="hover:underline" href="/admissions/phd">
                      PhD
                    </Link>
                  </SheetTrigger>
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
                  <SheetTrigger asChild>
                    <Link className="hover:underline" href="/faculty">
                      Faculty
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link
                      className="hover:underline"
                      href="/academics/research"
                    >
                      Research
                    </Link>
                  </SheetTrigger>
                  <details className="group/sub">
                    <summary className="flex items-center justify-between focus:outline-none">
                      <div>Departments</div>
                      <ChevronDownIcon
                        size="1rem"
                        className="rotate-0 group-open/sub:rotate-180 transition-transform duration-300"
                      />
                    </summary>
                    <div className="mt-2 ml-8 flex flex-col gap-2">
                      <SheetTrigger asChild>
                        <Link
                          className="hover:underline"
                          href="/academics/departments/cse"
                        >
                          CSE
                        </Link>
                      </SheetTrigger>
                      <SheetTrigger asChild>
                        <Link
                          className="hover:underline"
                          href="/academics/departments/dsai"
                        >
                          DSAI
                        </Link>
                      </SheetTrigger>
                      <SheetTrigger asChild>
                        <Link
                          className="hover:underline"
                          href="/academics/departments/ece"
                        >
                          ECE
                        </Link>
                      </SheetTrigger>
                    </div>
                  </details>
                  {/* <Link className='hover:underline' href='/academics/departments'>Departments</Link> */}
                </div>
              </details>
              <SheetTrigger asChild>
                <Link href="/placements" className="hover:underline">
                  Placements
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href="/tenders" className="hover:underline">
                  Tenders
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href="/careers" className="hover:underline">
                  Jobs
                </Link>
              </SheetTrigger>

              <SheetTrigger asChild>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navbar shadcn */}
        <NavigationMenu
          onValueChange={onNavChange}
          className="ml-auto hidden lg:flex items-center justify-center mr-4 gap-8"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="submenu-trigger">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-4 w-[250px] p-4 text-sm">
                  <NavigationMenuLink href="/about#introduction">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Introduction
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/about#directors-message">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Director&apos;s Message
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/about#family">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Our Family
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/about#vision">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Vision
                    </div>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/campus" passHref>
                <NavigationMenuTrigger className="submenu-trigger">
                  Campus
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-4 w-[250px] p-4 text-sm">
                  <NavigationMenuLink href="/campus/facilities">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Facilities
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/campus/clubs">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Clubs
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/campus/events">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Events
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/campus/magazine">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      Magazine
                    </div>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="submenu-trigger">
                Admissions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-4 w-[250px] p-4 text-sm">
                  <NavigationMenuLink href="/admissions/btech">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      BTech
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/admissions/phd">
                    <div className="hover:bg-accent p-2 rounded-md w-full">
                      PhD
                    </div>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="submenu-trigger">
                Academics
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex gap-4 w-[400px] p-4 text-sm">
                  <div className="flex flex-col w-[150px]">
                    <div className="hover:bg-accent p-2 rounded-md w-full invisible">
                      abcd
                    </div>
                    <NavigationMenuLink href="/faculty">
                      <div className="hover:bg-accent p-2 rounded-md w-full">
                        Faculty
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/academics/research">
                      <div className="hover:bg-accent p-2 rounded-md w-full">
                        Research
                      </div>
                    </NavigationMenuLink>
                  </div>
                  <div className="flex flex-col w-[250px]">
                    <h3 className="font-bold underline p-2 text-sm">
                      Departments
                    </h3>
                    <NavigationMenuLink href="/academics/departments/cse">
                      <div className="flex flex-col hover:bg-accent p-2 rounded-md w-full">
                        CSE
                        <div className="text-dwd-secondary2 text-xs">
                          Computer Science and Engineering
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/academics/departments/dsai">
                      <div className="flex flex-col hover:bg-accent p-2 rounded-md w-full">
                        DSAI
                        <div className="text-dwd-secondary2 text-xs">
                          Data Science and Artificial Intelligence
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/academics/departments/ece">
                      <div className="flex flex-col hover:bg-accent p-2 rounded-md w-full">
                        ECE
                        <div className="text-dwd-secondary2 text-xs">
                          Electronics and Communication Engineering
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/placements" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Placements
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/tenders" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Tenders
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/careers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Jobs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;
