"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
const openLink = (url: string) => {
  window.open(url, '_blank');
};

import { linksdata } from '@/data/nirf';


const page = () => {
  return (
    <>
      <div className="min-h-[100vh]">

        <div className=" Head hover:scale-[1.01]  hover:drop-shadow-2xl transition  text-center font-bold  text-dwd-primary text-5xl p-8">
          NIRF
        </div>
        <div className="subhead text-center  font-semibold  text-dwd-primary text-lg md:text-2xl lg:text-3xl p-2">National Institutional Ranking Framework </div>

        <div className="content flex justify-center items-center mt-4 ">

          <div className='w-[90%] md:w-[80%] lg:w-[50%] text-sm md:text-md'>
            The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched by Honourable Minister of Human Resource Development on 29th September 2015.

            <br />
            This framework outlines a methodology to rank institutions across the country. The methodology draws from the overall recommendations broad understanding arrived at by a Core Committee set up by MHRD, to identify the broad parameters for ranking various universities and institutions. The parameters broadly cover  &#39; Teaching, Learning and Resources, &#39;  &#39;Research and Professional Practices, &#39;  &#39;Graduation Outcomes, &#39;  &#39;Outreach and Inclusivity, &#39; and  &#39;Perception &#39;.
          </div>
        </div>


        <div className="reports my-20">


          <div className="prevyr flex-col md:flex-row flex justify-center items-center gap-2 md:gap-20">
            <Button onClick={() => { openLink(linksdata[0].Overall_Report_prev) }} className=' w-max  bg-dwd-primary hover:drop-shadow-xl    hover:scale-[1.05] transition' >NIRF Overall Report {linksdata[0].prev_year}<FileText className='m-2' /></Button>
            <Button className='  w-max bg-dwd-primary hover:drop-shadow-xl    hover:scale-[1.05] transition' onClick={() => { openLink(linksdata[0].Engineering_Report_prev) }} >NIRF Engineering Report  {linksdata[0].prev_year} <FileText className='m-2' /></Button>

          </div>



          <div className=" currentyr flex-col md:flex-row my-2 flex items-center justify-center gap-2 md:gap-20">
            <Button onClick={() => { openLink(linksdata[0].Overall_Report_curr) }} className=' w-max  bg-dwd-primary hover:drop-shadow-xl    hover:scale-[1.05] transition' >NIRF Overall Report {linksdata[0].curr_year} <FileText className='m-2' /></Button>
            <Button onClick={() => { openLink(linksdata[0].Engineering_Report_curr) }} className=' w-max  bg-dwd-primary hover:drop-shadow-xl    hover:scale-[1.05] transition ' >NIRF Engineering Report {linksdata[0].curr_year} <FileText className='m-2' /></Button>

          </div>
        </div>
      </div>

    </>
  )
}

export default page
