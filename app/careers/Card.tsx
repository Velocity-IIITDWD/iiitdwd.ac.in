
import React from 'react';

import ReadMoreLess from '../../components/readmore';

import Image from 'next/image';
import { Button } from '@/components/ui/button'

import { jobstype } from '@/data/jobs';


const openLink = (url:string) => {
  window.open(url, '_blank');
};


const Card = ({ jobdata }: { jobdata: jobstype }) => {




  return (


    <>
      {/* ! Laptop */}
            
            
   

      <div className=" hidden lg:flex   card py-4 px-4 w-[100%] mt-3  flex-col gap-3  bg-white rounded-lg ">


        <div className="tilte w-1/2 font-bold text-2xl">  {jobdata.title}</div>


        <div className="InstructionnApply flex gap-2 justify-between items-center ">

          <div className="details w-1/2">
            <ReadMoreLess text={jobdata.details} />
            <div className="Others flex gap-4">



              {jobdata.Applicationoffline ? <Button className='w-1/4   mt-3 hover:drop-shadow-xl    hover:scale-[1.05] hover:bg-white transition border bg-white border-dwd-primary text-black rounded-xl p-3' onClick={()=>{openLink(jobdata.Applicationoffline)}} >Apply Offline</Button> : <div className='hidden' ></div>}
              {jobdata.StatusofApplications ? <Button className='w-1/4   mt-3 hover:drop-shadow-xl hover:scale-[1.05] hover:bg-white transition  break-normal h-auto border bg-white border-dwd-primary text-black rounded-xl p-3' onClick={()=>{openLink(jobdata.StatusofApplications)}}>Status of Application</Button> : <div className='hidden'></div>}
              {jobdata.Addendum ? <Button className='w-1/4   mt-3 hover:drop-shadow-xl    hover:scale-[1.05] hover:bg-white transition border bg-white border-dwd-primary text-black rounded-xl p-3' onClick={()=>{openLink(jobdata.Addendum)}}>Addendum</Button> : <div className='hidden' ></div>}
            </div>
          </div>

          <div className="btns flex w-1/2 gap-4 justify-between items-center">
            <div className="lastdate w-1/3 text-center text-2xl text-red-600 ">{jobdata.date} </div>












            <button className='hover:scale-[1.08] hover:drop-shadow-xl  transition border border-dwd-primary rounded-xl p-3' onClick={()=>{openLink(jobdata.GI)}}>
              <Image src="/pdf.png" width={20} height={20} alt="" />


            </button>
            <button className='w-1/4 hover:scale-[1.08] hover:drop-shadow-xl  transition bg-dwd-primary text-white  rounded-xl p-3'  onClick={()=>{openLink(jobdata.Application)}}>Apply Now</button>
          </div>


        </div>



      </div>



      {/* ! Tablet */}
      <div className="card hidden md:flex lg:hidden  shadow-2xl  mt-3 border-[2px] border-dwd-primary flex-col gap-3  bg-white rounded-lg p-3">
        <div className="tilte font-bold text-3xl">  {jobdata.title}</div>
        <ReadMoreLess text={jobdata.details} />




        <div className="lastdate text-2xl text-red-600 py-4 ">Last date to receive applications: {jobdata.date} </div>
        <div className="InstructionnApply flex gap-2 justify-between">
          <button className='w-1/2 border border-[#01122b] text-black rounded-xl p-3' onClick={()=>{openLink(jobdata.GI)}}>General Instruction</button>
          {jobdata.Applicationoffline ? <button className='w-1/2  bg-[#01122b] text-white  rounded-xl p-3' onClick={()=>{openLink(jobdata.Applicationoffline)}}>Apply Offline</button> : <div className='hidden' ></div>}
          {jobdata.StatusofApplications ? <button className='w-1/2  bg-[#01122b] text-white  rounded-xl p-3' onClick={()=>{openLink(jobdata.StatusofApplications)}}>Status of Application</button>: <div className='hidden'></div>}
          {jobdata.Addendum ? <button className='w-1/2  bg-[#01122b] text-white  rounded-xl p-3' onClick={()=>{openLink(jobdata.Addendum)}}>Addendum</button>: <div className='hidden'></div>}
          <button className='w-1/2 bg-[#01122b] text-white  rounded-xl p-3' onClick={()=>{openLink(jobdata.Application)}} >Apply Now</button>
        </div>
      </div>


      {/*! phone */}

      <div className=" md:hidden card shadow-2xl overflow-hidden   mt-3 flex flex-col gap-3  border-[2px] border-dwd-primary  bg-white rounded-lg p-3">
        <div className="tilte font-bold text-2xl">  {jobdata.title}</div>


        <ReadMoreLess text={jobdata.details} />



        <div className="lastdate text-xl text-red-600 ">Last date to receive applications: {jobdata.date} </div>
        <div className="InstructionnApply flex gap-2 justify-between">
          <button className='w-1/2 border border-[#01122b] text-black rounded-xl p-1' onClick={()=>{openLink(jobdata.GI)}} >General Instruction</button>

          {jobdata.Applicationoffline ? <button className='w-1/2 bg-[#01122b] text-white  rounded-xl p-1' onClick={()=>{openLink(jobdata.Applicationoffline)}}>Apply Offline</button> : <div className='hidden' ></div>}
          {jobdata.StatusofApplications ? <button className='w-1/2 bg-[#01122b] text-white  rounded-xl p-1' onClick={()=>{openLink(jobdata.StatusofApplications)}} >Status of Application</button>: <div className='hidden'></div>}
          {jobdata.Addendum  ? <Button className='w-1/2 bg-[#01122b] text-white  rounded-xl p-1' onClick={()=>{openLink(jobdata.Addendum)}}>Addendum</Button>: <div className='hidden'></div>}



          <button className='w-1/2 bg-[#01122b] text-white  rounded-xl p-1' onClick={()=>{openLink(jobdata.Application)}}>Apply Now</button>
        </div>
      </div>











    </>











  )
}

export default Card















