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
import { ECEDetails } from '@/data/academics';
import Curriculum from '@/components/academics/Curriculum';
import { Metadata } from 'next';

export default function page() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-10 item-center ">
      <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/LandingPage.png')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
        <p className="text-white z-[1] text-3xl font-bold text-center">
          Electronics & Communication Engineering (ECE)
        </p>
      </section>
      <div className="w-full lg:px-24 px-4 md:px-10 items-center flex lg:flex-row gap-16 flex-col lg:justify-between">
        <div className="flex flex-col lg:w-1/2 bg-slate-200 rounded shadow-lg p-4">
          <p className="text-dwd-primary mb-2">
            The ECE program at IIIT Dharwad emphasizes:
          </p>
          <ul className="list-disc pl-6 text-justify">
            <li>
              Core Concepts: Circuits, Signals, and Communication Theory form
              the foundation for design and analysis of electronic systems.
            </li>
            <li>
              Specialization in Advanced Areas: The program integrates core
              concepts with exciting fields like VLSI design, MEMS
              (Micro-Electro-Mechanical Systems), and IoT (Internet of Things).
            </li>
            <li>
              Exposure to Advanced Technologies: The program keeps pace with the
              latest advancements by incorporating courses in areas like:
              <ul className="list-[circle] pl-6">
                <li>Micro-Electro-Mechanical Systems (MEMS)</li>
                <li>Internet of Things (IoT)</li>
                <li>Robotics</li>
                <li>Sensors</li>
              </ul>
            </li>
          </ul>
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
              {ECEDetails?.map((item, key) => (
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
        <Curriculum type={2} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'ECE',
};
