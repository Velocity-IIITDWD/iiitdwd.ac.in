import { Profile } from '@/types/profile';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="flex p-4 mt-4 flex-col items-center justify-center md:px-24 lg:px-44">
      <span className="text-2xl md:text-4xl mb-8 text-dwd-primary text-center w-full font-semibold">
        Director&apos;s Message
      </span>
      <div className="p-4 flex flex-col gap-4 items-center md:inline content-center">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <Image
            src={director.imageURL}
            alt={'Image of Director'}
            width={0}
            height={0}
            sizes="100%"
            className="md:h-[24rem] w-full md:w-auto"
          />
          <div className="flex flex-col gap-4">
            <span className="text-dwd-primary font-semibold md:text-lg">
              {heading}
            </span>
            <span className="my-6 text-justify">{text1}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-4">
          <span className="text-justify">{text2}</span>
          <span className="text-justify">{text3}</span>
        </div>
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
      </div>
    </div>
  );
};

export default DirectorsMessage;
