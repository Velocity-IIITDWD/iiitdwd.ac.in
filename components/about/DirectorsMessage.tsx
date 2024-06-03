import { Profile } from '@/types/profile';
import Image from 'next/image';
import Link from 'next/link';
import directorImage from '@/assets/s_r_mahadeva_prasanna.jpg';

interface DirectorsMessageProps {
  heading: string;
  text1: string;
  text2: string;
  text3: string;
  director: Profile;
}
const DirectorsMessage = ({
  heading,
  text1,
  text2,
  text3,
  director,
}: DirectorsMessageProps) => {
  return (
    <div
      id="directors-message"
      className="flex p-4 mt-4 flex-col items-center justify-center md:px-16 lg:px-24 xl:px-44"
    >
      <span className="text-2xl md:text-4xl mb-8 text-dwd-primary text-center w-full font-semibold">
        Director&apos;s Message
      </span>
      <div className="p-4 flex flex-col gap-4 items-center content-center">
        <div className="flex flex-col gap-4">
          <span className="text-dwd-primary font-semibold md:text-lg">
            {heading}
          </span>
          <p className="my-6 text-justify">
            <Image
              src={directorImage}
              alt={'Image of Director'}
              width={0}
              height={0}
              sizes="100%"
              className="md:h-[24rem] md:float-left mr-6 mb-2 w-full md:w-auto"
            />
            {text1}
            <br />
            <br />
            {text2}
            <br />
            <br />
            {text3}
          </p>
        </div>
        <Link
          className="self-start text-dwd-primary hover:cursor-pointer"
          href={'/about#director-brief-profile'}
        >
          <span className="md:text-lg font-bold">{director.title}</span>
          <br />
          Director IIIT Dharwad
        </Link>
      </div>
    </div>
  );
};

export default DirectorsMessage;
