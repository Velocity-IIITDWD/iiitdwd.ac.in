'use client';

import React from 'react';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import { announcements } from '@/data/announcements';

type NavmenuItem = {
  text: string,
  // Atleast one of href or subGroups must be provided, im not enforcing it because types become hard to read
  href?: string,
  subGroups?: SubmenuGroup[],
};

type SubmenuGroup = {
  // For desktop nav, if title is absent then the title element will be omitted.
  // The title will **not** be omitted if this is an empty string.
  // For the mobile nav, if title is absent or empty then the items will not be put into a collapsible.
  title?: string,
  items: SubmenuItem[],
  // (Default 150) Group width in px for when rendering on desktop
  width?: number
};

type SubmenuItem = {
  text: string,
  subText?: string,
  href: string
  hideOnMobile?: boolean,
  hideOnDesktop?: boolean,
};

const navmenuItems: NavmenuItem[] = [
  { text: 'Home', href: '/' },
  {
    text: 'About',
    href: '/about',
    subGroups: [{
      width: 250,
      items: [
        { text: 'Introduction', href: '/about#introduction' },
        { text: 'Director\'s Message', href: '/about#directors-message' },
        { text: 'Our Family', href: '/about#family' },
        { text: 'Vision', href: '/about#vision' },
      ]
    }]
  },
  {
    text: 'Campus',
    href: '/campus',
    subGroups: [{
      items: [
        { text: 'Facilities', href: '/campus/facilities' },
        { text: 'Clubs', href: '/campus/clubs' },
        { text: 'Events', href: '/campus/events' },
        { text: 'Magazine', href: '/campus/magazine' },
      ]
    }]
  },
  {
    text: 'Admissions',
    href: '/admissions',
    subGroups: [{
      items: [
        { text: 'BTech', href: '/admissions/btech' },
        { text: 'PhD', href: '/admissions/phd' },
      ]
    }]
  },
  {
    text: 'Academics',
    href: '/academics',
    subGroups: [
      {
        title: '',
        items: [
          { text: 'Overview', href: '/academics', hideOnMobile: true },
          { text: 'Faculty', href: '/academics/faculty' },
          { text: 'Research', href: '/academics/research' },
        ]
      },
      {
        title: 'Departments',
        width: 250,
        items: [
          { text: 'CSE', subText: 'Computer Science and Engineering', href: '/academics/departments/cse' },
          { text: 'DSAI', subText: 'Data Science and Artifical Intelligence', href: '/academics/departments/dsai' },
          { text: 'ECE', subText: 'Electronics and Communication Engineering', href: 'academics/departments/ece' },
        ]
      }
    ]
  },
  { text: 'Placements', href: '/placements' },
  { text: 'Tenders', href: '/tenders' },
  { text: 'Jobs', href: '/jobs' },
  { text: 'Contact Us', href: '/contact' },
];

function onNavChange() {
  setTimeout(() => {
    const triggers = document.querySelectorAll(
      '.submenu-trigger[data-state=\'open\']'
    );
    const dropdowns = document.querySelectorAll(
      '.nav-viewport[data-state=\'open\']'
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
        <div className='flex gap-2 lg:w-1/5 text-center lg:text-left text-xs *:odd:font-bold'>
          <Link href='/tenders'>Tenders</Link><div>|</div>
          <Link href='https://aims.iiitdwd.ac.in/aims/'>AIMS</Link><div>|</div>
          <Link href='https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=873279'>Students Fee Portal</Link>
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
          <SheetContent side='left'>
            <div className='flex flex-col gap-2 mt-4 -mr-2'>
              {navmenuItems.map(item => {
                const dropdownTrigger = item.href
                  ? <SheetClose key={item.text} asChild><Link key={item.text} className='hover:underline' href={item.href}>{item.text}</Link></SheetClose>
                  : <div>{item.text}</div>

                if (!item?.subGroups?.length) return dropdownTrigger;

                return (
                  <details key={item.text} className='group'>
                    <summary className='flex items-center justify-between focus:outline-none'>
                      {dropdownTrigger}
                      <ChevronDownIcon size='1rem' className='rotate-0 group-open:rotate-180 transition-transform duration-300' />
                    </summary>
                    <div className='mt-2 ml-2 pl-6 flex flex-col gap-2 border-l border-l-gray-200'>
                      {
                        item.subGroups.map(group => (
                          !group.title
                            ? group.items.filter(gItem => !gItem.hideOnMobile).map(gItem => <Link key={gItem.text} className='hover:underline' href={gItem.href}>{gItem.text}</Link>)
                            : <details key={group.title} className='group/sub'>
                              <summary className='flex items-center justify-between focus:outline-none'>
                                <div>{group.title}</div>
                                <ChevronDownIcon size='1rem' className='rotate-0 group-open/sub:rotate-180 transition-transform duration-300' />
                              </summary>

                              <div className='mt-2 ml-2 pl-6 flex flex-col gap-2 border-l border-l-gray-200'>
                                {
                                  group.items
                                    .filter(gItem => !gItem.hideOnMobile)
                                    .map(gItem => (
                                      <SheetClose key={gItem.text} asChild>
                                        <Link className='hover:underline' href={gItem.href}>{gItem.text}</Link>
                                      </SheetClose>
                                    ))
                                }
                              </div>
                            </details>
                        ))
                      }
                    </div>
                  </details>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navbar */}
        <NavigationMenu onValueChange={onNavChange} className='ml-auto hidden lg:flex items-center justify-center mr-4 gap-8'>
          <NavigationMenuList>
            {navmenuItems.map(item => {
              if (!item?.subGroups?.length) return <NavigationMenuItem key={item.text}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={item.href!}>
                    <div className='hover:bg-accent p-2 rounded-md w-full'>
                      {item.text}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              let groupWidthSum = 0;
              for (let i = 0; i < item.subGroups.length; i++) {
                groupWidthSum += item.subGroups[i].width || 150;
              }

              return <NavigationMenuItem key={item.text}>
                <NavigationMenuTrigger className='submenu-trigger'>{item.text}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='flex gap-4 p-4 text-sm' style={{ width: `${groupWidthSum}px` }}>
                    {item.subGroups.map((group, i) => (
                      <div key={i} className='flex flex-col' style={{ width: `${group.width || 150}px` }}>
                        {group.title !== undefined && (
                          <h3 className={'font-bold underline p-2 text-sm ' + (group.title ? '' : 'invisible')}>
                            {group.title || '_'}
                          </h3>
                        )}
                        {group.items.filter(gItem => !gItem.hideOnDesktop).map(gItem => (
                          <NavigationMenuLink key={gItem.text} href={gItem.href}>
                            <div className='flex flex-col hover:bg-accent p-2 rounded-md w-full'>
                              {gItem.text}
                              {gItem.subText && <div className='text-dwd-secondary2 text-xs'>
                                {gItem.subText}
                              </div>}
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;
