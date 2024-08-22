import { Metadata } from 'next';
// import group from '@/data/profile/chairperson/former';
// import { ProfileGroup } from '@/components/profile/ProfileGroup';
import Image from 'next/image';

const title = 'Former Chairperson';

export default function FormerChairpersonPage() {
  return (
    <>
      <h1 className="heading-text">{title}</h1>
      {/* {group.map(({ profiles, title }, index) => (
        <ProfileGroup key={index} profiles={profiles} title={title} />
      ))} */}

      <div className='w-full flex flex-col items-center gap-8 p-4'>
        <div className='flex flex-col xl:flex-row items-center gap-2 w-full 
        max-w-screen-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-max rounded-md overflow-clip'>
          <div className='relative h-full aspect-square grow shrink-0 min-h-full w-80'>
            <Image
              alt='Smt. Sudha Murty' 
              src='/images/sudha_murty.jpg' 
              fill
            />``
          </div>

          <div className='text-dwd-primary p-2 text-[15px] text-center'>
            As the Chairperson of the Board of Governors of IIIT Dharwad, I would like to share a slice of wisdom
            with the young generation around us: Vision without action is merely a dream; action without vision is
            merely passing time; but vision and action together can change the world. We can give our children only
            two things in life which are essential – strong roots and powerful wings. Afterwards, they may fly anywhere
            and live independently; of all the luxuries in life, the greatest one is getting freedom of the right 
            kind. To come up in life, the young generation requires talent, hard work, drive, and ability to communicate
            genuinely with people. With my experience in life, I feel that having good relationships, compassion,
            and peace of mind is much more important than achievements, awards, degrees, or money. Hence, we should
            always have a definite aim in life which we must try to achieve while being of help to others. I wish
            IIIT Dharwad great success in shaping young minds into professionals with the best of skills coupled with
            the highest of values.” - Smt. Sudha Murty, Chairperson of Board
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title,
};
