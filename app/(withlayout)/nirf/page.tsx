import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FetchSanity } from '@/lib/sanity/client';
import { queryNirfReports } from '@/lib/sanity/Queries';
import { NirfReport } from '@/data/nirf';

export default async function Page() {
  const nirfReports = await FetchSanity(queryNirfReports) as NirfReport[];

  return (
    <div className="min-h-[100vh]">
      <div className=" Head hover:scale-[1.01]  hover:drop-shadow-2xl transition  text-center font-bold  text-dwd-primary text-5xl p-8">
        NIRF
      </div>
      <div className="subhead text-center  font-semibold  text-dwd-primary text-lg md:text-2xl lg:text-3xl p-2">
        National Institutional Ranking Framework
      </div>

      <div className="content flex justify-center items-center mt-4 ">
        <div className="w-[90%] md:w-[80%] lg:w-[50%] text-sm md:text-md">
          The National Institutional Ranking Framework (NIRF) was approved by
          the MHRD and launched by Honourable Minister of Human Resource
          Development on 29th September 2015.
          <br />
          This framework outlines a methodology to rank institutions across the
          country. The methodology draws from the overall recommendations broad
          understanding arrived at by a Core Committee set up by MHRD, to
          identify the broad parameters for ranking various universities and
          institutions. The parameters broadly cover &#39; Teaching, Learning
          and Resources, &#39; &#39;Research and Professional Practices, &#39;
          &#39;Graduation Outcomes, &#39; &#39;Outreach and Inclusivity, &#39;
          and &#39;Perception &#39;.
        </div>
      </div>

      <div className="my-20 flex flex-col justify-center items-center gap-2 [&_button]:transition [&_button]:min-w-72">
        {nirfReports.sort((a, b) => b.year - a.year).map((report) => (
          <div key={report.year} className="flex gap-8 max-md:gap-2 max-md:flex-col">
            <Link tabIndex={-1} href={report.overallReport} target="_blank">
              <Button className="bg-dwd-primary hover:bg-dwd-primary hover:drop-shadow-xl hover:scale-105 flex justify-between">
                <span>NIRF Overall Report {report.year}</span>
                <FileText className="m-2" />
              </Button>
            </Link>
            <Link tabIndex={-1} href={report.engineeringReport} target="_blank">
              <Button className="bg-dwd-primary hover:bg-dwd-primary hover:drop-shadow-xl hover:scale-105 flex justify-between">
                <span>NIRF Engineering Report {report.year}</span>
                <FileText className="m-2" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
