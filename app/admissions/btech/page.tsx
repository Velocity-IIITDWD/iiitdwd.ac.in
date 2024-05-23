import Image from 'next/image';
import Link from 'next/link';
import { descriptions, importantDates, year, links } from '@/data/admissions';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Fragment } from 'react';

export default function Page() {
  return (
    <div className="w-fit max-w-5xl p-4 flex flex-col gap-2 pb-12">
      <p className="text-dwd-primary font-bold text-xl text-center mb-2">
        B.Tech. Admissions {year}
      </p>
      <p className="text-lg font-bold text-dwd-primary">Important Dates</p>
      <div className='border-2 border-dwd-secondary2 rounded overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow className=' [&>*]:text-white [&>*]:font-bold bg-dwd-secondary2 hover:bg-dwd-secondary2'>
              <TableHead className="text-center">S.No.</TableHead>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {importantDates.map((invoice, index) => (
              <TableRow key={invoice.id}>
                <TableCell className="text-center">{index + 1}.</TableCell>
                <TableCell className="font-medium text-center">{invoice.title}</TableCell>
                <TableCell className="text-center">
                  {invoice.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Image
        alt="supernumerary admission banner"
        width={1024}
        height={720}
        className="self-center mt-2"
        src="/banner-admission-supernumerary.jpg"
      />
      {
        links.map((obj) => (
          <Fragment key={obj.id}>
            <p className="mt-2 text-lg font-bold text-dwd-primary">{obj.type}</p>
            {
              obj.links.map(o => (
                <Link
                  className='pl-2 text-dwd-primary w-fit block hover:underline underline-offset-2 after:-translate-y-1/3 after:absolute relative after:content-[url("/icons/linkIcon.svg")]'
                  href={o.link}
                  key={o.id}
                >
                  {o.displayText}&nbsp;
                </Link>

              ))
            }
          </Fragment>
        ))
      }
      {
        descriptions.map(obj => (
          <Fragment key={obj.id}>
            <p className="mt-2 text-lg font-bold text-dwd-primary">{obj.heading}</p>
            <p className="pl-2">
              {obj.description}
            </p>
          </Fragment>
        ))
      }
      <p className="mt-2 text-lg font-bold text-dwd-primary">Any Queries?</p>
      <p className="pl-2">
        Dear prospective students, you can directly ask any questions to our
        faculty at&nbsp;
        <Link
          href="mailto:contact@iiitdwd.ac.in"
          className="text-dwd-primary hover:underline underline-offset-2 font-semibold"
        >
          contact@iiitdwd.ac.in
        </Link>
      </p>
    </div>
  );
}
