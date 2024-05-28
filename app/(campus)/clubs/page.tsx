'use client';
import React, { FC, useState, useRef } from 'react';
import { LinkedinIcon, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';
import clubs from '../../../data/members';
import type { ClubName, Club as ClubData } from '../../../data/members';

const Club: FC = () => {
  const [showTechnicalClubs, setShowTechnicalClubs] = useState(true);

  const refs: Record<ClubName, React.RefObject<HTMLDivElement>> = {
    'Return 0': useRef<HTMLDivElement>(null),
    'BlocSoc': useRef<HTMLDivElement>(null),
    'Velocity': useRef<HTMLDivElement>(null),
    'GDSC IIIT Dharwad': useRef<HTMLDivElement>(null),
    'E cell': useRef<HTMLDivElement>(null),
    'Inquizitive': useRef<HTMLDivElement>(null),
    'Iris': useRef<HTMLDivElement>(null),
    'DSAI Society': useRef<HTMLDivElement>(null),
    'Quantum Computing Club': useRef<HTMLDivElement>(null),
    'Zeitgeist': useRef<HTMLDivElement>(null),
    'Music Club': useRef<HTMLDivElement>(null),
    'Dance Club': useRef<HTMLDivElement>(null),
  };

  const scrollToClub = (clubName: ClubName) => {
    refs[clubName]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-dwd-primary">Our Clubs</h1>

      <div className="bg-gray-200 p-8 rounded-lg mb-8 relative">
        <div className="top-4 left-4">
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${showTechnicalClubs ? ' hover:border-black bg-dwd-primary text-white hover:text-sky-600' : 'bg-dwd-secondary1 hover:text-white'}`}
            onClick={() => setShowTechnicalClubs(true)}
          >
            Technical Clubs
          </button>
          <button
            className={`px-4 py-2 rounded-lg mt-4 md:mt-0 ${!showTechnicalClubs ? 'bg-dwd-primary hover:border-black text-white hover:text-sky-600' : 'bg-dwd-secondary1 hover:text-white'}`}
            onClick={() => setShowTechnicalClubs(false)}
          >
            Non Technical Clubs
          </button>
        </div>

        <div className="mt-4">
          {showTechnicalClubs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clubs
                .filter((club: ClubData) => club.name !== 'Zeitgeist' && club.name !== 'Music Club' && club.name !== 'Dance Club')
                .map((club: ClubData) => (
                  <div
                    key={club.name}
                    className="bg-dwd-primary text-white p-4 cursor-pointer hover:text-sky-600 rounded-lg shadow-md text-center"
                    onClick={() => scrollToClub(club.name)}
                  >
                    {club.name}
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clubs
                .filter((club: ClubData) => club.name === 'Zeitgeist' || club.name === 'Music Club' || club.name === 'Dance Club')
                .map((club: ClubData) => (
                  <div
                    key={club.name}
                    className="bg-dwd-primary text-white p-4 cursor-pointer hover:text-sky-600 rounded-lg shadow-md text-center"
                    onClick={() => scrollToClub(club.name)}
                  >
                    {club.name}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <br />
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club: ClubData) => (
          <div key={club.name} ref={refs[club.name]}>
            <ClubCard
              clubName={club.name}
              aboutText={club.aboutText}
              members={club.members}
              imagePath={club.imagePath}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClubCard: FC<{ clubName: string; aboutText: string; members: { name: string; position: string }[]; imagePath: string }> = ({ clubName, aboutText, members, imagePath }) => {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <div className="relative max-w-sm mx-auto bg-gray-200 p-4 rounded-md shadow-md mb-8 hover:border-dwd-primary border-2 border-transparent group">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <Image
          src={imagePath}
          alt={`${clubName} logo`}
          width={110}
          height={110}
          className="rounded-full border-4 bg-dwd-primary group-hover:border-dwd-primary"
        />
      </div>
      <br />
      <div className="pt-12">
        <h2 className="text-center text-2xl font-bold mb-4">{clubName}</h2>
        {/* <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 cursor-pointer rounded-md mr-2 ${showAbout ? 'bg-dwd-primary hover:text-sky-600 text-white' : 'bg-dwd-secondary1 hover:text-white'}`}
            onClick={() => setShowAbout(true)}
          >
            ABOUT
          </button>
          <button
            className={`px-4 py-2 cursor-pointer hover:text-sky-600 rounded-md ${!showAbout ? 'bg-dwd-primary hover:text-sky-600 text-white' : 'bg-dwd-secondary1 hover:text-white'}`}
            onClick={() => setShowAbout(false)}
          >
            MEMBERS
          </button>
        </div> */}
        {showAbout ? (
          <div className="text-center mb-4">{aboutText}</div>
        ) : (
          <div className="text-center mb-4">
            <table className="min-w-full bg-dwd-secondary2">
              <thead>
                <tr>
                  <th className="py-2">Name</th>
                  <th className="py-2">Position</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <br />
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com" className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-ping">
            <Instagram size="2rem" />
          </a>
          <a href="https://www.linkedin.com/in/iiitdharwad/" className="flex gap-2 hover:text-blue-800 hover:duration-800 hover:animate-pulse">
            <LinkedinIcon size="2rem" />
          </a>
          <a href="https://www.gmail.com" className="flex gap-2 hover:text-red-700 hover:duration-800 hover:animate-pulse">
            <Mail size="2rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Club;
