import { Metadata } from 'next';
import Link from 'next/link';

export default function NotFound404() {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center grow'>
      <div className='border border-dwd-primary rounded-md flex flex-col items-center justify-center p-8 gap-4'>
        <div className='font-bold text-lg'>This page doesn&apos;t exist</div>
        <Link href='/' className='bg-accent hover:bg-dwd-secondary2 font-bold px-4 py-2 rounded-md'>
          Home
        </Link>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Page Not Found',
};