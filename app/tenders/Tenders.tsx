'use client';

import {
  Tabs,
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
import { cn } from '@/lib/utils';

import SortSearch from './SortSearch';

type TendersProps = {
  active: Tender[];
  archive: Tender[];
};

export default function Tenders({ active, archive }: TendersProps) {
  const tabs = [
    {
      name: 'active',
      data: active,
    },
    {
      name: 'archive',
      data: archive,
    },
  ];

  return (
    <div className="flex flex-col w-full p-1 md:p-4">
      <div className="uppercase text-dwd-primary font-bold text-3xl mx-11 my-5 text-center">
        Tenders
      </div>
      <div className="flex w-full">
        <Tabs defaultValue="active" className="w-full">
          <div className="flex md:flex-row sm:justify-between w-full flex-col-reverse">
            <TabsList className="flex">
              <TabsTrigger className="px-8" value="active">
                ACTIVE
              </TabsTrigger>
              <TabsTrigger className="px-8" value="archive">
                ARCHIVE
              </TabsTrigger>
            </TabsList>
            <SortSearch />
          </div>
          {tabs.map(({ name, data }) => (
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
                          <div className="flex gap-3 font-normal">
                            {tender.documents.map((doc, index) => (
                              <span
                                className="inline-block underline"
                                key={index}
                              >
                                <Link href={doc.link} target="_blank">
                                  {doc.title}
                                </Link>
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            {tender.corrections.map((correction, key) => (
                              <span
                                className={cn(
                                  'inline-block underline',
                                  correction.title
                                    .toLowerCase()
                                    .indexOf('cancel') === -1
                                    ? 'text-green-500'
                                    : 'text-red-500'
                                )}
                                key={index}
                              >
                                <Link href={correction.link} target="_blank">
                                  {correction.title}
                                </Link>
                              </span>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="inline-block">
                          <Link href={tender.link} target="_blank">
                            <Download className="text-dwd-secondary1" />
                          </Link>
                        </span>
                      </TableCell>
                      <TableCell>{tender.publishDate}</TableCell>
                      <TableCell
                        className={cn(
                          name === 'archive' && 'text-dwd-secondary2',
                          tender.cancelled && 'line-through'
                        )}
                      >
                        {tender.submissionDeadline}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
