import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { ProfileProps } from '@/data/faculty_profile';
import '@/app/globals.css';
import Image from 'next/image';
import { CircleUser, GraduationCap, BriefcaseBusiness, Mail, MapPin, Split } from 'lucide-react';

type ProfileProp = {
  id: string;
  content: {
    head: {
      name: string;
      profile_pdf: string;
    };

    card: {
      photo: string;
      designation: string;
      department: string;
      mail_id: string;
      cabin_number: string;
    };

    body: {
      profile_text: string;
      interest_areas: { id: number; area: string }[];
    };
  };
};

// find by id

// function Profile(idd: number){
//     let Profile: ProfileProp|undefined  = ProfileProps.find((ProfileProp)=>{return ProfileProp.id ? ProfileProp.id == idd : false;});
//     return(
//         <>
//             <div className="bg-dwd-secondary1 flex-row">
//                 <div className="gap-3 text-left">{Profile?.content.head.name}</div>
//                 <div className="flow-row">
//                 <div className="bg-dwd-accent gap-3 float-left"><a href="Profile.content.head.profile_pdf" className="text-center bg-dwd-secondary2">View Profile</a></div>
//                 </div>
//             </div>
//         </>
//     );
// }
interface pp {
  params: { id: string };
  searchParams: {};
}

interface ProfileProps {
  idd: number;
}

const Profile = (params: pp) => {
  const profileId = params.params.id;
  const profile: ProfileProp | undefined = ProfileProps.find(
    (profileProp) => profileProp.id === profileId
  );
  if (!profile) {
    return <div></div>;
  }
  const areaofinterest_array = profile.content.body.interest_areas.map(
    (arr) => <li key={arr.id}>{arr.area}</li>
  );

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-dwd-secondary2 flex flex-row justify-between relative px-12 py-3">
          <div className="text-left font-bold text-3xl align-left">
            {profile.content.head.name}
          </div>
          <div className="bg-dwd-primary flex justify-center  px-2 py-2 rounded">
            <a
              href={profile.content.head.profile_pdf}
              className="align-middle bg-dwd-primary flex justify-center text-background rounded"
            >
              View Profile
            </a>
          </div>
        </div>

        <div className="bg-background flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 2xl:flex-row  justify-between relative py-12 px-12 space-x-12">
          <div className="bg-dwd-primary text-background px-12 py-12 rounded-lg">
            <div className="flex flex-col ">
              <div className="content-center">
                <img
                  src={profile.content.card.photo}
                  alt="asd"
                  className="object-srink-down"
                />
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-12">
                  <div className="flex flex-row  gap-2  ">
                    <Split />
                    <span>{profile.content.card.department}</span>
                  </div>
                  <div className="flex flex-row  gap-2 ">
                    <BriefcaseBusiness />
                    <span>{profile.content.card.designation}</span>
                  </div>
                  <div className="flex flex-row  gap-2 ">
                    <Mail />
                    <span>{profile.content.card.mail_id}</span>
                  </div>
                  <div className="flex flex-row  gap-2 ">
                    <MapPin />
                    <span>{profile.content.card.cabin_number}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row  gap-2 font-bold text-xl border-b-2 border-black">
                  <CircleUser />
                  <span>Profile</span>
                </div>
                <div className="pl-2 py-4">
                  {profile.content.body.profile_text}
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col  py-20">
                <div className="flex flex-row  gap-2 font-bold text-xl border-b-2 border-black">
                  <GraduationCap />
                  <span>Area of Interest</span>
                </div>
                <div>
                  <ul className="list-disc pl-10 py-4">
                    {areaofinterest_array}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
