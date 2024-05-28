'use client';

import React, { useState } from 'react';
import Card from '@/app/careers/Card';
import { jobsdata } from '@/data/jobs';
import Image from 'next/image';
import searchimg from '@/assets/careers/search.png' 


const Page = () => {
  const [selectedcategory, setselectedcategory] = useState('');
  const [searchquery, setsearchquery] = useState('');
  const [search, setsearch] = useState('');

  const handledropdown = (event: any) => {
    setselectedcategory(event.target.value);
  
  
  };


  const handlesearch = () => {
    setsearch(searchquery);
  };

  const filteredJobs = jobsdata.filter(
    (job) =>
      (!selectedcategory || job.cat === selectedcategory) &&
      (!search || job.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <div className="content flex flex-col items-center pt-[3vh] overflow-x-hidden w-[100%] mb-7">
        <div id="temp" className="textcont pb-[2vh]">
          <div className=" Head text-center font-bold z-10 text-[#091d3f] text-6xl p-8">
            Careers
          </div>
        </div>
        <div className="dropdownNsearch px-2 flex items-center gap-5 justify-center w-[100vw] h-10">
          <div className="Dropdown hover:scale-[1.05]  hover:drop-shadow-2xl transition flex items-center">  
            <select
              className="w-[20vw] pl-2 text-black text-lg md:text-3xl bg-dwd-secondary2 outline-none  h-9 rounded-lg"
              onChange={handledropdown}
              name="category"
              id="category"
            >
              <option value="">All</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="search hover:scale-[1.01]  hover:drop-shadow-2xl transition flex items-center">
            <input
              className="bg-white w-[60vw] md:w-[60vw] lg:w-[20vw] h-9 rounded-[10px_0px_0px_10px] text-center border border-black text-2xl md:text-3xl"
              onChange={(e) => {
                setsearchquery(e.target.value);
                if (!e.target.value) {
                  handlesearch();
                }
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handlesearch();
                }
              }}
              type="text"
              placeholder="Search..."
            />
            <div
              className="bg-dwd-secondary2  flex items-center justify-center px-1 py-2 md:px-5 md:py-2 text-white font-semibold rounded-[0px_10px_10px_0px] cursor-pointer"
              onClick={handlesearch}
            >
              <Image width={20} height={20} src={searchimg} alt="" />
            </div>
          </div>
        </div>
        <div className="jobcont lg:border border-black mt-5 w-[90%]">
          <div className="hidden lg:block Header bg-dwd-primary text-white border border-black">
            <div className="flex justify-between items-center">
              <div className="title text-2xl py-2 w-1/2 text-center">
                Title and Description
              </div>
              <div className="w-1/2 flex justify-around gap-5">
                <div
                  className="
                                date text-2xl py-2"
                >
                  Last date to receive applications
                </div>
                <div className="gi text-2xl py-2">General Instruction</div>
                <div className="app text-2xl py-2 pr-2">Application Form</div>
              </div>
            </div>
          </div>
          {filteredJobs.map((jobdata, index) => (
            <Card key={index} jobdata={jobdata} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
