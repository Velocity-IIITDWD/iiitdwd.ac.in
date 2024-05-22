// components/LPA.tsx
import React from 'react';

interface LPAProps {
  number: string;
  medianText: string;
}

const LPA: React.FC<LPAProps> = ({ number, medianText }) => {
  return (
    <div className='mt-20 ml-[20%]'>
      <div className="text-5xl font-bold text-[#50A5CA] inline-block ">{number}</div>
      <div className="text-5xl font-bold text-[#013365] inline-block"> LPA</div>
      <div className="text-black text-sm mt-2">{medianText}</div>
    </div>
  );
}

export default LPA;
