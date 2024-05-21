import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="max-w-5xl p-4 flex flex-col gap-2">
            <p className="text-dwd-primary font-bold text-xl text-center mb-2">B.Tech. Admissions 2024</p>
            <p className='text-lg font-bold text-dwd-primary'>Important Dates</p>
            <div className='text-center p-2 rounded border-2 border-dwd-primary'>
                Table
            </div>
            <p className='mt-2 text-lg font-bold text-dwd-primary'>Eligibility Criteria</p>
            <Link className='text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>JEE Main cutoff ranks&nbsp;</Link>
            <Link className='text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Seat matrix&nbsp;</Link>
            <Link className='text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Guidelines for students alloted through JoSAA/CSAB Counselling (*will be updated soon*)&nbsp;</Link>
            <Link className='text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Undertaking to be signed by students and their parents&nbsp;</Link>
            <button className='mt-2 block w-fit rounded bg-dwd-primary text-white text-sm p-0'>
                <Link className='block py-2 px-4' href=''>Online B.Tech. Admission Form 2024-25</Link>
            </button>
            <button className='mt-2 block w-fit rounded bg-dwd-primary text-white text-sm p-0'>
                <Link className='block py-2 px-4' href=''>Fee Structure</Link>
            </button>
            <button className='mt-2 block w-fit rounded bg-dwd-primary text-white text-sm p-0'>
                <Link className='block py-2 px-4' href=''>Courses Details</Link>
            </button>
            <button className='mt-2 block w-fit rounded bg-dwd-primary text-white text-sm p-0'>
                <Link className='block py-2 px-4' href=''>Explore our campus</Link>
            </button>
            <p className='mt-2 text-lg font-bold text-dwd-primary'>Any Queries?</p>
            <p>Dear prospective students, you can directly ask any questions to our faculty at <Link href='mailto:contact@iiitdwd.ac.in' className='text-dwd-primary hover:underline underline-offset-2 font-semibold'>contact@iiitdwd.ac.in</Link></p>
        </div>
    )
}