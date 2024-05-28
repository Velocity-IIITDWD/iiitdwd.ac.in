'use client';
import Page from '@/components/faq';
import { useRef } from 'react';
import React from 'react';

import { connected } from 'process';
import { HtmlContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
import { Metadata } from 'next';
export default function faq() {
  return (
    <div>
      <br></br>
      <h1 className="text-dwd-primary text-3xl text-bold text-center  font-roboto">
        Frequently Asked Questions
      </h1>

      <div className="w-4/5 center mx-auto my-10">
        <Page
          ques="Where is IIIT Dharwad located?"
          ans="The new campus of IIIT Dharwad is located in a 60-acre plot between the two cities of Hubballi and Dharwad. It is close to both cities and also the Hubballi Airport (UBX) yet away from all the traffic, noise and pollution. The location is indeed pristine, right where the hills start on the way to Western Ghats. It is also the catchment area of river Shalmala that flows down to join Arabian Sea near Karwar. Dharwad is a well-known center for higher learning including music and arts. Hubballi-Dharwad are having a significant concentration of Higher Educational institutions and universities of repute including Indian Institute of Technology-Dharwad (IIT Dharwad), Karnataka University Dharwad, University of Agricultural Sciences Dharwad, Karnataka State Law University, KLE Technological University, Karnataka Institute of Medical Sciences and Hospital, SDM College of Medical Sciences and Hospital, SDM Dental Sciences and Hospital, and SDM College of Engineering and Technology.
Hubballi-Dharwad are twin cities, now being developed as smart cities in the state of Karnataka and together form the 2nd largest urban city next to Bangalore. The two cities are connected by a modern BRTS - Bus Rapid Transit System - that provides convenient access to our campus. The cities are located 410 kms from Bangalore city with excellent connectivity by air, rail and road to Bangalore, thereby enabling IIIT Dharwad to reap rich dividends from the strengths of Bangalore as the nation’s IT hub."
        />
        <Page
          ques="How to reach IIIT Dharwad?"
          ans={
            <div>
              You can come to Sattur stop on the Hubballi-Dharwad Bus Rapid
              Transit System (BRTS) from where a shuttle service is arranged to
              the IIIT Dharwad campus. The Hubballi-Dharwad BRTS frequently
              operates from both Hubballi and Dharwad cities.
              <a
                className="text-blue-800 hover:underline"
                href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology+(IIIT),+Dharwad/@15.3929785,75.0231813,17z/data=!4m6!3m5!1s0x3bb8d3a4bc7f5c91:0xf0fc456099430c57!8m2!3d15.3926019!4d75.0252704!16s%2Fg%2F11bwgvgs24?entry=ttu"
              >
                Click here for the Google maps location of the campus.
              </a>
            </div>
          }
        />
        <Page
          ques="What is the admission process at IIIT Dharwad?
"
          ans="
Admission to the Indian Institute of Information Technology Dharwad is through Central Seat Allocation Board (CSAB). All interested candidates are requested to follow the admissions criteria explained on the CSAB web site. Seat allocation for various categories of students will be as per CSAB norms. The Institute does not make any decisions in the seat allocation process."
        ></Page>
        <Page
          ques="How many BTech programs are currently offered?
"
          ans={
            <div>
              Currently, IIIT Dharwad offers three programs viz., Computer
              Science and Engineering (CSE), Data Science and Artificial
              Intelligence (DSAI), and Electronics and Communication Engineering
              (ECE). The details of the programs can be found{' '}
              <a className="text-blue-800 hover:underline" href="/academics">
                at this page.
              </a>
            </div>
          }
        />
        <Page
          ques="How are the faculty at IIIT Dharwad?
"
          ans={
            <div>
              Faculty at IIIT Dharwad are highly qualified with PhDs and
              Postdocs from institutes of repute in India and abroad and have
              the right blend of teaching, research, and industry experience.
              The Director has ample experience in both academia and industry in
              India as well as USA. With energy and commitment, faculty are
              working on setting high standards in both teaching/learning, and
              R&D. Faculty profiles can be found
              <a className="text-blue-800 hover:underline" href="/faculty">
                {' '}
                here.
              </a>
            </div>
          }
        />
        <Page
          ques="IIIT Dharwad Campus
"
          ans={
            <div>
              IIIT Dharwad has moved to its brand new, spacious (60 acres)
              campus in the year of 2020. The campus is inaugrated by Honourable
              President of India Smt. DROUPADI MURMU on 26th September 2022. The
              campus of IIIT Dharwad is designed to foster creativity,
              collaboration, and academic excellence. Spread across 60 acres of
              land, it offers state-of-the-art facilities to its students,
              faculty, and staff. The architecture seamlessly blends modernity
              with functionality, creating an environment conducive to learning
              and research. The campus is equipped with advanced laboratories,
              spacious classrooms, auditoriums, sports facilities, and
              residential accommodation for
              <a className="text-blue-800 hover:underline" href="/facilities">
                {' '}
                students.
              </a>
            </div>
          }
        />
        <Page
          ques="How are the placement opportunities at IIIT Dharwad?
"
          ans={
            <div>
              Placement and training is through the Career Guidance Cell (CGC).
              The CGC consists of student members and a faculty Coordinator.
              Five batches have graduated from the Institute; the majority of
              the eligible students are well placed. Placement information can
              be found
              <a className="text-blue-800 hover:underline" href="/placements">
                {' '}
                here.
              </a>
            </div>
          }
        />
        <Page
          ques="What type of curriculum is followed in IIIT Dharwad?
"
          ans={
            <div>
              B.Tech curricula are designed in the Outcome Based Education
              framework with well-defined program objectives. Each B.Tech
              program has an ideal mix of foundational theory and core subjects
              (30%), Breadth in engineering, mathematics, and sciences (25%),
              soft skills and humanities (10%), contemporary elective subjects
              in applied areas (25%), and project-based learning through a
              series of mini and major projects (10%). Most elective subjects
              are kept open for any student in any program to take the
              specialized courses of their choice. The eighth semester has no
              coursework to enable students to carry out the major project and
              pursue a full-semester internship in the industry or other reputed
              institutes.
            </div>
          }
        />
        <Page
          ques="What is the fee structure for the new admission batch?
"
          ans={
            <div>
              The fee structure and details can be found
              <a
                className="text-blue-800 hover:underline"
                href="/docs/fee-2022.pdf"
              >
                {' '}
                here.
              </a>
            </div>
          }
        />
        <Page
          ques="What about hostels? How many students are accommodated in a room?
"
          ans={
            <div>
              A Boys Hostel with about 200 rooms spread over 6 floors with a
              spacious Dining Hall and a Common Room for reading, games,
              activities, etc. Both the Dining Hall and the Common Room are of
              double height to give them excellent light and ventilation apart
              from a grand look. All rooms will be equipped with new furniture.
              The Infosys Girls Hostel with about 100 rooms and all the same
              features as the Boys Hostel, if not better! Infosys Foundation has
              built this building for IIIT Dharwad as a part of its CSR
              initiatives. Well-equipped modern kitchen to prepare food
              hygienically for both hostels. Hostel rooms are 3 or 4 occupancy.
            </div>
          }
        />
        <Page
          ques="How to make fee payment?
"
          ans={
            <div>
              The easiest way to make fee payments is through SBI Collect online
              mode. Institute does not accept any cash payments.
            </div>
          }
        />{' '}
        <Page
          ques="Does the Institute support entrepreneurship?
"
          ans={
            <div>
              Institute has an MoU with Deshpande Startups Hubballi for
              nurturing students who are inclined to take up the entrepreneurial
              journey. Deshpande startup is one of the largest incubation setups
              in India. Many faculty are actively engaged with other premier
              institutes like IISc, IITs, IIITs, and industries as consultants
              and collaborators for research and development activities.
            </div>
          }
        />{' '}
        <Page
          ques="
            Can students have their vehicles inside the campus?"
          ans={
            <div>
              Students are not allowed to have any motor vehicles in the campus.
            </div>
          }
        />
        <Page
          ques="
Is the campus friendly for differently enabled?

"
          ans={
            <div>
              The Institute provides easy access for differently enabled people
              to all academic and hostel buildings in the campus.
            </div>
          }
        />
        <Page
          ques="
           
What is the medium of instruction?
"
          ans={
            <div>
              The medium of instruction is English and all subjects are taught
              in English.
            </div>
          }
        />{' '}
        <Page
          ques="
           What about ragging?
"
          ans={<div>The Institute has zero tolerance policy to ragging.</div>}
        />
        <Page
          ques="

What about security arrangements for the girls’ hostel?
"
          ans={
            <div>
              The girls &apos; hostel will have 24/7 security including a lady
              security guard in addition to CCTV cameras. The girls hostel is
              also located in an exclusive building away from the other
              buildings.
            </div>
          }
        />{' '}
        <Page
          ques="
   What if we have any additional questions regarding the Institute?
"
          ans={
            <div>
              Both prospective students and their parents can ask questions
              directly to our faculty at{' '}
              <a
                className="text-blue-800 hover:underline"
                href="mailto:contact@iiitdwd.ac.in"
              >
                contact@iiitdwd.ac.in
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'FAQ',
};
