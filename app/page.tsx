"use client";
import EventCarousel from "@/components/EventCrousel";
import "./globals.css";
import Announcements from "@/components/Announcements";
import TypeCard from "@/components/TypeCards";
import Departments from "@/components/Departments";

export default function Home() {
  return (
    <div className="w-full px-4 my-2">
      <TypeCard />

      <div className="flex flex-wrap justify-between mx-10 my-6">
        <Announcements />
        <EventCarousel />
      </div>

      <Departments />
    </div>
  );
}
