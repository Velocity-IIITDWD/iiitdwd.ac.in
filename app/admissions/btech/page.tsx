import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-fit max-w-5xl p-4 flex flex-col gap-2 pb-12">
      <p className="text-dwd-primary font-bold text-xl text-center mb-2">B.Tech. Admissions 2024</p>
      <p className='text-lg font-bold text-dwd-primary'>Important Dates</p>
      <div className='text-center p-2 rounded border-2 border-dwd-primary'>
                Table
      </div>
      <Image alt='supernumerary admission banner' height={1024} width={720} className='self-center' src="/banner-admission-supernumerary.jpg" />
      <p className='mt-2 text-lg font-bold text-dwd-primary'>Quick links</p>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/3 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Online B.Tech. Admission Form 2024-25&nbsp;</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Information Brochure&nbsp;</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Fee Structure&nbsp;</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>FAQ&apos;s&nbsp;</Link>
      <p className='mt-2 text-lg font-bold text-dwd-primary'>Eligibility Criteria</p>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Guidelines for students alloted through JoSAA/CSAB Counselling (*will be updated soon*)&nbsp;</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Undertaking to be signed by students and their parents&nbsp;</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>JEE Main cutoff ranks&nbsp;</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Seat matrix&nbsp;</Link>
      <p className='mt-2 text-lg font-bold text-dwd-primary'>Programs Offered</p>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Computer Science and Engineering (Institute Code 316 and Program Code 4110)</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Electronics and Communication Engineering (Institute Code 316 and Program Code 4114)</Link>
      <Link className='pl-2 text-dwd-primary w-fit block text-sm hover:underline underline-offset-2 after:-translate-y-1/4 after:absolute relative after:content-[url("/icons/linkIcon.svg")]' href=''>Data Science and Artificial Intelligence (Institute Code 316 and Program Code 4181)</Link>
      <p className='mt-2 text-lg font-bold text-dwd-primary'>IIIT Dharwad</p>
      <p className='pl-2'>
                IIIT Dharwad is an Institute of National Importance by an act of Parliament (23 of 2017) set up in PPP mode between the Ministry of Education, Government of India, Government of Karnataka, and KEONICS. The Institute’s Former Chairperson Smt. Sudha Murty, Board, and Senate constitute highly eminent leaders from administration, academia, and industry. They are instrumental in steering the institute in the right direction. IIIT Dharwad is a self-sustaining PPP Institute where all running expenses including salaries are met by the tuition and other fees paid by students.
      </p>
      <p className='mt-2 text-lg font-bold text-dwd-primary'>Faculty</p>
      <p className='pl-2'>Faculty at IIIT Dharwad are highly qualified with PhDs and Postdocs from institutes of repute in India and abroad and have the right blend of teaching, research, and industrial experience. The Director has ample experience in both academia and industry in India as well as USA. With energy and intent, they are working to set high standards in both teaching/learning and R&D.</p>
      <p className='mt-2 text-lg font-bold text-dwd-primary'>Research and Innovation</p>
      <p className='pl-2'>IIIT Dharwad is innovating in all its aspects: teaching, curriculum, campus design and R&D. Faculty at IIIT-Dharwad have a wide range of research expertise and experience covering many areas of Information Technology including: Data analytics, machine learning, and social network analysis,Computer networks and security, Knowledge management, information retrieval, ontology and semantic web technologies, Digital signal processing and speech technologies, Embedded systems, sensors, MEMS, nano technology and VLSI, Robotics, unmanned vehicles, control and communication technologies, Power electronics and alternative energy systems, Quantum physics,Social sciences, including women studies and communication, Algorithms, Computational Geometry, Blockchain Technology, Cloud Computing, Computer Design, Cyber Security, Big Data Analytics, Computer Vision, IoT & Automation.</p>
      <p className='mt-2 text-lg font-bold text-dwd-primary'>Curriculum at IIIT Dharwad</p>
      <p className='pl-2'>
        <span className='italic'>Teaching-Learning:&nbsp;</span>
                Being a technical institute of national importance, a special emphasis is given to practice-based teaching and learning process.
        <br />
                The curriculum at IIIT Dharwad is evolving and dynamic to ensure that the courses taught are current and relevant. The Institute has not hesitated to break out of outdated conventions and has introduced an IT-focused curriculum from the first semester (e.g., no chemistry) with elective subjects offered in areas such as data science, AI, machine learning, IoT, cloud computing and Blockchain to name a few. Ample opportunities are provided to learn these cutting-edge areas practically through mini and major projects and events like hackathons.
      </p>
      <p className='mt-2 text-lg font-bold text-dwd-primary'>Any Queries?</p>
      <p className='pl-2'>Dear prospective students, you can directly ask any questions to our faculty at <Link href='mailto:contact@iiitdwd.ac.in' className='text-dwd-primary hover:underline underline-offset-2 font-semibold'>contact@iiitdwd.ac.in</Link></p>
    </div>
  )
}
