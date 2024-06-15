'use client';
import React, { FC, useState, useRef } from 'react';
import {
  LinkedinIcon,
  Instagram,
  Mail,
  Github,
  ExternalLink,
  QrCode,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import clubs from '../../../data/members';
import type { ClubName, Club as ClubData } from '../../../data/members';
import Link from 'next/link';

const Club: FC = () => {
  const [showTechnicalClubs, setShowTechnicalClubs] = useState('all');
  const [selectedClub, setSelectedClub] = useState<string>('');

  const checkTechnical = (isTechnical: Boolean) =>
    isTechnical === (showTechnicalClubs === 'yes') ||
    showTechnicalClubs === 'all';

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-dwd-primary">
        Our Clubs
      </h1>

      <div className="bg-gray-200 p-8 rounded-lg mb-16 relative">
        <div className="top-4 left-4">
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${
              showTechnicalClubs === 'all'
                ? ' hover:border-black bg-dwd-primary text-white hover:text-sky-600'
                : 'bg-dwd-secondary1 hover:text-white'
            }`}
            onClick={() => setShowTechnicalClubs('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${
              showTechnicalClubs === 'yes'
                ? ' hover:border-black bg-dwd-primary text-white hover:text-sky-600'
                : 'bg-dwd-secondary1 hover:text-white'
            }`}
            onClick={() => setShowTechnicalClubs('yes')}
          >
            Technical
          </button>
          <button
            className={`px-4 py-2 rounded-lg mt-4 md:mt-0 ${
              showTechnicalClubs === 'no'
                ? 'bg-dwd-primary hover:border-black text-white hover:text-sky-600'
                : 'bg-dwd-secondary1 hover:text-white'
            }`}
            onClick={() => setShowTechnicalClubs('no')}
          >
            Cultural
          </button>
        </div>

        <div className="mt-4">
          {showTechnicalClubs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clubs
                .filter((club: ClubData) => checkTechnical(club.isTechnical))
                .map((club: ClubData) => (
                  <Link
                    key={club.name}
                    className="bg-dwd-primary text-white p-4 cursor-pointer hover:text-sky-600 rounded-lg shadow-md text-center"
                    href={`#${club.name}`}
                    onClick={() => setSelectedClub(club?.name)}
                  >
                    {club.name}
                  </Link>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clubs
                .filter((club: ClubData) => checkTechnical(club.isTechnical))
                .map((club: ClubData) => (
                  <Link
                    key={club.name}
                    className="bg-dwd-primary text-white p-4 cursor-pointer hover:text-sky-600 rounded-lg shadow-md text-center"
                    href={`#${club.name}`}
                    onClick={() => setSelectedClub(club?.name)}
                  >
                    {club.name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
        {clubs
          .filter((club) => checkTechnical(club.isTechnical))
          .map((club: ClubData) => (
            <div key={club.name} id={club.name} className="scroll-m-12">
              <ClubCard {...club} highlighted={selectedClub === club.name} />
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
  highlighted: boolean;
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
  highlighted,
}) => {
  const [showAbout, setShowAbout] = useState(true);
  return (
    <div
      style={{ borderColor: highlighted ? 'black' : 'transparent' }}
      className="relative max-w-sm mx-auto h-full flex flex-col bg-gray-200 p-4 pt-0 rounded-md shadow-md mb-8 hover:border-dwd-primary border-2 border-transparent group"
    >
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
          {github ? (
            <Link
              href={`${github}`}
              className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
            >
              <Github size="2rem" />
            </Link>
          ) : (
            ''
          )}
          {website ? (
            <Link
              href={`${website}`}
              className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
            >
              <ExternalLink size="2rem" />
            </Link>
          ) : (
            ''
          )}
          {linktree ? (
            <Link
              href={`${linktree}`}
              className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
            >
              <QrCode size="2rem" />
            </Link>
          ) : (
            ''
          )}
          {twitter ? (
            <Link
              href={`${twitter}`}
              className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
            >
              <Twitter size="2rem" />
            </Link>
          ) : (
            ''
          )}
          {instagram ? (
            <Link
              href={`${instagram}`}
              className="flex gap-2 hover:text-pink-600 hover:duration-800 hover:animate-pulse"
            >
              <Instagram size="2rem" />
            </Link>
          ) : (
            ''
          )}
          <Link
            href={`${linkedin}`}
            className="flex gap-2 hover:text-blue-800 hover:duration-800 hover:animate-pulse"
          >
            <LinkedinIcon size="2rem" />
          </Link>
          <Link
            href={`${gmail}`}
            className="flex gap-2 hover:text-red-700 hover:duration-800 hover:animate-pulse"
          >
            <Mail size="2rem" />
          </Link>
          {gmail2 ? (
            <Link
              href={`${gmail2}`}
              className="flex gap-2 hover:text-red-700 hover:duration-800 hover:animate-pulse"
            >
              <Mail size="2rem" />
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Club;
