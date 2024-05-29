// 'use client';
import { ProfileProps } from '@/data/faculty_profile';
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import {
  CircleUser,
  GraduationCap,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Split,
} from 'lucide-react';

export function generateStaticParams(): { id: string }[] {
  return ProfileProps.map(p => ({ id: p.id }));
}

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

  const areaofinterest_array: JSX.Element[] | undefined =
    profile.content.body.interest_areas.map((arr) => (
      <li key={arr.id}>{arr.area}</li>
    ));

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-dwd-secondary2 flex flex-row justify-between relative px-12 py-3">
          <div className="text-left font-bold text-3xl align-left">
            {profile.content.head.name}
          </div>
          <div className="bg-dwd-primary flex justify-center  px-2 py-2 rounded">
            <Link
              href={profile.content.head.profile_pdf}
              className="align-middle bg-dwd-primary flex justify-center text-background rounded"
            >
              View Profile
            </Link>
          </div>
        </div>

        <div className="bg-background flex flex-col  md:flex-row lg:flex-row xl:flex-row  gap-6 2xl:flex-row  relative py-12 px-12 space-x-16">
          <div className="flex flex-col item-centerflex-none h-auto w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 bg-dwd-primary text-background px-12 py-12 rounded-lg">
            <div className="flex flex-col item-center">
              <div className="content-center flex flex-col item-center">
                <Image
                  src={profile.content.card.photo}
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ height: '250px', width: '250px' }}
                  alt={profile.content.head.name}
                  className="object-srink-down"
                />
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-12">
                  <div className="flex flex-row  gap-2  ">
                    <Split />
                    <span>{profile.content.card.department}</span>
                  </div>
                  <div className="flex flex-row gap-2 ">
                    <span className="flex-shrink-0">
                      <BriefcaseBusiness />
                    </span>
                    <span>{profile.content.card.designation}</span>
                  </div>
                  <div className="flex flex-row  gap-2 ">
                    <Mail />
                    <span>{profile.content.card.mail_id}</span>
                  </div>
                  <div className="flex flex-row  gap-2 hidden">
                    <MapPin />
                    <span>{profile.content.card.cabin_number}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/2 flex flex-col space-y-8">
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row  gap-2 font-bold text-xl border-b-2 border-black hidden">
                  <CircleUser />
                  <span>Profile</span>
                </div>
                <div className="pl-2 py-4 hidden">
                  {profile.content.body.profile_text}
                </div>
              </div>
            </div>
            <div>
              {areaofinterest_array.length ? (
                <>
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
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
