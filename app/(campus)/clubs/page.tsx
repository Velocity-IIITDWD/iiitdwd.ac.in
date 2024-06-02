'use client';
import React, { FC, useState, useRef } from 'react';
import { LinkedinIcon, Instagram, Mail, Github, ExternalLink, QrCode, Twitter } from 'lucide-react';
import Image from 'next/image';
import clubs from '../../../data/members';
import type { ClubName, Club as ClubData } from '../../../data/members';

const Club: FC = () => {
  const [showTechnicalClubs, setShowTechnicalClubs] = useState(true);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-dwd-primary">
        Our Clubs
      </h1>

      <div className="bg-gray-200 p-8 rounded-lg mb-8 relative">
        <div className="top-4 left-4">
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${showTechnicalClubs
              ? ' hover:border-black bg-dwd-primary text-white hover:text-sky-600'
              : 'bg-dwd-secondary1 hover:text-white'
            }`}
            onClick={() => setShowTechnicalClubs(true)}
          >
            Technical Clubs
          </button>
          <button
            className={`px-4 py-2 rounded-lg mt-4 md:mt-0 ${!showTechnicalClubs
              ? 'bg-dwd-primary hover:border-black text-white hover:text-sky-600'
              : 'bg-dwd-secondary1 hover:text-white'
            }`}
            onClick={() => setShowTechnicalClubs(false)}
          >
            Cultural Clubs
          </button>
        </div>

        <div className="mt-4">
          {showTechnicalClubs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clubs
                .filter((club: ClubData) => club.isTechnical)
                .map((club: ClubData) => (
                  <a
                    key={club.name}
                    className="bg-dwd-primary text-white p-4 cursor-pointer hover:text-sky-600 rounded-lg shadow-md text-center"
                    href={`#${club.name}`}
                  >
                    {club.name}
                  </a>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clubs
                .filter((club: ClubData) => !club.isTechnical)
                .map((club: ClubData) => (
                  <a
                    key={club.name}
                    className="bg-dwd-primary text-white p-4 cursor-pointer hover:text-sky-600 rounded-lg shadow-md text-center"
                    href={`#${club.name}`}
                  >
                    {club.name}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>

      <br />
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
        {clubs.filter(club => club.isTechnical === showTechnicalClubs).map((club: ClubData) => (
          <div key={club.name} id={club.name} className='scroll-m-12'>
            <ClubCard
              {...club}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClubCard: FC<{
  name: string;
  aboutText: string;
  members: { name: string; position: string }[];
  imagePath: string;
  instagram?: string;
  linkedin?: string;
  gmail: string;
  gmail2?: string;
  website?: string;
  github?: string;
  twitter?: string;
  linktree?: string;
}> = ({
  name,
  aboutText,
  members,
  imagePath,
  instagram,
  linkedin,
  gmail,
  gmail2,
  website,
  github,
  twitter,
  linktree,
}) => {
  const [showAbout, setShowAbout] = useState(true);
  return (
    <div className="relative max-w-sm mx-auto h-full flex flex-col bg-gray-200 p-4 pt-0 rounded-md shadow-md mb-8 hover:border-dwd-primary border-2 border-transparent group">
      <div className="w-full relative flex-none h-[110px]">
        <Image
          src={imagePath}
          alt={`${name} logo`}
          width={110}
          height={110}
          className="rounded-full border-4 absolute left-1/2 -translate-y-1/3 transform -translate-x-1/2 bg-black group-hover:border-dwd-primary"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-bold mb-4">{name}</h2>
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
        </div>
        <div className="flex justify-center space-x-4">
          {github ? <a
            href={github}
            className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
          >
            <Github size="2rem" />
          </a> : ''}
          {website ? <a
            href={website}
            className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
          >
            <ExternalLink size="2rem" />
          </a> : ''}
          {linktree ? <a
            href={linktree}
            className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
          >
            <QrCode size="2rem" />
          </a> : ''}
          {linktree ? <a
            href={twitter}
            className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
          >
            <Twitter size="2rem" />
          </a> : ''}
          {instagram ? <a
            href={instagram}
            className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
          >
            <Instagram size="2rem" />
          </a> : ''}
          <a
            href={linkedin}
            className="flex gap-2 hover:text-blue-800 hover:duration-800 hover:animate-pulse"
          >
            <LinkedinIcon size="2rem" />
          </a>
          <a
            href={gmail}
            className="flex gap-2 hover:text-red-700 hover:duration-800 hover:animate-pulse"
          >
            <Mail size="2rem" />
          </a>
          {gmail2 ? <a
            href={gmail2}
            className="flex gap-2 hover:text-red-700 hover:duration-800 hover:animate-pulse"
          >
            <Mail size="2rem" />
          </a> : ''}
        </div>
      </div>
    </div>
  );
};

export default Club;
