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

export default function page() {
  return (
    <div className="w-full min-h-screen h-full flex py-10 flex-col lg:px-24 px-4 md:px-10 gap-10 item-center ">
      <div className="w-full items-center flex md:flex-row gap-16 flex-col md:justify-between">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-dwd-primary text-xl font-bold pb-3">
            Computer Science and Engineering (CSE)
          </h1>
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
        </div>

        <div className="md:w-1/2 max-w-[600px]">
          <Table className="text-slate-900 overflow-hidden rounded">
            <TableCaption>CSE Course Details.</TableCaption>
            <TableHeader className="bg-[#ffa500]">
              <TableRow>
                <TableHead className="border border-slate-700 w-[60px]"></TableHead>
                <TableHead className="border border-slate-700 text-slate-900">
                  Type of Courses
                </TableHead>
                <TableHead className="border border-slate-700 text-slate-900">
                  Credits
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" font-medium">
              {CSEDetails?.map((item, key) => (
                <TableRow className="odd:bg-gray-100" key={key}>
                  <TableCell className="border-r border-slate-700 font-semibold">
                    {key + 1}
                  </TableCell>
                  <TableCell className="border-r border-slate-700">
                    {item?.course}
                  </TableCell>
                  <TableCell>{item?.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="w-full">
        <Curriculum type={0} />
      </div>
    </div>
  );
}
