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
          'bg-dwd-secondary2 border border-slate-900 border-b-0 border-b-dwd-secondary2'
        } text-dwd-primary min-w-[100px] flex-1 cursor-pointer border-b border-b-slate-700 justify-center flex rounded-t-lg py-3`}
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
        <TableCell className="border-r border-slate-700 font-semibold">
          {item?.code}
        </TableCell>
        <TableCell className="border-r border-slate-700">
          {item?.title}
        </TableCell>
        <TableCell className="border-r border-slate-700">
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
        <Table className="text-slate-900 border border-slate-700 border-t-0">
          {/* <TableCaption>CSE Course Details.</TableCaption> */}
          <TableHeader className="bg-dwd-secondary2">
            <TableRow>
              <TableHead className="border border-t-0 border-slate-700 text-slate-900 w-[160px]">
                Course Code
              </TableHead>
              <TableHead className="border border-t-0 border-slate-700 text-slate-900">
                Course
              </TableHead>
              <TableHead className="border border-t-0 border-slate-700 text-slate-900 w-[160px]">
                Credits
              </TableHead>
              <TableHead className="border border-t-0 border-slate-700 text-slate-900 w-[400px]">
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
