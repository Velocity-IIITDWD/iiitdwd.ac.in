/* eslint-disable indent */
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CSEDetails } from '@/data/academics';
import Curriculum from '@/components/academics/Curriculum';
import { Metadata } from 'next';

export default function page() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-10 item-center ">
      <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/LandingPage.png')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
        <p className="text-white z-[1] text-3xl font-bold text-center">
          Computer Science and Engineering (CSE)
        </p>
      </section>
      <div className="w-full lg:px-24 px-4 md:px-10 items-center flex lg:flex-row gap-16 flex-col lg:justify-between">
        <div className="flex flex-col lg:w-1/2 bg-slate-200 rounded shadow-lg p-4">
          <p className="text-dwd-primary pb-2">
            The CSE program at IIIT Dharwad emphasizes:
          </p>
          <ul className="list-disc pl-6 text-justify">
            <li>
              Computational and algorithmic thinking: Students develop the
              ability to solve problems efficiently and effectively using
              computers.
            </li>
            <li>
              Strong foundation in core CS concepts: The curriculum covers a
              wide range of topics, including programming languages, data
              structures, algorithms, computer architecture, operating systems,
              networking, and database management systems.
            </li>
            <li>
              Exposure to emerging technologies: The program keeps pace with the
              latest advancements in the field by incorporating courses in areas
              like artificial intelligence, machine learning, and data science
            </li>
          </ul>
          <a
            href="/docs/course_description_cse.pdf"
            className="rounded bg-dwd-primary flex items-center w-fit mt-10 justify-center p-3 text-white"
            download="Curriculum.pdf"
          >
            Course Description
          </a>
        </div>

        <div className="lg:w-1/2 max-w-[600px] rounded overflow-hidden shadow-lg border border-slate-400">
          <Table className="text-slate-900 overflow-hidden rounded">
            <TableHeader className="bg-slate-200">
              <TableRow>
                <TableHead className="border border-slate-400 border-t-0 border-l-0 w-[60px]"></TableHead>
                <TableHead className="border border-slate-400 border-t-0 text-slate-900">
                  Type of Courses
                </TableHead>
                <TableHead className="border border-slate-400 border-t-0 border-r-0 text-slate-900">
                  Credits
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-medium">
              {CSEDetails?.map((item, key) => (
                <TableRow className="odd:bg-gray-100" key={key}>
                  <TableCell className="border-r border-slate-400 font-semibold">
                    {key + 1}
                  </TableCell>
                  <TableCell className="border-r border-slate-400">
                    {item?.course}
                  </TableCell>
                  <TableCell>{item?.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="w-full pb-10 lg:px-24 px-4 md:px-10">
        <Curriculum type={0} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'CSE',
};
