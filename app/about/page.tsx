import { About, aboutData } from "@/data/about";
import Image from "next/image";
import main_gate from "@/assets/images/campus/main_gate.jpg";
import director from "@/assets/images/faculty/director.jpg";
import DirectorsMessage from "@/components/DirectorsMessage";
import Link from "next/link";

const aboutPage = () => {
  const about: About = aboutData;

  return (
    <div className="w-full h-screen overflow-auto flex flex-col items-center">
      <div className="w-full min-h-40 sm:min-h-72 lg:min-h-96 relative">
        <Image
          src={main_gate}
          alt={"Image of Main Gate"}
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "70% 47%",
          }}
        />
      </div>
      <div className="w-full p-8 flex flex-col items-center bg-dwd-secondary2">
        <span className="font-bold mb-4 text-4xl bg-dwd-secondary2 text-dwd-primary">
          About IIIT Dharwad
        </span>
        <p className="text-lg">{aboutData.aboutText}</p>
      </div>

      <DirectorsMessage
        heading={about.directorsMessage.heading}
        directorName={about.directorName}
        text={about.directorsMessage.text}
      />

      <div className="flex flex-col p-8 bg-dwd-secondary2 items-center">
        <span className="mb-4 text-4xl font-bold  text-dwd-primary">
          Brief Profile of {about.directorName}
        </span>
        <p>{about.briefProfile}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 items-center">
        <span className="col-span-1 sm:col-span-2 md:col-span-3 text-center mb-4 text-4xl font-bold text-dwd-primary">
          Our Family
        </span>
        <Link
          className="bg-dwd-primary p-4 text-white text-center rounded-full text-xl"
          href={"/visitors"}
        >
          Visitor
        </Link>
        <Link
          className="bg-dwd-primary p-4 text-white text-center rounded-full text-xl"
          href={"/boardOfGoverners"}
        >
          Board of Governers
        </Link>
        <Link
          className="bg-dwd-primary p-4 text-white text-center rounded-full text-xl"
          href={"/senate"}
        >
          Senate
        </Link>
        <Link
          className="bg-dwd-primary p-4 text-white text-center rounded-full text-xl"
          href={"/financeCommittee"}
        >
          Finance Committee
        </Link>
        <Link
          className="bg-dwd-primary p-4 text-white text-center rounded-full text-xl"
          href={"/faculty"}
        >
          Faculty
        </Link>
        <Link
          className="bg-dwd-primary p-4 text-white text-center rounded-full text-xl"
          href={"/staff"}
        >
          Staff
        </Link>
        <div className="hidden md:flex"></div>
        <Link
          className="bg-dwd-primary p-4 text-white text-center rounded-full text-xl"
          href={"/buildingAndWorksCommittee"}
        >
          Building and Works Committee
        </Link>
      </div>

      <div className="bg-dwd-secondary2 grid grid-cols-1 md:grid-cols-2 min-h-52 w-full items-center text-center">
        <span className="text-4xl font-bold text-dwd-primary">Our Vision</span>
        <p className="text-xl self-start md:self-center">{about.vision}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center p-8 gap-4 w-full justify-items-center">
        <span className="col-span-1 md:col-span-3 text-center text-4xl font-bold text-dwd-primary">
          Our Mission
        </span>
        {about.missions?.map((mission) => (
          <div
            key={mission.id}
            className="bg-dwd-primary p-4 rounded-md text-center text-lg min-h-56 max-w-96 text-white text-md"
          >
            {mission.text}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4 items-center bg-dwd-secondary2 w-full">
        <span className="text-center text-4xl text-dwd-primary font-bold">
          Core Values
        </span>
        <ul>
          {about.coreValues?.map((value) => (
            <li key={value.id} className="text-lg">
              &#9679;{" " + value.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default aboutPage;
