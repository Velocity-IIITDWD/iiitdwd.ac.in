'use client';

import React from 'react';
import CseLogo from './CseLogo';
import DsaiLogo from './DsaiLogo';
import EceLogo from './EceLogo';

interface CardProps {
  imageUrl: string;
  altText: string;
  text: string;
}

const PlainCard: React.FC<CardProps> = ({ imageUrl, altText, text }) => {
  return (
    <div className='flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg max-w-sm bg-white mb-4'>
      {text === 'Computer Science and Engineering' && <CseLogo />}
      {text === 'Data Science and Artifical Intelligence' && <DsaiLogo />}
      {text === 'Electronics and Communication Engineering' && <EceLogo />}
      <p className='text-center text-base mt-4'>{text}</p>
    </div>
  );
};

export default PlainCard;
