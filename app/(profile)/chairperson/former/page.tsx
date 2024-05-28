import React from 'react';
import Image from 'next/image';

const ChairpersonMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 text-left w-11/12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center text-dwd-primary">Former Chairperson&apos;s Message</h2>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        <div className="chairperson-image slide-in-left mb-5 md:mb-0 md:mr-8">
          <div className="relative w-48 h-48">
            <Image src="/images/sudha_murty.jpg" alt="Smt. Sudha Murty" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
        <div className="chairperson-message slide-in-right text-lg">
          <h3 className="text-2xl font-semibold mb-4 text-dwd-primary">Smt. Sudha Murty</h3>
          <p className="mb-4">
            As the Chairperson of the Board of Governors of IIIT Dharwad, I would like to share a slice of wisdom with the young generation around us: Vision without action is merely a dream; action without vision is merely passing time; but vision and action together can change the world. We can give our children only two things in life which are essential – strong roots and powerful wings. Afterwards, they may fly anywhere and live independently; of all the luxuries in life, the greatest one is getting freedom of the right kind. To come up in life, the young generation requires talent, hard work, drive, and ability to communicate genuinely with people. With my experience in life, I feel that having good relationships, compassion, and peace of mind is much more important than achievements, awards, degrees, or money. Hence, we should always have a definite aim in life which we must try to achieve while being of help to others. I wish IIIT Dharwad great success in shaping young minds into professionals with the best of skills coupled with the highest of values.
          </p>
          <p className="text-lg">- Smt. Sudha Murty, Chairperson of Board</p>
        </div>
      </div>
    </div>
  );
};

export default ChairpersonMessage;
