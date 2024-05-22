
import React from 'react';

import ReadMoreLess from './readmore';

import Image from 'next/image';



import Link from 'next/link';
interface propstype {
    title: string
    details: string
    date: string
    GI: string
    Apllication: string
}



const Card = (props: propstype) => {




    return (


        <>
            {/* ! Laptop */}
            <div className="hidden lg:flex card py-4 px-4 w-[100%] mt-3  flex-col gap-3  bg-white rounded-lg ">


                <div className="tilte w-1/2 font-bold text-4xl">  {props.title}</div>


                <div className="InstructionnApply flex gap-2 justify-between items-center ">

                    <div className="details w-1/2">
                        <ReadMoreLess text={props.details} />
                    </div>


                    <div className="btns flex w-1/2 gap-4 justify-between items-center">
                        <div className="lastdate w-1/3 text-center text-2xl text-red-600 ">{props.date} </div>
                        <button className=' border border-dwd-primary rounded-xl p-3'><Link href={props.GI}>
                            <Image src="/pdf.png"  width={20} height={20} alt="" />


                        </Link></button>
                        <button className='w-1/4 bg-dwd-primary text-white  rounded-xl p-3'><Link href={props.Apllication}>Apply Now</Link></button>
                    </div>


                </div>



            </div>



            {/* ! Tablet */}
            <div className="hidden md:flex lg:hidden  card  mt-3 border-[2px] border-dwd-primary flex-col gap-3  bg-white rounded-lg p-3">
                <div className="tilte font-bold text-3xl">  {props.title}</div>
                <ReadMoreLess text={props.details} />




                <div className="lastdate text-2xl text-red-600 ">Last date to receive applications: {props.date} </div>
                <div className="InstructionnApply flex gap-2 justify-between">
                    <button className='w-1/2 border border-[#01122b] text-black rounded-xl p-3'><Link href={props.GI}>General Instruction</Link></button>
                    <button className='w-1/2 bg-[#01122b] text-white  rounded-xl p-3'><Link href={props.Apllication}>Apply Now</Link></button>
                </div>
            </div>


            {/*! phone */}

            <div className=" md:hidden card   mt-3 flex flex-col gap-3  border-[2px] border-dwd-primary  bg-white rounded-lg p-3">
                <div className="tilte font-bold text-2xl">  {props.title}</div>


                <ReadMoreLess text={props.details} />



                <div className="lastdate text-xl text-red-600 ">Last date to receive applications: {props.date} </div>
                <div className="InstructionnApply flex gap-2 justify-between">
                    <button className='w-1/2 border border-[#01122b] text-black rounded-xl p-1'><Link href={props.GI}>General Instruction</Link></button>
                    <button className='w-1/2 bg-[#01122b] text-white  rounded-xl p-1'><Link href={props.Apllication}>Apply Now</Link></button>
                </div>
            </div>











        </>











    )
}

export default Card















