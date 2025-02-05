import { FC } from 'react';
import Link from 'next/link';
import { FetchSanity } from '@/lib/sanity/client';
import { GetKrcData } from '@/lib/sanity/Queries';
import { LinkData } from '@/data/krc/dataTel';


const ThirdFold: FC = async () => {
  const data = await FetchSanity(GetKrcData) as LinkData[];
  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {data.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 sm:p-8 text-center border-2 border-black rounded-lg bg-gray-200 h-full flex flex-col justify-between transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-4 underline group-hover:text-white">
                {link.title}
              </h3>
              <p className="text-gray-700 mb-2 italic group-hover:text-gray-300">
                {link.accessInfo}
              </p>
              <p className="text-gray-700 mb-6 group-hover:text-gray-300">
                {link.description}
              </p>
              <span className="bg-transparent border border-black text-black py-2 px-4 rounded transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                {link.buttonText}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdFold;
