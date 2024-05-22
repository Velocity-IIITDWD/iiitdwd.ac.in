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

export default function page() {
  return (
    <div className="w-full min-h-screen h-full flex py-10 flex-col lg:px-24 px-4 md:px-10 gap-10 item-center ">
      <div className="w-full items-center flex md:flex-row gap-16 flex-col md:justify-between">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-dwd-primary text-xl font-bold pb-3">
            Electronics & Communication Engineering (ECE)
          </h1>
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

        <div className="md:w-1/2 max-w-[600px]">
          <Table className="text-slate-900 overflow-hidden rounded">
            <TableCaption>ECE Course Details.</TableCaption>
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
              {ECEDetails?.map((item, key) => (
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
        <Curriculum type={2} />
      </div>
    </div>
  );
}
