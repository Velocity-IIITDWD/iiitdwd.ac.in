'use client'

import Link from 'next/link';
import {issueStructure} from '@/data/magazine'

export default function Button(issue: issueStructure) {
  return (
    <Link onTouchEnd={() => {}} target='_blank' href={issue.issueUrl} className='bg-dwd-primary px-4 py-2 rounded text-white w-fit self-center text-center'>
      {issue.displayText}
    </Link>
  )
}