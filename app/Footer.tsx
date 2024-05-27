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

function XIcon({ size } = { size: '2rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="mt-auto flex flex-col bg-dwd-primary text-white text-xs w-full h-fit px-8 py-4 gap-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-start lg:justify-between">
        <div className="flex flex-col w-fit gap-4">
          <h2 className="font-bold text-lg lg:text-2xl">Address</h2>
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
        </div>
        <div className="flex flex-col w-fit gap-4">
          <h2 className="font-bold text-lg lg:text-2xl">Social Links</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/iiitdharwad/"
              className="flex gap-2"
            >
              <LinkedinIcon size="1rem" /> LinkedIn
            </a>
            <a
              href="https://www.facebook.com/IIIT-Dharwad-107055984131970/"
              className="flex gap-2"
            >
              <FacebookIcon size="1rem" /> Facebook
            </a>
            <a href="https://twitter.com/dharwad_iiit" className="flex gap-2">
              <XIcon size="1rem" /> Twitter
            </a>
            <a href="https://twitter.com/dharwad_iiit" className="flex gap-2">
              <YoutubeIcon size="1rem" /> YouTube
            </a>
          </div>
        </div>
        <div className="w-fit lg:mt-12">
          Copyright <CopyrightIcon className="inline" size="1rem" /> 2024 IIIT
          Dharwad, All rights reserved
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex flex-row flex-wrap gap-2 text-sm *:odd:font-bold">
          <a href="https://iiitdwd.ac.in/docs/iiit_ppp_2017.pdf">
            IIIT PPP Act
          </a>{' '}
          |<a href="https://iiitdwd.ac.in/docs/ARIIA.pdf">ARIIA</a> |
          <a href="https://iiitdwd.ac.in/docs/RTI.pdf">RTI</a> |
          <a href="https://aims.iiitdwd.ac.in/aims/">AIMS</a> |
          <a href="https://gmail.com/">Webmail</a> |<Link href="/icc">ICC</Link>{' '}
          |<Link href="/nirf">NIRF</Link> |
          <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=873279">
            Student Fee Portal
          </a>{' '}
          |<a href="">Annual Reports</a>
        </div>
        <div className="font-bold text-lg">
          <LinkIcon href="/contact" className="underline">
            Contact Us
          </LinkIcon>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
