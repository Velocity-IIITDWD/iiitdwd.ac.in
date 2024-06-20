'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import MobileBtn from './MobileButton'
import { annualReports, annualReportsStructure } from '@/data/annual_reports';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export default function Reports() {
  annualReports.sort((a,b) => b.id - a.id)
  const [selectedReport, setIssue] = useState(annualReports[0])
  return (
    <>
      <div className='md:hidden flex flex-wrap gap-4 self-center justify-center'>
        {
          annualReports.map((report: annualReportsStructure, index: number) => (
            <MobileBtn key={report.id} {...report} />
          ))
        }
      </div>
      <div className='max-md:hidden flex flex-col gap-4'>
        <div className='flex gap-4 justify-center flex-wrap'>
          {annualReports.map((report) => (
            <HoverCard key={report.id}>
              <HoverCardTrigger>
                <button className='bg-dwd-primary px-4 py-2 rounded text-white w-fit self-center text-center' onClick={() => setIssue(report)}>{report.displayText}</button>
              </HoverCardTrigger>
              <HoverCardContent className='m-2 flex flex-col items-center gap-2 border-0'>
                <Image onClick={() => setIssue(report)} alt='annual report cover image' loading='eager' src={report.previewImg} height={200} width={200} className='cursor-pointer w-fit h-fit rounded-t-md' />
                <Link prefetch={false} href={selectedReport.issueUrl} className='bg-dwd-primary px-4 py-2 rounded text-white self-center text-center w-full'>
                  Open as a tab
                </Link>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        <iframe src={selectedReport.issueUrl} className='max-h-[80vh] h-[720px] rounded' />
      </div>
    </>
  )
}