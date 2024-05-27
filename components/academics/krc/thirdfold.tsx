import { FC } from 'react';
import Link from 'next/link';
import { linkData } from '../../../data/krc/data';

const ThirdFold: FC = () => {
  const maxCards = 3;

  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Useful Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {linkData.slice(0, maxCards).map((link, index) => (
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
        <div className="flex justify-center mt-8">
          <Link href="/academics/krc/useful-links#top" passHref={true}>
            <span className="bg-gray-300 text-gray-700 py-2 px-4 rounded transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer">
              Show All
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdFold;
