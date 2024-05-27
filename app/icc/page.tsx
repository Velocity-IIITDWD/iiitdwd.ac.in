"use client"


import React from 'react'
import { Button } from '@/components/ui/button';

import { FileText, Mail } from 'lucide-react';

const openLink = (url: string) => {
    window.open(url, '_blank');
};



const page = () => {
    return (
        <>



            <div className="cont flex flex-col items-center min-h-[90vh]">
                <div className="head my-5 font-bold text-center text-2xl md:text-3xl lg:text-5xl">Internal Complaints Committee</div>
                <Button onClick={() => { openLink("https://iiitdwd.ac.in/docs/sexual-harrassment-of-women-act-and-rules-2013.pdf") }} className=' h-auto text-white text-[11px]  md:text-2xl w-fit my-5 bg-dwd-primary hover:drop-shadow-xl    hover:scale-[1.05] transition' >Sexual harrassment of women act and rules<FileText className='m-2' /></Button>
                <div className="2btns flex gap-5 md:gap-16">
                    <Button onClick={() => { openLink("https://iiitdwd.ac.in/docs/Committe-details-for-website.pdf") }} className=' h-auto text-white text-[11px]  md:text-2xl w-max my-5 bg-dwd-primary hover:drop-shadow-xl    hover:scale-[1.05] transition' >Committe details <FileText className='m-2' /></Button>
                    <Button onClick={() => { openLink("mailto:icc@iiitdwd.ac.in") }} className=' h-auto text-white text-[11px]  md:text-2xl w-max my-5 bg-dwd-primary hover:drop-shadow-xl    hover:scale-[1.05] transition' > Contact ICC <Mail className='my-2 mx-3' /></Button>
                </div>



            </div>




        </>
    )
}

export default page
