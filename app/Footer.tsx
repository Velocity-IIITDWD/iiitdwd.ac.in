import {
  CopyrightIcon,
  FacebookIcon,
  HomeIcon,
  Link as LinkIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from 'lucide-react';

import Link from 'next/link';

function XIcon({ size, className }: { size: string, className?: string } = { size: '2rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="mt-auto flex flex-col lg:items-center bg-dwd-primary text-white text-xs w-full h-fit px-8 py-4 gap-8">
      <div className='w-full flex flex-col lg:flex-row gap-4 items-start justify-between max-w-7xl'>
        <div className="flex flex-col w-fit gap-2">
          <h2 className="w-fit font-bold text-lg lg:text-2xl mt-4 mb-2 half-underline">Address</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <HomeIcon size="1rem" /> IIIT Dharwad Campus, Ittigatti Road, Near
              Sattur Colony, Dharwad 580009
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon size="1rem" />
              <span>
                <a href="tel:0836 2250879">0836 2250879</a>,
                <a href="tel:9449732959">9449732959</a>
              </span>
            </div>
            <a
              href="mailto:contact@iiitdwd.ac.in"
              className="flex gap-2 items-center"
            >
              <MailIcon size="1rem" />
              contact@iiitdwd.ac.in
            </a>
          </div>

          <h2 className="w-fit font-bold text-lg lg:text-2xl mt-4 half-underline">Social Links</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/iiitdharwad/"
              className="group flex items-center justify-center gap-2 hover:bg-blue-800 rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><LinkedinIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>LinkedIn</div>
            </a>
            <a
              href="https://www.facebook.com/IIIT-Dharwad-107055984131970/"
              className="group flex items-center justify-center gap-2 hover:bg-blue-600 rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><FacebookIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>Facebook</div>
            </a>
            <a
              href="https://twitter.com/dharwad_iiit"
              className="group flex items-center justify-center gap-2 hover:bg-black rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><XIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>Twitter</div>
            </a>
            <a
              href="https://www.youtube.com/channel/UCVvvR0-TvLQOJehUPkQ_Cwg"
              className="group flex items-center justify-center gap-2 hover:bg-red-600 rounded-sm overflow-clip w-fit"
            >
              <span className='group-hover:bg-white p-1'><YoutubeIcon className='group-hover:stroke-black' size="1rem" /></span>
              <div className='h-min pr-2'>Youtube</div>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-fit gap-2">
          <h2 className="w-fit font-bold text-lg lg:text-2xl mt-4 mb-2 half-underline">Other Links</h2>
          <Link className='hover:underline' href="/faq">FAQ</Link>
          <div className='flex gap-2'>
            <Link className='hover:underline' href="/pdfs/iiit_ppp_2017.pdf">IIIT PPP Act</Link><span className='select-none'>|</span>
            <Link className='hover:underline' href="/pdfs/ARIIA.pdf">ARIIA</Link><span className='select-none'>|</span>
            <Link className='hover:underline' href="/pdfs/RTI.pdf">RTI</Link>
          </div>
          <Link className='hover:underline' href="https://aims.iiitdwd.ac.in/aims/">AIMS</Link>
          <Link className='hover:underline' href="/tenders">Tenders</Link>
          <Link className='hover:underline' href="/icc">ICC</Link>
          <Link className='hover:underline' href="/nirf">NIRF</Link>
          <Link className='hover:underline' href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=873279">Student Fee Portal</Link>
          <Link className='hover:underline' href="/annual_reports">Annual Reports</Link>
        </div>

        <div className="flex flex-col w-fit gap-2">
          <h2 className="w-fit font-bold text-lg lg:text-2xl mt-4 mb-2 half-underline">Find On Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
            width="250"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className='rounded-sm'
          />
        </div>
      </div>

      <div className='flex justify-between lg:justify-center w-full max-w-7xl'>
        <div>Copyright © IIIT Dharwad 2024, All Rights Reserved</div>
      </div>
    </footer>
  );
}

// export default () => <>{Footer()}<div className='w-full h-1 bg-black'>.</div>{Footer2()}</>;
export default Footer;
