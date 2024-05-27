import { Metadata } from 'next';
import { ProfileGroup } from '@/components/profile/ProfileGroup';
import group from '@/data/academics/research';
import { advertisements } from '@/data/academics/research';
import Link from 'next/link';

const title = 'Research';

export default function ResearchPage() {
  return (
    <>
      <h1 className="heading-text">{title}</h1>
      <section className="px-14 pb-10">
        <h2 className="text-dwd-primary font-bold text-2xl">
          Faculty&apos;s Areas of Expertise and Experience in Research
        </h2>
        <ul className="px-8 pt-4 list-disc">
          <li>Data analytics, machine learning, and social network analysis</li>
          <li>Computer networks and security</li>
          <li>
            Knowledge management, information retrieval, ontology and semantic
            web technologies
          </li>
          <li>Digital signal processing and speech technologies</li>
          <li>Embedded systems, sensors, MEMS, nano technology and VLSI</li>
          <li>
            Robotics, unmanned vehicles, control and communication technologies
          </li>
          <li>Power electronics and alternative energy system.</li>
          <li>Quantum physics, material science and engineering</li>
          <li>Social sciences, including women studies and communication</li>
          <li>Algorithms, Computational Geometry</li>
        </ul>
      </section>
      {group.map(({ profiles, title }, index) => (
        <ProfileGroup key={index} profiles={profiles} title={title} />
      ))}
      <section className="px-14 pb-10">
        <h2 className="text-dwd-primary font-bold text-2xl">
          PhD Advertisement
        </h2>
        {advertisements.map((ad, index) => (
          <div key={index} className="p-2 mt-4 flex flex-col gap-2">
            <h3 className="text-dwd-primary text-lg font-bold">{ad.time}</h3>
            <div className="border-l-2 border-dwd-primary mx-4 p-4 flex flex-col gap-2">
              <span>
                Last date to send applications:
                <span className="font-semibold">{ad.lastDate}</span>
              </span>
              <span className="flex gap-4 text-blue-500 underline">
                <Link href={ad.generalInstructions}>General Instructions</Link>
                <Link href={ad.applicationForm}>Application Form</Link>
              </span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title,
};
