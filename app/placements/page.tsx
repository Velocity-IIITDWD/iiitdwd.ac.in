import React from 'react';
import Image from "next/image";
import LPA from "../../components/lpa";
import BarGraph from "../../components/bargraph"; // Import the BarGraph component
import "../globals.css";
// pages/index.tsx

import EmblaCarousel from '@/components/EmblaCarousel';


//import Carousel from "@/components/Carousel";

export default function Home() {
  
  // Define your bar graph data
  const barGraphData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Average CTC',
        data: [6, 7, 7.3, 8, 11.52],
        backgroundColor: [
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA'
        ],
        borderColor: [
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA'
        ],
        borderWidth: 1
      },
      {
        label: 'Highest CTC',
        data: [10, 11, 25, 25, 35],
        backgroundColor: [
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)'
        ],
        borderColor: [
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  
  
  const slides = [
    { content: <div className="slide-content relative p-2 "><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>Project-Centric Learning<div className='subheading mt-5 text-black font-normal'>The focus on projects allows students to apply theoretical knowledge
    practically, preparing them for real-world scenarios.</div></div></div> },
    { content: <div className="slide-content relative p-2"><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>Institute Autonomy<div className='subheading mt-5 text-black font-normal'>An academic Senate with industry professionals ensures that the
    curriculum remains relevant and responsive to industry trends.</div></div></div> },
    { content: <div className="slide-content relative p-2"><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>IT-Focused Curriculum<div className='subheading mt-5 text-black font-normal'>Specializing in IT-related fields from the start shows candidates
    alignment with technology-driven industries, meeting modern job demands.</div></div></div> },
    { content: <div className="slide-content relative p-2"><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>Practical Learning Opportunities<div className='subheading mt-5 text-black font-normal'>Involvement in projects and hackathons showcases candidates practical
    skills and problem-solving abilities.</div></div></div> },
    { content: <div className="slide-content relative p-2"><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>Outcome-Based Education Emphasis<div className='subheading mt-5 text-black font-normal'>Demonstrates that students are trained to meet specific objectives,
    indicating their skills are parallel to industry needs.</div></div></div> },
     { content: <div className="slide-content relative p-2"><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>Holistic Curriculum<div className='subheading mt-5 text-black font-normal'>The balanced mix of theory, core subjects, breadth areas, soft skills,
     and projects ensures students are well-rounded and adaptable.</div></div></div> },
     { content: <div className="slide-content relative p-2"><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>Specialization Opportunities<div className='subheading mt-5 text-black font-normal'>Elective subjects encourage students to pursue specialized knowledge,
     making them ideal candidates for roles requiring niche expertise.</div></div></div> },
     { content: <div className="slide-content relative p-2"><div className='absolute top-5 w-full text-center text-[#013365] font-bold Heading'>Interdiscipinary Learning<div className='subheading mt-5 text-black font-normal'>Exposure to a variety of subjects promotes a diverse skill set, enabling
     graduates to approach challenges from multiple angles.</div></div></div> }

  ];


  return (
    <div>
    <div className="container">
      <div className="text-4xl font-extrabold text-[#013365] text-center mt-5">Career Guidance Cell</div>
      
      <div className=" shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Overview
        <div className=" whatsapp text-[1rem] text-black font-light mt-5 mr-[20%]">The Career Guidance Cell at IIIT Dharwad is driven by students and assisted by faculty for career development of students.</div>
      </div>
      
      <div className="shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Goals
        <div className=" whatsapp text-[1rem] text-black font-light mt-5">
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>To organize placement drives at IIIT Dharwad</li>
            <li>To provide training and assistance to students for better placement and internship opportunities</li>
            <li>To hone soft skills and interview techniques</li>
            <li>To organize workshops and invited talks to make students industry ready</li>
            <li>To assist students with their plans for higher studies</li>
            <li>To provide information about entrance examinations and other opportunities for higher studies</li>
          </ul>
        </div>
      </div>
      
      <div className="shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Why Recruit from IIIT Dharwad?</div>
      
      <div className="mr-[20%] ml-[20%]">
  <div className="inline-block mr-[20%]">
    <LPA number="8" medianText="Median CTC" />
  </div>
  <div className="inline-block mr-[20%]">
    <LPA number="35" medianText="Highest CTC" />
  </div>
  <div className="inline-block">
    <LPA number="20" medianText="Average CTC" />
  </div>
</div>

      
<div className='mt-20 cursor-grab'>
      
      <EmblaCarousel slides={slides} />
    </div>
      <div className="shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Overview
      <div className='mt-20 bar'>
    <BarGraph
  labels={barGraphData.labels}
  datasets={barGraphData.datasets}
  width={800}
  height={400}
/></div>
</div>
      
      <div className=" shortbox ml-[20%]">
  <div className=" whatsapp inline-block mt-20 mr-[10%]">
    <div className=" text-[2rem] text-[rgb(1,51,101)] font-extrabold">Average Package of top 20%</div>
    <div className="text-[2rem] text-[rgb(1,51,101)] font-extrabold">students in 2023.</div>
  </div>
  <div className=" whatsapp inline-block mt-20">
    <div className="text-8xl font-bold text-[#50A5CA] inline-block">11</div>
    <div className="text-5xl font-bold text-[#013365] inline-block"> LPA</div>
  </div>
</div>

      
      <div className="shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Companies Visited</div>
      <img src="Companies Visited.png" width="800" height="150" className="mx-auto block mt-10" />
      
      <div className="shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Placement Procedure</div>
      <img src="Placement Procedure.png" width="800" height="150" className="mx-auto block mt-10 procedure" />
      
      <div className=" whatsapp text-[1rem] text-black font-light mt-5 ml-[20%] mr-[20%]">
        Note: The SRF provides the primary basis of communicating the details of the positions offered to the candidates. It is, therefore, highly desirable that the form is completed in all respects and it would be advantageous if it were accompanied by relevant company literature/JD.
      </div>
      
      <div className="shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Higher Studies
        <div className=" whatsapp text-[1rem] text-black font-light mt-5 mr-[20%]">
          The institute helps students create a strong base that helps them accelerate their academic development, enabling them to pursue higher studies in top institutes in the country and abroad.
        </div>
      </div>
      
      <div className="shortbox text-[1.8rem] text-[#013365] font-extrabold ml-[20%] mt-20">Contact
        <div className="whatsapp text-[1rem] text-black font-light mt-5 mr-[20%]">
          For any inquiries or if you would like to participate in recruitment activities at IIIT Dharwad, please contact the Career Guidance Cell (CGC) via email at 
          <a className="text-[blue]" href="mailto:cgc@iiitdwd.ac.in"> cgc@iiitdwd.ac.in</a> 
          marking cc to 
          <a className="text-[blue]" href="mailto:cgcoffice@iiitdwd.ac.in"> cgcoffice@iiitdwd.ac.in</a>.
        </div>
      </div>
      
      <div className=" shortbox ml-[20%] flex  mt-10 mb-10 mr-[20%] justify-around">
        <div>
          <strong className='text-[#013365]' style={{fontSize:21}}>CGC, Chairman</strong><br />
          Dr. Prakash Pawar, Asst. Professor<br />
          Email: <a href="mailto:cgc@iiitdwd.ac.in" className="text-blue-500">cgc@iiitdwd.ac.in</a>
        </div>
        <div className="uj">
          <strong className= '  text-[#013365]' style={{fontSize:21}}>CGC, Member Secretary (Placement Lead)</strong><br />
          Mr. Ujwal Doddamani<br />
          Email: <a href="mailto:cgcoffice@iiitdwd.ac.in" className="text-blue-500">cgcoffice@iiitdwd.ac.in</a> / <a href="mailto:ujwal@iiitdwd.ac.in" className="text-blue-500">ujwal@iiitdwd.ac.in</a>
        </div>
      </div>
      
      <p className=" whatsapp shortbox whatsapp mb-4 ml-[20%] mr-[20%]">
        <strong>Phone/WhatsApp Calls:</strong> Feel free to reach out to Mr. Ujwal Doddamani at +91 9886376600 for further assistance.
      </p>
      

      <div className="buttons flex flex-wrap gap-5 mb-4 mt-10 ml-[20%]">

  <div style={{ width: '35%' }}>
    <a href="/Campus_Recruitment_Form_without_internship.docx" download="Campus_Recruitment_Form_without_internship.docx">
      <button className="buttonss bg-[#013365] text-white px-4 py-4 rounded w-full whitespace-no-wrap" style={{ fontSize: '14px' }}>
        Campus Recruitment Form (w/o internship)
      </button>
    </a>
  </div>

  <div style={{ width: '35%' }}>
    <a href="/Campus_Recruitment_Form_with_internship.docx" download="Campus_Recruitment_Form_with_internship.docx">
      <button className="buttonss bg-[#50A5CA] text-white px-4 py-4 rounded w-full  whitespace-no-wrap" style={{ fontSize: '14px' }}>
        Campus Recruitment Form (with internship)
      </button>
    </a>
  </div>

  <div style={{ width: '35%' }}>
    <button className="buttonss bg-[#50A5CA] text-white px-4 py-4 rounded w-full  whitespace-no-wrap" style={{ fontSize: '14px' }}>
      View CGC Committee
    </button>
  </div>

  <div style={{ width: '35%' }}>
    <a href="/brochure.pdf" download="Brochure.pdf">
      <button className="buttonss bg-[#013365] text-white px-4 py-4 rounded w-full   whitespace-no-wrap" style={{ fontSize: '14px' }}>
        Download Brochure
      </button>
    </a>
  </div>

</div>


    </div>
    <div className="text-center  bg-[#f0f0f0] pt-5 pb-5 mt-20">
    Follow us on <a href="https://www.linkedin.com/company/career-guidance-cell-cgc-iiit-dharwad/" className="text-blue-500 inline-flex items-center">
          Linked<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzAyODhEMSIgZD0iTTQyLDM3YzAsMi43NjItMi4yMzgsNS01LDVIMTFjLTIuNzYxLDAtNS0yLjIzOC01LTVWMTEgYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNVYzN3oiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIgMTlIMTdWMzZIMTJ6TTE0LjQ4NSAxN2gtLjAyOEMxMi45NjUgMTcgMTIgMTUuODg4IDEyIDE0LjQ5OSAxMiAxMy4wOCAxMi45OTUgMTIgMTQuNTE0IDEyYzEuNTIxIDAgMi40NTggMS4wOCAyLjQ4NiAyLjQ5OUMxNyAxNS44ODcgMTYuMDM1IDE3IDE0LjQ4NSAxN3pNMzYgMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgtMS41MDEgMC0yLjMxMyAxLjAxMi0yLjcwNyAxLjk5QzI0Ljk1NyAyNS41NDMgMjUgMjYuNTExIDI1IDI3djloLTVWMTloNXYyLjYxNkMyNS43MjEgMjAuNSAyNi44NSAxOSAyOS43MzggMTljMy41NzggMCA2LjI2MSAyLjI1IDYuMjYxIDcuMjc0TDM2IDM2IDM2IDM2eiIvPjwvc3ZnPg==" alt="LinkedIn Icon" className="ml-1" width="25" height="25" />
    </a> 
    for the latest updates!
</div>
</div>
  );
}


