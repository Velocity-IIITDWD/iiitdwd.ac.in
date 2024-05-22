import director from '@/assets/images/faculty/director.jpg';
import Image from 'next/image';
import Link from 'next/link';
interface DirectorsMessageProps {
  heading: string;
  text: string;
  directorName: string;
}
const DirectorsMessage = ({
    heading,
    text,
    directorName,
}: DirectorsMessageProps) => {
    return (
        <div className="flex p-4 mt-4 flex-col items-center justify-center">
            <span className="text-2xl md:text-4xl mb-8 text-dwd-primary text-center w-full font-semibold">
        Directors Message
            </span>
            <p className="p-4 flex flex-col items-center md:inline content-center">
                <Image
                    src={director}
                    alt={'Image of Director'}
                    className="sm:float-left w-3/4 sm:w-5/12 lg:w-1/3 mb-4  md:mr-8"
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
                    <span className="md:text-lg font-bold">{directorName}</span>
                    <br />
          Director IIIT Dharwad
                </Link>
            </p>
        </div>
    );
};

export default DirectorsMessage;
