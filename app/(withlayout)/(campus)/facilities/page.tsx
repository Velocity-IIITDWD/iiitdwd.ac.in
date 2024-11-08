import Head from 'next/head';
import { facilities } from '@/data/campus/facilities';
import Card from '@/components/campus/facilities/Card';
import { Metadata } from 'next';
import Link from 'next/link';
import { SquareArrowOutUpRightIcon } from 'lucide-react';

const FacilitiesPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Facilities Page</title>
        <meta name="description" content="Facilities description" />
      </Head>
      <main className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-10 mt-10 text-center text-[#164573]">
          Facilities
        </h2>
        <Link
          href='https://photos.google.com/share/AF1QipPwwF4BjZ6IN1azpa3nBexu61-zCbL7FOqZk17_Oiz6291agIkh3E1M1HA4tPWcWg?pli=1&key=SExlNTExczRZamZjUFdTRzdPa2JWVnBfVjg2YUtR'
          target='_blank'
        >
          <div className='w-fit rounded-lg p-4 font-bold'>
            View campus gallery <SquareArrowOutUpRightIcon className='inline' size='1rem' />
          </div>
        </Link>
        {facilities.map((facility, index) => (
          <Card
            key={index}
            blockName={facility.blockName}
            title={facility.title}
            items={facility.items}
            imageUrl={facility.imageUrl}
            isEven={index % 2 === 0}
          />
        ))}
      </main>
    </div>
  );
};

export default FacilitiesPage;

export const metadata: Metadata = {
  title: 'Facilities',
};
