import './base.css';
import { ChevronDownIcon, CopyrightIcon, FacebookIcon, HomeIcon, LinkedinIcon, MailIcon, MenuIcon, PhoneIcon, YoutubeIcon } from 'lucide-react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import { announcements } from '@/mockData/announcements';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

type HeaderDropdownProps = {
    trigger: React.ReactNode
    subItems: React.ReactNode[]
};

function HeaderDropdown({ trigger, subItems }: HeaderDropdownProps, direction?: 'col' | 'row', isRight = false) {
    if (!direction) direction = 'col';
    const dirClass = direction === 'col' ? 'flex-col' : 'flex-row';
    const dividerClass = direction === 'col' ? 'w-full' : 'h-full';

    const separatedSubItems: React.ReactNode[] = [];
    for (let i = 0; i < subItems.length; i++) {
        separatedSubItems.push(subItems[i]);
        if (i !== subItems.length - 1) separatedSubItems.push(<div className={'self-center border-b border-dwd-secondary1 ' + dividerClass}></div>)
    }


    // Another atrocity, ill fix it later
    const shiftToLeft = isRight ? '-translate-x-7' : ''

    return (
        <div className='relative flex items-center group cursor-pointer'>
            {trigger} <ChevronDownIcon className='rotate-0 transition-transform duration-500 group-hover:rotate-180' size='1rem' />

            <div className={'hidden group-focus-within:block group-hover:block absolute top-0 z-10 ' + shiftToLeft}>
                <div className='invisible h-10'></div>
                <div
                    className={'flex gap-4 border border-dwd-secondary1 opacity-0 ' +
                        'group-hover:opacity-100 transition-opacity duration-200 bg-white p-4 ' + dirClass}
                >
                    {separatedSubItems}
                </div>
            </div>
        </div>
    );
}

function Header() {
    const latestAnnouncement = announcements.length ? announcements.toSorted((a, b) => b.timestamp - a.timestamp)[0] : undefined;

    const AboutMenu = HeaderDropdown({
        trigger: <>About</>,
        subItems: [
            <Link className='hover:underline' href='/about/introduction' key='introduction'>Introduction</Link>,
            <Link className='hover:underline' href='/about/vision' key='vision'>Vision and Message</Link>,
            <Link className='hover:underline' href='/about/message' key='message'>Director&apos;s Message</Link>,
            <Link className='hover:underline' href='/about/organization' key='organization'>Organization</Link>
        ]
    });

    const CampusMenu = HeaderDropdown({
        trigger: <>Campus</>,
        subItems: [
            <Link className='hover:underline' href='/campus/facilities' key='facilities'>Facilities</Link>,
            <Link className='hover:underline' href='/campus/clubs' key='clubs'>Clubs</Link>,
            <Link className='hover:underline' href='/campus/events' key='events'>Events</Link>,
            <Link className='hover:underline' href='/campus/magazine' key='magazine'>Magazine</Link>
        ]
    }, 'col', true);

    const AdmissionsMenu = HeaderDropdown({
        trigger: <>Admissions</>,
        subItems: [
            <Link className='hover:underline' href='/admissions/btech' key='btech'>BTech</Link>,
            <Link className='hover:underline' href='/admissions/phd' key='phd'>PhD</Link>
        ]
    });

    const AcademicsMenu = HeaderDropdown({
        trigger: <>Academics</>,
        subItems: [
            <Link className='hover:underline' href='/academics/faculty' key='faculty'>Facilities</Link>,
            <Link className='hover:underline' href='/academics/research' key='research'>Research</Link>,
            <Link className='hover:underline' href='/academics/departments' key='departments'>Departments</Link>,
        ]
    })

    return (
        <header className='flex flex-col w-full h-fit'>
            <div className='flex flex-col lg:flex-row bg-dwd-secondary1 px-2'>
                {latestAnnouncement && <div className='lg:w-1/2 overflow-hidden'>
                    <div className='animate-marquee'>
                        <Link href={latestAnnouncement.href} className='flex gap-2 items-center'>
                            <span className='text-xs px-1 text-white bg-red-500 animate-pulse'>NEW</span>
                            {latestAnnouncement.text}
                            <span className='text-xs px-1 text-white bg-red-500 animate-pulse'>NEW</span>
                        </Link>
                    </div>
                </div>}
                <div className='lg:w-1/2 text-center lg:text-right'>
                    NIRF | SBI Collect | what other links | go here
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-start border border-dwd-secondary1 relative md:h-18 lg:h-24'>
                {/* <div className='hidden lg:block'> */}
                <Image
                    src='/brand/logo-square-light.png'
                    width={0}
                    height={0}
                    sizes='100%'
                    style={{ height: '100%', width: 'auto' }}
                    alt='IIIT Dharwad Logo'
                    className='lg:mr-auto'
                />
                {/* </div> */}
                {/* <div className='lg:hidden'>
                    <Image
                        src='/brand/logo-long-light.png'
                        width={0}
                        height={0}
                        sizes='100%'
                        style={{ height: '100%', width: 'auto' }}
                        alt='IIIT Dharwad Logo'
                        className='lg:mr-auto'
                    />
                </div> */}

                {/* Atrocity */}
                <div className='hidden lg:flex items-center justify-center w-full gap-8'>
                    <Link href='/' className='hover:underline'>Home</Link>
                    {AboutMenu}
                    {CampusMenu}
                    {AdmissionsMenu}
                    {AcademicsMenu}
                    <Link href='/placements' className='hover:underline'>Placements</Link>
                    <Link href='/tenders' className='hover:underline'>Tenders</Link>
                    <Link href='/jobs' className='hover:underline'>Jobs</Link>
                    <Link href='/contact' className='hover:underline'>Contact Us</Link>
                </div>

                {/* {HeaderDropdown({
                    trigger: (<div className='w-full px-2 flex lg:hidden items-end justify-end'>
                        <MenuIcon size='2rem' />
                    </div>),
                    subItems: [(
                        <div key='1' className='grid grid-cols-3 md:grid-cols-5 place-items-center w-full gap-8'>
                            <Link href='/' className='hover:underline'>Home</Link>
                            {AboutMenu}
                            {CampusMenu}
                            {AdmissionsMenu}
                            {AcademicsMenu}
                            <Link href='/placements' className='hover:underline'>Placements</Link>
                            <Link href='/tenders' className='hover:underline'>Tenders</Link>
                            <Link href='/jobs' className='hover:underline'>Jobs</Link>
                            <Link href='/contact' className='hover:underline'>Contact Us</Link>
                        </div>
                    )]
                }, 'row')} */}
            </div>
        </header>
    );
}

