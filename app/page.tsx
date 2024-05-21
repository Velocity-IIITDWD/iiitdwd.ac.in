'use client';
import EventCarousel from '@/components/EventCrousel';
import Announcements from '@/components/Announcements';
import TypeCard from '@/components/TypeCards';
import Departments from '@/components/Departments';
import './globals.css';

export default function Home() {
  return (
    <div className='w-full px-4 my-2'>
      <TypeCard />

      <div className='flex flex-wrap justify-between mx-10 my-6'>
        <Announcements />
        <EventCarousel />
      </div>

      <Departments />
    </div>
  );
}
