'use client';

import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from '@/components/ui/select';
import { FileTextIcon, SearchIcon, SquareArrowOutUpRight } from 'lucide-react';

import { jobsData } from '@/data/jobs';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const currDate = new Date();


const updatedJobsData = jobsData.map(job => {
  const splittedDate = job.lastDate.split('.').map(num => Number(num));
  const jobDate = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);
  return ({ ...job, application: jobDate > currDate ? job.application : '#', actualDate: jobDate })
}).sort((a,b) => new Date(b.actualDate).getTime() - new Date(a.actualDate).getTime())


export default function CareersPage() {
  const [category, setCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(updatedJobsData);
  useEffect(() => {
    setFilteredJobs(
      updatedJobsData
        .filter(job => category === 'all' || job.category === category)
        .filter(job => !searchText || job.title.toLowerCase().includes(searchText.toLowerCase()) || job.details.toLowerCase().includes(searchText.toLowerCase()))
    );
  }, [category, searchText]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const updateSearch = useCallback(() => {
    searchInputRef.current && setSearchText(searchInputRef.current.value);
  }, [])

  return (
    <div className='flex flex-col w-full h-fit items-center mb-8'>
      <h1 className='heading-text font-bold p-8 my-8'>Careers</h1>

      {/* Filters */}
      <div className='w-full flex flex-col px-4 gap-4'>
        <div className='flex flex-col-reverse justify-center items-center lg:flex-row gap-4'>
          <Select defaultValue='all' onValueChange={setCategory}>
            <SelectTrigger className='rounded-sm w-full max-w-sm self-end lg:self-auto'>
              <SelectValue placeholder='Filter by category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='faculty'>Faculty</SelectItem>
              <SelectItem value='staff'>Staff</SelectItem>
              <SelectItem value='others'>Others</SelectItem>
            </SelectContent>
          </Select>

          <search className='rounded-sm overflow-clip flex w-full lg:max-w-md h-10'>

            <input
              onKeyDown={e => e.key === 'Enter' && updateSearch()}
              ref={searchInputRef}
              className='w-full focus:outline-none pl-2 border border-r-0 border-gray-200 rounded-sm'
              type='text'
              placeholder='Search...'
            />
            <div onClick={updateSearch} className='flex items-center justify-center h-full w-16 bg-dwd-primary'>
              <SearchIcon size='1rem' stroke='white' />
            </div>
          </search>
        </div>

        {/* Actual data */}
        <div>
          {/* Large screen table */}
          <div className='hidden lg:flex flex-col border border-dwd-primary rounded-md'>
            <div className='flex items-center bg-dwd-primary w-full text-white font-bold px-4'>
              <div className='w-[calc(100%-27rem)]'>Title and Description</div>
              <div className='w-36 text-center'>Deadline</div>
              <div className='w-36 text-center'>General Instructions</div>
              <div className='w-36 text-center'>Application Form</div>
            </div>
            {filteredJobs.map((job, i) => <div key={i} className='flex items-center px-4 py-4 border-b last:border-0 border-dwd-primary'>
              <div className='flex flex-col w-[calc(100%-27rem)]'>
                <h3 className='text-lg font-bold'>{job.title}</h3>
                {job.details && <div className='pr-4'>{job.details}</div>}

                <div className='flex gap-2'>
                  {job.extraInfo.map(([title, link]) => (
                    <Link
                      key={link}
                      className='mt-8 px-4 py-2 border border-dwd-primary rounded-sm hover:bg-gray-100'
                      target='_blank'
                      href={link}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='w-36 text-center font-bold'>{job.lastDate}</div>
              <div className='w-36 flex items-center justify-center'>
                <Link target='_blank' href={job.generalInstructions}>
                  <FileTextIcon size='2rem' />
                </Link>
              </div>
              <div className='w-36 text-center'>
                <Link
                  className='bg-gray-200 px-4 py-4 rounded-sm hover:bg-gray-300'
                  target='_blank'
                  href={job.application}
                >
                  Apply Now
                </Link>
              </div>
            </div>)}
          </div>

          {/* Small and medium screen cards */}
          <div className='w-full flex lg:hidden flex-col gap-4'>
            {filteredJobs.map((job, i) => <div key={i} className='border border-dwd-primary p-4 rounded-sm'>
              <div className='flex flex-col w-full gap-2'>
                <h3 className='text-lg font-bold'>{job.title}</h3>
                {job.details && <div>{job.details}</div>}

                <div className='mt-8'>Deadline: <span className='font-bold'>{job.lastDate}</span></div>

                <div className='flex gap-2'>
                  {job.extraInfo.map(([title, link]) => (
                    <Link
                      key={link}
                      className='mt-8 px-4 py-2 border border-dwd-primary rounded-sm hover:bg-gray-100'
                      target='_blank'
                      href={link}
                    >
                      {title}
                    </Link>
                  ))}
                </div>

                <div className='flex gap-4 mt-8'>
                  <Link
                    className='w-1/2 border border-gray-200 px-4 py-3 rounded-sm hover:bg-gray-100'
                    target='_blank'
                    href={job.generalInstructions}
                  >
                    General Instructions <SquareArrowOutUpRight size='1rem' className='inline' />
                  </Link>
                  <Link
                    className='w-1/2 bg-gray-200 px-4 py-3 rounded-sm hover:bg-gray-300'
                    target='_blank'
                    href={job.application}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div >
  )
}
