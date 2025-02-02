'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import MobileBtn from './MobileButton'
import { annualReportsStructure } from '@/data/annual_reports';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export default function Reports({Fulldata}: { Fulldata: annualReportsStructure[] }) {
  
  const [selectedReport, setIssue] = useState<annualReportsStructure | null>(null);

  useEffect(() => {
    if (Fulldata.length > 0) {
      setIssue(Fulldata[0]);
    }
  }, [Fulldata]);
  return (
    <>
      <div className='md:hidden flex flex-wrap gap-4 self-center justify-center'>
        {
          Fulldata?.map((report: annualReportsStructure, index: number) => (
            <MobileBtn key={index} {...report} />
          ))
        }
      </div>
      <div className='max-md:hidden flex flex-col gap-4'>
        <div className='flex gap-4 justify-center flex-wrap'>
          {Fulldata?.map((report) => (
            <HoverCard key={report.id}>
              <HoverCardTrigger>
                <button className='bg-dwd-primary px-4 py-2 rounded text-white w-fit self-center text-center' onClick={() => setIssue(report)}>{report.displayText}</button>
              </HoverCardTrigger>
              <HoverCardContent className='m-2 flex flex-col items-center gap-2 border-0'>
                <Image onClick={() => setIssue(report)} alt='annual report cover image' loading='eager' src={report.previewImg} height={200} width={200} className='cursor-pointer w-fit h-fit rounded-t-md' />
                <Link target='_blank' href={report.issueUrl} className='bg-dwd-primary px-4 py-2 rounded text-white self-center text-center w-full'>
                  Open in new tab
                </Link>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        {selectedReport && <iframe src={selectedReport.issueUrl} className='max-h-[80vh] h-[720px] rounded' />}
      </div>
    </>
  )
}