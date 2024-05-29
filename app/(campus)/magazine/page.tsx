// 'use client'

import Image from 'next/image';
import Issues from './Issues';
import { about, facultyAdvisors, teams } from '@/data/magazine';
import MemberCard from './MemberCard';
import { Fragment } from 'react';
import { Metadata } from 'next';

import magazineImg from '@/assets/campus/magazine.png';

export default function Page() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-fit max-w-5xl p-4 flex flex-col gap-4 pb-12">
        <p className="text-dwd-primary font-bold text-4xl text-center mb-2 mt-2">
          Magazine
        </p>
        <div className="flex gap-4 max-lg:flex-wrap justify-center mb-4">
          <div className="relative shrink-0 w-1/2 max-lg:w-full flex justify-center">
            <div className="sticky top-0">
              <Image
                alt="magazine-image"
                src={magazineImg}
                width={720}
                height={512}
              />
            </div>
          </div>
          <div className="shrink">
            <p className="font-bold text-lg text-dwd-primary">
              About Kaleidoscope
            </p>
            <p>{about.description}</p>
          </div>
        </div>
        <p
          className="text-center font-bold text-dwd-primary text-2xl"
          id="issues"
        >
          Issues
        </p>
        <Issues />
        <p className="text-center font-bold text-dwd-primary text-2xl mt-4">
          Magazine Team
        </p>
        <p className="text-lg font-bold text-dwd-primary">Faculty Advisors</p>
        <div className="flex flex-wrap gap-4">
          {facultyAdvisors.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
        {teams.map((team) => (
          <Fragment key={team.teamId}>
            <p className="text-lg font-bold mt-2 text-dwd-primary">
              {team.teamName}
            </p>
            <div className="flex flex-wrap gap-6">
              {team.members.map((member) => (
                <MemberCard key={member.id} {...member} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Magazine',
};
