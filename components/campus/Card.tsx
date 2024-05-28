import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image'; // Import StaticImageData

interface CardProps {
  title: string;
  href: string;
  image: string | StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, href, image }) => {
  return (
    <Link href={href} legacyBehavior>
      <div className="group block bg-white overflow-hidden w-full max-w-[350px] my-4 transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="relative w-full h-52">
          <Image src={image} alt={title} layout="fill" className="object-cover" />
          <div className="absolute inset-0 bg-[#164573] opacity-80 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-95">
            <div className="text-white text-2xl font-bold mb-2">{title}</div>
            <div className="flex items-center text-white">
              <span className="mr-2 text-sm">Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#ffffff"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 12L8 12M16 12C16 12.7002 14.0057 14.0085 13.5 14.5M16 12C16 11.2998 14.0057 9.99153 13.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