function XIcon({ size } = { size: '2rem' }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='currentColor' viewBox='0 0 16 16'>
            <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
        </svg>
    );
}

function Footer() {
    return (
        <footer className='mt-auto flex flex-col bg-dwd-primary text-white text-xs w-full h-fit px-8 py-4 gap-8'>
            <div className='flex flex-col lg:flex-row gap-8 items-start justify-start'>
                <div className='flex flex-col w-fit gap-4'>
                    <h2 className='font-bold text-lg lg:text-2xl'>Address</h2>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 items-center'><HomeIcon size='1rem' /> IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony, Dharwad 580009</div>
                        <div className='flex gap-2 items-center'>
                            <PhoneIcon size='1rem' />
                            <span>
                                <a href='tel:0836 2250879'>0836 2250879</a>,
                                <a href='tel:9449732959' >9449732959</a>
                            </span>
                        </div>
                        <a href='mailto:contact@iiitdwd.ac.in' className='flex gap-2 items-center'>
                            <MailIcon size='1rem' />
                            contact@iiitdwd.ac.in
                        </a>
                    </div>

                </div>
                <div className='flex flex-col w-fit gap-4'>
                    <h2 className='font-bold text-lg lg:text-2xl'>Social Links</h2>
                    <div className='flex flex-col gap-2'>
                        <a href='https://www.linkedin.com/in/iiitdharwad/' className='flex gap-2'><LinkedinIcon size='1rem' /> LinkedIn</a>
                        <a href='https://www.facebook.com/IIIT-Dharwad-107055984131970/' className='flex gap-2'><FacebookIcon size='1rem' /> Facebook</a>
                        <a href='https://twitter.com/dharwad_iiit' className='flex gap-2'><XIcon size='1rem' /> Twitter</a>
                        <a href='https://twitter.com/dharwad_iiit' className='flex gap-2'><YoutubeIcon size='1rem' /> YouTube</a>
                    </div>
                </div>
                <div className='w-fit lg:mt-12 lg:ml-auto'>
                    Copyright <CopyrightIcon className='inline' size='1rem' /> 2024
                    IIIT Dharwad, All rights reserved
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-4'>
                <div className='flex flex-row flex-wrap gap-2 text-sm [&>*]:odd:font-bold'>
                    <a href='https://iiitdwd.ac.in/docs/iiit_ppp_2017.pdf'>IIIT PPP Act</a> |
                    <a href='https://iiitdwd.ac.in/docs/ARIIA.pdf'>ARIIA</a> |
                    <a href='https://iiitdwd.ac.in/docs/RTI.pdf'>RTI</a> |
                    <a href='https://aims.iiitdwd.ac.in/aims/'>AIMS</a> |
                    <a href='https://gmail.com/'>Webmail</a> |
                    <a href='https://iiitdwd.ac.in/ICC.php'>ICC</a> |
                    <a href='https://iiitdwd.ac.in/Annual_Reports.php'>Annual Reports</a>
                </div>
                <div className='font-bold text-lg'>
                    <Link href='/contact' className='underline'>Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
