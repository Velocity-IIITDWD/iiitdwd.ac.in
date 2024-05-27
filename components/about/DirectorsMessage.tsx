import { Profile } from '@/types/profile';
import Image from 'next/image';
import Link from 'next/link';
interface DirectorsMessageProps {
  heading: string;
  text: string;
  director: Profile;
}
const DirectorsMessage = ({
  heading,
  text,
  director,
}: DirectorsMessageProps) => {
  return (
    <div className="flex p-4 mt-4 flex-col items-center justify-center">
      <span className="text-2xl md:text-4xl mb-8 text-dwd-primary text-center w-full font-semibold">
        Director&apos;s Message
      </span>
      <p className="p-4 flex flex-col items-center md:inline content-center">
        <Image
          src={director.imageURL}
          alt={'Image of Director'}
          width={2000}
          height={2000}
          className="sm:float-left w-3/4 sm:w-5/12 lg:w-[30%] mb-4  md:mr-8"
        />
        <span className="text-dwd-primary font-semibold md:text-lg">
          {heading}
        </span>
        <br />
        <span>{text}</span>
        <br />
        <br />
        <Link
          className="self-start text-dwd-primary hover:cursor-pointer"
          href={'/faculty'}
        >
          <span className="md:text-lg font-bold">{director.title}</span>
          <br />
          Director IIIT Dharwad
        </Link>
      </p>
    </div>
  );
};

export default DirectorsMessage;
