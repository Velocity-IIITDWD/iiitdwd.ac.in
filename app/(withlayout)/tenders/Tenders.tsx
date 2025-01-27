'use client';

import {
  Tabs as TabData,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs-table/tabs';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/tabs-table/table';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { cn, toDateString, toDateTimeString } from '@/lib/utils';

import SortSearch from './SortSearch';
import { useState } from 'react';

type TendersProps = {
  active: Tender[];
  archive: Tender[];
};

type TabData = {
  name: string;
  data: Tender[];
};

type TabsContentContentProps = {
  tabsData: TabData[];
};

// idk a better name sorry
function TabsContentContent({ tabsData: tabsData }: TabsContentContentProps) {
  return (
    <>
      {tabsData.map(({ name, data }) => (
        <TabsContent value={name} key={name}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-center">Download</TableHead>
                <TableHead>Publish Date</TableHead>
                <TableHead>Submission Deadline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((tender, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}.</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-2">
                      <span>{tender.title}</span>
                      <div className="flex gap-x-3 gap-y-2 font-normal flex-wrap">
                        {tender.documents.map((doc, index) => (
                          <span className="inline-block underline" key={index}>
                            <Link href={doc.link} target="_blank">
                              {doc.title}
                            </Link>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {tender.corrections.map((correction, index) => (
                          <span
                            className={cn(
                              'inline-block',
                              correction.title.toLowerCase().includes('cancel')
                                ? 'text-red-500'
                                : 'text-green-500',

                            )}
                            key={index}
                          >
                            {correction.link ? (
                              <Link className='underline' href={correction.link} target="_blank">
                                {correction.title}
                              </Link>
                            ) : (
                              correction.title
                            )}
                            {
                              correction.isNew && <span className="text-xs ml-2  px-2 py-1 bg-red-300/50 rounded text-red-500 animate-blink ">
                                New
                              </span>
                            }
                          </span>

                        ))}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {tender.link && (
                      <span className="inline-block">
                        <Link href={tender.link} target="_blank">
                          <Download className="text-dwd-secondary1" />
                        </Link>
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {toDateString(tender.publishDate as number)}
                  </TableCell>
                  <TableCell
                    className={cn(
                      name === 'archive' && 'text-dwd-secondary2',
                      tender.cancelled && 'line-through'
                    )}
                  >
                    {toDateTimeString(tender.submissionDeadline as number)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {!data.length && (
            <div className="flex justify-center p-16 text-dwd-secondary1">
              No results
            </div>
          )}
        </TabsContent>
      ))}
    </>
  );
}

export default function Tenders({ active, archive }: TendersProps) {
  const [selectedTab, setSelectedTab] = useState('active');
  const [activeData, setActiveData] = useState(active);
  const [archiveData, setArchiveData] = useState(archive);

  const tabsData = [
    {
      name: 'active',
      data: activeData,
    },
    {
      name: 'archive',
      data: archiveData,
    },
  ];

  return (
    <section className="flex flex-col w-full p-1 md:p-4">
      <h1 className="heading-text">
        Tenders
      </h1>
      <div className="flex w-full">
        <TabData
          onValueChange={(value) => setSelectedTab(value)}
          defaultValue={selectedTab}
          className="w-full"
        >
          <div className="flex md:flex-row sm:justify-between w-full flex-col-reverse">
            <TabsList className="flex">
              <TabsTrigger className="px-8" value="active">
                ACTIVE
              </TabsTrigger>
              <TabsTrigger className="px-8" value="archive">
                ARCHIVE
              </TabsTrigger>
            </TabsList>
            <SortSearch
              selectedTab={selectedTab}
              active={active}
              activeData={activeData}
              setActiveData={setActiveData}
              archive={archive}
              archiveData={archiveData}
              setArchiveData={setArchiveData}
            />
          </div>
          <TabsContentContent tabsData={tabsData} />
        </TabData>
      </div>
    </section>
  );
}
