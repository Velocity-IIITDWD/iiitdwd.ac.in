import { About, aboutData } from '@/data/about';
import Image from 'next/image';
import DirectorsMessage from '@/components/about/DirectorsMessage';
import OurFamily from '@/components/about/OurFamily';
import OurVision from '@/components/about/OurVision';
import OurMission from '@/components/about/OurMission';
import CoreValues from '@/components/about/CoreValues';
import DirectorBriefProfile from '@/components/about/DirectorBriefProfile';
import AboutIIIT from '@/components/about/AboutIIIT';
import ShortCampusVideo from '@/components/about/ShortCampusVideo';
import mainGateImage from '@/assets/campus/main_gate.jpg';
import { Metadata } from 'next';
import directorImage from '@/assets/s_r_mahadeva_prasanna.jpg';

import './smoothScroll.css';
import Link from 'next/link';

const AboutPage = () => {
  const about: About = aboutData;

  return (
    <div className="flex flex-col h-full w-full">
      <section className="w-full h-[50vh] bg-cover bg-center bg-[url('/images/main_building.jpg')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center"></section>
      <div
        id="introduction"
        className="my-10 w-full flex flex-col items-center md:px-24 sm:px-10 p-4 gap-6"
      >
        <p className="font-semibold text-2xl text-dwd-primary">
          About IIIT Dharwad
        </p>
        {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 md:border-r border-gray-600 w-full text-dwd-primary text-sm p-4">
            <div className="flex flex-col font-semibold text-base">
              1. Introduction
            </div>
            <div className="">
              Established in 2015 under a Public-Private Partnership between:
            </div>
            <ul className="list-disc pl-4">
              <li>Ministry of Education, Government of India</li>
              <li>Government of Karnataka</li>
              <li>Industry partner Keonics</li>
            </ul>
            <div>
              Recognized as an Institute of National Importance by an Act of
              Parliament (23 of 2017).
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:border-r border-gray-600 w-full text-dwd-primary text-sm p-4">
            <div className="flex flex-col font-semibold text-base">
              2. Strategic Goals
            </div>
            <div className="">Mission:</div>
            <ul className="list-disc pl-4">
              <li>
                To address the skill gap in high-end IT and maintain
                India&apos;s global IT leadership by solving socially relevant
                problems unique to India.
              </li>
            </ul>
            <div className="">Vision:</div>
            <ul className="list-disc pl-4">
              <li>
                To blend modern and traditional themes in campus design and IT
                problem-solving.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:border-r lg:border-r-0 border-gray-600 w-full text-dwd-primary text-sm p-4">
            <div className="flex flex-col font-semibold text-base">
              3. Academic Programs
            </div>
            <div className="">BTech Degrees Offered:</div>
            <ul className="list-disc pl-4">
              <li>Computer Science and Engineering</li>
              <li>Electronics and Communication Engineering</li>
              <li>Data Science and Artificial Intelligence</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 lg:border-r border-gray-600 w-full text-dwd-primary text-sm p-4">
            <div className="flex flex-col font-semibold text-base">
              4. Strategic Importance
            </div>
            <div className="">Location:</div>
            <ul className="list-disc pl-4">
              <li>
                Hubballi and Dharwad, an educational hub with proximity to
                Bengaluru, India&apos;s IT capital.
              </li>
            </ul>
            <div className="">Impact:</div>
            <ul className="list-disc pl-4">
              <li>
                Aims to influence the Indian IT industry, academic research, and
                regional development in North Karnataka.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:border-r border-gray-600 w-full text-dwd-primary text-sm p-4">
            <div className="flex flex-col font-semibold text-base">
              5. Campus and Design
            </div>
            <div className="">Theme:</div>
            <ul className="list-disc pl-4">
              <li>
                A semi-modern design that is simple, elegant, stylish, and
                colorful yet stately.
              </li>
            </ul>
            <div className="">Logo:</div>
            <ul className="list-disc pl-4">
              <li>
                Reflects the Institute&apos;s vision, mission, and areas of
                focus such as computer science, electronics, AI, robotics, and
                more.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 w-full text-dwd-primary text-sm p-4">
            <div className="flex flex-col font-semibold text-base">
              6. Opportunities and Impact
            </div>
            <div className="">Young and Dynamic</div>
            <div className="">IIIT Dharwad is positioned to:</div>
            <ul className="list-disc pl-4">
              <li>Innovate in IT education and research.</li>
              <li>Collaborate with leading institutions.</li>
              <li>
                Contribute significantly to the Indian IT sector and regional
                development.
              </li>
            </ul>
          </div>
        </div> */}
        <div className="text-justify">{aboutData?.aboutText}</div>
      </div>

      <section
        id="vision"
        className="w-full py-20 bg-cover bg-center bg-[url('/images/main_building.jpg')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center"
      >
        <div className="z-[1] text-white flex items-center justify-center flex-col gap-2 max-w-[1200px] w-full">
          <p className="text-3xl font-bold">Our Vision</p>
          <div className="text-center font-semibold text-lg">
            To be a globally renowned academy of information technology for
            societal development.
          </div>
        </div>
      </section>

      <DirectorsMessage
        heading={about.directorsMessage.heading}
        director={about.director}
        text1={about.directorsMessage.text1}
        text2={about.directorsMessage.text2}
        text3={about.directorsMessage.text3}
      />

      <div
        id="family"
        className="my-10 border-t border-slate-300 shadow-inner w-full flex flex-col items-center md:px-24 sm:px-10 py-10 px-4 gap-6"
      >
        <p className="font-bold text-3xl text-dwd-primary">Our Family</p>
        <div className="flex flex-wrap gap-4">
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/visitor"
          >
            Visitor
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/board_of_governors"
          >
            Board of Governors
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/chairperson"
          >
            Chairperson
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/committee/expert"
          >
            Expert Committee
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/committee/finance"
          >
            Finance Committee
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/senate"
          >
            Senate
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/faculty"
          >
            Faculty
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/staff"
          >
            Staff
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/chairperson/former"
          >
            Former Chairperson
          </Link>
          <Link
            className="bg-[#DEE6EE] rounded text-dwd-primary px-3 py-1 hover:text-white hover:bg-dwd-primary"
            href="/director/former"
          >
            Former Directors
          </Link>
        </div>
      </div>

      <section className="w-full py-10 bg-cover bg-center bg-[url('/images/main_building.jpg')] relative before:z-0 before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-[#041E3FB3] flex items-center justify-center">
        <div className="z-[1] px-4 text-white flex items-center justify-center flex-col gap-10 max-w-[1000px] w-full">
          <p className="text-3xl font-bold">Our Mission</p>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="bg-white text-dwd-primary basis-1/3 rounded p-3">
              To produce globally competent information technology professionals
              with the right mix of professional skills and ethical, societal
              and environmental concerns.
            </div>
            <div className="bg-white text-dwd-primary basis-1/3 rounded p-3">
              To solve local problems using global technologies and solve global
              problems using local technologies across disciplines.
            </div>
            <div className="bg-white text-dwd-primary basis-1/3 rounded p-3">
              To project the nation to the forefront of information technology
              research and development. Concerning IIIT Dharwad
            </div>
          </div>
        </div>
      </section>

      <section className="w-full gap-8 text-dwd-primary py-10 flex-col bg-cover bg-center relative flex items-center justify-center">
        <p className="text-3xl font-bold">Core Values</p>
        <div className="flex text gap-6 font-[500] text-[#465766] flex-col md:flex-row text-center">
          <div className="py-2 px-3 rounded shadow-lg bg-[#eff7ff]">
            Integrity
          </div>
          <div className="py-2 px-3 rounded shadow-lg bg-[#eff7ff]">
            Service
          </div>
          <div className="py-2 px-3 rounded shadow-lg bg-[#eff7ff]">
            Positivity
          </div>
          <div className="py-2 px-3 rounded shadow-lg bg-[#eff7ff]">
            Commitment
          </div>
          <div className="py-2 px-3 rounded shadow-lg bg-[#eff7ff]">
            Passion for Technology
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-200 px-2 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row">
        <div className="basis-1/2 font-semibold text-dwd-primary mb-4">
          A Short Video on our Campus
        </div>
        <div className="basis-1/2 rounded overflow-hidden border-gray-400 border shadow">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/5A8hThnROHs?si=QsaWacwdQSoRBXFG&autoplay=1&mute=1&showinfo=0&controls=0&vq=hd720&loop=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </section>

      {/* <div id="introduction" />
      <AboutIIIT aboutText={about.aboutText} />

      <div id="directors-message" />
      <DirectorsMessage
        heading={about.directorsMessage.heading}
        director={about.director}
        text1={about.directorsMessage.text1}
        text2={about.directorsMessage.text2}
        text3={about.directorsMessage.text3}
      />
      <div id="director-brief-profile" />
      <DirectorBriefProfile
        directorName={about.director.title}
        briefProfile={about.briefProfile}
      />

      <div id="family" />
      <OurFamily />

      <div id="vision" />
      <OurVision vision={about.vision} />
      <OurMission missions={about.missions} />
      <CoreValues coreValues={about.coreValues} />
      <ShortCampusVideo /> */}
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About',
};
