"use client";
import {FC, useState} from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ProfileProps } from "@/data/faculty_profile";
import Profile from './[id]/page';

type ProfileProp = {
    id: string,
    content: {head: {
        name: string,
        profile_pdf: string
    },

    card: {
        photo: string,
        designation: string,
        department: string,
        mail_id: string,
        cabin_number: string
    },

    body:{
        profile_text: string,
        interest_areas: string[]
    }}

};


interface ListProps {
    ll: ProfileProp[];
  }

  const List = ({ ll }: ListProps) => {
    const f_array = ll.map((arr) => <li key={arr.id} className='bg-dwd-secondary2 hover:bg-dwd-secondary1 flex-col flex-none justify-center text-background px-6 py-6 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 '>
        <Link href={`/faculty/${arr.id}`}>
        <div className="flex flex-col gap-2 ">
                <Image
                    src={arr.content.card.photo}
                    width={0}
                    height={0}
                    sizes='100%'
                    style={{ height: '100%', width: 'auto' }}
                    alt='IIIT Dharwad Logo'
                    className='block lg:hidden xl:block mr-auto'
                />
                <h3 className='text-dwd-primary  font-bold'>{arr.content.head.name}</h3>
                <h6>{arr.content.card.designation}</h6>
                <h6>{arr.content.card.department}</h6>
        </div>
        </Link>
    </li>);
    return (
      <>
      <div className="flex flex-col justify-center py-12 m-2 ml-4 gap-4 ">
            <div className='flex justify-center font-bold text-3xl text-dwd-primary bg-dwd-secondary2 py-6 rounded'>Faculty</div>
            <ul className='bg-background flex flex-wrap  mx-12 gap-8 '>{f_array}</ul>
        </div>
      </>
    );
  };

const Faculty = () =>{
    return(
        <>
            <List ll={ProfileProps}/>
        </>
    );
}

export default Faculty ;
