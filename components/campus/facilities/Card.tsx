import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image'; // Import StaticImageData

interface CardProps {
  title: string;
  blockName: string;
  items: string[];
  imageUrl: string | StaticImageData; // Use StaticImageData here
  isEven: boolean;
}

const Card: React.FC<CardProps> = ({ title, blockName, items, imageUrl, isEven }) => {
  const cardColor = isEven
    ? 'bg-slate-200 bg-opacity-25'
    : 'bg-lime-200 bg-opacity-25';

  return (
    <div
      className={`flex flex-wrap p-6 my-4 rounded-lg shadow-md ${cardColor} ${
        !isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex-col`}
      style={{ minHeight: '25rem', marginBottom: '2rem' }}
    >
      <div
        className="relative w-full lg:w-1/2 lg:mt-4"
        style={{ minHeight: '20rem', maxHeight: '20rem' }}
      >
        {/* Check if imageUrl is a string or StaticImageData */}
        {typeof imageUrl === 'string' ? (
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="rounded-lg object-cover"
          />
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="rounded-lg object-cover"
          />
        )}
      </div>
      <div
        className={`w-full lg:w-1/2 pl-6 pr-6 mt-6 ${
          isEven ? 'lg:mt-4' : 'lg:mt-4'
        }`}
      >
        <h2 className="flex gap-2 text-xl font-semibold mb-4 text-green-600 border-l-2 pl-2 border-l-green-600">
          {title}
          <span className={`${isEven ? 'text-gray-400' : 'text-green-800'} italic`}>{blockName}</span>
        </h2>
        <ul className="list-none space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm">
              {' '}
              {/* Added text-sm class */}
              <svg
                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-9.707a1 1 0 00-1.414-1.414L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l5-5z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
