import React from 'react';
import Card from './Card';
import { cardData } from '../../data/campus/data';
import Image from 'next/image';
import MainBlock from '@/assets/academics/MBlock.jpg';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-[60vw] sm:h-[530px] overflow-hidden">
        <Image
          src={MainBlock}
          alt="IIIT Dharwad Campus"
          className="object-cover w-full h-full"
          layout="fill"
        />
        <div className="absolute inset-0 bg-[#041E3FB3] flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            IIIT Dharwad Campus
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-4 w-full gap-4">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            href={card.href}
            image={card.image}
          />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
