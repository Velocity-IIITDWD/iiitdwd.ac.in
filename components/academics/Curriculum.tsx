/* eslint-disable indent */
'use client';
import {
  CSEStructure,
  DSAIStrcutre,
  ECEStructure,
  creditStructure,
} from '@/data/academics';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function createTabs(
  tabs: number,
  setTab: (tabIndex: number) => void
): React.ReactElement[] {
  const Tabs: React.ReactElement[] = [];
  for (let i = 1; i <= 8; i++) {
    Tabs.push(
      <div
        key={i}
        className={`${
          tabs === i && 'bg-white'
        } text-dwd-primary flex-[0_0_12.5%] cursor-pointer justify-center flex rounded py-1 px-2`}
        onClick={() => setTab(i)}
      >
        Sem {i}
      </div>
    );
  }
  return Tabs;
}

function createTable(tabs: number, type: number): React.ReactElement[] {
  var Branch: creditStructure[][] = [];
  if (type === 0) {
    Branch = CSEStructure;
  } else if (type === 1) {
    Branch = DSAIStrcutre;
  } else {
    Branch = ECEStructure;
  }
  const courses = Branch[tabs - 1]?.map(
    (item: creditStructure, key: number) => (
      <TableRow className="odd:bg-gray-100" key={key}>
        <TableCell className="border-r border-slate-400 font-semibold">
          {item?.code}
        </TableCell>
        <TableCell className="border-r border-slate-400">
          {item?.title}
        </TableCell>
        <TableCell className="border-r border-slate-400">
          <div className="rounded-full bg-slate-200 p-1 text-center">
            {item?.credit}
          </div>
        </TableCell>
        <TableCell>{item?.preReq}</TableCell>
      </TableRow>
    )
  );

  return courses || []; // Return empty array if courses is undefined
}

export default function Curriculum({ type }: { type: number }) {
  const [tab, setTab] = useState(1);
  const [left, setLeft] = useState(0);

  const alltabs = createTabs(tab, setTab);

  return (
    <div className="mx-auto flex justify-center flex-col">
      <div className="w-full mb-4 overflow-hidden relative">
        <div
          onClick={() => setLeft((prev) => prev - 1)}
          className={`${
            left === 0 ? 'hidden' : 'flex'
          } absolute z-10 hover:bg-slate-900/20 rounded flex md:hidden cursor-pointer left-1 top-1/2 -translate-y-1/2`}
        >
          <ChevronLeft />
        </div>
        <div
          style={{ left: `${-left * 100}%` }}
          className="shadow-inner relative w-[400%] md:w-full bg-slate-200/60 rounded p-1 flex"
        >
          {alltabs}
        </div>
        <div
          onClick={() => setLeft((prev) => prev + 1)}
          className={`${
            left === 3 ? 'hidden' : 'flex'
          } absolute z-10 flex hover:bg-slate-900/20 rounded md:hidden cursor-pointer right-1 top-1/2 -translate-y-1/2`}
        >
          <ChevronRight />
        </div>
      </div>
      {/* <div className="flex w-full flex-wrap z-10">{alltabs}</div> */}
      <div className="">
        <Table className="text-slate-900 border border-slate-400 border-t-0">
          {/* <TableCaption>CSE Course Details.</TableCaption> */}
          <TableHeader className="bg-slate-300">
            <TableRow>
              <TableHead className="border border-t-0 border-slate-400 text-slate-900 w-[160px]">
                Course Code
              </TableHead>
              <TableHead className="border border-t-0 border-slate-400 text-slate-900">
                Course
              </TableHead>
              <TableHead className="border border-t-0 border-slate-400 text-slate-900 w-[160px]">
                Credits
              </TableHead>
              <TableHead className="border border-t-0 border-slate-400 text-slate-900 w-[400px]">
                Prerequisites
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className=" font-medium">
            {createTable(tab, type)}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
