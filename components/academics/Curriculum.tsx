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
          tabs === i &&
          'bg-slate-300 border border-slate-400 border-b-0 border-b-slate-300'
        } text-dwd-primary min-w-[100px] flex-1 cursor-pointer border-b border-b-slate-400 justify-center flex rounded-t-lg py-3`}
        onClick={() => setTab(i)}
      >
        Semester {i}
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
          {item?.credit}
        </TableCell>
        <TableCell>{item?.preReq}</TableCell>
      </TableRow>
    )
  );

  return courses || []; // Return empty array if courses is undefined
}

export default function Curriculum({ type }: { type: number }) {
  const [tab, setTab] = useState(1);

  const alltabs = createTabs(tab, setTab);

  return (
    <div className="mx-auto flex justify-center flex-col">
      <div className="flex w-full flex-wrap z-10">{alltabs}</div>
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
