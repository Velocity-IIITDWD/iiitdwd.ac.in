import { Construction } from 'lucide-react';

export default function Page() {
  return <div className="flex flex-col flex-wrap gap-4 justify-center items-center grow max-md:gap-2 p-8">
    <Construction className='stroke-1 w-20 h-20' />
    <p className='font-bold text-2xl text-center'>This webpage is under construction</p>
  </div>
}