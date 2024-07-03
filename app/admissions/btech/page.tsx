import Image from 'next/image';
import Link from 'next/link';
import { descriptions, seatMatrix, year, links } from '@/data/admissions';
import { ExternalLink } from 'lucide-react';
import { Fragment } from 'react';

export default function Page() {
  return (
    <div className="w-fit max-w-5xl p-4 flex flex-col gap-2 pb-12 overflow-auto">
      <p className="text-dwd-primary font-bold text-4xl text-center mb-2">
        B.Tech. Admissions {year}
      </p>

      <Image
        alt=" admission banner"
        width={500}
        height={100}
        className="self-center mt-2"
        src="/images/1717307021103.jpg"
      />
      <Image
        alt="supernumerary admission banner"
        width={1024}
        height={720}
        className="self-center mt-2"
        src="/images/banner_admission_supernumerary.jpg"
      />

      <p className="text-lg font-bold text-dwd-primary">Seat matrix</p>
      <div className="text-center grid grid-cols-19 border-2 overflow-auto border-dwd-secondary1 rounded">
        <div className="grid grid-cols-19 col-span-19 bg-dwd-secondary1">
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            Institute Code
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            Institute Name
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            Program Code
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            Program Name
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            Seat Pool (State Quota)
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            Seat Pool (Gender-Neutral)
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            OPEN
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            OPEN-PwD
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            GEN-EWS
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            GEN-EWS-Pwd
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            SC
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            SC-PwD
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            ST
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            ST-PwD
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            OBC-NCL
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            OBC-NCL-PwD
          </div>
          <div className="flex items-center justify-center p-2 text-center text-white font-bold bg-dwd-secondary1 col-span-1 border-r">
            Total (includes Female Supernumerary)
          </div>
          <div className="text-center text-white font-bold bg-dwd-secondary1 col-span-2 grid border-r-0">
            <span className="border-b w-full p-2">Program-Total</span>
            <div className="grid grid-cols-2">
              <span className="flex items-center justify-center p-2 col-span-1 border-r">
                Seat Capacity
              </span>
              <span className="flex items-center justify-center p-2 col-span-1 text-wrap">
                Female Supernumerary
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-19 col-span-19 [&>p]:p-2 [&>p]:border [&>p]:flex [&>p]:justify-center [&>p]:items-center">
          <p className="row-span-6">{seatMatrix.instituteCode}</p>
          <p className="row-span-6">{seatMatrix.instituteName}</p>
          {seatMatrix.programs.map((program) => (
            <Fragment key={program.code}>
              <p className="row-span-2">{program.code}</p>
              <p className="row-span-2">{program.name}</p>
              {program.seatPoolQuota.map((StateQuota) => (
                <>
                  <p key={StateQuota.name} className="row-span-2">
                    {StateQuota.name}
                  </p>
                  {StateQuota.seatPoolGender.map((GenderQuota, index) => {
                    if (index == 0) {
                      return (
                        <Fragment key={GenderQuota.name}>
                          <p>{GenderQuota.name}</p>
                          <p>{GenderQuota.open}</p>
                          <p>{GenderQuota.open_pwd}</p>
                          <p>{GenderQuota.gen_ews}</p>
                          <p>{GenderQuota.gen_ews_pwd}</p>
                          <p>{GenderQuota.sc}</p>
                          <p>{GenderQuota.sc_pwd}</p>
                          <p>{GenderQuota.st}</p>
                          <p>{GenderQuota.st_pwd}</p>
                          <p>{GenderQuota.obc_ncl}</p>
                          <p>{GenderQuota.obc_ncl_pwd}</p>
                          <p>{GenderQuota.total}</p>
                          <p className="row-span-2">
                            {StateQuota.seatCapacity}
                          </p>
                          <p className="row-span-2">
                            {StateQuota.femaleSupernumerary}
                          </p>
                        </Fragment>
                      );
                    }
                    return (
                      <Fragment key={GenderQuota.name}>
                        <p>{GenderQuota.name}</p>
                        <p>{GenderQuota.open}</p>
                        <p>{GenderQuota.open_pwd}</p>
                        <p>{GenderQuota.gen_ews}</p>
                        <p>{GenderQuota.gen_ews_pwd}</p>
                        <p>{GenderQuota.sc}</p>
                        <p>{GenderQuota.sc_pwd}</p>
                        <p>{GenderQuota.st}</p>
                        <p>{GenderQuota.st_pwd}</p>
                        <p>{GenderQuota.obc_ncl}</p>
                        <p>{GenderQuota.obc_ncl_pwd}</p>
                        <p>{GenderQuota.total}</p>
                      </Fragment>
                    );
                  })}
                </>
              ))}
            </Fragment>
          ))}
          <div className="grid grid-cols-19 col-span-19 bg-dwd-secondary1 text-white font-bold [&>p]:p-2 [&>p]:border [&>p]:flex [&>p]:justify-center [&>p]:items-center">
            <p className="col-span-6 border-l-transparent">Total</p>
            {seatMatrix.total.map((seats, index) => {
              if (index === seatMatrix.total.length - 1)
                return (
                  <p key={seats.id} className="border-r-transparent">
                    {seats.qty}
                  </p>
                );
              return <p key={seats.id}>{seats.qty}</p>;
            })}
          </div>
        </div>
      </div>

      <Link
        className='pl-2 mt-2 text-dwd-primary w-fit block hover:underline underline-offset-2 after:-translate-y-1/3 after:absolute relative after:content-[url("/icons/linkIcon.svg")]'
        href={'/contact_info'}
      >
        For General Queries you can contact here
      </Link>

      {links.map((obj) => (
        <Fragment key={obj.id}>
          <p className="mt-2 text-lg font-bold text-dwd-primary">{obj.type}</p>
          {obj.links.map((o) => (
            <Link
              className='pl-2 text-dwd-primary w-fit block hover:underline underline-offset-2 after:-translate-y-1/3 after:absolute relative after:content-[url("/icons/linkIcon.svg")]'
              href={o.link}
              key={o.id}
            >
              {o.displayText}&nbsp;
            </Link>
          ))}
        </Fragment>
      ))}
      {descriptions.map((obj) => (
        <Fragment key={obj.id}>
          <p className="mt-2 text-lg font-bold text-dwd-primary">
            {obj.heading}
          </p>
          <p className="pl-2">{obj.description}</p>
        </Fragment>
      ))}
      <p className="mt-2 text-lg font-bold text-dwd-primary">Any Queries?</p>
      <p className="pl-2">
        Dear prospective students, you can directly ask any questions to our
        faculty at&nbsp;
        <Link
          href="mailto:contact@iiitdwd.ac.in"
          className="text-dwd-primary hover:underline underline-offset-2 font-semibold"
        >
          contact@iiitdwd.ac.in
        </Link>
      </p>
    </div>
  );
}
