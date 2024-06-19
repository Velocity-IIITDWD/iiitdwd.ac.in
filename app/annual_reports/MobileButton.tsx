'use client'

import Link from 'next/link';
import { issueStructure } from '@/data/magazine'
import Image from 'next/image';

export default function Button(report: issueStructure) {
  return (
    <Link prefetch={false} href={report.issueUrl} className='border-2 bg-dwd-secondary2/25 border-dwd-secondary2 p-2 gap-2 w-40 flex flex-col justify-center rounded'>
      <Image alt="annual report cover image" loading='lazy' src={report.previewImg} height={200} width={200} className='w-fit h-fit rounded-t-md bg-white' />
      <p className='bg-dwd-primary px-4 py-2 rounded text-white w-fit self-center text-center'>
        {report.displayText}
      </p>
    </Link>
  )
}