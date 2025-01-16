import { FC } from 'react';
import Link from 'next/link';
import { LinkData } from '../../../data/krc/dataTel';
import { GetKrcDataTel } from '@/lib/sanity/Queries';
import { FetchSanity } from '@/lib/sanity/client';

const FourthFold: FC = async() => {
  const maxCards = 3;
  const data = await FetchSanity(GetKrcDataTel) as LinkData[];


  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Important Links for Technology Enabled Learning Under the ICT
          Initiatives of MoE:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {data.slice(0, maxCards).map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 text-center border-2 border-white rounded-lg bg-black h-full flex flex-col justify-between transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-4 underline text-white group-hover:text-black">
                {link.title}
              </h3>
              <p className="text-gray-400 mb-2 italic group-hover:text-black">
                {link.accessInfo}
              </p>
              <p className="text-gray-400 mb-6 group-hover:text-black">
                {link.description}
              </p>
              <span className="bg-transparent border border-white text-white py-2 px-4 rounded transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                {link.buttonText}
              </span>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/krc/links-technology-enabled-learning#top"
            passHref={true}
          >
            <span className="bg-gray-700 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer">
              Show All Resources
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourthFold;
