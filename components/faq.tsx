import React, { useRef, useState, ReactNode } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from 'lucide-react';

interface Faq {
  ques: string;
  ans: ReactNode;
}

export default function Page({ ques, ans }: Faq) {
  const spoiler = useRef<HTMLParagraphElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function showOrHide() {
    if (spoiler.current) {
      spoiler.current.classList.toggle('hidden');
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 mb-4 transition-all duration-300">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={showOrHide}
      >
        <h3 className="text-dwd-primary  md:text-lg font-roboto">{ques}</h3>
        {isOpen ? (
          <ChevronDownIcon className="w-5 h-5 text-dwd-primary" />
        ) : (
          <ChevronRightIcon className="w-5 h-5 text-dwd-primary" />
        )}
      </div>
      <div
        className={`font-roboto mt-2 p-2 bg-gray-200 rounded-lg transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
        ref={spoiler}
      >
        {ans}
      </div>
    </div>
  );
}
