import { ProfileProp } from '@/data/faculty_profile';
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import {
  CircleUser,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  Split,
} from 'lucide-react';
import { FetchSanity } from '@/lib/sanity/client';
import { GetAllFaculties, GetFacultyDetails } from '@/lib/sanity/Queries';

async function getProfileData(id: string) {
  const [data] = await FetchSanity(GetFacultyDetails, { id });
  const {
    facultyId,
    content,
  } = data;

  return {
    id: facultyId,
    content,
  } as ProfileProp;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const data = await FetchSanity(GetAllFaculties);

  if (!data || !Array.isArray(data) || data.length === 0) {
    console.error('No faculty data found.');
    return [];
  }

  return data;
}

export default async function Profile({
  params: { id },
}: {
  params: { id: string };
}) {
  const profile = (await getProfileData(id)) as any;

  const areaofinterest_array: JSX.Element[] | undefined =
    (profile.content.body.interest_areas as string[]).map((arr, index) => (
      <li key={index}>{arr}</li>
    ));

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-dwd-secondary2 flex flex-row justify-between relative px-12 py-3">
          <div className="text-left font-bold text-3xl align-left">
            {profile.content.head.name}
          </div>
          <div
            className={
              profile.content.head.profile_pdf !== ''
                ? 'bg-dwd-primary flex justify-center  px-2 py-2 rounded align-center'
                : 'hidden'
            }
          >
            <Link
              href={profile.content.head.profile_pdf}
              className="bg-dwd-primary text-center text-background rounded align-center"
            >
              View Profile
            </Link>
          </div>
        </div>

        <div className="bg-background flex flex-col  md:flex-row lg:flex-row xl:flex-row  gap-6 2xl:flex-row  relative py-12 px-12 space-x-16">
          <div className="flex flex-col item-center flex-none  h-auto max-w-md w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 bg-dwd-primary text-background px-12 py-12 rounded-lg">
            <div className="flex flex-col ">
              <div className=" mx-auto flex flex-col  justify-center item-center">
                <Image
                  src={profile.content.card.photo}
                  width={0}
                  height={0}
                  priority
                  sizes="100%"
                  style={{ height: '250px', width: '250px' }}
                  alt={profile.content.head.name}
                  className="object-srink-down align-center"
                />
              </div>
              <div>
                <div className="flex flex-col  space-y-4 pt-12">
                  {profile.content.card.department ? (
                    <div className="flex flex-row gap-2  ">
                      <span className="flex-shrink-0">
                        <Split />
                      </span>

                      <span>{profile.content.card.department}</span>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="flex flex-row gap-2 ">
                    <span className="flex-shrink-0">
                      <BriefcaseBusiness />
                    </span>
                    <span>{profile.content.card.designation}</span>
                  </div>
                  {profile.content.card.PhD !== '' && (
                    <div className="flex flex-row gap-2">
                      <span className="flex-shrink-0">
                        <GraduationCap />
                      </span>
                      <span className="flex-shrink">
                        {profile.content.card.PhD}
                      </span>
                    </div>
                  )}

                  <div className="flex-row gap-2 hidden">
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
                <div className="flex-row  gap-2 font-bold text-xl border-b-2 border-black hidden">
                  <CircleUser />
                  <span>Profile</span>
                </div>
                <div className="pl-2 py-4 hidden">
                  {profile.content.body.profile_text}
                </div>
              </div>
            </div>
            <div>
              {areaofinterest_array?.length ? (
                <>
                  <div className="flex flex-col md:pt-20">
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
            {profile.content.card.mail_id && (
              <div>
                <span className="font-bold">Email: </span>
                <Link
                  href={`mailto:${profile.content.card.mail_id}`}
                  className="underline hover:text-blue-400"
                >
                  {profile.content.card.mail_id}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
