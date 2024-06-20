'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import MobileBtn from './MobileButton'
import { issueStructure } from '@/data/magazine';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { issues } from '@/data/magazine'

export default function Issues() {
  issues.sort((a,b) => b.id - a.id)
  const [selectedIssue, setIssue] = useState(issues[0])
  return (
    <>
      <div className='md:hidden flex flex-wrap gap-4 self-center justify-center'>
        {
          issues.map((issue: issueStructure, index: number) => (
            <MobileBtn key={issue.id} {...issue} />
          ))
        }
      </div>
      <div className='max-md:hidden flex flex-col gap-4'>
        <div className='flex gap-4 justify-center flex-wrap'>
          {issues.map((issue) => (
            <HoverCard key={issue.id}>
              <HoverCardTrigger>
                <button className='bg-dwd-primary px-4 py-2 rounded text-white w-fit self-center text-center' onClick={() => setIssue(issue)}>{issue.displayText}</button>
              </HoverCardTrigger>
              <HoverCardContent className='m-2 flex flex-col items-center gap-2 border-0'>
                <Image onClick={() => setIssue(issue)} alt='magazine cover image' loading='eager' src={issue.previewImg} height={200} width={200} className='cursor-pointer w-fit h-fit rounded-t-md' />
                <Link prefetch={false} href={selectedIssue.issueUrl} className='bg-dwd-primary px-4 py-2 rounded text-white self-center text-center w-full'>
                  Open as a tab
                </Link>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        <iframe src={selectedIssue.issueUrl} className='max-h-[80vh] h-[720px] rounded' />
      </div>
    </>
  )
}