'use client';
import { FC, useState } from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ProfileProps, ProfileProp } from '@/data/faculty_profile';
import Profile from './[id]/page';

interface ListProps {
  ll: ProfileProp[];
}

const List = ({ ll }: ListProps) => {
  const [CSE, setshowCSE] = useState(false);
  const [ECE, setshowECE] = useState(false);
  const [DSAI, setshowDSAI] = useState(false);
  const [HS, setshowHS] = useState(false);
  const [ALL, setshowALL] = useState(true);
  let f_array: JSX.Element[];
  function qwe() {
    const final = ll.filter((a) => {
      if (CSE)
        return a.content.card.department == 'Computer Science & Engineering';

      if (ECE)
        return (
          a.content.card.department ==
          'Electronics and Communication Engineering'
        );

      if (DSAI)
        return (
          a.content.card.department == 'Data Science and Intelligent Systems'
        );

      if (HS) return a.content.card.department == 'Humanities & Science';
      if (ALL) return 1 === 1;
    });

    const f_array = final.map((arr: ProfileProp) => (
      <li
        key={arr?.id}
        className="bg-gray-100 hover:bg-gray-50 shadow-lg flex flex-none justify-center text-background p-8 rounded-lg mb-4 "
      >
        <Link href={`/faculty/${arr?.id}`}>
          <div className="flex flex-col gap-4 h-full">
            <Image
              src={arr?.content?.card?.photo}
              width={0}
              height={0}
              sizes="100%"
              style={{ height: '250px', width: '250px' }}
              alt={arr?.content?.head?.name}
              className="shrink-0 object-cover mx-auto rounded-lg shadow"
            />
            <div className="h-full flex flex-col justify-between text-dwd-primary">
              <div className="flex flex-col">
                <h3 className="text-dwd-primary font-bold">
                  {arr?.content?.head?.name}
                </h3>
                <ul className="list-disc text-xs pl-4 text-gray-500 mt-2">
                  <li>{arr?.content?.card?.designation}</li>
                  {arr?.content?.card?.position && (
                    <li>{arr?.content?.card?.position}</li>
                  )}
                </ul>
              </div>
              <h6 className="text-sm mt-3">{arr.content.card.department}</h6>

              {/* <div className="mt-4 flex flex-col gap-2">
                <h6 className="text-xs">{arr.content.card.designation}</h6>
                <h6 className="text-xs">{arr.content.card.department}</h6>
                {arr.content.card.position && (
                  <h6 className="text-sm 0 rounded font-medium w-full">
                    {arr.content.card.position}
                  </h6>
                )}
              </div> */}
            </div>
          </div>
        </Link>
      </li>
    ));
    return f_array;
  }
  f_array = qwe();
  return (
    <>
      <div className="flex flex-col justify-center py-0 gap-4">
        <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/main_building.jpg')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
          <p className="text-white z-[1] text-3xl font-bold">Faculty</p>
        </section>
        <div className="bg-gray-200 shadow-inner flex flex-wrap justify-left gap-6 py-2 mx-2 px-6 rounded ">
          <div
            className={`bg-background rounded-2xl font-bold px-4 py-1 ${
              ALL
                ? 'bg-dwd-primary text-background'
                : 'bg-background text-dwd-primary'
            }`}
          >
            <button
              onClick={() => {
                setshowCSE(false);
                setshowECE(false);
                setshowDSAI(false);
                setshowHS(false);
                setshowALL(true);
                f_array = qwe();
              }}
            >
              ALL
            </button>
          </div>
          <div
            className={`bg-background rounded-2xl font-bold px-4 py-1 ${
              CSE
                ? 'bg-dwd-primary text-background'
                : 'bg-background text-dwd-primary'
            }`}
          >
            <button
              onClick={() => {
                setshowCSE(true);
                setshowECE(false);
                setshowDSAI(false);
                setshowHS(false);
                setshowALL(false);
                f_array = qwe();
              }}
            >
              CSE
            </button>
          </div>
          <div
            className={`bg-background rounded-2xl font-bold px-4 py-1 ${
              ECE
                ? 'bg-dwd-primary text-background'
                : 'bg-background text-dwd-primary'
            }`}
          >
            <button
              onClick={() => {
                setshowCSE(false);
                setshowECE(true);
                setshowDSAI(false);
                setshowHS(false);
                setshowALL(false);
                f_array = qwe();
              }}
            >
              ECE
            </button>
          </div>
          <div
            className={`bg-background rounded-2xl font-bold px-4 py-1 ${
              DSAI
                ? 'bg-dwd-primary text-background'
                : 'bg-background text-dwd-primary'
            }`}
          >
            <button
              onClick={() => {
                setshowCSE(false);
                setshowECE(false);
                setshowDSAI(true);
                setshowHS(false);
                setshowALL(false);
                f_array = qwe();
              }}
            >
              DSAI
            </button>
          </div>
          <div
            className={`bg-background rounded-2xl font-bold px-4 py-1 ${
              HS
                ? 'bg-dwd-primary text-background'
                : 'bg-background text-dwd-primary'
            }`}
          >
            <button
              onClick={() => {
                setshowCSE(false);
                setshowECE(false);
                setshowDSAI(false);
                setshowHS(true);
                setshowALL(false);
                f_array = qwe();
              }}
            >
              HS
            </button>
          </div>
        </div>
        <div className="flex">
          <ul className="bg-background grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-12 my-6 gap-8 content-start ">
            {f_array}
          </ul>
        </div>
      </div>
    </>
  );
};

const Faculty = () => {
  return (
    <>
      <List ll={ProfileProps} />
    </>
  );
};

export default Faculty;
