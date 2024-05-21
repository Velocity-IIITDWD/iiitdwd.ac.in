"use client";
import EventCarousel from "@/components/EventCrousel";
import Announcements from "@/components/Announcements";
import TypeCard from "@/components/TypeCards";
import Departments from "@/components/Departments";
import Slider from "@/components/Slider";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full px-4 my-2">

      <div className="flex flex-wrap justify-around mx-5 my-6">
        <Announcements />
        <EventCarousel />
      </div>

      <TypeCard />

      <Slider />

      <Departments />
    </div>
  );
}
