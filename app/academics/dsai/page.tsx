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
import { DSAIDetails } from '@/data/academics';
import Curriculum from '@/components/academics/Curriculum';

export default function page() {
  return (
    <div className="w-full min-h-screen h-full flex py-10 flex-col lg:px-24 px-4 md:px-10 gap-10 item-center ">
      <div className="w-full items-center flex md:flex-row gap-16 flex-col md:justify-between">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-dwd-primary text-xl font-bold pb-3">
            Data Science and Artificial Intelligence (DSAI)
          </h1>
          <p className="text-dwd-primary mb-2">
            The DSAI program at IIIT Dharwad emphasizes:
          </p>
          <ul className="list-disc pl-6 text-justify">
            <li>
              Data Science Thinking: Develop a critical &quot;data science
              mindset&quot; to approach problems from a data-driven perspective.
            </li>
            <li>
              Strong CS Foundation: Gain a solid grounding in core computer
              science concepts like programming languages, algorithms, and data
              structures. This foundation is crucial for understanding and
              working with data effectively.
            </li>
            <li>
              Specialization in DSAI: Dive deep into data science and artificial
              intelligence with courses in:
              <ul className="list-[circle] pl-6">
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Big Data Analytics</li>
                <li>Natural Language Processing</li>
                <li>other relevant areas</li>
              </ul>
            </li>
            <li>
              Real-World Applications: Explore how data science and AI are
              applied in fields like:
              <ul className="list-[circle] pl-6">
                <li>Finance (FinTech)</li>
                <li>Healthcare (Health Informatics)</li>
              </ul>
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
              {DSAIDetails?.map((item, key) => (
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
        <Curriculum type={1} />
      </div>
    </div>
  );
}
