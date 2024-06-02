import { Construction } from 'lucide-react';
import { Metadata } from 'next';
import { announcements } from '@/data/announcements';

export default function Page() {
  return (
    <div className="flex flex-col h-full w-full">
      <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/LandingPage.png')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
        <p className="text-white z-[1] text-3xl font-bold">Announcements</p>
      </section>
      <div className="my-10 w-full flex flex-col items-center md:px-24 sm:px-10 p-4 gap-6">
        <div className="flex flex-col gap-2 p-2 w-full">
          {announcements?.map((item, index) => (
            <a
              href={item?.link}
              target="_blank"
              key={index}
              className="text-dwd-primary shadow group relative hover:bg-dwd-primary hover:text-white bg-[#C7D3DE50] rounded items-center cursor-pointer p-1 pr-12 flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-5 flex-none"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
              <div>{item?.text}</div>
              {item?.new && (
                <div className="absolute top-1 group-hover:bg-red-500 group-hover:text-white right-1 text-xs px-2 py-1 bg-red-300/50 rounded text-red-500">
                  New
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Announcements',
};
