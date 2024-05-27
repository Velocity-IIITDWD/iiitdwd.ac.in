'use client';
import { FC, useState } from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ProfileProps } from '@/data/faculty_profile';
import Profile from './[id]/page';

type ProfileProp = {
  id: string;
  content: {
    head: {
      name: string;
      profile_pdf: string;
    };

    card: {
      photo: string;
      designation: string;
      department: string;
      mail_id: string;
      cabin_number: string;
    };

    body: {
      profile_text: string;
      interest_areas: { id: number; area: string }[];
    };
  };
};

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

    const f_array = final.map((arr) => (
      <li
        key={arr.id}
        className="bg-dwd-secondary2 hover:bg-dwd-secondary1 flex grid justify-items-center flex-none justify-center text-background px-6 py-6 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 "
      >
        <Link href={`/faculty/${arr.id}`}>
          <div className="flex flex-col gap-2">
            <Image
              src={arr.content.card.photo}
              width={0}
              height={0}
              sizes="100%"
              style={{ height: '100%', width: '250px' }}
              alt={arr.content.head.name}
              className="object-cover block  xl:block mr-auto"
            />
            <h3 className="text-dwd-primary  font-bold">
              {arr.content.head.name}
            </h3>
            <h6>{arr.content.card.designation}</h6>
            <h6>{arr.content.card.department}</h6>
          </div>
        </Link>
      </li>
    ));
    return f_array;
  }
  f_array = qwe();
  return (
    <>
      <div className="flex flex-col justify-center py-0  m-4 gap-4 ">
        <div className="flex justify-center font-bold text-3xl text-dwd-primary bg-dwd-secondary2 py-6 rounded">
          Faculty
        </div>
        <div className="bg-dwd-secondary1 flex flex-wrap justify-left gap-6 py-2 px-6 rounded ">
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
        <ul className="bg-background flex flex-wrap mx-12 gap-8 ">{f_array}</ul>
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
