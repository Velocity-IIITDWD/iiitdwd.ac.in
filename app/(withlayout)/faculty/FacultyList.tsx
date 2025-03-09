'use client';
import { useState } from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ProfileProp } from '@/data/faculty_profile';

interface ListProps {
  ll: ProfileProp[];
}

const List = ({ ll }: ListProps) => {
  const [CSE, setshowCSE] = useState(false);
  const [ECE, setshowECE] = useState(false);
  const [DSAI, setshowDSAI] = useState(false);
  const [DASD, setshowDASD] = useState(false);
  const [ALL, setshowALL] = useState(true);
  const [search, setSearch] = useState('');
  
  function qwe() {
    const final = ll.filter((a) => {
      let departmentMatches = true;
      
      if (CSE) {
        departmentMatches = a.content.card.department == 'Computer Science & Engineering';
      } 
      else if (ECE) {
        departmentMatches = a.content.card.department == 'Electronics and Communication Engineering';
      } 
      else if (DSAI) {
        departmentMatches = a.content.card.department == 'Data Science and Artificial Intelligence';
      } 
      else if (DASD) {
        departmentMatches = a.content.card.department == 'Department of Arts, Science, and Design';
      }

      const nameMatches = search === '' || 
        a.content.head.name.toLowerCase().includes(search.toLowerCase());
      
      return departmentMatches && nameMatches;
    });

    const f_array = final.map((arr: ProfileProp) => {
      const position = arr?.content?.card?.position;
      return (
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
                loading="lazy"
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
                    {arr?.content?.card?.designation && (
                      <li>{arr.content.card.designation}</li>
                    )}
                    {arr?.content?.card?.PhD && <li>{arr.content.card.PhD}</li>}
                    {Array.isArray(position) && position.length > 0 ? (
                      position.map((line, index) => <li key={index}>{line}</li>)
                    ) : typeof position === 'string' && position.length > 0 ? (
                      <li>{position}</li>
                    ) : null}
                  </ul>
                </div>
                <h6 className="text-sm mt-3">{arr.content.card.department}</h6>
              </div>
            </div>
          </Link>
        </li>
      );
    });
    return f_array;
  }
  const f_array = qwe();
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center py-0 gap-4">
        <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/main_building.webp')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
          <p className="text-white z-[1] text-3xl font-bold">Faculty</p>
        </section>
        
        <div className="bg-gray-200 shadow-inner flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mx-2 px-6 rounded">
          {/* Department filters - Left side */}
          <div className="flex flex-wrap justify-left gap-2 sm:gap-3">
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
                  setshowDASD(false);
                  setshowALL(true);
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
                  setshowDASD(false);
                  setshowALL(false);
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
                  setshowDASD(false);
                  setshowALL(false);
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
                  setshowDASD(false);
                  setshowALL(false);
                }}
              >
                DSAI
              </button>
            </div>
            <div
              className={`bg-background rounded-2xl font-bold px-4 py-1 ${
                DASD
                  ? 'bg-dwd-primary text-background'
                  : 'bg-background text-dwd-primary'
              }`}
            >
              <button
                onClick={() => {
                  setshowCSE(false);
                  setshowECE(false);
                  setshowDSAI(false);
                  setshowDASD(true);
                  setshowALL(false);
                }}
              >
                DASD
              </button>
            </div>
          </div>
          
          <div className="w-full sm:w-auto">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Search faculty by name..."
                value={search}
                onChange={handleSearchChange}
                className="w-full sm:w-56 md:w-64 px-4 py-2 rounded-l-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dwd-primary"
              />
              <button className="bg-dwd-primary text-white px-4 py-2 rounded-r-2xl hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mx-12 mt-4">
          <p className="text-sm text-gray-600">
            {f_array.length} {f_array.length === 1 ? 'faculty' : 'faculties'} found
          </p>
        </div>
        
        <div className="flex">
          {f_array.length > 0 ? (
            <ul className="bg-background grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-12 my-6 gap-8 content-start">
              {f_array}
            </ul>
          ) : (
            <div className="w-full flex justify-center my-12">
              <p className="text-gray-500">No faculty members match your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default List;