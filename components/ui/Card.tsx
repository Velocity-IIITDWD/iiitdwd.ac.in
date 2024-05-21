'use client';

import React from 'react';
import Button from '@/components/ui/Button';

interface IProps {
  title: string;
  desc: string;
  buttonText: string;
  handleClick: () => void; // Change to a function without parameters
}

export default function Card({ title, desc, buttonText, handleClick }: IProps) {
  return (
    <div className='flex-shrink-0 mx-2 mb-4 rounded-lg overflow-hidden shadow-md border border-gray-200 hover:bg-customBlue hover:text-white transition-colors duration-300 mt-4 bg-white'>
      <figure className='text-center p-6'>
        <h5 className='text-cardText font-bold text-[24px] mt-[20px] underline hover:text-white'>
          <a href='#'>{title}</a>
        </h5>
        <p className='text-cardText text-center font-medium text-[14px] mt-2 mb-8'>
          {desc}
        </p>
        <div className='mt-4'>
          <Button handleClick={handleClick}>{buttonText}</Button>
        </div>
      </figure>
    </div>
  );
}
