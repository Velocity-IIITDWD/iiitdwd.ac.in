import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col h-full w-full">
      <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/HomePage/LandingPage.png')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-gray-900/70 flex items-center justify-center">
        <p className="text-white z-[1] text-3xl font-bold">Academics</p>
      </section>

      <div className="my-10 w-full flex flex-col items-center md:px-24 sm:px-10 p-4 gap-6">
        <div className="w-full flex-wrap flex md:flex-nowrap gap-4">
          <Link
            href={'/'}
            className="rounded bg-dwd-primary md:basis-1/4 basis-full flex items-center justify-center p-3 text-white"
          >
            Academic Calendar
          </Link>
          <Link
            href={'/'}
            className="rounded bg-dwd-primary md:basis-1/4 basis-full flex items-center justify-center p-3 text-white"
          >
            Faculty
          </Link>
          <Link
            href={'/'}
            className="rounded bg-dwd-primary md:basis-1/4 basis-full flex items-center justify-center p-3 text-white"
          >
            Research
          </Link>
          <a
            href="/academics/Curricula_16May23.pdf"
            target="_blank"
            className="rounded bg-dwd-primary md:basis-1/4 basis-full flex items-center justify-center p-3 text-white"
            // download="Curriculum.pdf"
          >
            Curriculum
          </a>
        </div>

        {/* <div className="w-full bg-dwd-primary h-[1px] rounded"></div> */}
        <div className="w-full bg-slate-200 rounded shadow-lg flex flex-col py-8 px-4 md:px-10">
          <p className="text-dwd-primary text-2xl font-bold">
            IIIT Dharwad BTech Curriculum - Key Points
          </p>

          <ul className="list-disc pl-6 mb-4 text-justify">
            <li>
              Outcome Based Education (OBE) Framework: Curriculum focuses on
              achieving well-defined program objectives.
            </li>
            <li>
              Course Mix:
              <ul className="list-[circle] pl-6 mb-4">
                <li>Foundational theory & core subjects: 30%</li>
                <li>Engineering, mathematics & sciences: 25%</li>
                <li>Soft skills & humanities: 10%</li>
                <li>Contemporary elective subjects: 25%</li>
                <li>Project-based learning: 10% (mini & major projects)</li>
              </ul>
            </li>
            <li>
              Open Electives: Students can choose specialized courses from any
              program.
            </li>
            <li>
              Flexible Learning: No coursework in the eighth semester allows for
              full-semester internships or major projects.
            </li>
            <li>
              Academic Autonomy: IIIT Dharwad has its own Academic Senate for
              curriculum decisions.
            </li>
            <li>
              Credit-Based System: Enables self-paced progress for students.
            </li>
            <li>
              Assessment: Continuous assessment and relative grading system with
              grade points.
            </li>
            <li>
              Modern Curriculum: Focused on IT with elective options in data
              science, AI, and other in-demand fields.
            </li>
            <li>
              Practical Learning: Mini projects, major projects, and hackathons
              provide practical experience.
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col md:flex-row-reverse gap-6 justify-between">
          <Image
            src="/academics/FirstConvocation.jpg"
            alt="Academics Image"
            width={0}
            height={0}
            sizes="100%"
            style={{ height: '100%', width: 'auto' }}
            className="md:max-w-[400px] lg:max-w-[600px] shadow-lg rounded w-full"
          />

          <div className="flex flex-col gap-2">
            <div className="">Branches offered under B.tech Program : </div>
            <div className="flex flex-col gap-2 pl-6">
              <Link
                href={'/academics/departments/cse'}
                className="w-full rounded cursor-pointer shadow p-3 md:max-w-[400px] bg-slate-200 hover:bg-dwd-primary hover:text-white text-dwd-primary"
              >
                Computer Science & Engineering (CSE)
              </Link>
              <Link
                href={'/academics/departments/dsai'}
                className="w-full rounded cursor-pointer shadow p-3 md:max-w-[400px] bg-slate-200 hover:bg-dwd-primary hover:text-white text-dwd-primary"
              >
                Data Science & Artificial Engineering (DSAI)
              </Link>
              <Link
                href={'/academics/departments/ece'}
                className="w-full rounded cursor-pointer shadow p-3 md:max-w-[400px] bg-slate-200 hover:bg-dwd-primary hover:text-white text-dwd-primary"
              >
                Electronics & Communications Engineering (ECE)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
