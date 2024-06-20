import Link from 'next/link';
import {issueStructure} from '@/data/magazine'

export default function MobileButton(issue: issueStructure) {
  return (
    <Link prefetch={false} href={issue.issueUrl} className='bg-dwd-primary px-4 py-2 rounded text-white w-fit self-center text-center'>
      {issue.displayText}
    </Link>
  )
}